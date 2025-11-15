"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888,2858,8817,150,1344];
exports.modules = {

/***/ 7748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: external "next-redux-wrapper"
const external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "redux-devtools-extension"
const external_redux_devtools_extension_namespaceObject = require("redux-devtools-extension");
// EXTERNAL MODULE: ./src/helpers/getDate.js
var getDate = __webpack_require__(5795);
// EXTERNAL MODULE: ./src/store/pickUpDropOffReducer/pickUpDropTypes.js
var pickUpDropTypes = __webpack_require__(8348);
;// CONCATENATED MODULE: ./src/store/pickUpDropOffReducer/index.js


const INITIAL_STATE = {
    cookies: {
        sessionToken: ""
    },
    showOnlyTransferCOmp: true,
    direction: "left",
    reservations: [
        {
            reservationDetails: {
                channelId: 5,
                accountId: 225
            },
            selectedPickupPoints: [],
            selectedDropoffPoints: [],
            quotation: {},
            transferDetails: {
                // transferDateTime: getDateTimeFromFormat(
                // dateTimeStringFunc(),
                // "yyyy-mm-dd HH:MM",
                // "Europe/London"
                // ),
                transferDateTimeString: (0,getDate/* dateTimeStringFunc */.Hp)(),
                pickupCategoryId: "",
                passengersNumber: 1,
                passengerSuitcase: 1,
                specialRequests: ""
            },
            passengerDetails: {
                token: "",
                lastname: "",
                language: "en",
                firstname: "",
                email: "",
                phone: ""
            },
            paymentDetails: {
                token: "",
                paymentType: "",
                account: 225
            }
        },
        {
            reservationDetails: {
                channelId: 5,
                accountId: 225
            },
            selectedPickupPoints: [],
            selectedDropoffPoints: [],
            quotation: {},
            transferDetails: {
                // transferDateTime: getDateTimeFromFormat(
                // dateTimeStringFuncForReturn(),
                // "yyyy-mm-dd HH:MM",
                // "Europe/London"
                // ),
                transferDateTimeString: (0,getDate/* dateTimeStringFuncForReturn */.o$)(),
                pickupCategoryId: "",
                passengersNumber: 1,
                passengerSuitcase: 1,
                specialRequests: ""
            },
            passengerDetails: {
                token: "",
                lastname: "",
                language: "en",
                firstname: "",
                email: "",
                phone: ""
            },
            paymentDetails: {
                token: "",
                paymentType: "",
                account: 225
            }
        }, 
    ],
    loadingPickUpOneWay: false,
    loadingDropOffOneWay: false,
    loadingPickUpReturn: false,
    loadingDropOffReturn: false,
    appData: {},
    params: {
        journeyType: "0",
        searchLoading: false,
        quotations: {
            quotationLoading: false,
            quotTransferLoading: false,
            quotReturnLoading: false,
            quotBothLoading: false,
            quotationError: "",
            transferQuotations: [],
            returnQuotations: []
        },
        reservationsError: [
            {
                selectedPickUpPointError: "",
                selectedDropOffPointsError: "",
                selectedTimeError: "",
                dateTimeForBoolean: false
            },
            {
                selectedPickUpPointError: "",
                selectedDropOffPointsError: "",
                selectedTimeError: "",
                dateTimeForBoolean: false
            }, 
        ],
        searchErrors: [],
        searchEngine: [
            {
                pickupPoints: {},
                dropoffPoints: {},
                pickupInput: "",
                dropoffInput: ""
            },
            {
                pickupPoints: {},
                dropoffPoints: {},
                pickupInput: "",
                dropoffInput: ""
            }, 
        ],
        transferDetailsPageError: [
            {
                trPickUpPointError: "",
                trDropOffPointsError: ""
            },
            {
                returnPickUpPointError: "",
                returnDropOffPointsError: ""
            }, 
        ]
    },
    initalInputsStatesForAddingExtraItems: [
        {
            showAddExtraTextPickUp: false,
            inputAfterAddingPickUp: false,
            showAddExtraTextDropOff: false,
            inputAfterAddingDropOff: false
        },
        {
            showAddExtraTextPickUp: false,
            inputAfterAddingPickUp: false,
            showAddExtraTextDropOff: false,
            inputAfterAddingDropOff: false
        }, 
    ],
    checked: true,
    passenegerDetailsErrors: [
        {
            fullnameError: "",
            emailError: "",
            pgoneError: ""
        },
        {
            fullnameError: "",
            emailError: "",
            pgoneError: ""
        }, 
    ],
    reservationsTrDetailsPageErrors: [
        {
            selectedPickupPoints: [],
            // collected dropoff point(s) from /api/v1/suggestion API End Point
            selectedDropoffPoints: []
        },
        {
            selectedPickupPoints: [],
            // collected dropoff point(s) from /api/v1/suggestion API End Point
            selectedDropoffPoints: []
        }, 
    ],
    trDetailsPageError: false,
    postCodeAdresses: [],
    paymentTypes: [],
    tokenForArchieve: "",
    modalInfo: false,
    meetPoint: ""
};
const pickUpDropOffReducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case pickUpDropTypes/* FETCH_LOCATIONS_REQUEST */.Cz:
            {
                let { journeyType , index  } = action.payload;
                return {
                    ...state,
                    loadingPickUpOneWay: journeyType === 0 && index === 0 ? true : false,
                    loadingDropOffOneWay: journeyType === 0 && index === 1 ? true : false,
                    loadingPickUpReturn: journeyType === 1 && index === 0 ? true : false,
                    loadingDropOffReturn: journeyType === 1 && index === 1 ? true : false
                };
            }
        case pickUpDropTypes/* FETCH_LOCATIONS_SUCCESS */.pN:
            {
                const { index: index1 , data , journeyType: journeyType1  } = action.payload;
                return {
                    ...state,
                    cookies: {
                        ...state.cookies,
                        sessionToken: `${data["session-token"]}`
                    },
                    reservations: [
                        {
                            ...state.reservations[0],
                            passengerDetails: {
                                ...state.reservations[0].passengerDetails,
                                token: data === null || data === void 0 ? void 0 : data.token
                            }
                        },
                        {
                            ...state.reservations[1],
                            passengerDetails: {
                                ...state.reservations[1].passengerDetails,
                                token: data === null || data === void 0 ? void 0 : data.token
                            }
                        }, 
                    ],
                    loadingPickUpOneWay: false,
                    loadingDropOffOneWay: false,
                    loadingPickUpReturn: false,
                    loadingDropOffReturn: false,
                    // session_token: data.session - token,
                    params: {
                        ...state.params,
                        journeyType: journeyType1,
                        searchEngine: [
                            //!here changing pickup or dropoff  *points*
                            journeyType1 === 0 ? {
                                ...state.params.searchEngine[0],
                                pickupPoints: index1 === 0 ? data.result : state.params.searchEngine[0].pickupPoints,
                                dropoffPoints: index1 === 1 ? data.result : state.params.searchEngine[0].dropoffPoints
                            } : {
                                ...state.params.searchEngine[0]
                            },
                            //!here changing pickup or dropoff  *points*
                            journeyType1 === 1 ? {
                                ...state.params.searchEngine[1],
                                pickupPoints: index1 === 0 ? data.result : state.params.searchEngine[1].pickupPoints,
                                dropoffPoints: index1 === 1 ? data.result : state.params.searchEngine[1].dropoffPoints
                            } : {
                                ...state.params.searchEngine[1]
                            }, 
                        ]
                    },
                    tokenForArchieve: data === null || data === void 0 ? void 0 : data.token
                };
            }
        case pickUpDropTypes/* FETCH_LOCATIONS_FAILURE */.rZ:
            {
                const { errorMessage , index: index2  } = action.payload;
                return {
                    ...state,
                    loadingPickUpOneWay: false,
                    loadingDropOffOneWay: false,
                    loadingPickUpReturn: false,
                    loadingDropOffReturn: false,
                    params: {
                        ...state.params,
                        searchErrors: [
                            {
                                pickUpError: index2 === 0 ? errorMessage : ""
                            },
                            {
                                dropOffError: index2 === 1 ? errorMessage : ""
                            }, 
                        ]
                    }
                };
            }
        case pickUpDropTypes/* SET_SEARCH_ENGINE_VALUE */.id:
            {
                const { index: index3 , inpValue , journeyType: journeyType2  } = action.payload;
                let direction = state.direction;
                if (journeyType2 === 0) {
                    direction = "left";
                }
                if (journeyType2 === 1) {
                    direction = "right";
                }
                return {
                    ...state,
                    direction: direction,
                    params: {
                        ...state.params,
                        // journeyType: journeyType,
                        searchEngine: [
                            //!here we update inp values for transfer(oneway) direction  It means journey type 0
                            journeyType2 === 0 ? {
                                ...state.params.searchEngine[0],
                                pickupInput: index3 === 0 ? inpValue : state.params.searchEngine[0].pickupInput,
                                dropoffInput: index3 === 1 ? inpValue : state.params.searchEngine[0].dropoffInput
                            } : {
                                ...state.params.searchEngine[0]
                            },
                            //!here we update inp values for return direction It means journey type 1
                            journeyType2 === 1 ? {
                                ...state.params.searchEngine[1],
                                pickupInput: index3 === 0 ? inpValue : state.params.searchEngine[1].pickupInput,
                                dropoffInput: index3 === 1 ? inpValue : state.params.searchEngine[1].dropoffInput
                            } : {
                                ...state.params.searchEngine[1]
                            }, 
                        ]
                    }
                };
            }
        case pickUpDropTypes/* ADD_ITEM_TO_SELECTED_LIST */.Z3:
            {
                var ref, ref1;
                const { data: data1 , index: index4 , journeyType: journeyType3 , objectDetails  } = action.payload;
                let newFinalObj = {
                    ...data1,
                    ...objectDetails
                };
                let pickUpsTr = state === null || state === void 0 ? void 0 : state.reservations[0].selectedPickupPoints;
                let dropOffsTr = state === null || state === void 0 ? void 0 : state.reservations[0].selectedDropoffPoints;
                let pickUpsReturn = (ref = state === null || state === void 0 ? void 0 : state.reservations[1]) === null || ref === void 0 ? void 0 : ref.selectedPickupPoints;
                let dropOffsReturn = (ref1 = state === null || state === void 0 ? void 0 : state.reservations[1]) === null || ref1 === void 0 ? void 0 : ref1.selectedDropoffPoints;
                if (index4 === 0 && journeyType3 === 0) {
                    pickUpsTr = [
                        ...pickUpsTr,
                        newFinalObj
                    ];
                }
                if (index4 === 1 && journeyType3 === 0) {
                    dropOffsTr = [
                        ...dropOffsTr,
                        newFinalObj
                    ];
                }
                if (index4 === 0 && journeyType3 === 1) {
                    pickUpsReturn = [
                        ...pickUpsReturn,
                        newFinalObj
                    ];
                }
                if (index4 === 1 && journeyType3 === 1) {
                    dropOffsReturn = [
                        ...dropOffsReturn,
                        newFinalObj
                    ];
                }
                return {
                    ...state,
                    reservations: [
                        {
                            ...state.reservations[0],
                            selectedPickupPoints: pickUpsTr,
                            selectedDropoffPoints: dropOffsTr
                        },
                        {
                            ...state.reservations[1],
                            selectedPickupPoints: pickUpsReturn,
                            selectedDropoffPoints: dropOffsReturn
                        }, 
                    ],
                    //we r cleaning input after selecting one item
                    params: {
                        ...state.params,
                        searchEngine: [
                            {
                                ...state.params.searchEngine[0],
                                pickupInput: "",
                                dropoffInput: ""
                            },
                            {
                                ...state.params.searchEngine[1],
                                pickupInput: "",
                                dropoffInput: ""
                            }, 
                        ]
                    },
                    reservationsTrDetailsPageErrors: [
                        {
                            ...state.reservationsTrDetailsPageErrors[0],
                            selectedPickupPoints: pickUpsTr === null || pickUpsTr === void 0 ? void 0 : pickUpsTr.map((item)=>{
                                var ref, ref1, ref2, ref3, ref4;
                                // console.log(item?.flightDetails?.flightNumber?.length);
                                return (item === null || item === void 0 ? void 0 : item.pcatId) === 1 && (item === null || item === void 0 ? void 0 : (ref = item.flightDetails) === null || ref === void 0 ? void 0 : (ref1 = ref.flightNumber) === null || ref1 === void 0 ? void 0 : ref1.length) === 0 || ((ref2 = (item === null || item === void 0 ? void 0 : item.pcatId) === 2 && item.cruiseNumber) === null || ref2 === void 0 ? void 0 : ref2.length) === 0 || (item === null || item === void 0 ? void 0 : item.pcatId) === 5 && (item === null || item === void 0 ? void 0 : (ref3 = item.postCodeDetails) === null || ref3 === void 0 ? void 0 : (ref4 = ref3.postCodeAddress) === null || ref4 === void 0 ? void 0 : ref4.length) === 0 ? {
                                    ...item,
                                    errorMessage: "required",
                                    waitingError: (item === null || item === void 0 ? void 0 : item.pcatId) === 1 ? "required" : "",
                                    waitingTime: (item === null || item === void 0 ? void 0 : item.pcatId) === 1 ? "" : "1"
                                } : {
                                    ...item,
                                    errorMessage: "",
                                    waitingError: "",
                                    waitingTime: "1"
                                };
                            }),
                            selectedDropoffPoints: dropOffsTr === null || dropOffsTr === void 0 ? void 0 : dropOffsTr.map((item)=>{
                                var ref, ref1;
                                return (item === null || item === void 0 ? void 0 : item.pcatId) === 5 && (item === null || item === void 0 ? void 0 : (ref = item.postCodeDetails) === null || ref === void 0 ? void 0 : (ref1 = ref.postCodeAddress) === null || ref1 === void 0 ? void 0 : ref1.length) === 0 ? {
                                    ...item,
                                    errorMessage: "required",
                                    waitingTime: "1"
                                } : {
                                    ...item,
                                    errorMessage: "",
                                    waitingTime: "1"
                                };
                            })
                        },
                        {
                            ...state.reservationsTrDetailsPageErrors[1],
                            selectedPickupPoints: pickUpsReturn === null || pickUpsReturn === void 0 ? void 0 : pickUpsReturn.map((item)=>{
                                return item.pcatId === 1 || item.pcatId === 2 || item.pcatId === 5 ? {
                                    ...item,
                                    errorMessage: "required",
                                    waitingError: (item === null || item === void 0 ? void 0 : item.pcatId) === 1 ? "required" : "",
                                    waitingTime: (item === null || item === void 0 ? void 0 : item.pcatId) === 1 ? "" : "1"
                                } : {
                                    ...item,
                                    errorMessage: "",
                                    waitingError: "",
                                    waitingTime: "1"
                                };
                            }),
                            selectedDropoffPoints: dropOffsReturn === null || dropOffsReturn === void 0 ? void 0 : dropOffsReturn.map((item)=>{
                                return (item === null || item === void 0 ? void 0 : item.pcatId) === 5 ? {
                                    ...item,
                                    errorMessage: "required",
                                    waitingTime: "1"
                                } : {
                                    ...item,
                                    errorMessage: "",
                                    waitingTime: "1"
                                };
                            })
                        }, 
                    ]
                };
            }
        case pickUpDropTypes/* DELETE_ITEM_FROM_SELECTED_LIST */.pB:
            {
                var ref2, ref3, ref4, ref5, ref6, ref7;
                const { item , index: index5 , journeyType: journeyType4 , indexOfCurrentItem  } = action.payload;
                let pickUpsOneWAY = state.reservations[0].selectedPickupPoints;
                let dropOffOneWay = state.reservations[0].selectedDropoffPoints;
                // console.log(index, journeyType, indexOfCurrentItem);
                let pickUpsReturn1 = (ref2 = state.reservations[1]) === null || ref2 === void 0 ? void 0 : ref2.selectedPickupPoints;
                let dropOffReturn = (ref3 = state.reservations[1]) === null || ref3 === void 0 ? void 0 : ref3.selectedDropoffPoints;
                let pickUpTransferPointsCopy = (ref4 = state === null || state === void 0 ? void 0 : state.reservationsTrDetailsPageErrors[0]) === null || ref4 === void 0 ? void 0 : ref4.selectedPickupPoints;
                let dropOfTransferPointsCopy = (ref5 = state === null || state === void 0 ? void 0 : state.reservationsTrDetailsPageErrors[0]) === null || ref5 === void 0 ? void 0 : ref5.selectedDropoffPoints;
                let pickUpReturnPointsCopy = (ref6 = state === null || state === void 0 ? void 0 : state.reservationsTrDetailsPageErrors[1]) === null || ref6 === void 0 ? void 0 : ref6.selectedPickupPoints;
                let dropOfReturnPointsCopy = (ref7 = state === null || state === void 0 ? void 0 : state.reservationsTrDetailsPageErrors[1]) === null || ref7 === void 0 ? void 0 : ref7.selectedDropoffPoints;
                //filter for  oneway
                if (index5 === 0 && journeyType4 === 0) {
                    pickUpsOneWAY === null || pickUpsOneWAY === void 0 ? void 0 : pickUpsOneWAY.splice(indexOfCurrentItem, 1);
                    pickUpTransferPointsCopy === null || pickUpTransferPointsCopy === void 0 ? void 0 : pickUpTransferPointsCopy.splice(indexOfCurrentItem, 1);
                // console.log("index === 0 && journeyType === 0");
                }
                if (index5 === 1 && journeyType4 === 0) {
                    dropOffOneWay === null || dropOffOneWay === void 0 ? void 0 : dropOffOneWay.splice(indexOfCurrentItem, 1);
                    dropOfTransferPointsCopy === null || dropOfTransferPointsCopy === void 0 ? void 0 : dropOfTransferPointsCopy.splice(indexOfCurrentItem, 1);
                // console.log("index === 1 && journeyType === 0");
                }
                //filter for  return
                if (index5 === 0 && journeyType4 === 1) {
                    pickUpsReturn1 === null || pickUpsReturn1 === void 0 ? void 0 : pickUpsReturn1.splice(indexOfCurrentItem, 1);
                    pickUpReturnPointsCopy === null || pickUpReturnPointsCopy === void 0 ? void 0 : pickUpReturnPointsCopy.splice(indexOfCurrentItem, 1);
                // console.log("index === 0 && journeyType === 1");
                }
                if (index5 === 1 && journeyType4 === 1) {
                    dropOffReturn === null || dropOffReturn === void 0 ? void 0 : dropOffReturn.splice(indexOfCurrentItem, 1);
                    dropOfReturnPointsCopy === null || dropOfReturnPointsCopy === void 0 ? void 0 : dropOfReturnPointsCopy.splice(indexOfCurrentItem, 1);
                // console.log("index === 1 && journeyType === 1");
                }
                return {
                    ...state,
                    reservations: [
                        {
                            ...state.reservations[0],
                            selectedPickupPoints: pickUpsOneWAY,
                            selectedDropoffPoints: dropOffOneWay
                        },
                        {
                            ...state.reservations[1],
                            selectedPickupPoints: pickUpsReturn1,
                            selectedDropoffPoints: dropOffReturn
                        }, 
                    ],
                    reservationsTrDetailsPageErrors: [
                        {
                            ...state.reservationsTrDetailsPageErrors[0],
                            selectedPickupPoints: pickUpTransferPointsCopy,
                            selectedDropoffPoints: dropOfTransferPointsCopy
                        },
                        {
                            ...state.reservationsTrDetailsPageErrors[1],
                            selectedPickupPoints: pickUpReturnPointsCopy,
                            selectedDropoffPoints: dropOfReturnPointsCopy
                        }, 
                    ]
                };
            }
        case pickUpDropTypes/* SET_DATE_TIME */.YM:
            {
                var ref8, ref9;
                const { dateValue , journeyType: journeyType5 , pickupOrDropOrDate  } = action.payload;
                //these are for getting input date
                let tranferDatatime = (ref8 = state === null || state === void 0 ? void 0 : state.reservations[0].transferDetails) === null || ref8 === void 0 ? void 0 : ref8.transferDateTimeString;
                let hourMinuteTransfer = tranferDatatime === null || tranferDatatime === void 0 ? void 0 : tranferDatatime.split(" ")[1];
                let returnDatatime = (ref9 = state === null || state === void 0 ? void 0 : state.reservations[1].transferDetails) === null || ref9 === void 0 ? void 0 : ref9.transferDateTimeString;
                let hourMinuteReturn = returnDatatime === null || returnDatatime === void 0 ? void 0 : returnDatatime.split(" ")[1];
                //replacing frist index with new input date value
                if (pickupOrDropOrDate === "date") {
                    if (journeyType5 === 0) {
                        tranferDatatime = `${dateValue} ${hourMinuteTransfer}`;
                    }
                    if (journeyType5 === 1) {
                        returnDatatime = `${dateValue} ${hourMinuteReturn}`;
                    }
                }
                //these are for getting hour and minute for each return and transfer
                let direction1 = state.direction;
                if (journeyType5 === 0) {
                    direction1 = "left";
                }
                if (journeyType5 === 1) {
                    direction1 = "right";
                }
                // console.log(tranferDatatime);
                return {
                    ...state,
                    direction: direction1,
                    reservations: [
                        {
                            ...state.reservations[0],
                            transferDetails: {
                                ...state.reservations[0].transferDetails,
                                transferDateTimeString: tranferDatatime
                            }
                        },
                        {
                            ...state.reservations[1],
                            transferDetails: {
                                ...state.reservations[1].transferDetails,
                                transferDateTimeString: returnDatatime
                            }
                        }, 
                    ]
                };
            }
        case pickUpDropTypes/* SET_HOUR_AND_MINUTE */.Su:
            {
                var ref10, ref11, ref12, ref13;
                const { valueOfHourOrMinute , transferOrReturn  } = action.payload;
                //these are for getting input date
                let tranferDatatime1 = (ref10 = state === null || state === void 0 ? void 0 : state.reservations[0].transferDetails) === null || ref10 === void 0 ? void 0 : ref10.transferDateTimeString;
                let trDate = tranferDatatime1.split(" ")[0]; //2022-04-18
                let trMinute = (ref11 = tranferDatatime1.split(" ")[1]) === null || ref11 === void 0 ? void 0 : ref11.split(":")[1]; //00   15 20 25
                let trHour = (ref12 = tranferDatatime1 === null || tranferDatatime1 === void 0 ? void 0 : tranferDatatime1.split(" ")[1]) === null || ref12 === void 0 ? void 0 : ref12.split(":")[0]; //1 2 3 4 5 6
                //taking each hour 12   and minute 00
                let returnDatatime1;
                let returnDate;
                let returnMinute; //00   15 20 25
                let returnHour;
                if (state === null || state === void 0 ? void 0 : state.reservations[1]) {
                    var ref14, ref15, ref16, ref17;
                    returnDatatime1 = (ref14 = state === null || state === void 0 ? void 0 : state.reservations[1]) === null || ref14 === void 0 ? void 0 : (ref15 = ref14.transferDetails) === null || ref15 === void 0 ? void 0 : ref15.transferDateTimeString;
                    returnDate = returnDatatime1 === null || returnDatatime1 === void 0 ? void 0 : returnDatatime1.split(" ")[0];
                    returnMinute = (ref16 = returnDatatime1 === null || returnDatatime1 === void 0 ? void 0 : returnDatatime1.split(" ")[1]) === null || ref16 === void 0 ? void 0 : ref16.split(":")[1]; //00   15 20 25
                    returnHour = (ref17 = returnDatatime1 === null || returnDatatime1 === void 0 ? void 0 : returnDatatime1.split(" ")[1]) === null || ref17 === void 0 ? void 0 : ref17.split(":")[0];
                }
                //replacing frist index with new input date value
                if (transferOrReturn === "hourTr") {
                    tranferDatatime1 = `${trDate} ${valueOfHourOrMinute}:${trMinute}`;
                }
                if (transferOrReturn === "minuteTr") {
                    tranferDatatime1 = `${trDate} ${trHour}:${valueOfHourOrMinute}`;
                }
                if (transferOrReturn === "hourReturn") {
                    returnDatatime1 = `${returnDate} ${valueOfHourOrMinute}:${returnMinute}`;
                }
                if (transferOrReturn === "minuteReturn") {
                    returnDatatime1 = `${returnDate} ${returnHour}:${valueOfHourOrMinute}`;
                }
                return {
                    ...state,
                    reservations: [
                        {
                            ...state.reservations[0],
                            transferDetails: {
                                ...state.reservations[0].transferDetails,
                                transferDateTimeString: tranferDatatime1
                            }
                        },
                        {
                            ...state.reservations[1],
                            transferDetails: {
                                ...(ref13 = state.reservations[1]) === null || ref13 === void 0 ? void 0 : ref13.transferDetails,
                                transferDateTimeString: returnDatatime1
                            }
                        }, 
                    ]
                };
            }
        //setting errors for fields
        case pickUpDropTypes/* SET_PARAMS */.Sb:
            {
                const { message , pickOrDrop , journeyType: journeyType6 , dateTimeForBoolean  } = action.payload;
                let pickError = state.params.reservationsError[0].selectedPickUpPointError;
                let dropError = state.params.reservationsError[0].selectedDropOffPointsError;
                let dateError = state.params.reservationsError[0].selectedTimeError;
                let booleanForCheck = state.params.reservationsError[0].dateTimeForBoolean;
                if (journeyType6 === 0) {
                    if (pickOrDrop === "both") {
                        pickError = message;
                        dropError = message;
                    }
                    if (pickOrDrop === "dateTimeError") {
                        dateError = message, booleanForCheck = dateTimeForBoolean;
                    }
                }
                let pickErrorReturn = state.params.reservationsError[1].selectedPickUpPointError;
                let dropErrorReturn = state.params.reservationsError[1].selectedDropOffPointsError;
                let dateErrorReturn = state.params.reservationsError[1].selectedTimeError;
                let booleanForCheckReturn = state.params.reservationsError[1].dateTimeForBoolean;
                if (journeyType6 === 1) {
                    if (pickOrDrop === "both") {
                        pickErrorReturn = message;
                        dropErrorReturn = message;
                    }
                    if (pickOrDrop === "dateTimeError") {
                        dateErrorReturn = message, booleanForCheckReturn = dateTimeForBoolean;
                    }
                }
                return {
                    ...state,
                    params: {
                        ...state.params,
                        reservationsError: [
                            {
                                ...state.params.reservationsError[0],
                                selectedPickUpPointError: pickError,
                                selectedDropOffPointsError: dropError,
                                selectedTimeError: dateError,
                                dateTimeForBoolean: booleanForCheck
                            },
                            {
                                ...state.params.reservationsError[1],
                                selectedPickUpPointError: pickErrorReturn,
                                selectedDropOffPointsError: dropErrorReturn,
                                selectedTimeError: dateErrorReturn,
                                dateTimeForBoolean: booleanForCheckReturn
                            }, 
                        ]
                    }
                };
            }
        //*TRANSFER QUOTATIONS
        case pickUpDropTypes/* GET_TRANSFER_QUOT_REQUEST */.eS:
            {
                return {
                    ...state,
                    params: {
                        ...state.params,
                        quotations: {
                            ...state.params.quotations,
                            quotTransferLoading: true
                        }
                    }
                };
            }
        case pickUpDropTypes/* GET_TRANSFER_QUOTATIONS */.p_:
            {
                let tr = action.payload.data;
                return {
                    ...state,
                    // otomotik secilmesi icin direk quotation icine birinci geleni atrq quotation icine(ve bu olur ilk secilen quotation)
                    reservations: [
                        {
                            ...state === null || state === void 0 ? void 0 : state.reservations[0]
                        },
                        {
                            ...state === null || state === void 0 ? void 0 : state.reservations[1]
                        }, 
                    ],
                    params: {
                        ...state.params,
                        quotations: {
                            ...state.params.quotations,
                            quotTransferLoading: false,
                            transferQuotations: tr
                        }
                    }
                };
            }
        case pickUpDropTypes/* GET_QUOT_TRANSFER_ERROR */.w7:
            {
                return {
                    ...state,
                    params: {
                        ...state.params,
                        quotations: {
                            ...state.params.quotations,
                            quotationError: action.payload,
                            quotTransferLoading: false
                        }
                    }
                };
            }
        case pickUpDropTypes/* GET_BOTH_TOGETHER_QUOT_REQUEST */.NW:
            {
                return {
                    ...state,
                    params: {
                        ...state.params,
                        quotations: {
                            ...state.params.quotations,
                            quotBothLoading: true
                        }
                    }
                };
            }
        case pickUpDropTypes/* GET_BOTH_TOGETHER_QUOTATIONS */.RO:
            {
                let { trQuots , retrunQuots  } = action.payload;
                return {
                    ...state,
                    params: {
                        ...state.params,
                        quotations: {
                            ...state.params.quotations,
                            quotBothLoading: false,
                            transferQuotations: trQuots,
                            returnQuotations: retrunQuots
                        }
                    }
                };
            }
        case "DELETE_BOOKED_MESSAGE":
            {
                return {
                    ...state,
                    params: {
                        ...state.params,
                        quotations: {
                            quotationError: ""
                        }
                    }
                };
            }
        case pickUpDropTypes/* IF_HAS_BOOKED_INSIDE_QUOTATION_PAGE */.vq:
            {
                return {
                    ...state,
                    params: {
                        ...state.params,
                        quotations: {
                            ...state.params.quotations,
                            transferQuotations: []
                        }
                    }
                };
            }
            "";
        case "IF_HAS_BOOKED_INSIDE_QUOTATION_PAGE_TRANSFER":
            {
                return {
                    ...state,
                    params: {
                        ...state.params,
                        quotations: {
                            ...state.params.quotations,
                            transferQuotations: []
                        }
                    }
                };
            }
        // case "DELETE_BOOKED_MESSAGE": {
        //   return {
        //     ...state,
        //     params: {
        //       ...state.params,
        //       quotations: {
        //         ...state.params.quotations,
        //         quotationError: "",
        //       },
        //     },
        //   };
        // }
        case "IF_HAS_BOOKED_INSIDE_QUOTATION_PAGE_RETURN":
            {
                return {
                    ...state,
                    params: {
                        ...state.params,
                        quotations: {
                            ...state.params.quotations,
                            returnQuotations: []
                        }
                    }
                };
            }
        case pickUpDropTypes/* GET_BOTH_TOGETHER_ERROR_QUOT */.DH:
            {
                return {
                    ...state,
                    params: {
                        ...state.params,
                        quotations: {
                            ...state.params.quotations,
                            quotationError: action.payload,
                            quotBothLoading: false
                        }
                    }
                };
            }
        //*RETURN QUOTATIONS
        case pickUpDropTypes/* GET_RETURN_QUOT_REQUEST */.Xz:
            {
                return {
                    ...state,
                    params: {
                        ...state.params,
                        quotations: {
                            ...state.params.quotations,
                            quotReturnLoading: true
                        }
                    }
                };
            }
        case pickUpDropTypes/* GET_RETURN_QUOTATIONS */.aT:
            {
                let rt = action.payload.data;
                return {
                    ...state,
                    // otomotik secilmesi icin direk quotation icine birinci geleni atrq quotation icine(ve bu olur ilk secilen quotation)
                    reservations: [
                        {
                            ...state.reservations[0]
                        },
                        {
                            ...state.reservations[1]
                        }, 
                    ],
                    params: {
                        ...state.params,
                        quotations: {
                            ...state.params.quotations,
                            quotReturnLoading: false,
                            returnQuotations: rt
                        }
                    }
                };
            }
        case pickUpDropTypes/* GET_RETURN_ERROR_QUOT */.ho:
            {
                return {
                    ...state,
                    params: {
                        ...state.params,
                        quotations: {
                            ...state.params.quotations,
                            quotationError: action.payload,
                            quotReturnLoading: false
                        }
                    }
                };
            }
        //*RETURN QUOTATIONS
        case pickUpDropTypes/* SET_QUOTATION */.bz:
            {
                var ref18, ref19, ref20, ref21, ref22, ref23, ref24, ref25;
                const { quotation , journeyType: journeyType7  } = action.payload;
                let pickUpsTr1 = (ref18 = state === null || state === void 0 ? void 0 : state.reservations[0]) === null || ref18 === void 0 ? void 0 : ref18.selectedPickupPoints;
                let pickUpsReturn2 = (ref19 = state === null || state === void 0 ? void 0 : state.reservations[1]) === null || ref19 === void 0 ? void 0 : ref19.selectedPickupPoints;
                let newQuotationReturn = (ref20 = state === null || state === void 0 ? void 0 : state.reservations[1]) === null || ref20 === void 0 ? void 0 : ref20.quotation;
                let newQuotationTransfer = (ref21 = state === null || state === void 0 ? void 0 : state.reservations[0]) === null || ref21 === void 0 ? void 0 : ref21.quotation;
                if (journeyType7 === 0) newQuotationTransfer = quotation;
                if (journeyType7 === 1) newQuotationReturn = quotation;
                console.log(state.params);
                // let pickUpTransferPointsCopy =
                //   state?.reservationsTrDetailsPageErrors[0]?.selectedPickupPoints;
                // let pickUpReturnPointsCopy =
                //   state?.reservationsTrDetailsPageErrors[1]?.selectedPickupPoints;
                // //changing waitingpickuptime to empty string if destination is pickup
                //   let newSelectedPickUpPointsTr = pickUpTransferPointsCopy?.map((point, index) => {
                //   if (point?.pcatId === 1) {
                //     return point = { ...point, flightDetails: { ...point?.flightDetails, waitingPickupTime: "" } }
                //   } else {
                //     return point
                //   }
                // })
                // //changing waitingpickuptime to empty string if destination is pickup
                // let newSelectedPickUpPointsReturn = pickUpReturnPointsCopy?.map((point, index) => {
                //   if (point?.pcatId === 1) {
                //     return point = { ...point, flightDetails: { ...point?.flightDetails, waitingPickupTime: "" } }
                //   } else {
                //     return point
                //   }
                // })
                return {
                    ...state,
                    reservations: [
                        {
                            ...state.reservations[0],
                            quotation: newQuotationTransfer,
                            // selectedPickupPoints: newSelectedPickUpPointsTr,
                            transferDetails: {
                                ...state.reservations[0].transferDetails,
                                pickupCategoryId: pickUpsTr1.length > 0 ? (ref22 = pickUpsTr1[0]) === null || ref22 === void 0 ? void 0 : ref22.pcatId : ""
                            },
                            paymentDetails: {
                                ...state.reservations[0].paymentDetails,
                                price: Number(newQuotationTransfer === null || newQuotationTransfer === void 0 ? void 0 : newQuotationTransfer.price)
                            }
                        },
                        {
                            ...state.reservations[1],
                            quotation: newQuotationReturn,
                            // selectedPickupPoints: newSelectedPickUpPointsReturn,
                            transferDetails: {
                                ...(ref23 = state === null || state === void 0 ? void 0 : state.reservations[1]) === null || ref23 === void 0 ? void 0 : ref23.transferDetails,
                                pickupCategoryId: (pickUpsReturn2 === null || pickUpsReturn2 === void 0 ? void 0 : pickUpsReturn2.length) > 0 ? (ref24 = pickUpsReturn2[0]) === null || ref24 === void 0 ? void 0 : ref24.pcatId : ""
                            },
                            paymentDetails: {
                                ...(ref25 = state.reservations[1]) === null || ref25 === void 0 ? void 0 : ref25.paymentDetails,
                                price: Number(newQuotationReturn === null || newQuotationReturn === void 0 ? void 0 : newQuotationReturn.price)
                            }
                        }, 
                    ]
                };
            }
        case pickUpDropTypes/* SWITCH_JOURNEY */.QI:
            {
                let pickUpsTr2 = state.reservations[0].selectedPickupPoints;
                let dropOffsTr1 = state.reservations[0].selectedDropoffPoints;
                let extraTextPickUpReturn = state.initalInputsStatesForAddingExtraItems[1].showAddExtraTextPickUp;
                let extraTextDropOffReturn = state.initalInputsStatesForAddingExtraItems[1].showAddExtraTextDropOff;
                if (pickUpsTr2.length > 0) {
                    extraTextDropOffReturn = true;
                }
                if (dropOffsTr1.length > 0) {
                    extraTextPickUpReturn = true;
                }
                return {
                    ...state,
                    showOnlyTransferCOmp: +action.payload === 0 ? true : false,
                    params: {
                        ...state.params,
                        journeyType: action.payload
                    },
                    reservations: [
                        {
                            ...state.reservations[0],
                            quotation: {}
                        },
                        {
                            ...state.reservations[1],
                            selectedPickupPoints: +action.payload === 0 ? [] : [
                                ...dropOffsTr1
                            ],
                            selectedDropoffPoints: +action.payload === 0 ? [] : [
                                ...pickUpsTr2
                            ],
                            quotation: {}
                        }, 
                    ],
                    initalInputsStatesForAddingExtraItems: [
                        {
                            ...state.initalInputsStatesForAddingExtraItems[0]
                        },
                        {
                            ...state.initalInputsStatesForAddingExtraItems[1],
                            showAddExtraTextPickUp: extraTextPickUpReturn,
                            // inputAfterAddingPickUp: false,
                            showAddExtraTextDropOff: extraTextDropOffReturn
                        }, 
                    ],
                    reservationsTrDetailsPageErrors: [
                        {
                            ...state.reservationsTrDetailsPageErrors[0]
                        },
                        {
                            ...state.reservationsTrDetailsPageErrors[1],
                            // selectedPickupPoints: [...dropOffsTr],
                            // selectedDropoffPoints: [...pickUpsTr] ,
                            selectedPickupPoints: +action.payload === 0 ? [] : dropOffsTr1.map((item)=>{
                                return item.pcatId === 1 || item.pcatId === 2 || item.pcatId === 5 ? {
                                    ...item,
                                    errorMessage: "required",
                                    waitingError: (item === null || item === void 0 ? void 0 : item.pcatId) === 1 ? "required" : "",
                                    waitingTime: (item === null || item === void 0 ? void 0 : item.pcatId) === 1 ? "" : "1"
                                } : {
                                    ...item,
                                    errorMessage: "",
                                    waitingError: "",
                                    waitingTime: "1"
                                };
                            }),
                            selectedDropoffPoints: +action.payload === 0 ? [] : pickUpsTr2.map((item)=>{
                                return (item === null || item === void 0 ? void 0 : item.pcatId) === 5 ? {
                                    ...item,
                                    errorMessage: "required",
                                    waitingTime: "1"
                                } : {
                                    ...item,
                                    errorMessage: "",
                                    waitingTime: "1"
                                };
                            })
                        }, 
                    ]
                };
            }
        //if inp value less than 3 it will clear previos picklocatios or droppoff locations
        case pickUpDropTypes/* RESET_DATA */.Kk:
            {
                return {
                    ...state,
                    params: {
                        ...state.params,
                        searchEngine: [
                            {
                                ...state.params.searchEngine[0],
                                pickupPoints: {},
                                dropoffPoints: {}
                            },
                            {
                                ...state.params.searchEngine[1],
                                pickupPoints: {},
                                dropoffPoints: {}
                            }, 
                        ]
                    }
                };
            }
        case pickUpDropTypes/* GET_APP_DATA */.Y4:
            {
                return {
                    ...state,
                    appData: action.payload,
                    loadingPickUpOneWay: false
                };
            }
        case pickUpDropTypes/* GET_PAYMENT_DATA */.Sr:
            {
                const { data: data2  } = action.payload;
                return {
                    ...state,
                    paymentTypes: data2
                };
            }
        case pickUpDropTypes/* CHECKED_INPUT_FOR_RETURN */.rt:
            {
                let checked = state.checked;
                //PASSENGER DETAILS
                const passTrDetails = state.reservations[0].passengerDetails;
                const passReturnDetails = state.reservations[1].passengerDetails;
                let newValues = null;
                if (!checked) {
                    newValues = {
                        ...passTrDetails
                    };
                }
                if (checked) {
                    newValues = {
                        ...passReturnDetails
                    };
                }
                return {
                    ...state,
                    checked: !state.checked,
                    reservations: [
                        {
                            ...state.reservations[0],
                            passengerDetails: newValues ? newValues : passTrDetails
                        },
                        {
                            ...state.reservations[1],
                            passengerDetails: newValues ? newValues : passReturnDetails,
                            transferDetails: {
                                ...state.reservations[1].transferDetails,
                                passengersNumber: !checked ? state.reservations[0].transferDetails.passengersNumber : state.reservations[1].transferDetails.passengersNumber
                            }
                        }, 
                    ]
                };
            }
        //?extra inputs
        case pickUpDropTypes/* ADD_EXTRA_INPUT_FOR_JOURNEY */.l_:
            {
                const { pickOrDrop: pickOrDrop1 , journeyType: journeyType8 , whereFuncComes  } = action.payload;
                let showAddExtraTextPickUp = state.initalInputsStatesForAddingExtraItems[0].showAddExtraTextPickUp;
                let inputAfterAddingPickUp = state.initalInputsStatesForAddingExtraItems[0].inputAfterAddingPickUp;
                //
                let showAddExtraTextDropOff = state.initalInputsStatesForAddingExtraItems[0].showAddExtraTextDropOff;
                let inputAfterAddingDropOff = state.initalInputsStatesForAddingExtraItems[0].inputAfterAddingDropOff;
                if (pickOrDrop1 === "pickupPoints" && journeyType8 === 0 && whereFuncComes === "handleInp") {
                    showAddExtraTextPickUp = false;
                    inputAfterAddingPickUp = true;
                }
                if (pickOrDrop1 === "pickupPoints" && journeyType8 === 0 && whereFuncComes === "insideHandleSearch") {
                    showAddExtraTextPickUp = true;
                    inputAfterAddingPickUp = false;
                }
                if (pickOrDrop1 === "dropoffPoints" && journeyType8 === 0 && whereFuncComes === "handleInp") {
                    showAddExtraTextDropOff = false;
                    inputAfterAddingDropOff = true;
                }
                if (pickOrDrop1 === "dropoffPoints" && journeyType8 === 0 && whereFuncComes === "insideHandleSearch") {
                    showAddExtraTextDropOff = true;
                    inputAfterAddingDropOff = false;
                }
                //?the ssame logi c for return
                let showAddExtraTextPickUpReturn = state.initalInputsStatesForAddingExtraItems[1].showAddExtraTextPickUp;
                let inputAfterAddingPickUpReturn = state.initalInputsStatesForAddingExtraItems[1].inputAfterAddingPickUp;
                //dropoffPoints
                let showAddExtraTextDropOffReturn = state.initalInputsStatesForAddingExtraItems[1].showAddExtraTextDropOff;
                let inputAfterAddingDropOffReturn = state.initalInputsStatesForAddingExtraItems[1].inputAfterAddingDropOff;
                if (pickOrDrop1 === "pickupPoints" && journeyType8 === 1 && whereFuncComes === "handleInp") {
                    showAddExtraTextPickUpReturn = false;
                    inputAfterAddingPickUpReturn = true;
                }
                if (pickOrDrop1 === "pickupPoints" && journeyType8 === 1 && whereFuncComes === "insideHandleSearch") {
                    showAddExtraTextPickUpReturn = true;
                    inputAfterAddingPickUpReturn = false;
                }
                if (pickOrDrop1 === "dropoffPoints" && journeyType8 === 1 && whereFuncComes === "handleInp") {
                    showAddExtraTextDropOffReturn = false;
                    inputAfterAddingDropOffReturn = true;
                }
                if (pickOrDrop1 === "dropoffPoints" && journeyType8 === 1 && whereFuncComes === "insideHandleSearch") {
                    showAddExtraTextDropOffReturn = true;
                    inputAfterAddingDropOffReturn = false;
                }
                return {
                    ...state,
                    initalInputsStatesForAddingExtraItems: [
                        {
                            ...state.initalInputsStatesForAddingExtraItems[0],
                            showAddExtraTextPickUp,
                            inputAfterAddingPickUp,
                            showAddExtraTextDropOff,
                            inputAfterAddingDropOff
                        },
                        {
                            ...state.initalInputsStatesForAddingExtraItems[1],
                            showAddExtraTextPickUp: showAddExtraTextPickUpReturn,
                            inputAfterAddingPickUp: inputAfterAddingPickUpReturn,
                            showAddExtraTextDropOff: showAddExtraTextDropOffReturn,
                            inputAfterAddingDropOff: inputAfterAddingDropOffReturn
                        }, 
                    ]
                };
            }
        //?updating trasfer details page selected items values   and giing error for them
        //flightdetails faln onlari udpdate elyrk
        case pickUpDropTypes/* UPDATE_SELECTED_ITEMS_INPUTS */.EY:
            {
                var ref26, ref27, ref28, ref29, ref30, ref31, ref32, ref33;
                const { value , pickOrDrop: pickOrDrop2 , journeyType: journeyType9 , nameOfInput , whichSelectedItem , categoryOfTheType , Id ,  } = action.payload;
                //flightCategory
                // console.log({
                //   value,
                //   pickOrDrop,
                //   journeyType,
                //   nameOfInput,
                //   whichSelectedItem,
                //   categoryOfTheType,
                //   Id,
                // });
                let pickUpTransferPoints = (ref26 = state === null || state === void 0 ? void 0 : state.reservations[0]) === null || ref26 === void 0 ? void 0 : ref26.selectedPickupPoints;
                let dropOfTransferPoints = (ref27 = state === null || state === void 0 ? void 0 : state.reservations[0]) === null || ref27 === void 0 ? void 0 : ref27.selectedDropoffPoints;
                let pickUpTransferPointsCopy1 = (ref28 = state === null || state === void 0 ? void 0 : state.reservationsTrDetailsPageErrors[0]) === null || ref28 === void 0 ? void 0 : ref28.selectedPickupPoints;
                let dropOfTransferPointsCopy1 = (ref29 = state === null || state === void 0 ? void 0 : state.reservationsTrDetailsPageErrors[0]) === null || ref29 === void 0 ? void 0 : ref29.selectedDropoffPoints;
                let pickUpReturnPoints = (ref30 = state === null || state === void 0 ? void 0 : state.reservations[1]) === null || ref30 === void 0 ? void 0 : ref30.selectedPickupPoints;
                let dropOfReturnPoints = (ref31 = state === null || state === void 0 ? void 0 : state.reservations[1]) === null || ref31 === void 0 ? void 0 : ref31.selectedDropoffPoints;
                let pickUpReturnPointsCopy1 = (ref32 = state === null || state === void 0 ? void 0 : state.reservationsTrDetailsPageErrors[1]) === null || ref32 === void 0 ? void 0 : ref32.selectedPickupPoints;
                let dropOfReturnPointsCopy1 = (ref33 = state === null || state === void 0 ? void 0 : state.reservationsTrDetailsPageErrors[1]) === null || ref33 === void 0 ? void 0 : ref33.selectedDropoffPoints;
                // console.log(value,"value");
                //*flight start
                //!transferin pickup ayarlamasi
                if (journeyType9 === 0 && pickOrDrop2 === 0 && categoryOfTheType === 1) {
                    pickUpTransferPoints = pickUpTransferPoints === null || pickUpTransferPoints === void 0 ? void 0 : pickUpTransferPoints.map((item, i)=>{
                        return i === whichSelectedItem ? {
                            ...item,
                            flightDetails: {
                                ...item === null || item === void 0 ? void 0 : item.flightDetails,
                                [nameOfInput]: value
                            }
                        } : item;
                    });
                    pickUpTransferPointsCopy1 = pickUpTransferPointsCopy1 === null || pickUpTransferPointsCopy1 === void 0 ? void 0 : pickUpTransferPointsCopy1.map((item, i)=>{
                        return i === whichSelectedItem ? {
                            ...item,
                            errorMessage: nameOfInput === "flightNumber" && value ? "" : item.errorMessage,
                            flightDetails: {
                                ...item.flightDetails,
                                [nameOfInput]: value
                            },
                            waitingTime: nameOfInput === "waitingPickupTime" ? value.toString() : "",
                            waitingError: nameOfInput === "waitingPickupTime" && value.toString().length > 0 ? "" : "required"
                        } : item;
                    });
                }
                //!transferin dropOff ayarlamasi
                //burda waiting numberi gizletdik cunki gelen jsonnan aldgmz deger 3 du
                if (journeyType9 === 0 && pickOrDrop2 === 1 && categoryOfTheType === 1) {
                    dropOfTransferPoints = dropOfTransferPoints === null || dropOfTransferPoints === void 0 ? void 0 : dropOfTransferPoints.map((item, i)=>{
                        return i === whichSelectedItem ? {
                            ...item,
                            flightDetails: {
                                ...item.flightDetails,
                                ["flightNumber"]: value
                            }
                        } : item;
                    });
                    dropOfTransferPointsCopy1 = dropOfTransferPointsCopy1 === null || dropOfTransferPointsCopy1 === void 0 ? void 0 : dropOfTransferPointsCopy1.map((item, i)=>{
                        return i === whichSelectedItem ? {
                            ...item,
                            flightDetails: {
                                ...item.flightDetails,
                                ["flightNumber"]: value
                            }
                        } : item;
                    });
                }
                //!return pick up ayarlamasi
                if (journeyType9 === 1 && pickOrDrop2 === 0 && categoryOfTheType === 1) {
                    pickUpReturnPoints = pickUpReturnPoints === null || pickUpReturnPoints === void 0 ? void 0 : pickUpReturnPoints.map((item, i)=>{
                        return i === whichSelectedItem ? {
                            ...item,
                            flightDetails: {
                                ...item.flightDetails,
                                [nameOfInput]: value
                            }
                        } : item;
                    });
                    pickUpReturnPointsCopy1 = pickUpReturnPointsCopy1 === null || pickUpReturnPointsCopy1 === void 0 ? void 0 : pickUpReturnPointsCopy1.map((item, i)=>{
                        return i === whichSelectedItem ? {
                            ...item,
                            errorMessage: nameOfInput === "flightNumber" && value ? "" : item.errorMessage,
                            flightDetails: {
                                ...item.flightDetails,
                                [nameOfInput]: value
                            },
                            waitingTime: nameOfInput === "waitingPickupTime" ? value.toString() : "",
                            waitingError: nameOfInput === "waitingPickupTime" && value.toString().length > 0 ? "" : "required"
                        } : item;
                    });
                }
                //!return drop off ayarlamasi
                if (journeyType9 === 1 && pickOrDrop2 === 1 && categoryOfTheType === 1) {
                    dropOfReturnPoints = dropOfReturnPoints === null || dropOfReturnPoints === void 0 ? void 0 : dropOfReturnPoints.map((item, i)=>{
                        return i === whichSelectedItem ? {
                            ...item,
                            flightDetails: {
                                ...item.flightDetails,
                                ["flightNumber"]: value
                            }
                        } : item;
                    });
                    dropOfReturnPointsCopy1 = dropOfReturnPointsCopy1 === null || dropOfReturnPointsCopy1 === void 0 ? void 0 : dropOfReturnPointsCopy1.map((item, i)=>{
                        return i === whichSelectedItem ? {
                            ...item,
                            flightDetails: {
                                ...item.flightDetails,
                                ["flightNumber"]: value
                            }
                        } : item;
                    });
                }
                //?flight finish
                //?start cruices /train/ RoomNumber / Place of interest //cities //universities //otthers(10)
                if (journeyType9 === 0 && pickOrDrop2 === 0 && categoryOfTheType === Id) {
                    pickUpTransferPoints = pickUpTransferPoints === null || pickUpTransferPoints === void 0 ? void 0 : pickUpTransferPoints.map((item, i)=>{
                        return i === whichSelectedItem ? {
                            ...item,
                            [nameOfInput]: value
                        } : item;
                    });
                    pickUpTransferPointsCopy1 = pickUpTransferPointsCopy1 === null || pickUpTransferPointsCopy1 === void 0 ? void 0 : pickUpTransferPointsCopy1.map((item, i)=>{
                        return i === whichSelectedItem ? {
                            ...item,
                            errorMessage: nameOfInput === "cruiseNumber" ? "" : item.errorMessage || nameOfInput === "roomNumber" ? "" : item.errorMessage,
                            [nameOfInput]: value
                        } : item;
                    });
                }
                if (journeyType9 === 0 && pickOrDrop2 === 1 && categoryOfTheType === Id) {
                    dropOfTransferPoints = dropOfTransferPoints === null || dropOfTransferPoints === void 0 ? void 0 : dropOfTransferPoints.map((item, i)=>{
                        return i === whichSelectedItem ? {
                            ...item,
                            [nameOfInput]: value
                        } : item;
                    });
                    dropOfTransferPointsCopy1 = dropOfTransferPointsCopy1 === null || dropOfTransferPointsCopy1 === void 0 ? void 0 : dropOfTransferPointsCopy1.map((item, i)=>{
                        return i === whichSelectedItem ? {
                            ...item,
                            [nameOfInput]: value
                        } : item;
                    });
                }
                if (journeyType9 === 1 && pickOrDrop2 === 0 && categoryOfTheType === Id) {
                    pickUpReturnPoints = pickUpReturnPoints === null || pickUpReturnPoints === void 0 ? void 0 : pickUpReturnPoints.map((item, i)=>{
                        return i === whichSelectedItem ? {
                            ...item,
                            [nameOfInput]: value
                        } : item;
                    });
                    pickUpReturnPointsCopy1 = pickUpReturnPointsCopy1 === null || pickUpReturnPointsCopy1 === void 0 ? void 0 : pickUpReturnPointsCopy1.map((item, i)=>{
                        return i === whichSelectedItem ? {
                            ...item,
                            errorMessage: nameOfInput === "cruiseNumber" ? "" : item.errorMessage || nameOfInput === "roomNumber" ? "" : item.errorMessage,
                            [nameOfInput]: value
                        } : item;
                    });
                }
                if (journeyType9 === 1 && pickOrDrop2 === 1 && categoryOfTheType === Id) {
                    dropOfReturnPoints = dropOfReturnPoints === null || dropOfReturnPoints === void 0 ? void 0 : dropOfReturnPoints.map((item, i)=>{
                        return i === whichSelectedItem ? {
                            ...item,
                            [nameOfInput]: value
                        } : item;
                    });
                    dropOfReturnPointsCopy1 = dropOfReturnPointsCopy1 === null || dropOfReturnPointsCopy1 === void 0 ? void 0 : dropOfReturnPointsCopy1.map((item, i)=>{
                        return i === whichSelectedItem ? {
                            ...item,
                            [nameOfInput]: value
                        } : item;
                    });
                }
                //****
                //*postCodeStart
                if (journeyType9 === 0 && pickOrDrop2 === 0 && categoryOfTheType === 5) {
                    pickUpTransferPoints = pickUpTransferPoints === null || pickUpTransferPoints === void 0 ? void 0 : pickUpTransferPoints.map((item, i)=>{
                        return i === whichSelectedItem ? {
                            ...item,
                            postCodeDetails: {
                                ...item.postCodeDetails,
                                id: value,
                                postCodeAddress: nameOfInput
                            }
                        } : item;
                    });
                    pickUpTransferPointsCopy1 = pickUpTransferPointsCopy1 === null || pickUpTransferPointsCopy1 === void 0 ? void 0 : pickUpTransferPointsCopy1.map((item, i)=>{
                        return i === whichSelectedItem ? {
                            ...item,
                            errorMessage: nameOfInput ? "" : item.errorMessage,
                            postCodeDetails: {
                                ...item.postCodeDetails,
                                id: value,
                                postCodeAddress: nameOfInput
                            }
                        } : item;
                    });
                }
                if (journeyType9 === 0 && pickOrDrop2 === 1 && categoryOfTheType === 5) {
                    dropOfTransferPoints = dropOfTransferPoints === null || dropOfTransferPoints === void 0 ? void 0 : dropOfTransferPoints.map((item, i)=>{
                        return i === whichSelectedItem ? {
                            ...item,
                            postCodeDetails: {
                                ...item.postCodeDetails,
                                id: value,
                                postCodeAddress: nameOfInput
                            }
                        } : item;
                    });
                    dropOfTransferPointsCopy1 = dropOfTransferPointsCopy1 === null || dropOfTransferPointsCopy1 === void 0 ? void 0 : dropOfTransferPointsCopy1.map((item, i)=>{
                        return i === whichSelectedItem ? {
                            ...item,
                            errorMessage: nameOfInput ? "" : item.errorMessage,
                            postCodeDetails: {
                                ...item.postCodeDetails,
                                id: value,
                                postCodeAddress: nameOfInput
                            }
                        } : item;
                    });
                }
                if (journeyType9 === 1 && pickOrDrop2 === 0 && categoryOfTheType === 5) {
                    pickUpReturnPoints = pickUpReturnPoints === null || pickUpReturnPoints === void 0 ? void 0 : pickUpReturnPoints.map((item, i)=>{
                        return i === whichSelectedItem ? {
                            ...item,
                            postCodeDetails: {
                                ...item.postCodeDetails,
                                id: value,
                                postCodeAddress: nameOfInput
                            }
                        } : item;
                    });
                    pickUpReturnPointsCopy1 = pickUpReturnPointsCopy1 === null || pickUpReturnPointsCopy1 === void 0 ? void 0 : pickUpReturnPointsCopy1.map((item, i)=>{
                        return i === whichSelectedItem ? {
                            ...item,
                            errorMessage: nameOfInput ? "" : item.errorMessage,
                            postCodeDetails: {
                                ...item.postCodeDetails,
                                id: value,
                                postCodeAddress: nameOfInput
                            }
                        } : item;
                    });
                }
                if (journeyType9 === 1 && pickOrDrop2 === 1 && categoryOfTheType === 5) {
                    dropOfReturnPoints = dropOfReturnPoints === null || dropOfReturnPoints === void 0 ? void 0 : dropOfReturnPoints.map((item, i)=>{
                        return i === whichSelectedItem ? {
                            ...item,
                            postCodeDetails: {
                                ...item.postCodeDetails,
                                id: value,
                                postCodeAddress: nameOfInput
                            }
                        } : item;
                    });
                    dropOfReturnPointsCopy1 = dropOfReturnPointsCopy1 === null || dropOfReturnPointsCopy1 === void 0 ? void 0 : dropOfReturnPointsCopy1.map((item, i)=>{
                        return i === whichSelectedItem ? {
                            ...item,
                            errorMessage: nameOfInput ? "" : item.errorMessage,
                            postCodeDetails: {
                                ...item.postCodeDetails,
                                id: value,
                                postCodeAddress: nameOfInput
                            }
                        } : item;
                    });
                }
                //?fpostCOde finish
                return {
                    ...state,
                    reservations: [
                        {
                            ...state.reservations[0],
                            selectedPickupPoints: pickUpTransferPoints,
                            selectedDropoffPoints: dropOfTransferPoints
                        },
                        {
                            ...state.reservations[1],
                            selectedPickupPoints: pickUpReturnPoints,
                            selectedDropoffPoints: dropOfReturnPoints
                        }, 
                    ],
                    reservationsTrDetailsPageErrors: [
                        {
                            ...state.reservationsTrDetailsPageErrors[0],
                            selectedPickupPoints: pickUpTransferPointsCopy1,
                            selectedDropoffPoints: dropOfTransferPointsCopy1
                        },
                        {
                            ...state.reservationsTrDetailsPageErrors[1],
                            selectedPickupPoints: pickUpReturnPointsCopy1,
                            selectedDropoffPoints: dropOfReturnPointsCopy1
                        }, 
                    ]
                };
            }
        //BURDA flight postcodes ve diger point type categorilere error atayrg
        case pickUpDropTypes/* SET_ERROR_IN_TRANSFER_DETAILS_PAGE */.xx:
            {
                var ref34, ref35;
                const { erMessage , jourrneyType , categoryOfError , whichSelectedItem: whichSelectedItem1  } = action.payload;
                let pickUpTransferPoints1 = (ref34 = state.reservationsTrDetailsPageErrors[0]) === null || ref34 === void 0 ? void 0 : ref34.selectedPickupPoints;
                let dropOfTransferPoints1 = (ref35 = state.reservationsTrDetailsPageErrors[0]) === null || ref35 === void 0 ? void 0 : ref35.selectedDropoffPoints;
                //transferPickUp
                if (jourrneyType === "transfer" && categoryOfError === "flightCategory") {
                    pickUpTransferPoints1 = pickUpTransferPoints1 === null || pickUpTransferPoints1 === void 0 ? void 0 : pickUpTransferPoints1.map((item, i)=>{
                        return i === whichSelectedItem1 && item.pcatId === 1 ? {
                            ...item,
                            errorMessage: erMessage,
                            flightDetails: {
                                ...item.flightDetails,
                                errorMessage: erMessage
                            }
                        } : item;
                    });
                }
                //transferPickUp
                if (jourrneyType === "transfer" && categoryOfError === "flightCategory_Waiting") {
                    pickUpTransferPoints1 = pickUpTransferPoints1 === null || pickUpTransferPoints1 === void 0 ? void 0 : pickUpTransferPoints1.map((item, i)=>{
                        return i === whichSelectedItem1 && item.pcatId === 1 ? {
                            ...item,
                            waitingError: erMessage ? erMessage : ""
                        } : item;
                    });
                }
                //!cruise start
                if (jourrneyType === "transfer" && categoryOfError === "cruise") {
                    pickUpTransferPoints1 = pickUpTransferPoints1 === null || pickUpTransferPoints1 === void 0 ? void 0 : pickUpTransferPoints1.map((item, i)=>{
                        return i === whichSelectedItem1 && item.pcatId === 2 ? {
                            ...item,
                            errorMessage: erMessage
                        } : item;
                    });
                }
                //!cruise finish
                //!roomStart
                if (jourrneyType === "transfer" && categoryOfError === "roomNumber") {
                    pickUpTransferPoints1 = pickUpTransferPoints1 === null || pickUpTransferPoints1 === void 0 ? void 0 : pickUpTransferPoints1.map((item, i)=>{
                        return i === whichSelectedItem1 && item.pcatId === 4 ? {
                            ...item,
                            errorMessage: erMessage
                        } : item;
                    });
                }
                //!roomFinish
                //*post statr
                if (jourrneyType === "transfer" && categoryOfError === "postCategory") {
                    pickUpTransferPoints1 = pickUpTransferPoints1 === null || pickUpTransferPoints1 === void 0 ? void 0 : pickUpTransferPoints1.map((item, i)=>{
                        return i === whichSelectedItem1 && item.pcatId === 5 ? {
                            ...item,
                            errorMessage: erMessage
                        } : item;
                    });
                }
                if (jourrneyType === "transfertwo" && categoryOfError === "postCategory") {
                    dropOfTransferPoints1 = dropOfTransferPoints1 === null || dropOfTransferPoints1 === void 0 ? void 0 : dropOfTransferPoints1.map((item, i)=>{
                        return i === whichSelectedItem1 && item.pcatId === 5 ? {
                            ...item,
                            errorMessage: erMessage
                        } : item;
                    });
                }
                //*post finish
                return {
                    ...state,
                    reservationsTrDetailsPageErrors: [
                        {
                            ...state.reservationsTrDetailsPageErrors[0],
                            selectedPickupPoints: pickUpTransferPoints1,
                            selectedDropoffPoints: dropOfTransferPoints1
                        },
                        {
                            ...state.reservationsTrDetailsPageErrors[1]
                        }, 
                    ]
                };
            }
        case pickUpDropTypes/* SET_ERROR_IN_RETURN_DETAILS_PAGE */.Ke:
            {
                var ref36, ref37;
                const { erMessage: erMessage1 , jourrneyType: jourrneyType1 , categoryOfError: categoryOfError1 , whichSelectedItem: whichSelectedItem2  } = action.payload;
                let pickUpReturnPoints1 = (ref36 = state.reservationsTrDetailsPageErrors[1]) === null || ref36 === void 0 ? void 0 : ref36.selectedPickupPoints;
                let dropOfReturnPoints1 = (ref37 = state.reservationsTrDetailsPageErrors[1]) === null || ref37 === void 0 ? void 0 : ref37.selectedDropoffPoints;
                //return pickuppoints
                if (jourrneyType1 === "return" && categoryOfError1 === "flightCategory") {
                    pickUpReturnPoints1 = pickUpReturnPoints1 === null || pickUpReturnPoints1 === void 0 ? void 0 : pickUpReturnPoints1.map((item, i)=>{
                        return i === whichSelectedItem2 && item.pcatId === 1 ? {
                            ...item,
                            errorMessage: erMessage1,
                            flightDetails: {
                                ...item.flightDetails,
                                errorMessage: erMessage1
                            }
                        } : item;
                    });
                }
                if (jourrneyType1 === "return" && categoryOfError1 === "flightCategory_Waiting") {
                    pickUpReturnPoints1 = pickUpReturnPoints1 === null || pickUpReturnPoints1 === void 0 ? void 0 : pickUpReturnPoints1.map((item, i)=>{
                        return i === whichSelectedItem2 && item.pcatId === 1 ? {
                            ...item,
                            waitingError: erMessage1 ? erMessage1 : ""
                        } : item;
                    });
                }
                //!cruise start
                if (jourrneyType1 === "return" && categoryOfError1 === "cruise") {
                    pickUpReturnPoints1 = pickUpReturnPoints1 === null || pickUpReturnPoints1 === void 0 ? void 0 : pickUpReturnPoints1.map((item, i)=>{
                        return i === whichSelectedItem2 && item.pcatId === 2 ? {
                            ...item,
                            errorMessage: erMessage1
                        } : item;
                    });
                }
                if (jourrneyType1 === "return" && categoryOfError1 === "roomNumber") {
                    pickUpReturnPoints1 = pickUpReturnPoints1 === null || pickUpReturnPoints1 === void 0 ? void 0 : pickUpReturnPoints1.map((item, i)=>{
                        return i === whichSelectedItem2 && item.pcatId === 4 ? {
                            ...item,
                            errorMessage: erMessage1
                        } : item;
                    });
                }
                //!cruise finish
                //!post start
                if (jourrneyType1 === "return" && categoryOfError1 === "postCategory") {
                    pickUpReturnPoints1 = pickUpReturnPoints1 === null || pickUpReturnPoints1 === void 0 ? void 0 : pickUpReturnPoints1.map((item, i)=>{
                        return i === whichSelectedItem2 && item.pcatId === 5 ? {
                            ...item,
                            errorMessage: erMessage1
                        } : item;
                    });
                }
                if (jourrneyType1 === "returntwo" && categoryOfError1 === "postCategory") {
                    dropOfReturnPoints1 = dropOfReturnPoints1 === null || dropOfReturnPoints1 === void 0 ? void 0 : dropOfReturnPoints1.map((item, i)=>{
                        return i === whichSelectedItem2 && item.pcatId === 5 ? {
                            ...item,
                            errorMessage: erMessage1
                        } : item;
                    });
                }
                //!post finish
                return {
                    ...state,
                    reservationsTrDetailsPageErrors: [
                        {
                            ...state.reservationsTrDetailsPageErrors[0]
                        },
                        {
                            ...state.reservationsTrDetailsPageErrors[1],
                            selectedPickupPoints: pickUpReturnPoints1,
                            selectedDropoffPoints: dropOfReturnPoints1
                        }, 
                    ]
                };
            }
        //!finishhh
        //
        //?updating passenger  details page values   and giving error for them
        case pickUpDropTypes/* UPDATE_PASSENGER_DETAILS_FOR_BOTH_JOURNEY */.TP:
            {
                var ref38, ref39, ref40, ref41;
                const { value: value1 , nameofInput , journeyType: journeyType10 , selectAndRequest  } = action.payload;
                const passTrDetails1 = (ref38 = state.reservations[0]) === null || ref38 === void 0 ? void 0 : ref38.passengerDetails;
                const passReturnDetails1 = (ref39 = state.reservations[1]) === null || ref39 === void 0 ? void 0 : ref39.passengerDetails;
                const checked1 = state.checked;
                let newValue = null;
                let returnValue = null;
                if (journeyType10 === 0 && nameofInput !== "passengersNumber" && nameofInput !== "specialRequests") {
                    newValue = {
                        ...passTrDetails1,
                        [nameofInput]: value1
                    };
                    if (checked1) {
                        returnValue = {
                            ...passTrDetails1,
                            [nameofInput]: value1
                        };
                    }
                }
                if (journeyType10 === 1 && nameofInput !== "passengersNumber" && nameofInput !== "specialRequests") {
                    returnValue = {
                        ...passReturnDetails1,
                        [nameofInput]: value1
                    };
                }
                //*
                //*
                //burda pax ve requwest ucun degerleri stora yazrg
                const paxTr = (ref40 = state.reservations[0]) === null || ref40 === void 0 ? void 0 : ref40.transferDetails;
                const paxReturn = (ref41 = state.reservations[1]) === null || ref41 === void 0 ? void 0 : ref41.transferDetails;
                //PASSENGERNUMBERS
                let newPaxValueForTr = null;
                let newPaxReturnValue = null;
                if (journeyType10 === 0 && selectAndRequest && nameofInput === "passengersNumber") {
                    newPaxValueForTr = {
                        ...paxTr,
                        passengersNumber: value1
                    };
                    //burda ise transferde degisen passenger numberi return icine atyrq eger checked ise
                    if (checked1) {
                        newPaxReturnValue = {
                            ...paxReturn,
                            passengersNumber: value1
                        };
                    }
                }
                if (journeyType10 === 0 && selectAndRequest && nameofInput === "specialRequests") {
                    newPaxValueForTr = {
                        ...paxTr,
                        specialRequests: value1
                    };
                }
                if (journeyType10 === 1 && selectAndRequest && nameofInput === "passengersNumber" && !checked1) {
                    newPaxReturnValue = {
                        ...paxReturn,
                        passengersNumber: value1
                    };
                }
                if (journeyType10 === 1 && selectAndRequest && nameofInput === "specialRequests") {
                    newPaxReturnValue = {
                        ...paxReturn,
                        specialRequests: value1
                    };
                }
                return {
                    ...state,
                    reservations: [
                        {
                            ...state.reservations[0],
                            passengerDetails: newValue ? newValue : passTrDetails1,
                            transferDetails: newPaxValueForTr ? newPaxValueForTr : paxTr
                        },
                        {
                            ...state.reservations[1],
                            passengerDetails: returnValue ? returnValue : passReturnDetails1,
                            transferDetails: newPaxReturnValue ? newPaxReturnValue : paxReturn
                        }, 
                    ]
                };
            }
        case pickUpDropTypes/* SET_ERROR_FOR_PASSENGER_DETAILS */.qN:
            {
                const { erMessage: erMessage2 , journeyType: journeyType11  } = action.payload;
                let trFull = state.passenegerDetailsErrors[0].fullnameError;
                let trEmail = state.passenegerDetailsErrors[0].emailError;
                let trPhone = state.passenegerDetailsErrors[0].pgoneError;
                let returnFull = state.passenegerDetailsErrors[1].fullnameError;
                let returnEmail = state.passenegerDetailsErrors[1].emailError;
                let returnPhone = state.passenegerDetailsErrors[1].pgoneError;
                if (journeyType11 === 0) {
                    trFull = erMessage2;
                    trEmail = erMessage2;
                    trPhone = erMessage2;
                }
                if (journeyType11 === 1) {
                    returnFull = erMessage2;
                    returnEmail = erMessage2;
                    returnPhone = erMessage2;
                }
                return {
                    ...state,
                    passenegerDetailsErrors: [
                        {
                            ...state.passenegerDetailsErrors[0],
                            fullnameError: trFull,
                            emailError: trEmail,
                            pgoneError: trPhone
                        },
                        {
                            ...state.passenegerDetailsErrors[1],
                            fullnameError: returnFull,
                            emailError: returnEmail,
                            pgoneError: returnPhone
                        }, 
                    ]
                };
            }
        //!finishhh
        case pickUpDropTypes/* SET_ERROR_FOR_TRANSFER_DETAILS_PAGE */.Ci:
            {
                return {
                    ...state,
                    trDetailsPageError: true
                };
            }
        case pickUpDropTypes/* SET_POST_CODE_ADRESSES */.II:
            {
                var ref42;
                let newpostcodeAdress = state.postCodeAdresses;
                if (((ref42 = action.payload) === null || ref42 === void 0 ? void 0 : ref42.length) > 0) {
                    newpostcodeAdress.push(...action.payload);
                } else {
                    newpostcodeAdress.push(action.payload);
                }
                return {
                    ...state,
                    postCodeAdresses: newpostcodeAdress
                };
            }
        case pickUpDropTypes/* SET_PAYMENT */.UE:
            {
                var ref43, ref44, ref45, ref46;
                const journeyType12 = state.params.journeyType;
                // console.log("SET_PAYMENT reducer");
                /*
 paymentType:
                action?.payload?.paymentType !== 1
                  ? action?.payload?.paymentType.toString()
                  :
                  action?.payload?.paymentType,
*/ return {
                    ...state,
                    reservations: [
                        {
                            ...state.reservations[0],
                            paymentDetails: {
                                ...state.reservations[0].paymentDetails,
                                token: action === null || action === void 0 ? void 0 : action.payload.token,
                                paymentType: action === null || action === void 0 ? void 0 : (ref43 = action.payload) === null || ref43 === void 0 ? void 0 : ref43.paymentType
                            }
                        },
                        {
                            ...state === null || state === void 0 ? void 0 : state.reservations[1],
                            paymentDetails: {
                                ...(ref44 = state.reservations[1]) === null || ref44 === void 0 ? void 0 : ref44.paymentDetails,
                                token: action === null || action === void 0 ? void 0 : (ref45 = action.payload) === null || ref45 === void 0 ? void 0 : ref45.token,
                                paymentType: action === null || action === void 0 ? void 0 : (ref46 = action.payload) === null || ref46 === void 0 ? void 0 : ref46.paymentType
                            }
                        }, 
                    ]
                };
            }
        //?Editings and savings
        case pickUpDropTypes/* GET_DATAS_FOR_EDITING */.qf:
            {
                var ref47, ref48, ref49, ref50, ref51, ref52, ref53, ref54, ref55, ref56, ref57, ref58, ref59, ref60, ref61, ref62, ref63, ref64, ref65, ref66, ref67, ref68, ref69, ref70, ref71, ref72, ref73, ref74, ref75, ref76, ref77, ref78, ref79, ref80;
                let newData = [
                    {
                        reservationDetails: {
                            accountId: (ref47 = action === null || action === void 0 ? void 0 : action.payload[0]) === null || ref47 === void 0 ? void 0 : (ref48 = ref47.reservationDetails) === null || ref48 === void 0 ? void 0 : ref48.accountId,
                            channelId: 225
                        },
                        selectedPickupPoints: [
                            ...(ref49 = action === null || action === void 0 ? void 0 : action.payload[0]) === null || ref49 === void 0 ? void 0 : ref49.selectedPickupPoints
                        ],
                        selectedDropoffPoints: [
                            ...(ref50 = action === null || action === void 0 ? void 0 : action.payload[0]) === null || ref50 === void 0 ? void 0 : ref50.selectedDropoffPoints
                        ],
                        quotation: {
                            token: (ref51 = action === null || action === void 0 ? void 0 : action.payload[0]) === null || ref51 === void 0 ? void 0 : ref51.quotation.token,
                            price: (ref52 = action === null || action === void 0 ? void 0 : action.payload[0]) === null || ref52 === void 0 ? void 0 : (ref53 = ref52.quotation) === null || ref53 === void 0 ? void 0 : ref53.price,
                            carId: (ref54 = action === null || action === void 0 ? void 0 : action.payload[0]) === null || ref54 === void 0 ? void 0 : (ref55 = ref54.quotation) === null || ref55 === void 0 ? void 0 : ref55.carId
                        },
                        transferDetails: {
                            // transferDateTime:
                            //   action?.payload[0]?.transferDetails?.transferDateTime,
                            transferDateTimeString: new Date((ref56 = action === null || action === void 0 ? void 0 : action.payload[0]) === null || ref56 === void 0 ? void 0 : (ref57 = ref56.transferDetails) === null || ref57 === void 0 ? void 0 : ref57.transferDateTime).toISOString().slice(0, 16).replace("T", " "),
                            pickupCategoryId: (ref58 = action === null || action === void 0 ? void 0 : action.payload[0]) === null || ref58 === void 0 ? void 0 : (ref59 = ref58.transferDetails) === null || ref59 === void 0 ? void 0 : ref59.pickupCategoryId,
                            passengersNumber: (ref60 = action === null || action === void 0 ? void 0 : action.payload[0]) === null || ref60 === void 0 ? void 0 : (ref61 = ref60.transferDetails) === null || ref61 === void 0 ? void 0 : ref61.passengersNumber,
                            passengerSuitcase: (ref62 = action === null || action === void 0 ? void 0 : action.payload[0]) === null || ref62 === void 0 ? void 0 : (ref63 = ref62.transferDetails) === null || ref63 === void 0 ? void 0 : ref63.passengerSuitcase,
                            specialRequests: (ref64 = action === null || action === void 0 ? void 0 : action.payload[0]) === null || ref64 === void 0 ? void 0 : (ref65 = ref64.transferDetails) === null || ref65 === void 0 ? void 0 : ref65.specialRequests
                        },
                        passengerDetails: {
                            ...(ref66 = action.payload[0]) === null || ref66 === void 0 ? void 0 : ref66.passengerDetails,
                            language: (ref67 = action.payload[0]) === null || ref67 === void 0 ? void 0 : (ref68 = ref67.passengerDetails) === null || ref68 === void 0 ? void 0 : ref68.language
                        },
                        paymentDetails: {
                            token: (ref69 = action.payload[0]) === null || ref69 === void 0 ? void 0 : (ref70 = ref69.paymentDetails) === null || ref70 === void 0 ? void 0 : ref70.token,
                            paymentType: (ref71 = action.payload[0]) === null || ref71 === void 0 ? void 0 : (ref72 = ref71.paymentDetails) === null || ref72 === void 0 ? void 0 : ref72.paymentType,
                            account: (ref73 = action.payload[0]) === null || ref73 === void 0 ? void 0 : (ref74 = ref73.paymentDetails) === null || ref74 === void 0 ? void 0 : ref74.account,
                            price: action.payload[0].paymentDetails.price
                        }
                    }, 
                ];
                // console.log(newData);
                return {
                    ...state,
                    reservations: newData,
                    reservationsTrDetailsPageErrors: [
                        {
                            selectedPickupPoints: [
                                ...(ref75 = action.payload[0]) === null || ref75 === void 0 ? void 0 : ref75.selectedPickupPoints
                            ],
                            selectedDropoffPoints: [
                                ...(ref76 = action.payload[0]) === null || ref76 === void 0 ? void 0 : ref76.selectedDropoffPoints, 
                            ]
                        }, 
                    ],
                    reservationsTrDetailsPageErrors: [
                        {
                            ...state.reservationsTrDetailsPageErrors[0],
                            selectedPickupPoints: (ref78 = [
                                ...(ref77 = action.payload[0]) === null || ref77 === void 0 ? void 0 : ref77.selectedPickupPoints, 
                            ]) === null || ref78 === void 0 ? void 0 : ref78.map((item)=>{
                                var ref, ref1;
                                // console.log(item?.flightDetails?.flightNumber?.length);
                                return (item === null || item === void 0 ? void 0 : item.pcatId) === 1 && item.flightDetails.flightNumber.length === 0 || (item.pcatId === 2 && item.cruiseNumber).length === 0 || item.pcatId === 5 && ((ref = item.postCodeDetails) === null || ref === void 0 ? void 0 : (ref1 = ref.postCodeAddress) === null || ref1 === void 0 ? void 0 : ref1.length) === 0 ? {
                                    ...item,
                                    errorMessage: "required"
                                } : {
                                    ...item,
                                    errorMessage: ""
                                };
                            }),
                            selectedDropoffPoints: (ref80 = [
                                ...(ref79 = action.payload[0]) === null || ref79 === void 0 ? void 0 : ref79.selectedDropoffPoints, 
                            ]) === null || ref80 === void 0 ? void 0 : ref80.map((item)=>{
                                var ref, ref1;
                                return item.pcatId === 5 && ((ref = item.postCodeDetails) === null || ref === void 0 ? void 0 : (ref1 = ref.postCodeAddress) === null || ref1 === void 0 ? void 0 : ref1.length) === 0 ? {
                                    ...item,
                                    errorMessage: "required"
                                } : {
                                    ...item,
                                    errorMessage: ""
                                };
                            })
                        }, 
                    ],
                    checked: false,
                    initalInputsStatesForAddingExtraItems: [
                        {
                            showAddExtraTextPickUp: true,
                            inputAfterAddingPickUp: false,
                            showAddExtraTextDropOff: true,
                            inputAfterAddingDropOff: false
                        },
                        {
                            showAddExtraTextPickUp: true,
                            inputAfterAddingPickUp: false,
                            showAddExtraTextDropOff: true,
                            inputAfterAddingDropOff: false
                        }, 
                    ],
                    allDatasHandled: true
                };
            }
        // ?passenger values
        case pickUpDropTypes/* EDIT_SAVE_TRANSFER_PASSENGER_VALUES */.KR:
            {
                var ref81, ref82;
                const { phone , email , passengersNumber , firstname  } = action.payload;
                return {
                    ...state,
                    reservations: [
                        {
                            ...state.reservations[0],
                            passengerDetails: {
                                ...(ref81 = state.reservations[0]) === null || ref81 === void 0 ? void 0 : ref81.passengerDetails,
                                firstname,
                                email,
                                phone
                            },
                            transferDetails: {
                                ...(ref82 = state.reservations[0]) === null || ref82 === void 0 ? void 0 : ref82.transferDetails,
                                passengersNumber
                            }
                        }, 
                    ]
                };
            }
        // ?passenger values
        case pickUpDropTypes/* EDIT_SAVE_SPECIAL_REQUESTS_TR */.L5:
            {
                var ref83;
                return {
                    ...state,
                    reservations: [
                        {
                            ...state.reservations[0],
                            transferDetails: {
                                ...state.reservations[0].transferDetails,
                                specialRequests: (ref83 = action.payload) === null || ref83 === void 0 ? void 0 : ref83.specialRequests
                            }
                        }, 
                    ]
                };
            }
        //*textArer
        //*textArerFinis
        // *ucuslar postcodlar
        case pickUpDropTypes/* CANCEL__TRANSFER_JOURNEY_EDITING */.Ef:
            {
                var ref84, ref85, ref86, ref87, ref88, ref89, ref90, ref91, ref92, ref93, ref94, ref95, ref96, ref97, ref98, ref99, ref100, ref101, ref102, ref103, ref104, ref105, ref106, ref107, ref108, ref109;
                //  let newData = [
                //    {
                //      selectedPickupPoints: [
                //        ...action?.payload[0]?.selectedPickupPoints,
                //      ],
                //      selectedDropoffPoints: [
                //        ...action?.payload[0]?.selectedDropoffPoints,
                //      ],
                //      quotation: {
                //        token: "",
                //        price: action?.payload[0]?.quotation?.price,
                //        carId: action?.payload[0]?.quotation?.carId,
                //      },
                //      transferDetails: {
                //        transferDateTime:
                //          action?.payload[0]?.transferDetails?.transferDateTime,
                //        transferDateTimeString: new Date(
                //          action?.payload[0]?.transferDetails?.transferDateTime
                //        )
                //          .toISOString()
                //          .slice(0, 16)
                //          .replace("T", " "),
                //        pickupCategoryId:
                //          action?.payload[0]?.transferDetails?.pickupCategoryId,
                //         //  *cunki passnegers numbers daha onceden save olunmus olacag
                //        passengersNumber:
                //          state?.reservations[0]?.transferDetails?.passengersNumber,
                //        passengerSuitcase:
                //          action?.payload[0]?.transferDetails?.passengerSuitcase,
                //        specialRequests:
                //          action?.payload[0]?.transferDetails?.specialRequests,
                //      },
                //      passengerDetails: {
                //        ...state.reservations[0]?.passengerDetails,
                //        language: action.payload[0]?.passengerDetails?.language,
                //      },
                //      paymentDetails: {
                //        token: "",
                //        paymentType: action.payload[0]?.paymentDetails?.paymentType,
                //      },
                //    },
                //  ];
                let reservations = [];
                let reservationsTrDetailsPageErrors = [];
                // console.log(
                //   action?.payload?.quotation?.price,
                //   "action?.payload?.quotation?.price"
                // );
                reservations = [
                    {
                        ...state.reservations[0],
                        selectedPickupPoints: [
                            ...action === null || action === void 0 ? void 0 : (ref84 = action.payload) === null || ref84 === void 0 ? void 0 : ref84.selectedPickupPoints
                        ],
                        selectedDropoffPoints: [
                            ...action === null || action === void 0 ? void 0 : (ref85 = action.payload) === null || ref85 === void 0 ? void 0 : ref85.selectedDropoffPoints
                        ],
                        quotation: {
                            token: "",
                            price: action === null || action === void 0 ? void 0 : (ref86 = action.payload) === null || ref86 === void 0 ? void 0 : (ref87 = ref86.quotation) === null || ref87 === void 0 ? void 0 : ref87.price,
                            carId: action === null || action === void 0 ? void 0 : (ref88 = action.payload) === null || ref88 === void 0 ? void 0 : (ref89 = ref88.quotation) === null || ref89 === void 0 ? void 0 : ref89.carId
                        },
                        transferDetails: {
                            transferDateTime: action === null || action === void 0 ? void 0 : (ref90 = action.payload) === null || ref90 === void 0 ? void 0 : (ref91 = ref90.transferDetails) === null || ref91 === void 0 ? void 0 : ref91.transferDateTime,
                            transferDateTimeString: new Date(action === null || action === void 0 ? void 0 : (ref92 = action.payload) === null || ref92 === void 0 ? void 0 : (ref93 = ref92.transferDetails) === null || ref93 === void 0 ? void 0 : ref93.transferDateTime).toISOString().slice(0, 16).replace("T", " "),
                            pickupCategoryId: action === null || action === void 0 ? void 0 : (ref94 = action.payload) === null || ref94 === void 0 ? void 0 : (ref95 = ref94.transferDetails) === null || ref95 === void 0 ? void 0 : ref95.pickupCategoryId,
                            //  *cunki passnegers numbers daha onceden save olunmus olacag
                            passengersNumber: (ref96 = state === null || state === void 0 ? void 0 : state.reservations[0]) === null || ref96 === void 0 ? void 0 : (ref97 = ref96.transferDetails) === null || ref97 === void 0 ? void 0 : ref97.passengersNumber,
                            passengerSuitcase: action === null || action === void 0 ? void 0 : (ref98 = action.payload) === null || ref98 === void 0 ? void 0 : (ref99 = ref98.transferDetails) === null || ref99 === void 0 ? void 0 : ref99.passengerSuitcase,
                            specialRequests: (ref100 = state === null || state === void 0 ? void 0 : state.reservations[0]) === null || ref100 === void 0 ? void 0 : ref100.transferDetails.specialRequests
                        },
                        passengerDetails: {
                            ...(ref101 = state.reservations[0]) === null || ref101 === void 0 ? void 0 : ref101.passengerDetails,
                            language: (ref102 = action.payload) === null || ref102 === void 0 ? void 0 : (ref103 = ref102.passengerDetails) === null || ref103 === void 0 ? void 0 : ref103.language
                        },
                        paymentDetails: {
                            token: (ref104 = action.payload) === null || ref104 === void 0 ? void 0 : (ref105 = ref104.paymentDetails) === null || ref105 === void 0 ? void 0 : ref105.token,
                            account: (ref106 = action.payload) === null || ref106 === void 0 ? void 0 : (ref107 = ref106.paymentDetails) === null || ref107 === void 0 ? void 0 : ref107.account,
                            paymentType: (ref108 = action.payload) === null || ref108 === void 0 ? void 0 : (ref109 = ref108.paymentDetails) === null || ref109 === void 0 ? void 0 : ref109.paymentType
                        }
                    }, 
                ];
                reservationsTrDetailsPageErrors = [
                    {
                        selectedPickupPoints: [
                            ...action.payload.selectedPickupPoints
                        ],
                        selectedDropoffPoints: [
                            ...action.payload.selectedDropoffPoints
                        ]
                    }, 
                ];
                return {
                    ...state,
                    reservations: reservations,
                    reservationsTrDetailsPageErrors: reservationsTrDetailsPageErrors
                };
            }
        // *ucuslar postcodlar
        //!finishhh
        case pickUpDropTypes/* SET_MODAL_INFO */.lk:
            {
                return {
                    ...state,
                    modalInfo: action.payload
                };
            }
        case pickUpDropTypes/* GET_MEET_POINT */.DR:
            {
                return {
                    ...state,
                    meetPoint: action.payload
                };
            }
        case pickUpDropTypes/* GET_VALUES_FROM_ARTICLES */.fI:
            {
                const { preSelectedPickupPoint , preSelectedDropoffPoint , dateTime  } = action.payload;
                return {
                    ...state,
                    reservations: [
                        {
                            ...state.reservations[0],
                            selectedPickupPoints: [
                                ...preSelectedPickupPoint
                            ],
                            selectedDropoffPoints: [
                                ...preSelectedDropoffPoint
                            ],
                            transferDetails: {
                                ...state.reservations[0].transferDetails,
                                transferDateTimeString: dateTime
                            }
                        },
                        {
                            ...state.reservations[1]
                        }, 
                    ],
                    reservationsTrDetailsPageErrors: [
                        {
                            ...state.reservationsTrDetailsPageErrors[0],
                            selectedPickupPoints: [
                                ...preSelectedPickupPoint
                            ],
                            selectedDropoffPoints: [
                                ...preSelectedDropoffPoint
                            ]
                        },
                        {
                            ...state.reservationsTrDetailsPageErrors[1],
                            selectedPickupPoints: [],
                            // collected dropoff point(s) from /api/v1/suggestion API End Point
                            selectedDropoffPoints: []
                        }, 
                    ]
                };
            }
        //BUNU KULLANMADIK
        case pickUpDropTypes/* RESET_RESERVATION */.Co:
            {
                return {
                    ...state,
                    reservations: [
                        {
                            reservationDetails: {
                                channelId: 5,
                                accountId: 225
                            },
                            selectedPickupPoints: [],
                            selectedDropoffPoints: [],
                            quotation: {},
                            transferDetails: {
                                // transferDateTime: getDateTimeFromFormat(
                                // dateTimeStringFunc(),
                                // "yyyy-mm-dd HH:MM",
                                // "Europe/London"
                                // ),
                                transferDateTimeString: (0,getDate/* dateTimeStringFunc */.Hp)(),
                                pickupCategoryId: "",
                                passengersNumber: 1,
                                passengerSuitcase: 1,
                                specialRequests: ""
                            },
                            passengerDetails: {
                                token: "",
                                lastname: "",
                                language: "en",
                                firstname: "",
                                email: "",
                                phone: ""
                            },
                            paymentDetails: {
                                token: "",
                                paymentType: "",
                                account: 225
                            }
                        },
                        {
                            reservationDetails: {
                                channelId: 5,
                                accountId: 225
                            },
                            selectedPickupPoints: [],
                            selectedDropoffPoints: [],
                            quotation: {},
                            transferDetails: {
                                // transferDateTime: getDateTimeFromFormat(
                                // dateTimeStringFuncForReturn(),
                                // "yyyy-mm-dd HH:MM",
                                // "Europe/London"
                                // ),
                                transferDateTimeString: (0,getDate/* dateTimeStringFuncForReturn */.o$)(),
                                pickupCategoryId: "",
                                passengersNumber: 1,
                                passengerSuitcase: 1,
                                specialRequests: ""
                            },
                            passengerDetails: {
                                token: "",
                                lastname: "",
                                language: "en",
                                firstname: "",
                                email: "",
                                phone: ""
                            },
                            paymentDetails: {
                                token: "",
                                paymentType: "",
                                account: 225
                            }
                        }, 
                    ],
                    reservationsTrDetailsPageErrors: [
                        {
                            ...state.reservationsTrDetailsPageErrors[0],
                            selectedPickupPoints: [],
                            selectedDropoffPoints: []
                        },
                        {
                            ...state.reservationsTrDetailsPageErrors[1],
                            selectedPickupPoints: [],
                            // collected dropoff point(s) from /api/v1/suggestion API End Point
                            selectedDropoffPoints: []
                        }, 
                    ]
                };
            }
        case pickUpDropTypes/* SET_INITIAL_MANAGE_BOOKING_PRICE_FOR_QUOTATION_DIFFERENCE */.ez:
            {
                return {
                    ...state,
                    reservations: [
                        {
                            ...state === null || state === void 0 ? void 0 : state.reservations[0],
                            quotation: {
                                ...state === null || state === void 0 ? void 0 : state.reservations[0].quotation,
                                price: String(action.payload)
                            }
                        },
                        {
                            ...state === null || state === void 0 ? void 0 : state.reservations[1]
                        }, 
                    ]
                };
            }
        case pickUpDropTypes/* SET_INITIAL_PRICE_IF_CANCELED */.Tk:
            {
                // console.log(action.payload, "reducer");
                return {
                    ...state,
                    reservations: [
                        {
                            ...state === null || state === void 0 ? void 0 : state.reservations[0],
                            quotation: {
                                ...state === null || state === void 0 ? void 0 : state.reservations[0].quotation,
                                price: action.payload
                            }
                        },
                        {
                            ...state === null || state === void 0 ? void 0 : state.reservations[1]
                        }, 
                    ]
                };
            }
        case pickUpDropTypes/* RESERVATION_TOKEN_UPDATED */.A4:
            {
                return {
                    ...state,
                    reservations: [
                        {
                            ...state === null || state === void 0 ? void 0 : state.reservations[0],
                            paymentDetails: {
                                ...state.reservations[0].paymentDetails,
                                token: action.payload
                            }
                        },
                        {
                            ...state === null || state === void 0 ? void 0 : state.reservations[1]
                        }, 
                    ]
                };
            }
        case pickUpDropTypes/* SET_NEW_CURRENT_QUOTATION */.uV:
            {
                const { quotation: quotation1 , journeyType: journeyType13  } = action.payload;
                console.log(quotation1, "redurrrecerererer");
                return {
                    ...state,
                    reservations: [
                        {
                            ...state.reservations[0],
                            quotation: {
                                ...quotation1,
                                token: quotation1[0].token,
                                price: quotation1[0].price,
                                carId: quotation1[0].carId
                            }
                        },
                        {
                            ...state.reservations[1]
                        }, 
                    ]
                };
            }
        case "CHECK_JOURNEY_TYPE":
            {
                console.log(action.payload, "action.payload");
                return {
                    ...state,
                    params: {
                        ...state.params,
                        journeyType: action.payload
                    }
                };
            }
        default:
            return state;
    }
}; //  reservations: [
 //         {
 //           ...state.reservations[0],
 //           transferDetails: {
 //             ...state.reservations[0].transferDetails,
 //             transferDateTimeString: tranferDatatime,
 //             // transferDateTime:
 //             //   journeyType === 0
 //             //     ? getDateTimeFromFormat(
 //             //         tranferDatatime,
 //             //         "yyyy-mm-dd HH:MM",
 //             //         "Europe/London"
 //             //       )
 //             //     : state.reservations[0].transferDetails.transferDateTime,
 //           },
 //         },
 //         {
 //           ...state.reservations[1],
 //           transferDetails: {
 //             ...state.reservations[1].transferDetails,
 //             transferDateTimeString: returnDatatime,
 //             // transferDateTime:
 //             //   journeyType === 0
 //             //     ? getDateTimeFromFormat(
 //             //         returnDatatime,
 //             //         "yyyy-mm-dd HH:MM",
 //             //         "Europe/London"
 //             //       )
 //             //     : state.reservations[0].transferDetails.transferDateTime,
 //           },
 //         },
 //       ],
 /*
new version

    case SET_PAYMENT: {
      const journeyType = state.params.journeyType;
      console.log(journeyType);

      let reservations = [];
      if (journeyType === 0) {
        reservations = [
          {
            ...state.reservations[0],
            paymentDetails: {
              ...state.reservations[0].paymentDetails,
              token: action?.payload.token,
              paymentType: action?.payload?.paymentType,
            },
          },
        ];

        // console.log(reservations);
      }

      if (journeyType === 1) {
        reservations = [
          {
            ...state.reservations[0],
            paymentDetails: {
              ...state.reservations[0].paymentDetails,
              token: action?.payload.token,
              paymentType: action?.payload?.paymentType,
            },
          },
          {
            ...state.reservations[1],
            paymentDetails: {
              ...state.reservations[1].paymentDetails,
              token: action?.payload.token,
              paymentType: action?.payload?.paymentType,
            },
          },
        ];
      }
      return {
        ...state,
        reservations: reservations,
      };
    }
*/ 

