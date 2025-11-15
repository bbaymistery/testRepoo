(() => {
var exports = {};
exports.id = 7648;
exports.ids = [7648,2858,8817,150,1344];
exports.modules = {

/***/ 1470:
/***/ ((module) => {

// Exports
module.exports = {
	"progress_bar": "styles_progress_bar__BCNb1",
	"progress-anime": "styles_progress-anime__uK4bc"
};


/***/ }),

/***/ 5295:
/***/ ((module) => {

// Exports
module.exports = {
	"reserv_documents": "styles_reserv_documents__2bHJM",
	"section": "styles_section__267Ih",
	"reserv_container": "styles_reserv_container__hOhU6",
	"downland_button": "styles_downland_button__HwRuP",
	"invoice": "styles_invoice__WG97X",
	"invoice_left": "styles_invoice_left__k8S4s",
	"invoice_left_header": "styles_invoice_left_header__iikPO",
	"invoice_left_center": "styles_invoice_left_center__wwsWm",
	"invoice_left_center_inf": "styles_invoice_left_center_inf__kghhN",
	"invoice_left_center_contact": "styles_invoice_left_center_contact__0NoBj",
	"invoice_left_footer": "styles_invoice_left_footer__aNLxb",
	"invoice_right": "styles_invoice_right__vVbBS",
	"visibleInMobile": "styles_visibleInMobile__7Vzrm",
	"invoice_leftt_inside_right": "styles_invoice_leftt_inside_right__ch2_6",
	"invoice_leftt_header": "styles_invoice_leftt_header__plJ38",
	"invoice_right_header": "styles_invoice_right_header__ZHiXe",
	"thanks": "styles_thanks__wTYeT",
	"invoice_right_bill": "styles_invoice_right_bill__wZ6Bn",
	"pdf_content": "styles_pdf_content__HqZwp",
	"content_of_reserv": "styles_content_of_reserv___ypFL",
	"hasReturnQuot": "styles_hasReturnQuot__xoLl0",
	"passenger_details_header": "styles_passenger_details_header__L2x1u",
	"bottom_tot": "styles_bottom_tot__KQ3Ff",
	"thankyou": "styles_thankyou__ojKAi",
	"bottom_tot_price": "styles_bottom_tot_price__FZVcy",
	"bottom_tot_price_text": "styles_bottom_tot_price_text__ABlNM",
	"bottom_tot_price_price": "styles_bottom_tot_price_price__ltU_f"
};


/***/ }),

/***/ 1859:
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
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/elements/Buttons/BlueButton/index.js
var BlueButton = __webpack_require__(1599);
// EXTERNAL MODULE: ./src/components/layouts/Layout/index.js + 10 modules
var Layout = __webpack_require__(2246);
// EXTERNAL MODULE: ./src/store/pickUpDropOffReducer/pickUpDropSelectors.js
var pickUpDropSelectors = __webpack_require__(5789);
// EXTERNAL MODULE: ./src/pages/reservations-document/styles.module.scss
var styles_module = __webpack_require__(5295);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/pages/reservations-document/Informations/Informations.js + 2 modules
var Informations = __webpack_require__(6824);
;// CONCATENATED MODULE: external "jspdf"
const external_jspdf_namespaceObject = require("jspdf");
;// CONCATENATED MODULE: external "html2canvas"
const external_html2canvas_namespaceObject = require("html2canvas");
// EXTERNAL MODULE: ./src/components/elements/ProgresBar/styles.module.scss
var ProgresBar_styles_module = __webpack_require__(1470);
var ProgresBar_styles_module_default = /*#__PURE__*/__webpack_require__.n(ProgresBar_styles_module);
;// CONCATENATED MODULE: ./src/components/elements/ProgresBar/index.js



const ProgressBar = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (ProgresBar_styles_module_default()).progress_bar
    });
};
/* harmony default export */ const ProgresBar = (ProgressBar);

// EXTERNAL MODULE: ./src/hooks/useConfirm.js
var useConfirm = __webpack_require__(628);
// EXTERNAL MODULE: ./src/helpers/dateFormat.js
var dateFormat = __webpack_require__(1761);
;// CONCATENATED MODULE: ./src/pages/reservations-document/index.js