;// CONCATENATED MODULE: ./src/store/store.js




const reducer = (0,external_redux_namespaceObject.combineReducers)({
    pickUpDropOffReducer: pickUpDropOffReducer
});
const initialState = {};
const middleware = [
    (external_redux_thunk_default())
];
const store = (0,external_redux_namespaceObject.createStore)(// rootReducer,
reducer, initialState, (0,external_redux_devtools_extension_namespaceObject.composeWithDevTools)((0,external_redux_namespaceObject.applyMiddleware)(...middleware)));
/* harmony default export */ const store_store = (store);

// EXTERNAL MODULE: ./src/resources/getEnvConfig.js
var getEnvConfig = __webpack_require__(1635);
;// CONCATENATED MODULE: ./src/pages/_app.js







function MyApp({ Component , pageProps  }) {
    let { env  } = pageProps;
    external_react_default().useEffect(()=>{
        if (false) {}
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
            store: store_store,
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
}
const makestore = ()=>store_store;
const wrapper = (0,external_next_redux_wrapper_namespaceObject.createWrapper)(makestore);
MyApp.getInitialProps = wrapper.getInitialAppProps((store)=>async ({ Component , ctx  })=>{
        const env = await (0,getEnvConfig/* fetchConfig */.Q)();
        return {
            pageProps: {
                env
            }
        };
    });
/* harmony default export */ const _app = (wrapper.withRedux(MyApp));


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9858,5795], () => (__webpack_exec__(7748)));
module.exports = __webpack_exports__;

})();