const ReservDocuments = (props)=>{
    var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8;
    let { env  } = props;
    const { reservations , params: { journeyType  } , meetPoint ,  } = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectPickUpDropOffReducer */.X7);
    const selectedPickUpPointsTr = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* PickUpPointsOneWayCopy */.l3);
    const selectedDropPointsTr = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* DroopOffPointsOneWayCopy */.eI);
    const selectedQuotTransfer = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectedTransferQuot */.uU);
    const trDateTime = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* transferDateTimeString */.Vo);
    //*inputs 0
    const fullnameTransfer = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* transferPassengerFullName */.bp);
    const emailTransfer = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* transferPassengerEmail */.dC);
    const phoneTranfer = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* transferPassengerPhone */.wz);
    const selectPaxTransfer = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* paxTransfer */.Dp);
    //*inputs1
    const fullNameReturn = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* returnPassengerFullName */.Kt);
    const emailReturn = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* returnPassengerEmail */.ZW);
    const phoneReturn = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* returnPassengerPhone */.o2);
    //error flight ucun sadece ikiterefdede pcikup'i ilgilendirir
    const slectPickUpPointsReturn = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* PickUpPointsReturnCopy */.h_);
    const selectDropOffPointsReturn = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* DropOffPointsReturnCopy */.z8);
    const selectSelectedReturnQuot = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectedReturnQuot */.CS);
    const returnDate = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* returnDateTimeString */.Cg);
    const selectPaxReturn = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* paxReturn */.UE);
    const checked = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectCHheckedInput */.On);
    const { 0: reservId , 1: setReservId  } = (0,external_react_.useState)("");
    const selectedArchieveToken = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectArchieveToken */.jc);
    const { appData  } = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectPickUpDropOffReducer */.X7);
    //bunu sadece imgni getirmek ucun yazdg Secilen cardn img si
    const carObject = appData === null || appData === void 0 ? void 0 : (ref = appData.carsTypes) === null || ref === void 0 ? void 0 : ref.reduce((obj, item)=>({
            ...obj,
            [item.id]: item
        }), {});
    const confirmationAlert = (0,useConfirm/* useConfirm */.N)({
        previousUrl: "/",
        nextUrl: "/",
        message: "If you leave the page, all data will be deleted."
    });
    //when passenger gets reserv d we need archieve token
    const fetchArchieveToken = async (params = {})=>{
        let { id , stage , response ={}  } = params;
        let reservationObj = (slectPickUpPointsReturn === null || slectPickUpPointsReturn === void 0 ? void 0 : slectPickUpPointsReturn.length) >= 1 && selectedPickUpPointsTr.length >= 1 ? reservations : [
            reservations[0]
        ];
        if (stage === "GET_SERVER_RESPONED") {
            reservationObj = JSON.parse(JSON.stringify(reservationObj));
            reservationObj[0].response = response;
        }
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
                }, 
            ];
        } else {
            reservationObj = [
                {
                    ...reservationObj[0],
                    reservationDetails: {
                        ...reservationObj[0].reservationDetails,
                        id: id[0][0]
                    }
                }, 
            ];
        }
        let url = `${env.apiDomain}/api/v1/sessions/add`;
        const resp = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                token: selectedArchieveToken,
                details: reservationObj,
                stage
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await resp.json();
        console.log({
            data,
            reservationObj,
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
        let body = JSON.stringify({
            reservation: (slectPickUpPointsReturn === null || slectPickUpPointsReturn === void 0 ? void 0 : slectPickUpPointsReturn.length) >= 1 && selectedPickUpPointsTr.length >= 1 ? reservations : [
                reservations[0]
            ],
            configurations: {
                sendConfirmationEmailToPassenger: true
            }
        });
        var requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body
        };
        fetch(`${env.apiDomain}/api/v1/reservation/`, requestOptions).then((response)=>response.json()).then((response)=>{
            response = isJSON(isJSON) ? JSON.parse(response) : response;
            if (typeof response === "object" && response.status === 200) {
                setReservId(response.data["reservations-ids"] ? response.data["reservations-ids"] : null);
                fetchArchieveToken({
                    id: response.data["reservations-ids"],
                    stage: "GET_RESERVATION_ID"
                });
            } else {
                fetchArchieveToken({
                    id: [
                        [
                            null
                        ],
                        [
                            null
                        ]
                    ],
                    stage: "GET_SERVER_RESPONED",
                    response
                });
                window.handelErrorLogs("else part fetch response  https://api.london-tech.com/api/v1/reservation", "HGT ReservDocuments Component - submitDataToGetReservId function fetch_response_ else part ", {
                    requestOptions,
                    response,
                    body
                });
            }
        }).catch((error)=>{
            console.log(error);
            fetchArchieveToken({
                id: [
                    [
                        null
                    ],
                    [
                        null
                    ]
                ],
                stage: "GET_SERVER_RESPONED",
                "response": {
                    "message": error.message,
                    "status": error.status
                }
            });
            window.handelErrorLogs(error, "HGT ReservDocuments Component - submitDataToGetReservId function fetch_ cathc blog", {
                requestOptions,
                body
            });
        });
    };
    (0,external_react_.useEffect)(()=>{
        submitDataToGetReservId();
        window.scroll({
            top: 95,
            left: 0,
            behavior: "smooth"
        });
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (reservId) {
            fetchArchieveToken({
                id: reservId,
                stage: "RENDER_RESERVATION_DETAILS"
            });
        }
    }, [
        reservId
    ]);
    /*
 let response = {
            status: 201,
            response: {
                status: 200,
                data: {
                    "reservations-ids": [12345, 65432],
                },
            },
        };
*/ return /*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
        title: "Step 4 | Get İnvoices",
        description: "Step 4 | Get İnvoices",
        keywords: "Step 4 | Get İnvoices",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (styles_module_default()).reserv_documents,
            children: reservId ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).section,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (styles_module_default()).reserv_container,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (styles_module_default()).downland_button,
                            onClick: generatePdf,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(BlueButton["default"], {
                                colorViceVerse: true,
                                title: "Download the Confirmation",
                                type: ""
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (styles_module_default()).invoice,
                            id: "pdf_file",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (styles_module_default()).invoice_left,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (styles_module_default()).invoice_left_header,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/images/br.png",
                                                    alt: ""
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                    children: "heathrow-gatwick"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "transfers"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (styles_module_default()).invoice_left_center,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: `${(styles_module_default()).invoice_left_center_register} ${(styles_module_default()).invoice_left_center_inf}`,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            children: "Registered Office"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "Aero House, 611 Sipson Road, West Drayton, UB7 0JD, United Kingdom"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: `${(styles_module_default()).invoice_left_center_contact} ${(styles_module_default()).invoice_left_center_inf}`,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            children: "Contact Us"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    style: {
                                                                        paddingRight: "3px"
                                                                    },
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fa-solid fa-phone"
                                                                    })
                                                                }),
                                                                "  +442038873844 ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    style: {
                                                                        paddingRight: "5px"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "fa-brands fa-whatsapp"
                                                                        }),
                                                                        " "
                                                                    ]
                                                                }),
                                                                "+447387901028",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    style: {
                                                                        paddingRight: "5px"
                                                                    },
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fa-solid fa-envelope"
                                                                    })
                                                                }),
                                                                "info@heathrow-gatwick-transfers.com"
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (styles_module_default()).invoice_left_footer
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (styles_module_default()).invoice_right,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: `${(styles_module_default()).invoice_leftt_inside_right} ${(styles_module_default()).visibleInMobile}`,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (styles_module_default()).invoice_leftt_header,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "/images/br.png",
                                                        alt: ""
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                        children: "heathrow-gatwick"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "transfers"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (styles_module_default()).invoice_right_header,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                    children: [
                                                        "Booking ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                            children: "SUCCESSFULLY"
                                                        }),
                                                        " Completed!"
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: (styles_module_default()).thanks,
                                                    children: "Booking details has been sent to given email address."
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    style: {
                                                        display: "flex"
                                                    },
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        children: [
                                                            "Date :",
                                                            " ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: (0,dateFormat/* formatDate */.p)(trDateTime, "short") ? (0,dateFormat/* formatDate */.p)(trDateTime, "short") : trDateTime.split(" ")[0].replace(/(\d+)\-(\d+)-(\d+)/, "$3-$2-$1")
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (styles_module_default()).invoice_right_bill,
                                            id: "table_file",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (styles_module_default()).pdf_content,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: (styles_module_default()).content_of_reserv,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: (styles_module_default()).passenger_details,
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: (styles_module_default()).passenger_details_header,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                            children: " Journey Details"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                            children: [
                                                                                "Reservation Id: ",
                                                                                reservId[0][0]
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(Informations["default"], {
                                                                    date: trDateTime,
                                                                    quot: selectedQuotTransfer,
                                                                    pickUps: selectedPickUpPointsTr,
                                                                    drops: selectedDropPointsTr,
                                                                    fullName: fullnameTransfer,
                                                                    email: emailTransfer,
                                                                    phone: phoneTranfer,
                                                                    passengers: selectPaxTransfer,
                                                                    note: (ref1 = reservations[0]) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.transferDetails) === null || ref2 === void 0 ? void 0 : ref2.specialRequests,
                                                                    paymentType: (ref3 = reservations[0]) === null || ref3 === void 0 ? void 0 : (ref4 = ref3.paymentDetails) === null || ref4 === void 0 ? void 0 : ref4.paymentType
                                                                })
                                                            ]
                                                        }),
                                                        selectSelectedReturnQuot && (slectPickUpPointsReturn === null || slectPickUpPointsReturn === void 0 ? void 0 : slectPickUpPointsReturn.length) > 0 && (selectDropOffPointsReturn === null || selectDropOffPointsReturn === void 0 ? void 0 : selectDropOffPointsReturn.length) > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: `${(styles_module_default()).passenger_details} ${pickUpDropSelectors/* selectedReturnQuot */.CS && (styles_module_default()).hasReturnQuot}`,
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: (styles_module_default()).passenger_details_header,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                            children: "Return Details"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                            children: [
                                                                                "Reservation Id: ",
                                                                                reservId[0][1]
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(Informations["default"], {
                                                                    date: returnDate,
                                                                    quot: selectSelectedReturnQuot,
                                                                    pickUps: slectPickUpPointsReturn,
                                                                    drops: selectDropOffPointsReturn,
                                                                    fullName: checked ? fullnameTransfer : fullNameReturn,
                                                                    email: checked ? emailTransfer : emailReturn,
                                                                    phone: checked ? phoneTranfer : phoneReturn,
                                                                    passengers: checked ? selectPaxTransfer : selectPaxReturn,
                                                                    note: (ref5 = reservations[0]) === null || ref5 === void 0 ? void 0 : (ref6 = ref5.transferDetails) === null || ref6 === void 0 ? void 0 : ref6.specialRequests,
                                                                    paymentType: (ref7 = reservations[1]) === null || ref7 === void 0 ? void 0 : (ref8 = ref7.paymentDetails) === null || ref8 === void 0 ? void 0 : ref8.paymentType
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: (styles_module_default()).bottom_tot,
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: (styles_module_default()).thankyou,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "fa-solid fa-face-smile"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: "Thank you for booking with us."
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: (styles_module_default()).bottom_tot_price,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            className: (styles_module_default()).bottom_tot_price_text,
                                                                            children: "Total Price:"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                            className: (styles_module_default()).bottom_tot_price_price,
                                                                            children: [
                                                                                "\xa3",
                                                                                (selectedQuotTransfer === null || selectedQuotTransfer === void 0 ? void 0 : selectedQuotTransfer.price) && (selectSelectedReturnQuot === null || selectSelectedReturnQuot === void 0 ? void 0 : selectSelectedReturnQuot.price) ? Number(selectedQuotTransfer === null || selectedQuotTransfer === void 0 ? void 0 : selectedQuotTransfer.price) + Number(selectSelectedReturnQuot === null || selectSelectedReturnQuot === void 0 ? void 0 : selectSelectedReturnQuot.price) : Number(selectedQuotTransfer === null || selectedQuotTransfer === void 0 ? void 0 : selectedQuotTransfer.price)
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
                            ]
                        })
                    ]
                })
            }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${(styles_module_default()).section} ${(styles_module_default()).section_two}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx(ProgresBar, {})
            })
        })
    });
};
/* harmony default export */ const reservations_document = (ReservDocuments);
async function getServerSideProps({ req , res  }) {
    if (req.url === "/reservations-document") {
        return {
            redirect: {
                destination: `/`,
                permanent: false
            }
        };
    }
    return {
        props: {
            data: ""
        }
    };
}


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

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

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
var __webpack_exports__ = __webpack_require__.X(0, [6377,5675,2246,5789,6824,3830], () => (__webpack_exec__(1859)));
module.exports = __webpack_exports__;

})();