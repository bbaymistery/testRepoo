(() => {
var exports = {};
exports.id = 7283;
exports.ids = [7283,2197,9319,4557,5026,5126,6103];
exports.modules = {

/***/ 7478:
/***/ ((module) => {

// Exports
module.exports = {
	"modal": "styles_modal__9rDL5",
	"zoomout": "styles_zoomout__Oy3hq",
	"modal_container": "styles_modal_container__owoC7",
	"close_icon": "styles_close_icon__x7zHa",
	"button_div": "styles_button_div__MVroq"
};


/***/ }),

/***/ 4078:
/***/ ((module) => {

// Exports
module.exports = {
	"selected_list": "styles_selected_list__JM_TU",
	"animate": "styles_animate__qO7Z0",
	"list_container": "styles_list_container__OlFYs",
	"list": "styles_list__bmGaw",
	"list_number": "styles_list_number__mRSEC",
	"list_image": "styles_list_image__hmsCW",
	"list_description": "styles_list_description__EoWtZ",
	"insideInputs": "styles_insideInputs__NlEJg",
	"insideInputs_input": "styles_insideInputs_input__On5Yl",
	"istaxideal_selected_list": "styles_istaxideal_selected_list__4X5U0",
	"inside_inputs_istaxideal": "styles_inside_inputs_istaxideal__9LUTq"
};


/***/ }),

/***/ 543:
/***/ ((module) => {

// Exports
module.exports = {
	"journey_summary_panel": "styles_journey_summary_panel__RKse0",
	"content": "styles_content__EhNco",
	"journey_card": "styles_journey_card__I7tDf",
	"img_div": "styles_img_div__xSrzW",
	"stars": "styles_stars__RFa23",
	"review": "styles_review__IS3OT",
	"review_left": "styles_review_left__tWJfh",
	"review_center": "styles_review_center__CKnWv",
	"review_right": "styles_review_right__m1WKt",
	"carIdFour": "styles_carIdFour__oMk0W",
	"cardIdSix": "styles_cardIdSix__tUcek",
	"details_div": "styles_details_div___VVqF",
	"fromto": "styles_fromto__yK__t",
	"space": "styles_space__JDGCO",
	"total_journey": "styles_total_journey__FVzA6",
	"text_1": "styles_text_1__4_yc4",
	"duration": "styles_duration__DvC7_",
	"you_selected_div": "styles_you_selected_div__JE2E7",
	"left": "styles_left__exL3f",
	"car_name": "styles_car_name__t0BXZ",
	"rtlright": "styles_rtlright__Q8pkJ",
	"right": "styles_right__cQpHx",
	"date_time": "styles_date_time__8d0IW",
	"box": "styles_box__jjJoE",
	"price_div": "styles_price_div__T0FVG",
	"price": "styles_price__HLG2x",
	"left_info": "styles_left_info__C_tAp",
	"tripad": "styles_tripad__ogdAr",
	"acceptedcards": "styles_acceptedcards__mYP95",
	"google_review": "styles_google_review__Dm37F",
	"journey_summary_panel_taxi_deal": "styles_journey_summary_panel_taxi_deal__8lWbf",
	"summarycontent": "styles_summarycontent__E269S"
};


/***/ }),

/***/ 1544:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ quotationImagesObj)
/* harmony export */ });
const quotationImagesObj = {
    1: {
        name: "Saloon",
        image: "/media/normal-saloon-v2.png",
        id: 1
    },
    2: {
        name: "MPV",
        image: "/media/normal-mpv-v2.png",
        id: 2
    },
    3: {
        name: "8 Seater",
        image: "/media/normal-8-seaters-v2.png",
        id: 3
    },
    4: {
        name: "Executive Saloon",
        image: "/media/vip-saloon-v2.png",
        id: 4
    },
    5: {
        name: "Executive MPV",
        image: "/media/vip-mpv-v2.png",
        id: 5
    },
    6: {
        name: "Executive 8 Seater",
        image: "/media/vip-mpv-v2.png",
        id: 6
    }
};


/***/ }),

/***/ 3381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ useOutsideClick)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useOutsideClick(ref) {
    const [clickedOutside, setclickedOutside] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) setclickedOutside(true);
        }
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>document.removeEventListener("mousedown", handleClickOutside);
    }, [
        ref
    ]);
    return clickedOutside;
}


/***/ }),

/***/ 1877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ transfer_details),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/helpers/splitHelper.js
var splitHelper = __webpack_require__(278);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/helpers/ifHasUnwantedCharacters.js
var ifHasUnwantedCharacters = __webpack_require__(1241);
// EXTERNAL MODULE: ./src/components/elements/TextInput/index.js
var TextInput = __webpack_require__(6);
// EXTERNAL MODULE: ./src/components/elements/SelectedPointsOnTransferDetails/styles.module.scss
var styles_module = __webpack_require__(4078);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: ./src/components/elements/SelectedPointsOnTransferDetails/CheckPlaceOfInterest.js





const CheckPlaceOfInterest = (props)=>{
    let { point , onChange =()=>{} , errorMessage  } = props;
    const onchangeHandler = (e)=>{
        let { value  } = e.target;
        if ((0,ifHasUnwantedCharacters/* ifHasUnwantedCharacters */.$)(value)) return;
        onChange(value);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: point.pcatId === 7 ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (styles_module_default()).insideInputs,
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).insideInputs_input,
                children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                    label: "Places of Interest",
                    type: "text",
                    name: "address-description",
                    onChange: (e)=>onchangeHandler(e),
                    value: point["address-description"],
                    errorMessage: errorMessage
                })
            })
        }) : /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {})
    });
};
/* harmony default export */ const SelectedPointsOnTransferDetails_CheckPlaceOfInterest = (CheckPlaceOfInterest); //Lexington House, 35 Park Lodge Avenue, West Drayton, UK

// EXTERNAL MODULE: ./src/components/elements/Select/index.js
var Select = __webpack_require__(9966);
// EXTERNAL MODULE: ./src/components/elements/Textarea/index.js
var Textarea = __webpack_require__(8307);
;// CONCATENATED MODULE: ./src/components/elements/SelectedPointsOnTransferDetails/CheckingForPostcodes.js







const CheckingForPostcodes = (props)=>{
    let { point , onChange =()=>{} , error , isTaxiDeal =false  } = props;
    let state = (0,external_react_redux_.useSelector)((state)=>state.pickUpDropOffActions);
    const { appData  } = (0,external_react_redux_.useSelector)((state)=>state.initialReducer);
    let { params: { postCodeAdresses  }  } = state;
    let postCodes = (postCodeAdresses.filter((pCode)=>point.postcode === pCode.postcode && pCode.addresses)[0] || {}).addresses || [];
    const onchangeHandler = (e, params = {})=>{
        let { value , name  } = e.target;
        if ((0,ifHasUnwantedCharacters/* ifHasUnwantedCharacters */.$)(value)) return;
        let extraState = {};
        if (name === "id") extraState["postCodeAddress"] = ((Array.isArray(postCodes) ? postCodes : [])?.find((obj)=>obj.id === parseInt(value)) || {}).value || "";
        let newPostcodeDetails = {
            ...point.postCodeDetails,
            [name]: name === "id" ? parseInt(value) : value,
            ...extraState
        };
        onChange(newPostcodeDetails);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: point.pcatId === 5 ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (styles_module_default()).insideInputs,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `${(styles_module_default()).insideInputs_input} ${isTaxiDeal ? (styles_module_default()).inside_inputs_istaxideal : ""}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Select/* default */.Z, {
                        name: "id",
                        opt: true,
                        label: appData?.words["strPostCodeAddress"],
                        value: point.postCodeDetails.id,
                        onChange: (e)=>onchangeHandler(e),
                        postCodeSelectOption: true,
                        errorMessage: point.postCodeDetails.id !== 0 && (error?.postCodeDetails?.postCodeAddress || error?.postCodeDetails?.id) ? "required" : "",
                        data: [
                            {
                                id: "",
                                value: `--${appData?.words["quSelectButton"]}--`
                            },
                            {
                                id: 0,
                                value: `${appData?.words["strAddNewAddressIfNotListed"]}`
                            },
                            ...postCodes?.length > 0 ? postCodes : []
                        ]
                    }),
                    point.postCodeDetails.id === 0 ? /*#__PURE__*/ jsx_runtime_.jsx(Textarea/* default */.Z, {
                        name: "postCodeAddress",
                        label: "Adress Description *",
                        errorMessage: error?.postCodeDetails?.postCodeAddress,
                        onChange: (e)=>onchangeHandler(e),
                        value: point.postCodeDetails.postCodeAddress
                    }) : /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {})
                ]
            })
        }) : /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {})
    });
};
/* harmony default export */ const SelectedPointsOnTransferDetails_CheckingForPostcodes = (CheckingForPostcodes);

;// CONCATENATED MODULE: ./src/components/elements/SelectedPointsOnTransferDetails/CheckForCitites.js






//bura propslar selected listeden geir
const CheckForCitites = (props)=>{
    let { point , onChange =()=>{} , errorMessage  } = props;
    const { appData  } = (0,external_react_redux_.useSelector)((state)=>state.initialReducer);
    const onchangeHandler = (e)=>{
        let { value  } = e.target;
        if ((0,ifHasUnwantedCharacters/* ifHasUnwantedCharacters */.$)(value)) return;
        onChange(value);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: point.pcatId === 8 ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (styles_module_default()).insideInputs,
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).insideInputs_input,
                children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                    label: "Cities",
                    type: "text",
                    name: "address-description",
                    onChange: (e)=>onchangeHandler(e),
                    value: point["address-description"],
                    errorMessage: errorMessage
                })
            })
        }) : /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {})
    });
};
/* harmony default export */ const SelectedPointsOnTransferDetails_CheckForCitites = (CheckForCitites);

;// CONCATENATED MODULE: ./src/components/elements/SelectedPointsOnTransferDetails/CheckForCruises.js






//bura propslar selected listeden geir
const CheckForCruises = (props)=>{
    let { point , error , onChange =()=>{}  } = props;
    const { appData  } = (0,external_react_redux_.useSelector)((state)=>state.initialReducer);
    const onchangeHandler = (e, params = {})=>{
        let { value  } = e.target;
        if ((0,ifHasUnwantedCharacters/* ifHasUnwantedCharacters */.$)(value)) return;
        let newCruisenumber = value;
        onChange(newCruisenumber);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: point.pcatId === 2 ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (styles_module_default()).insideInputs,
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).insideInputs_input,
                children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                    label: appData?.words["strCruiseNameTitle"],
                    type: "text",
                    name: "cruiseNumber",
                    value: point.cruiseNumber,
                    errorMessage: error.cruiseNumber,
                    onChange: (e)=>onchangeHandler(e)
                })
            })
        }) : /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {})
    });
};
/* harmony default export */ const SelectedPointsOnTransferDetails_CheckForCruises = (CheckForCruises);

;// CONCATENATED MODULE: ./src/components/elements/SelectedPointsOnTransferDetails/CheckForFlight.js







//bura propslar selected listeden geir
const CheckForFlight = (props)=>{
    //index it is a destination if 0 it means pick up
    let { point , onChange =()=>{} , objectDetailStatuses , type , error ={} , isTaxiDeal =false  } = props;
    const { appData  } = (0,external_react_redux_.useSelector)((state)=>state.initialReducer);
    const onchangeHandler = (e, params = {})=>{
        let { value , name  } = e.target;
        if ((0,ifHasUnwantedCharacters/* ifHasUnwantedCharacters */.$)(value)) return;
        //150 minutes after flight has landed     = >150
        let splitedNumberOfWaitingTime = "";
        if (name === "waitingPickupTime") {
            splitedNumberOfWaitingTime = e?.target?.options[e?.target?.selectedIndex].innerText.trim().split(" ")[0];
            if (parseInt(splitedNumberOfWaitingTime) >= 0) {
                splitedNumberOfWaitingTime = parseInt(splitedNumberOfWaitingTime);
            } else {
                splitedNumberOfWaitingTime = "";
            }
        }
        let newFlightDetails = {
            ...point.flightDetails,
            [name]: name === "waitingPickupTime" ? splitedNumberOfWaitingTime : value
        };
        onChange(newFlightDetails);
    };
    const waitingMinutes = [
        0,
        15,
        30,
        45,
        50,
        60,
        70,
        80,
        90,
        100,
        120,
        150
    ].map((min, i)=>({
            id: min.toString(),
            value: `${min} minute${min === 0 ? "" : "s"} ${appData?.words["seBookingNote"]}`
        }));
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: point.pcatId === 1 ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (styles_module_default()).insideInputs,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `${(styles_module_default()).insideInputs_input} ${isTaxiDeal ? (styles_module_default()).inside_inputs_istaxideal : ""}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        label: appData?.words["strFlightNumberTitle"],
                        type: "text",
                        name: "flightNumber",
                        value: point.flightDetails.flightNumber,
                        errorMessage: error?.flightDetails?.flightNumber,
                        onChange: (e)=>onchangeHandler(e)
                    }),
                    objectDetailStatuses[1]?.flightDetails?.waitingPickupTime[type] === 1 && /*#__PURE__*/ jsx_runtime_.jsx(Select/* default */.Z, {
                        label: appData?.words["seWaitingTime"],
                        data: [
                            {
                                id: "",
                                value: `--${appData?.words["quSelectButton"]}--`
                            },
                            ...waitingMinutes?.length > 0 ? waitingMinutes : []
                        ],
                        name: "waitingPickupTime",
                        onChange: (e)=>onchangeHandler(e),
                        errorMessage: error?.flightDetails?.waitingPickupTime,
                        value: point.flightDetails.waitingPickupTime,
                        flightSelectOption: true,
                        flightInfoIcon: true,
                        isTaxiDeal: isTaxiDeal
                    })
                ]
            })
        }) : /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {})
    });
};
/* harmony default export */ const SelectedPointsOnTransferDetails_CheckForFlight = (CheckForFlight);

;// CONCATENATED MODULE: ./src/components/elements/SelectedPointsOnTransferDetails/CheckForTrain.js






const CheckForTrain = (props)=>{
    let { point , objectDetailStatuses , type , onChange =()=>{} , errorMessage  } = props;
    const { appData  } = (0,external_react_redux_.useSelector)((state)=>state.initialReducer);
    const onchangeHandler = (e, params = {})=>{
        let { value  } = e.target;
        if ((0,ifHasUnwantedCharacters/* ifHasUnwantedCharacters */.$)(value)) return;
        let newTrainNumber = value;
        onChange(newTrainNumber);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: point.pcatId === 3 ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (styles_module_default()).insideInputs,
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).insideInputs_input,
                children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                    label: "Train Number",
                    type: "text",
                    name: "trainNumber",
                    value: point.trainNumber,
                    onChange: (e)=>onchangeHandler(e),
                    errorMessage: errorMessage
                })
            })
        }) : /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {})
    });
};
/* harmony default export */ const SelectedPointsOnTransferDetails_CheckForTrain = (CheckForTrain);

;// CONCATENATED MODULE: ./src/components/elements/SelectedPointsOnTransferDetails/CheckForOther.js






//bura propslar selected listeden geir
const CheckForOther = (props)=>{
    let { point , onChange =()=>{} , errorMessage  } = props;
    const { appData  } = (0,external_react_redux_.useSelector)((state)=>state.initialReducer);
    const onchangeHandler = (e)=>{
        let { value  } = e.target;
        if ((0,ifHasUnwantedCharacters/* ifHasUnwantedCharacters */.$)(value)) return;
        onChange(value);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: point.pcatId === 10 ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (styles_module_default()).insideInputs,
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).insideInputs_input,
                children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                    label: "Description",
                    type: "text",
                    name: "address-description",
                    onChange: (e)=>onchangeHandler(e),
                    value: point["address-description"],
                    errorMessage: errorMessage
                })
            })
        }) : /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {})
    });
};
/* harmony default export */ const SelectedPointsOnTransferDetails_CheckForOther = (CheckForOther);

// EXTERNAL MODULE: ./src/resources/env.js
var env = __webpack_require__(4603);
;// CONCATENATED MODULE: ./src/components/elements/SelectedPointsOnTransferDetails/CheckForUniversity.js






//bura propslar selected listeden geir
const CheckForUniversity = (props)=>{
    let { point , onChange =()=>{} , errorMessage  } = props;
    const { appData  } = (0,external_react_redux_.useSelector)((state)=>state.initialReducer);
    const onchangeHandler = (e)=>{
        let { value  } = e.target;
        if ((0,ifHasUnwantedCharacters/* ifHasUnwantedCharacters */.$)(value)) return;
        onChange(value);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: point.pcatId === 9 ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (styles_module_default()).insideInputs,
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).insideInputs_input,
                children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                    label: "Universities And Colleges",
                    type: "text",
                    name: "address-description",
                    onChange: (e)=>onchangeHandler(e),
                    value: point["address-description"],
                    errorMessage: errorMessage
                })
            })
        }) : /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {})
    });
};
/* harmony default export */ const SelectedPointsOnTransferDetails_CheckForUniversity = (CheckForUniversity); //Cotuit

;// CONCATENATED MODULE: ./src/components/elements/SelectedPointsOnTransferDetails/index.js













const SelectedPointOnTransferDetails = (props)=>{
    //index it is a destination if 0 it means pick up
    let { selectedPoints , journeyType , type , pointsError =props.selectedPoints.map((obj)=>({})) , language , isTaxiDeal =false  } = props;
    const { appData  } = (0,external_react_redux_.useSelector)((state)=>state.initialReducer);
    const dispatch = (0,external_react_redux_.useDispatch)();
    const imageObjects = appData?.pointTypeCategories?.reduce((obj, item)=>({
            ...obj,
            [item.id]: item.image
        }), {}); //1:"/media/mglafg5zqlrsocfwodwj.svg"
    const objectDetailStatuses = appData?.pointTypeCategories?.reduce((obj, item)=>({
            ...obj,
            [item.id]: JSON.parse(item.detailsStatus)
        }), []); //cruiseNumber:{ pickup: 1, dropoff: 2, fieldType: 'text' }
    // 1:index of point
    // type is pickup or dropoff
    // journeyType is index of reservation
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: selectedPoints?.map((point, i)=>{
            let pointError = Array.isArray(pointsError) && typeof pointsError[i] === "object" ? pointsError[i] : {};
            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${(styles_module_default()).selected_list} ${isTaxiDeal ? (styles_module_default()).istaxideal_selected_list : ""} ${selectedPoints.length > 0 ? "m_0" : ""}`,
                id: "selectedlist",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (styles_module_default()).list_container,
                    children: [
                        isTaxiDeal ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (styles_module_default()).list,
                            children: [
                                imageObjects && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: (styles_module_default()).list_image,
                                    src: `${env/* default.apiDomain */.Z.apiDomain}${imageObjects[point?.pcatId]}`,
                                    alt: point.address
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: (styles_module_default()).list_description,
                                    children: language === "en" ? point?.address : point?.translatedAddress
                                })
                            ]
                        }),
                        point.pcatId === 1 ? /*#__PURE__*/ jsx_runtime_.jsx(SelectedPointsOnTransferDetails_CheckForFlight, {
                            type: type,
                            point: point,
                            error: pointError,
                            journeyType: journeyType,
                            objectDetailStatuses: objectDetailStatuses,
                            isTaxiDeal: isTaxiDeal,
                            onChange: (flightDetails)=>dispatch({
                                    type: "SET_FLIGHT_DETAILS_FOR_POINTS",
                                    "data": {
                                        "index": journeyType,
                                        type,
                                        "pointIndex": i,
                                        flightDetails
                                    }
                                })
                        }) : /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {}),
                        point.pcatId === 2 ? /*#__PURE__*/ jsx_runtime_.jsx(SelectedPointsOnTransferDetails_CheckForCruises, {
                            point: point,
                            error: pointError,
                            journeyType: journeyType,
                            onChange: (cruiseNumber)=>dispatch({
                                    type: "SET_CRUISE_NUMBER_FOR_POINTS",
                                    "data": {
                                        "index": journeyType,
                                        type,
                                        "pointIndex": i,
                                        cruiseNumber
                                    }
                                })
                        }) : /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {}),
                        point.pcatId === 3 ? /*#__PURE__*/ jsx_runtime_.jsx(SelectedPointsOnTransferDetails_CheckForTrain, {
                            point: point,
                            journeyType: journeyType,
                            onChange: (trainNumber)=>dispatch({
                                    type: "SET_TRAIN_NUMBER_FOR_POINTS",
                                    "data": {
                                        "index": journeyType,
                                        type,
                                        "pointIndex": i,
                                        trainNumber
                                    }
                                })
                        }) : /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {}),
                        point.pcatId === 5 ? /*#__PURE__*/ jsx_runtime_.jsx(SelectedPointsOnTransferDetails_CheckingForPostcodes, {
                            point: point,
                            error: pointError,
                            journeyType: journeyType,
                            isTaxiDeal: isTaxiDeal,
                            onChange: (postCodeDetails)=>dispatch({
                                    type: "SET_POSTCODE_DETAILS_FOR_POINTS",
                                    "data": {
                                        "index": journeyType,
                                        type,
                                        "pointIndex": i,
                                        postCodeDetails
                                    }
                                })
                        }) : /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {}),
                        point.pcatId === 7 ? /*#__PURE__*/ jsx_runtime_.jsx(SelectedPointsOnTransferDetails_CheckPlaceOfInterest, {
                            point: point,
                            journeyType: journeyType,
                            onChange: (value)=>dispatch({
                                    type: "SET_ADRESS_DESCRIPTION_FOR_POINTS",
                                    "data": {
                                        "index": journeyType,
                                        type,
                                        "pointIndex": i,
                                        value
                                    }
                                })
                        }) : /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {}),
                        point.pcatId === 8 ? /*#__PURE__*/ jsx_runtime_.jsx(SelectedPointsOnTransferDetails_CheckForCitites, {
                            point: point,
                            journeyType: journeyType,
                            onChange: (value)=>dispatch({
                                    type: "SET_ADRESS_DESCRIPTION_FOR_POINTS",
                                    "data": {
                                        "index": journeyType,
                                        type,
                                        "pointIndex": i,
                                        value
                                    }
                                })
                        }) : /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {}),
                        point.pcatId === 9 ? /*#__PURE__*/ jsx_runtime_.jsx(SelectedPointsOnTransferDetails_CheckForUniversity, {
                            point: point,
                            journeyType: journeyType,
                            onChange: (value)=>dispatch({
                                    type: "SET_ADRESS_DESCRIPTION_FOR_POINTS",
                                    "data": {
                                        "index": journeyType,
                                        type,
                                        "pointIndex": i,
                                        value
                                    }
                                })
                        }) : /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {}),
                        point.pcatId === 10 ? /*#__PURE__*/ jsx_runtime_.jsx(SelectedPointsOnTransferDetails_CheckForOther, {
                            point: point,
                            journeyType: journeyType,
                            onChange: (value)=>dispatch({
                                    type: "SET_ADRESS_DESCRIPTION_FOR_POINTS",
                                    "data": {
                                        "index": journeyType,
                                        type,
                                        "pointIndex": i,
                                        value
                                    }
                                })
                        }) : /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {})
                    ]
                })
            }, i);
        })
    });
};
/* harmony default export */ const SelectedPointsOnTransferDetails = (SelectedPointOnTransferDetails);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/constants/quotationImages/index.js
var quotationImages = __webpack_require__(1544);
// EXTERNAL MODULE: ./src/components/elements/TransferJourneySummaryPanel/styles.module.scss
var TransferJourneySummaryPanel_styles_module = __webpack_require__(543);
var TransferJourneySummaryPanel_styles_module_default = /*#__PURE__*/__webpack_require__.n(TransferJourneySummaryPanel_styles_module);
;// CONCATENATED MODULE: ./src/components/elements/TransferJourneySummaryPanel/index.js







const TransferJourneySummaryPanel = (props)=>{
    let { index , quotation , selectedPickupPoints , selectedDropoffPoints , splitedDate , splitedHour , splitedMinute , isTaxiDeal =false , journeyType  } = props;
    let state = (0,external_react_redux_.useSelector)((state)=>state.pickUpDropOffActions);
    let { params: { quotations , direction  }  } = state;
    const { appData  } = (0,external_react_redux_.useSelector)((state)=>state.initialReducer);
    //cartypes object for card item as {1:{image:'sds, name:Economy}}
    const carObject = appData?.carsTypes?.reduce((obj, item)=>({
            ...obj,
            [item.id]: item
        }), {});
    //https://www.tripadvisor.co.uk/Attraction_Review-g186338-d11966434-Reviews-Airport_Pickups_London-London_England.html
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `${(TransferJourneySummaryPanel_styles_module_default()).journey_summary_panel} ${isTaxiDeal ? (TransferJourneySummaryPanel_styles_module_default()).journey_summary_panel_taxi_deal : ""}`,
        children: [
            isTaxiDeal ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (TransferJourneySummaryPanel_styles_module_default()).content,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: "Your Booking Details"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `${(TransferJourneySummaryPanel_styles_module_default()).journey_card} ${direction === "rtl" && (TransferJourneySummaryPanel_styles_module_default()).rtljourney_card}`,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `${(TransferJourneySummaryPanel_styles_module_default()).img_div} ${quotation.carId === 6 || quotation.carId === 5 ? (TransferJourneySummaryPanel_styles_module_default()).cardIdSix : ""} ${quotation.carId === 4 ? (TransferJourneySummaryPanel_styles_module_default()).carIdFour : ""}`,
                                style: {
                                    backgroundImage: `url(${env/* default.apiDomain */.Z.apiDomain}${quotationImages/* quotationImagesObj */.t[quotation?.carId]?.image})`
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (TransferJourneySummaryPanel_styles_module_default()).details_div,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    id: "from to",
                                    className: (TransferJourneySummaryPanel_styles_module_default()).fromto,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (TransferJourneySummaryPanel_styles_module_default()).stars,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fa-solid fa-star"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fa-solid fa-star"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fa-solid fa-star"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fa-solid fa-star"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fa-solid fa-star-half-stroke"
                                                })
                                            ]
                                        }),
                                        selectedPickupPoints.map((pickup, i)=>{
                                            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    children: [
                                                        isTaxiDeal ? "" : `${i + 1}. `,
                                                        "  ",
                                                        pickup.address
                                                    ]
                                                })
                                            }, i);
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (TransferJourneySummaryPanel_styles_module_default()).space,
                                            children: " "
                                        }),
                                        selectedDropoffPoints.map((dropoff, i)=>{
                                            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    children: [
                                                        isTaxiDeal ? "" : `${i + 1}. `,
                                                        " ",
                                                        dropoff.address
                                                    ]
                                                })
                                            }, i + 15);
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "https://g.co/kgs/Rg7vb8",
                                            target: "_blank",
                                            className: (TransferJourneySummaryPanel_styles_module_default()).review,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: (TransferJourneySummaryPanel_styles_module_default()).review_left,
                                                    children: "4.8 "
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: (TransferJourneySummaryPanel_styles_module_default()).review_center,
                                                    children: "Exceptional "
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: (TransferJourneySummaryPanel_styles_module_default()).review_right,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "495"
                                                        }),
                                                        " reviews  "
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (TransferJourneySummaryPanel_styles_module_default()).date_time,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (TransferJourneySummaryPanel_styles_module_default()).box,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: direction,
                                        children: selectedPickupPoints[0]?.pcatId === 1 ? appData?.words["seLandingDate"] : appData?.words["sePickUpDate"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: direction === "rtl" ? `${splitedDate.split(" ")[0].replace(/(\d+)\-(\d+)-(\d+)/, "$1-$2-$3")}` : `${splitedDate.split(" ")[0].replace(/(\d+)\-(\d+)-(\d+)/, "$3-$2-$1")}`
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (TransferJourneySummaryPanel_styles_module_default()).box,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: direction,
                                        children: selectedPickupPoints[0]?.pcatId === 1 ? appData?.words["seLandingTime"] : appData?.words["sePickUpTime"]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        children: [
                                            " ",
                                            `${splitedHour} : ${splitedMinute}`
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (TransferJourneySummaryPanel_styles_module_default()).total_journey,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (TransferJourneySummaryPanel_styles_module_default()).text_1,
                                children: "Total Length of journey "
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (TransferJourneySummaryPanel_styles_module_default()).duration,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Distance"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: quotations[index].distance
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (TransferJourneySummaryPanel_styles_module_default()).duration,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: appData?.words["strJourneyDurationTitle"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: quotations[index].duration
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        style: {
                            border: "none"
                        },
                        className: (TransferJourneySummaryPanel_styles_module_default()).total_journey,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (TransferJourneySummaryPanel_styles_module_default()).text_1,
                                children: "Your Vehicle Details"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (TransferJourneySummaryPanel_styles_module_default()).duration,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: carObject[quotation.carId]?.transferType
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (TransferJourneySummaryPanel_styles_module_default()).duration,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Max"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            carObject[quotation.carId]?.suitcases,
                                            " Suitcases"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (TransferJourneySummaryPanel_styles_module_default()).duration,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Max"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            carObject[quotation.carId]?.pax,
                                            " Passengers"
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (TransferJourneySummaryPanel_styles_module_default()).content,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: index === 0 ? "Booking Details" : "Return Journey Booking Details"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `${(TransferJourneySummaryPanel_styles_module_default()).journey_card} ${direction === "rtl" && (TransferJourneySummaryPanel_styles_module_default()).rtljourney_card}`,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `${(TransferJourneySummaryPanel_styles_module_default()).img_div} ${quotation.carId === 6 || quotation.carId === 5 ? (TransferJourneySummaryPanel_styles_module_default()).cardIdSix : ""} ${quotation.carId === 4 ? (TransferJourneySummaryPanel_styles_module_default()).carIdFour : ""}`,
                                style: {
                                    backgroundImage: `url(${env/* default.apiDomain */.Z.apiDomain}${quotationImages/* quotationImagesObj */.t[quotation?.carId]?.image})`
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (TransferJourneySummaryPanel_styles_module_default()).stars,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fa-solid fa-star"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fa-solid fa-star"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fa-solid fa-star"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fa-solid fa-star"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fa-solid fa-star-half-stroke"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (TransferJourneySummaryPanel_styles_module_default()).details_div,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    id: "from to",
                                    className: (TransferJourneySummaryPanel_styles_module_default()).fromto,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            children: "FROM:       "
                                        }),
                                        selectedPickupPoints.map((pickup, i)=>{
                                            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    children: [
                                                        isTaxiDeal ? "" : `${i + 1}. `,
                                                        "  ",
                                                        pickup.address
                                                    ]
                                                })
                                            }, i);
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (TransferJourneySummaryPanel_styles_module_default()).space,
                                            children: " "
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            children: "TO:"
                                        }),
                                        selectedDropoffPoints.map((dropoff, i)=>{
                                            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    children: [
                                                        isTaxiDeal ? "" : `${i + 1}. `,
                                                        " ",
                                                        dropoff.address
                                                    ]
                                                })
                                            }, i + 15);
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            children: "ON:"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    direction === "rtl" ? `${splitedDate.split(" ")[0].replace(/(\d+)\-(\d+)-(\d+)/, "$1-$2-$3")}` : `${splitedDate.split(" ")[0].replace(/(\d+)\-(\d+)-(\d+)/, "$3-$2-$1")}`,
                                                    "\xa0",
                                                    `${splitedHour}:${splitedMinute}`
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "https://g.co/kgs/Rg7vb8",
                                            target: "_blank",
                                            className: (TransferJourneySummaryPanel_styles_module_default()).review,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: (TransferJourneySummaryPanel_styles_module_default()).review_left,
                                                    children: "4.8 "
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: (TransferJourneySummaryPanel_styles_module_default()).review_center,
                                                    children: "Exceptional "
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: (TransferJourneySummaryPanel_styles_module_default()).review_right,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "495"
                                                        }),
                                                        " reviews  "
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (TransferJourneySummaryPanel_styles_module_default()).total_journey,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (TransferJourneySummaryPanel_styles_module_default()).text_1,
                                children: "Total Length of journey "
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (TransferJourneySummaryPanel_styles_module_default()).duration,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Distance"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: quotations[index].distance
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (TransferJourneySummaryPanel_styles_module_default()).duration,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: appData?.words["strJourneyDurationTitle"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: quotations[index].duration
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        style: {
                            border: "none"
                        },
                        className: (TransferJourneySummaryPanel_styles_module_default()).total_journey,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (TransferJourneySummaryPanel_styles_module_default()).text_1,
                                children: "Your Vehicle Details"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (TransferJourneySummaryPanel_styles_module_default()).duration,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: carObject[quotation.carId]?.transferType
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (TransferJourneySummaryPanel_styles_module_default()).duration,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Max"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            carObject[quotation.carId]?.suitcases,
                                            " Suitcases"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (TransferJourneySummaryPanel_styles_module_default()).duration,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Max"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            carObject[quotation.carId]?.pax,
                                            " Passengers"
                                        ]
                                    })
                                ]
                            }),
                            quotations[0].taxiDeal ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}) : /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/quotation-results",
                                children: " Change Car Type "
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (TransferJourneySummaryPanel_styles_module_default()).price_div,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (TransferJourneySummaryPanel_styles_module_default()).text_1,
                                children: [
                                    appData?.words["strPriceTitle"],
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (TransferJourneySummaryPanel_styles_module_default()).price,
                                children: [
                                    "\xa3 ",
                                    quotation.price,
                                    "  "
                                ]
                            })
                        ]
                    })
                ]
            }),
            isTaxiDeal ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `${(TransferJourneySummaryPanel_styles_module_default()).content} ${(TransferJourneySummaryPanel_styles_module_default()).summarycontent} mt_3`,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `${(TransferJourneySummaryPanel_styles_module_default()).total_journey}`,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (TransferJourneySummaryPanel_styles_module_default()).duration,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            carObject[quotation.carId]?.name,
                                            " Vehicle"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            "\xa3 ",
                                            quotation.price
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (TransferJourneySummaryPanel_styles_module_default()).duration,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Taxes and Fees "
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: " Included"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (TransferJourneySummaryPanel_styles_module_default()).duration,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Meet & Greet by Arrivals "
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: " Included"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (TransferJourneySummaryPanel_styles_module_default()).price_div,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (TransferJourneySummaryPanel_styles_module_default()).text_1,
                                children: [
                                    appData?.words["strPriceTitle"],
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (TransferJourneySummaryPanel_styles_module_default()).price,
                                children: [
                                    "\xa3 ",
                                    quotation.price
                                ]
                            })
                        ]
                    })
                ]
            }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
            isTaxiDeal ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${(TransferJourneySummaryPanel_styles_module_default()).content} ${(TransferJourneySummaryPanel_styles_module_default()).summarycontent} mt_3`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `${(TransferJourneySummaryPanel_styles_module_default()).left_info} ${(TransferJourneySummaryPanel_styles_module_default()).acceptedcards} mt_0`,
                    title: "Accepted Cards for Airport Pickups London",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: (TransferJourneySummaryPanel_styles_module_default()).acceptedcards_img,
                        border: "0",
                        alt: "Accepted Cards for Airport Pickups London ",
                        src: "/images/accepted-cards10Final.png"
                    })
                })
            }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
        ]
    });
};
/* harmony default export */ const elements_TransferJourneySummaryPanel = (TransferJourneySummaryPanel);

// EXTERNAL MODULE: ./src/components/elements/FlightWaitingTimeContent/index.js
var FlightWaitingTimeContent = __webpack_require__(6790);
// EXTERNAL MODULE: ./src/helpers/reservationSchemeValidator.js
var reservationSchemeValidator = __webpack_require__(4745);
// EXTERNAL MODULE: ./src/hooks/useOutsideClick.js
var useOutsideClick = __webpack_require__(3381);
// EXTERNAL MODULE: ./src/components/elements/InfoModal/styles.module.scss
var InfoModal_styles_module = __webpack_require__(7478);
var InfoModal_styles_module_default = /*#__PURE__*/__webpack_require__.n(InfoModal_styles_module);
;// CONCATENATED MODULE: ./src/components/elements/InfoModal/InfoModal.js





const InfoModal = ({ content  })=>{
    const wrapperRef = (0,external_react_.useRef)();
    const dispatch = (0,external_react_redux_.useDispatch)();
    let clickedOutside = (0,useOutsideClick/* useOutsideClick */.O)(wrapperRef);
    (0,external_react_.useEffect)(()=>{
        if (clickedOutside) dispatch({
            type: "SET_MODAL_INFO",
            data: {
                trueOrFalse: false
            }
        });
    }, [
        clickedOutside
    ]);
    const setToFalse = ()=>{
        dispatch({
            type: "SET_MODAL_INFO",
            data: {
                trueOrFalse: false
            }
        });
        document.body.style.overflow = "unset";
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: ` ${(InfoModal_styles_module_default()).modal} `,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `${(InfoModal_styles_module_default()).modal_container}`,
            ref: wrapperRef,
            id: "infoModal",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: content?.length ? content : null
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        typeof content === "object" ? content : null,
                        "  "
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (InfoModal_styles_module_default()).button_div,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: setToFalse,
                        className: "btn btn_primary ",
                        children: "Close "
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    onClick: setToFalse,
                    className: `fa-solid fa-x ${(InfoModal_styles_module_default()).close_icon}`
                })
            ]
        })
    });
};
/* harmony default export */ const InfoModal_InfoModal = (InfoModal);

// EXTERNAL MODULE: ./src/components/layouts/GlobalLayout/index.js + 12 modules
var GlobalLayout = __webpack_require__(5277);
// EXTERNAL MODULE: ./src/hooks/useConfirm.js
var useConfirm = __webpack_require__(3590);
// EXTERNAL MODULE: ./src/pages/transfer-details/styles.module.scss
var transfer_details_styles_module = __webpack_require__(1161);
var transfer_details_styles_module_default = /*#__PURE__*/__webpack_require__.n(transfer_details_styles_module);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/pages/transfer-details/CheckBox.js
var CheckBox = __webpack_require__(8918);
// EXTERNAL MODULE: ./src/helpers/getDates.js
var getDates = __webpack_require__(9367);
// EXTERNAL MODULE: ./src/components/elements/HandleSearchResults/index.js
var HandleSearchResults = __webpack_require__(6760);
// EXTERNAL MODULE: ./src/components/elements/OutsideClickAlert/index.js
var OutsideClickAlert = __webpack_require__(3260);
// EXTERNAL MODULE: ./src/constants/minutesHours/index.js
var minutesHours = __webpack_require__(8491);
// EXTERNAL MODULE: ./src/components/elements/Loading/index.js
var Loading = __webpack_require__(2290);
// EXTERNAL MODULE: ./src/components/elements/SelectedPointsOnHomePage/index.js
var SelectedPointsOnHomePage = __webpack_require__(7681);
// EXTERNAL MODULE: ./src/store/store.js + 50 modules
var store = __webpack_require__(8987);
// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__(5648);
// EXTERNAL MODULE: ./src/helpers/urlWithLangAtrribute.js
var urlWithLangAtrribute = __webpack_require__(8164);
// EXTERNAL MODULE: external "react-phone-input-2"
var external_react_phone_input_2_ = __webpack_require__(5452);
var external_react_phone_input_2_default = /*#__PURE__*/__webpack_require__.n(external_react_phone_input_2_);
// EXTERNAL MODULE: ./node_modules/react-phone-input-2/lib/style.css
var style = __webpack_require__(4463);
;// CONCATENATED MODULE: ./src/helpers/cokieesFunc.js
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for(let i = 0; i < ca.length; i++){
        let c = ca[i];
        while(c.charAt(0) == " "){
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
// function checkCookie(cookieName) {
//   let user = getCookie(cookieName);
//   if (user != "") {
//     alert("Welcome again " + user);
//   } else {
//     user = prompt("Please enter your name:", "");
//     if (user != "" && user != null) {
//       setCookie(cookieName, user, 30);
//     }
//   }
// }
function removeCookie(sKey, sPath, sDomain) {
    document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
}

;// CONCATENATED MODULE: ./src/hooks/userIp.js


const useUserIp = ()=>{
    const [ip, setUserIp] = (0,external_react_.useState)("");
    const [country, setCountry] = (0,external_react_.useState)("gb");
    console.log(ip, country);
    (0,external_react_.useEffect)(()=>{
        const userIp = getCookie("user-ip") || "";
        const countryAdress = getCookie("user-country") || "";
        setUserIp(userIp);
        setCountry(countryAdress);
    }, []);
    return {
        ip,
        country
    };
};

;// CONCATENATED MODULE: ./src/pages/transfer-details/index.js

let description = "We specialize in airport transfer shuttle service. We can provide you with a chauffeur driven car to and from all major London airports. The airports include Heathrow, Gatwick, Stanstead, Luton and City airport.!";
let title = "Results Airport Transfers London Airport Pickups";
let keywords = " London airport transfers, London airport transfer, heathrow airport transfer, Gatwick airport transfer, stansted airport transfer, luton airport transfer, shuttle service, shuttle services, airport shuttle services, airport transfer shuttle service,  airport taxi service, taxi services, cab services, airport taxi service, London airport, airport transport, luton airport transport, London airport transportation, London shuttle services, Gatwick airport shuttle service, Heathrow airport shuttle service, Luton airport shuttle service, Stansted airport shuttle service, London airport taxi transfer, London airport shuttle, airport transfers London, airport transfers, chauffeur driven car, chauffeur driven cars, airport pick up and drop.";































const collectPoints = (params = {}, callback = ()=>{})=>{
    let { value ="" , reducerSessionToken ="" , language =""  } = params;
    const url = `${env/* default.apiDomain */.Z.apiDomain}/api/v1/suggestions`;
    const method = "POST";
    const headers = {
        "Content-Type": "application/json"
    };
    const body = JSON.stringify({
        value,
        "session-token": reducerSessionToken,
        language
    });
    const config = {
        method,
        headers,
        body
    };
    fetch(url, config).then((res)=>res.json()).then((res)=>{
        callback(res);
    }).catch((error)=>{
        let message = "APL   Hero component _collectPoints()  function catch blog ";
        window.handelErrorLogs(error, message, {
            config
        });
    });
};
const collectPointsAsync = (params)=>new Promise((resolve, reject)=>collectPoints(params, (log)=>resolve(log)));
const TransferDetails = (props)=>{
    const router = (0,router_.useRouter)();
    const dispatch = (0,external_react_redux_.useDispatch)();
    let state = (0,external_react_redux_.useSelector)((state)=>state.pickUpDropOffActions);
    let { reservations , params: { passengerDetailsStatus , modalInfo , direction , quotations , sessionToken: reducerSessionToken , language , journeyType  }  } = state;
    const { appData  } = (0,external_react_redux_.useSelector)((state)=>state.initialReducer);
    //we use it to render paxs inside select component
    const carObject = appData?.carsTypes?.reduce((obj, item)=>({
            ...obj,
            [item.id]: item
        }), {});
    const objectDetailss = appData?.pointTypeCategories?.reduce((obj, item)=>({
            ...obj,
            [item.id]: JSON.parse(item.objectDetails)
        }), {});
    const imageObjects = appData?.pointTypeCategories?.reduce((obj, item)=>({
            ...obj,
            [item.id]: item.image
        }), {});
    //in order having confirmation message
    //go back go forward and when change language we r not gonna have any confirmation
    const { nexturls , previousUrls , currentUrls  } = (0,urlWithLangAtrribute/* urlWithLangAtribute */.k)({
        languages: appData.languages,
        previousUrl: localStorage.getItem("path"),
        nextUrl: "/payment-details",
        currentUrl: router.asPath
    });
    const confirmationAlert = (0,useConfirm/* useConfirm */.N)({
        previousUrl: previousUrls,
        nextUrl: nexturls,
        currentUrls,
        message: "If you refresh the page, all data will be deleted."
    });
    //it is gonna be used inside --select when we come from tansfer details
    const [pickupIdForImage, setpickupIdForImage] = (0,external_react_.useState)(null);
    const [dropoffIdFormImage, setdropoffIdFormImage] = (0,external_react_.useState)(null);
    const [errorDropoffSelectBox, setErrorDropoffSelectBox] = (0,external_react_.useState)(false);
    const [errorPickUpSelectBox, setErrorPickUpSelectBox] = (0,external_react_.useState)(false);
    const { ip , country  } = useUserIp();
    console.log(country);
    const handleOnChangeNumberInput = (value, _country, index, name)=>{
        dispatch({
            type: "SET_PASSEGER_DETAILS",
            data: {
                name,
                value,
                index,
                updateBothJourneyCheckBox: passengerDetailsStatus
            }
        });
    };
    // const [errorDropoffSelectbox, seterrorDropoffSelectbox] = useState(false)
    // const [errorPickupSelectBox, seterrorPickupSelectBox] = useState(false)
    // will check if lang exist in url
    // const languageRegex = /^\/[a-z]{2}\//
    // let nexturls = appData.languages.map((lang) => `${lang.value === 'en' ? "" : `/${lang.value}`}/payment-details`)
    // let previousUrls = appData.languages.map((lang) => `${lang.value === 'en' ? "" : `/${lang.value}`}${localStorage.getItem("path")?.replace(languageRegex, '/')}`)
    // const confirmationAlert = useConfirm({ previousUrl: previousUrls, nextUrl: nexturls, message: "If you leave the page, all data will be deleted." })
    let [internalState, setInternalState] = external_react_default().useReducer((s, o)=>({
            ...s,
            ...o
        }), {
        "errorHolder": [],
        "pickup-search-value-0": "",
        "dropoff-search-value-0": "",
        "collecting-pickup-points-0": [],
        "collecting-dropoff-points-0": [],
        //focus
        "pickup-search-focus-0": false,
        "dropoff-search-focus-0": false,
        "pickup-search-loading-0": false,
        "dropoff-search-loading-0": false,
        //quotation loading
        "quotation-loading": false
    });
    let { errorHolder  } = internalState;
    const checkValidation = (e)=>{
        let errorHolder = (0,reservationSchemeValidator/* reservationSchemeValidator */.n)({
            reservations,
            appData
        }, {
            checkTransferDetails: true
        });
        setInternalState({
            errorHolder
        });
        if (errorHolder.status === 200) router.push(`${language === "en" ? "/payment-details" : `${language}/payment-details`}`);
        if (reservations[0].selectedPickupPoints.length === 0) {
            setErrorPickUpSelectBox(true);
        } else {
            setErrorPickUpSelectBox(false);
        }
        if (reservations[0].selectedDropoffPoints.length === 0) {
            setErrorDropoffSelectBox(true);
        } else {
            setErrorDropoffSelectBox(false);
        }
    };
    //for passengers information
    const onchangeHandler = (e, index)=>{
        let { name , value  } = e.target;
        //hinder user  to add some Characters
        if ((0,ifHasUnwantedCharacters/* ifHasUnwantedCharacters */.$)(value)) return;
        if ([
            "firstname",
            "email"
        ].includes(name)) dispatch({
            type: "SET_PASSEGER_DETAILS",
            data: {
                name,
                value,
                index,
                updateBothJourneyCheckBox: passengerDetailsStatus
            }
        });
        if ([
            "passengersNumber",
            "specialRequests"
        ].includes(name)) dispatch({
            type: "SET_TRANSFER_DETAILS",
            data: {
                name,
                value,
                index,
                updateBothJourneyCheckBox: passengerDetailsStatus
            }
        });
    };
    const onChangeSetDateTimeHandler = (params = {})=>{
        let { value , hourOrMinute , journeyType  } = params;
        dispatch({
            type: "SET_JOURNEY_DATETIME",
            data: {
                journeyType,
                hourOrMinute,
                value
            }
        });
    };
    //pop up modal
    const setFocusToInput = (params = {})=>{
        let { e , destination , index  } = params;
        e.target.style.opacity = 0;
        setInternalState({
            [`${destination}-search-focus-${index}`]: window.innerWidth > 990 ? false : true
        });
        setTimeout(()=>e.target.style.opacity = 1);
    };
    const handleSelectTaxiDeals = (params = {})=>{
        let { e , destination , index , items  } = params;
        let emptyValue = {
            token: "",
            pid: "",
            ptype: ""
        };
        //in case if he select select point
        if (e.target.selectedIndex === 0 && destination === "pickup") {
            setpickupIdForImage(null);
            dispatch({
                type: "ADD_NEW_POINT_AT_PATHNAME",
                data: {
                    pickupPoints: [],
                    dropoffPoints: reservations[index].selectedDropoffPoints,
                    index
                }
            });
            setErrorPickUpSelectBox(true);
            return;
        }
        if (e.target.selectedIndex === 0 && destination !== "pickup") {
            setdropoffIdFormImage(null);
            dispatch({
                type: "ADD_NEW_POINT_AT_PATHNAME",
                data: {
                    pickupPoints: reservations[index].selectedPickupPoints,
                    dropoffPoints: [],
                    index
                }
            });
            setErrorDropoffSelectBox(true);
            return;
        }
        let value = items[e.target.selectedIndex];
        let point = {
            ...value,
            ...objectDetailss[value?.pcatId]
        } //...point    flightDetails{ flightNumber="",waitingPickupTime=0}
        ;
        if (destination === "pickup") {
            if (point.pcatId === 1) {
                point = {
                    ...point,
                    flightDetails: {
                        ...point.flightDetails,
                        waitingPickupTime: ""
                    }
                };
            }
            dispatch({
                type: "ADD_NEW_POINT_AT_PATHNAME",
                data: {
                    pickupPoints: [
                        point
                    ],
                    dropoffPoints: reservations[index].selectedDropoffPoints,
                    index
                }
            });
            setpickupIdForImage(+value.pcatId);
            setErrorPickUpSelectBox(false);
        } else {
            dispatch({
                type: "ADD_NEW_POINT_AT_PATHNAME",
                data: {
                    pickupPoints: reservations[index].selectedPickupPoints,
                    dropoffPoints: [
                        point
                    ],
                    index
                }
            });
            setdropoffIdFormImage(+value.pcatId);
            setErrorDropoffSelectBox(false);
        }
    };
    const closeModal = (params = {})=>{
        let { index , destination  } = params;
        let inputField = document.getElementById("input_focused");
        inputField.style.opacity = 1;
        setInternalState({
            [`${destination}-search-focus-${index}`]: false,
            [`${destination}-search-value-${index}`]: "",
            [`collecting-${destination}-points-${index}`]: []
        });
    };
    const outsideClick = ({ destination , index  })=>{
        //it means if we have seggested points then it will work otherwise it is nt
        if (!Array.isArray(internalState[`collecting-${destination}-points-${index}`])) setInternalState({
            [`collecting-${destination}-points-${index}`]: [],
            [`${destination}-search-focus-${index}`]: false
        });
    };
    const onChangeHanler = (params = {})=>{
        let { index , value , destination  } = params;
        let { passengerDetails: { token: passengerDetailsToken  }  } = reservations[0];
        //hinder user  to add some Characters
        if ((0,ifHasUnwantedCharacters/* ifHasUnwantedCharacters */.$)(value)) return;
        setInternalState({
            [`${destination}-search-value-${index}`]: value
        });
        if (value.length > 2) {
            (async ()=>{
                //set input loading to true
                setInternalState({
                    [`${destination}-search-loading-${index}`]: true
                });
                let log = await collectPointsAsync({
                    value,
                    reducerSessionToken,
                    language
                });
                let { status , result , "session-token": sessionToken = "" , token  } = log;
                if (status == 200) {
                    setInternalState({
                        [`${destination}-search-loading-${index}`]: false
                    });
                    //if we dont have passengerDetailsToken then save token on reservation objects;s passenger details
                    if (!passengerDetailsToken) dispatch({
                        type: "SET_TOKEN_TO_PASSENGERDETAILS",
                        data: {
                            token
                        }
                    });
                    //check if session doesnt exist then  set session token to the reducer
                    if (!reducerSessionToken) dispatch({
                        type: "SET_SESSION_TOKEN",
                        data: {
                            sessionToken
                        }
                    });
                    setInternalState({
                        [`collecting-${destination}-points-${index}`]: result
                    });
                } else {
                    setInternalState({
                        [`collecting-${destination}-points-${index}`]: {}
                    });
                    setInternalState({
                        [`${destination}-search-loading-${index}`]: false
                    });
                }
            })();
        } else {
            //reset collecting points
            setInternalState({
                [`collecting-${destination}-points-${index}`]: []
            });
        }
    };
    const handleCountry = (country, countryData)=>{};
    //if we have one point then we allow to see flight number wainting time on the box
    (0,external_react_.useEffect)(()=>{
        if (quotations[0]?.taxiDeal?.pickupPoints?.length <= 1) {
            setpickupIdForImage(quotations[0]?.taxiDeal?.pickupPoints[0]?.pcatId);
        }
        if (quotations[0]?.taxiDeal?.dropoffPoints?.length <= 1) {
            setdropoffIdFormImage(quotations[0]?.taxiDeal?.dropoffPoints[0]?.pcatId);
        }
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(GlobalLayout/* default */.Z, {
        keywords: keywords,
        title: title,
        description: description,
        footerbggray: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: `${(transfer_details_styles_module_default()).tr_details} page`,
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${(transfer_details_styles_module_default()).tr_details_section} page_section`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `${(transfer_details_styles_module_default()).tr_details_section_container} page_section_container`,
                    children: [
                        quotations[0].taxiDeal ? // !isTaxideal true
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (transfer_details_styles_module_default()).taxideals_subcontainer,
                            children: quotations[0]?.taxiDeal ? reservations.map((obj, index)=>{
                                let reservationError = errorHolder.status === 403 && Array.isArray(errorHolder.reservations) ? errorHolder.reservations[index] : {};
                                let { transferDetails , selectedPickupPoints , quotation , selectedDropoffPoints , passengerDetails  } = obj;
                                let { transferDateTimeString , passengersNumber , specialRequests  } = transferDetails;
                                let { phone , email , firstname  } = passengerDetails;
                                const [splitedHour, splitedMinute] = (0,splitHelper/* splitDateTimeStringIntoHourAndMinute */.D)(transferDateTimeString) || [];
                                const [splitedDate] = (0,splitHelper/* splitDateTimeStringIntoDate */.h)(transferDateTimeString) || [];
                                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: `${(transfer_details_styles_module_default()).taxideals_subcontainer_content} ${direction}`,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (transfer_details_styles_module_default()).taxideals_subcontainer_content_points_and_passengerdetails,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: `${(transfer_details_styles_module_default()).points} ${direction}`,
                                                    direction: String(direction === "rtl"),
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                            children: appData?.words["seGoingDetails"]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: `${(transfer_details_styles_module_default()).search_menu} ${(transfer_details_styles_module_default()).first_column}`,
                                                            children: [
                                                                !selectedPickupPoints.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: direction,
                                                                    children: `Full pickup address at ${quotations[0].taxiDeal.pickup}`
                                                                }) : /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {}),
                                                                selectedPickupPoints.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: ` ${direction}`,
                                                                    children: appData?.words["strPickupPoints"]
                                                                }) : /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {}),
                                                                quotations[index]?.taxiDeal?.pickupPoints?.length <= 1 && selectedPickupPoints.length === 1 && /*#__PURE__*/ jsx_runtime_.jsx(SelectedPointsOnHomePage/* default */.Z, {
                                                                    hasOneItem: quotations[index]?.taxiDeal?.pickupPoints?.length === 1,
                                                                    isTaxiDeal: true,
                                                                    index: index,
                                                                    destination: "pickup",
                                                                    points: selectedPickupPoints
                                                                }),
                                                                quotations[index]?.taxiDeal?.pickupPoints.length > 1 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    style: {
                                                                        border: errorPickUpSelectBox ? "1px solid red" : ""
                                                                    },
                                                                    className: (transfer_details_styles_module_default()).taxideals_select_div,
                                                                    direction: String(direction === "rtl"),
                                                                    title: selectedPickupPoints[0]?.address,
                                                                    children: [
                                                                        imageObjects && pickupIdForImage && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                            className: (transfer_details_styles_module_default()).point_image,
                                                                            src: `${env/* default.apiDomain */.Z.apiDomain}${imageObjects[pickupIdForImage]}`,
                                                                            alt: selectedPickupPoints[0]?.address
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("select", {
                                                                            className: (transfer_details_styles_module_default()).taxideals_select,
                                                                            defaultValue: `${selectedPickupPoints?.[index]?.address ? `${selectedPickupPoints?.[index]?.address}` : "--- select pickup point ---`"}`,
                                                                            disabled: internalState[`quotation-loading`],
                                                                            onChange: (e)=>handleSelectTaxiDeals({
                                                                                    e,
                                                                                    destination: "pickup",
                                                                                    index,
                                                                                    items: [
                                                                                        {
                                                                                            address: `--- select pickup point ---`
                                                                                        },
                                                                                        ...quotations[index]?.taxiDeal?.pickupPoints
                                                                                    ]
                                                                                }),
                                                                            children: [
                                                                                {
                                                                                    address: `--- select pickup point ---`
                                                                                },
                                                                                ...quotations[index]?.taxiDeal?.pickupPoints
                                                                            ].map((point, index)=>{
                                                                                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("option", {
                                                                                    value: point.adress,
                                                                                    children: [
                                                                                        " ",
                                                                                        language === "en" ? point.address : point.translatedAddress
                                                                                    ]
                                                                                }, index);
                                                                            })
                                                                        })
                                                                    ]
                                                                }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(SelectedPointsOnTransferDetails, {
                                                                    isTaxiDeal: true,
                                                                    pointsError: reservationError["selectedPickupPoints"],
                                                                    selectedPoints: selectedPickupPoints,
                                                                    journeyType: index,
                                                                    type: "pickup",
                                                                    language: language
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(OutsideClickAlert/* default */.Z, {
                                                                    onOutsideClick: (e)=>outsideClick({
                                                                            destination: "pickup",
                                                                            index
                                                                        }),
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: `${(transfer_details_styles_module_default()).input_div} ${(transfer_details_styles_module_default())["search-input-container"]}`,
                                                                        f: String(internalState[`pickup-search-focus-${index}`]),
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: `${(transfer_details_styles_module_default()).popup_header} ${direction}`,
                                                                                f: String(internalState[`pickup-search-focus-${index}`]),
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                        className: `fa-solid fa-xmark ${(transfer_details_styles_module_default()).close_icon}`,
                                                                                        onClick: (e)=>closeModal({
                                                                                                index,
                                                                                                destination: "pickup"
                                                                                            })
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                                        className: direction,
                                                                                        children: [
                                                                                            appData?.words["strFromWithQuestionMark"],
                                                                                            " "
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            selectedPickupPoints.length === 0 && quotations[0]?.taxiDeal?.pickupPoints?.length === 0 ? /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                                type: "text",
                                                                                autoComplete: "off",
                                                                                id: "input_focused" //this is for scrolling top when ever we focus on mobile
                                                                                ,
                                                                                placeholder: "Please type the pickup address",
                                                                                value: internalState[`pickup-search-value-${index}`],
                                                                                autoFocus: internalState[`pickup-search-focus-${index}`],
                                                                                f: String(internalState[`pickup-search-focus-${index}`]),
                                                                                onFocus: (e)=>setFocusToInput({
                                                                                        e,
                                                                                        destination: "pickup",
                                                                                        index
                                                                                    }),
                                                                                onChange: (e)=>onChangeHanler({
                                                                                        index,
                                                                                        destination: "pickup",
                                                                                        value: e.target.value
                                                                                    }),
                                                                                className: `${direction} ${reservationError?.selectedPickupPoints?.length > 0 && !internalState[`pickup-search-value-${index}`] && selectedPickupPoints.length === 0 ? (transfer_details_styles_module_default()).error_input : ""}`
                                                                            }) : /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {}),
                                                                            internalState[`pickup-search-loading-${index}`] ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: (transfer_details_styles_module_default()).loading_div,
                                                                                popupp: String(internalState[`pickup-search-focus-${index}`]),
                                                                                direction: String(direction === "rtl"),
                                                                                children: [
                                                                                    "  ",
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx(Loading/* default */.Z, {}),
                                                                                    "  "
                                                                                ]
                                                                            }) : /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {}),
                                                                            !Array.isArray(internalState[`collecting-pickup-points-${index}`]) ? //setInternalState>>>after adding item we set input field  to empty and add extradiv to true
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(HandleSearchResults/* default */.Z, {
                                                                                isTaxiDeal: true,
                                                                                language: language,
                                                                                index: index,
                                                                                destination: "pickup",
                                                                                setInternalState: setInternalState,
                                                                                collectingPoints: internalState[`collecting-pickup-points-${index}`]
                                                                            }) : /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {})
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: `${(transfer_details_styles_module_default()).search_menu} ${(transfer_details_styles_module_default()).second_column}`,
                                                            children: [
                                                                !selectedDropoffPoints.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: direction,
                                                                    children: `Full dropoff address at ${quotations[0].taxiDeal.dropoff}`
                                                                }) : /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {}),
                                                                selectedDropoffPoints.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: `${(transfer_details_styles_module_default()).point_title} ${direction}`,
                                                                    children: appData?.words["strDropoffPoints"]
                                                                }) : /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {}),
                                                                quotations[index]?.taxiDeal?.dropoffPoints?.length <= 1 && selectedDropoffPoints.length === 1 && /*#__PURE__*/ jsx_runtime_.jsx(SelectedPointsOnHomePage/* default */.Z, {
                                                                    hasOneItem: quotations[index]?.taxiDeal?.dropoffPoints?.length === 1,
                                                                    isTaxiDeal: true,
                                                                    index: index,
                                                                    destination: "dropoff",
                                                                    points: selectedDropoffPoints
                                                                }),
                                                                quotations[index]?.taxiDeal?.dropoffPoints.length > 1 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    style: {
                                                                        border: errorDropoffSelectBox ? "1px solid red" : ""
                                                                    },
                                                                    className: (transfer_details_styles_module_default()).taxideals_select_div,
                                                                    direction: String(direction === "rtl"),
                                                                    children: [
                                                                        imageObjects && dropoffIdFormImage && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                            className: (transfer_details_styles_module_default()).point_image,
                                                                            src: `${env/* default.apiDomain */.Z.apiDomain}${imageObjects[dropoffIdFormImage]}`,
                                                                            alt: selectedDropoffPoints[0]?.address
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("select", {
                                                                            className: (transfer_details_styles_module_default()).taxideals_select,
                                                                            defaultValue: `${selectedDropoffPoints?.[index]?.address ? `${selectedDropoffPoints?.[index]?.address}` : "--- select dropoff point ---`"}`,
                                                                            disabled: internalState[`quotation-loading`],
                                                                            onChange: (e)=>handleSelectTaxiDeals({
                                                                                    e,
                                                                                    destination: "dropoff",
                                                                                    index,
                                                                                    items: [
                                                                                        {
                                                                                            address: `--- select dropoff point ---`
                                                                                        },
                                                                                        ...quotations[index]?.taxiDeal?.dropoffPoints
                                                                                    ]
                                                                                }),
                                                                            children: [
                                                                                {
                                                                                    address: `--- select dropoff point ---`
                                                                                },
                                                                                ...quotations[index]?.taxiDeal?.dropoffPoints
                                                                            ].map((point, index)=>{
                                                                                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("option", {
                                                                                    value: point.adress,
                                                                                    children: [
                                                                                        " ",
                                                                                        language === "en" ? point.address : point.translatedAddress
                                                                                    ]
                                                                                }, index);
                                                                            })
                                                                        })
                                                                    ]
                                                                }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(SelectedPointsOnTransferDetails, {
                                                                    isTaxiDeal: true,
                                                                    pointsError: reservationError["selectedDropoffPoints"],
                                                                    selectedPoints: selectedDropoffPoints,
                                                                    journeyType: index,
                                                                    type: "dropoff",
                                                                    language: language
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(OutsideClickAlert/* default */.Z, {
                                                                    onOutsideClick: (e)=>outsideClick({
                                                                            destination: "dropoff",
                                                                            index
                                                                        }),
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: `${(transfer_details_styles_module_default()).input_div} ${(transfer_details_styles_module_default())["search-input-container"]}`,
                                                                        f: String(internalState[`dropoff-search-focus-${index}`]),
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: `${(transfer_details_styles_module_default()).popup_header} ${direction}`,
                                                                                f: String(internalState[`dropoff-search-focus-${index}`]),
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                        className: `fa-solid fa-xmark ${(transfer_details_styles_module_default()).close_icon}`,
                                                                                        onClick: (e)=>closeModal({
                                                                                                index,
                                                                                                destination: "dropoff"
                                                                                            })
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                                        className: direction,
                                                                                        children: [
                                                                                            appData?.words["strWhereWithQuestionMark"],
                                                                                            " "
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            selectedDropoffPoints.length === 0 && quotations[0]?.taxiDeal?.dropoffPoints?.length === 0 ? /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                                type: "text",
                                                                                autoComplete: "off",
                                                                                id: "input_focused" //this is for scrolling top when ever we focus on mobile
                                                                                ,
                                                                                placeholder: "Please type the drop off address",
                                                                                value: internalState[`dropoff-search-value-${index}`],
                                                                                autoFocus: internalState[`dropoff-search-focus-${index}`],
                                                                                f: String(internalState[`dropoff-search-focus-${index}`]),
                                                                                onFocus: (e)=>setFocusToInput({
                                                                                        e,
                                                                                        destination: "dropoff",
                                                                                        index
                                                                                    }),
                                                                                onChange: (e)=>onChangeHanler({
                                                                                        index,
                                                                                        destination: "dropoff",
                                                                                        value: e.target.value
                                                                                    }),
                                                                                className: `${direction} ${reservationError?.selectedDropoffPoints?.length > 0 && !internalState[`dropoff-search-value-${index}`] && selectedDropoffPoints.length === 0 ? (transfer_details_styles_module_default()).error_input : ""}`
                                                                            }) : /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {}),
                                                                            internalState[`dropoff-search-loading-${index}`] ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: (transfer_details_styles_module_default()).loading_div,
                                                                                popupp: String(internalState[`dropoff-search-focus-${index}`]),
                                                                                direction: String(direction === "rtl"),
                                                                                children: [
                                                                                    "  ",
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx(Loading/* default */.Z, {}),
                                                                                    "  "
                                                                                ]
                                                                            }) : /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {}),
                                                                            !Array.isArray(internalState[`collecting-dropoff-points-${index}`]) ? /*#__PURE__*/ jsx_runtime_.jsx(HandleSearchResults/* default */.Z, {
                                                                                isTaxiDeal: true,
                                                                                language: language,
                                                                                index: index,
                                                                                destination: "dropoff",
                                                                                setInternalState: setInternalState,
                                                                                collectingPoints: internalState[`collecting-dropoff-points-${index}`]
                                                                            }) : /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {})
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: (transfer_details_styles_module_default()).date_time_together,
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: ` ${(transfer_details_styles_module_default()).search_menu} ${(transfer_details_styles_module_default()).book_input_date} ${(transfer_details_styles_module_default()).third_column}`,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            className: direction,
                                                                            children: selectedPickupPoints[0]?.pcatId === 1 ? appData?.words["seLandingDate"] : appData?.words["sePickUpDate"]
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: `${(transfer_details_styles_module_default()).date_div} ${direction === "rtl" && (transfer_details_styles_module_default()).date_div_rtl}`,
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                                type: "date",
                                                                                name: "pickup-date",
                                                                                className: direction === "rtl" ? (transfer_details_styles_module_default()).rtl : "",
                                                                                value: splitedDate,
                                                                                min: index === 0 ? (0,getDates/* currentDate */.cQ)() : reservations[0].transferDetails.transferDateTimeString.split(" ")[0],
                                                                                onChange: (e)=>onChangeSetDateTimeHandler({
                                                                                        value: e.target.value,
                                                                                        hourOrMinute: "date",
                                                                                        journeyType: index
                                                                                    })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: `fa-solid fa-calendar-days ${(transfer_details_styles_module_default()).date_picker_icon}`
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: ` ${(transfer_details_styles_module_default()).search_menu} ${(transfer_details_styles_module_default()).hours_minutes} ${(transfer_details_styles_module_default()).fourth_column}`,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            className: direction,
                                                                            children: selectedPickupPoints[0]?.pcatId === 1 ? appData?.words["seLandingTime"] : appData?.words["sePickUpTime"]
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: `${(transfer_details_styles_module_default()).select_time_div} ${direction}`,
                                                                            children: Array.from(new Array(2)).map((arr, i)=>{
                                                                                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                    className: (transfer_details_styles_module_default()).booking_form_hour_minute_wrapper,
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                            className: `fa-sharp fa-solid fa-angle-down ${direction === "rtl" ? (transfer_details_styles_module_default()).left : ""}`
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("select", {
                                                                                            defaultValue: i === 0 ? splitedHour : splitedMinute,
                                                                                            onChange: (e)=>onChangeSetDateTimeHandler({
                                                                                                    value: e.target.value,
                                                                                                    hourOrMinute: i === 0 ? "hour" : "minute",
                                                                                                    journeyType: index
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
                                                                                    ]
                                                                                }, i);
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                index === 0 || !passengerDetailsStatus && index === 1 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: (transfer_details_styles_module_default()).passenger_details_div,
                                                    children: [
                                                        index === 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                                            children: [
                                                                " ",
                                                                appData?.words["strPassengerDetails"]
                                                            ]
                                                        }) : /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                            className: (transfer_details_styles_module_default()).return_pas_details_header,
                                                            children: appData?.words["strReturnJourneyPassengerDetails"]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: (transfer_details_styles_module_default()).passenger_details,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: (transfer_details_styles_module_default()).input_div,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                                                        label: appData?.words["strFullName"],
                                                                        type: "text",
                                                                        name: "firstname",
                                                                        onChange: (e)=>onchangeHandler(e, index),
                                                                        value: firstname,
                                                                        errorMessage: reservationError?.passengerDetails?.firstname
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: (transfer_details_styles_module_default()).input_div,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                                                        label: "Email",
                                                                        type: "text",
                                                                        name: "email",
                                                                        onChange: (e)=>onchangeHandler(e, index),
                                                                        value: email,
                                                                        errorMessage: reservationError?.passengerDetails?.email
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: (transfer_details_styles_module_default()).input_div,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Select/* default */.Z, {
                                                                        label: "Number of passengers",
                                                                        name: "passengersNumber",
                                                                        onChange: (e)=>onchangeHandler(e, index),
                                                                        value: passengersNumber,
                                                                        data: carObject[quotation.carId]?.pax
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: `${(transfer_details_styles_module_default()).input_div} ${direction === "rtl" ? "phone_input_direction" : ""}`,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_phone_input_2_default()), {
                                                                        className: `phone_input ${direction === "rtl" ? "phone_input_direction" : ""}`,
                                                                        value: phone,
                                                                        onChange: (value, selectedCountry)=>handleOnChangeNumberInput(value, selectedCountry, index, "phone"),
                                                                        country: country.toLowerCase(),
                                                                        inputProps: {
                                                                            name: "phone",
                                                                            required: true,
                                                                            style: {
                                                                                border: reservationError?.passengerDetails?.phone ? "1px solid red" : " 1px solid #ced4da"
                                                                            }
                                                                        },
                                                                        onCountryChange: handleCountry
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }) : /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: (transfer_details_styles_module_default()).textarea_div,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Textarea/* default */.Z, {
                                                        isTaxiDeal: true,
                                                        label: appData?.words["strSpecialRequestsTitle"],
                                                        name: "specialRequests",
                                                        value: specialRequests,
                                                        onChange: (e)=>onchangeHandler(e, index)
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: ` ${direction === "rtl" ? (transfer_details_styles_module_default()).directionbuttons : (transfer_details_styles_module_default()).buttons}  ${quotations[0]?.taxiDeal ? (transfer_details_styles_module_default()).taxideal_buttons : ""}`,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: (transfer_details_styles_module_default()).left,
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                                    href: `${localStorage?.getItem("path") ? localStorage?.getItem("path") : "/"}`,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                            className: "btn btn_primary",
                                                                            children: appData?.words["strGoBack"]
                                                                        }),
                                                                        " "
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                    onClick: (e)=>checkValidation(e),
                                                                    className: "btn btn_primary",
                                                                    children: appData?.words["strNext"]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: (transfer_details_styles_module_default()).right
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(elements_TransferJourneySummaryPanel, {
                                            isTaxiDeal: true,
                                            index: index,
                                            splitedHour: splitedHour,
                                            splitedMinute: splitedMinute,
                                            splitedDate: splitedDate,
                                            quotation: quotation,
                                            selectedDropoffPoints: selectedDropoffPoints,
                                            selectedPickupPoints: selectedPickupPoints
                                        })
                                    ]
                                }, index);
                            }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
                        }) : // !in case client comes from normal way to transfer details
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (transfer_details_styles_module_default()).transferdetails_subcontainer,
                            id: "main_container",
                            children: reservations.map((obj, index)=>{
                                let reservationError = errorHolder.status === 403 && Array.isArray(errorHolder.reservations) ? errorHolder.reservations[index] : {};
                                let { transferDetails , passengerDetails , quotation , selectedPickupPoints , selectedDropoffPoints  } = obj;
                                let { transferDateTimeString , passengersNumber , specialRequests  } = transferDetails;
                                let { phone , email , firstname  } = passengerDetails;
                                const [splitedHour, splitedMinute] = (0,splitHelper/* splitDateTimeStringIntoHourAndMinute */.D)(transferDateTimeString) || [];
                                const [splitedDate] = (0,splitHelper/* splitDateTimeStringIntoDate */.h)(transferDateTimeString) || [];
                                //passenger details errors
                                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: `${(transfer_details_styles_module_default()).transferdetails_subcontainer_content} ${direction}`,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: `${(transfer_details_styles_module_default()).transferdetails_subcontainer_content_points_and_passengerdetails} ${quotations[0]?.taxiDeal ? (transfer_details_styles_module_default()).details_panel_taxideal : ""}`,
                                                    children: [
                                                        index === 0 || !passengerDetailsStatus && index === 1 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: (transfer_details_styles_module_default()).passenger_details_div,
                                                            children: [
                                                                index === 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                                                    children: [
                                                                        " ",
                                                                        appData?.words["strPassengerDetails"]
                                                                    ]
                                                                }) : /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                    className: (transfer_details_styles_module_default()).return_pas_details_header,
                                                                    children: appData?.words["strReturnJourneyPassengerDetails"]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: (transfer_details_styles_module_default()).passenger_details,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: (transfer_details_styles_module_default()).input_div,
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                                                                label: appData?.words["strFullName"],
                                                                                type: "text",
                                                                                name: "firstname",
                                                                                onChange: (e)=>onchangeHandler(e, index),
                                                                                value: firstname,
                                                                                errorMessage: reservationError?.passengerDetails?.firstname
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: (transfer_details_styles_module_default()).input_div,
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                                                                label: "Email",
                                                                                type: "text",
                                                                                name: "email",
                                                                                onChange: (e)=>onchangeHandler(e, index),
                                                                                value: email,
                                                                                errorMessage: reservationError?.passengerDetails?.email
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: (transfer_details_styles_module_default()).input_div,
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Select/* default */.Z, {
                                                                                label: "Number of passengers",
                                                                                name: "passengersNumber",
                                                                                onChange: (e)=>onchangeHandler(e, index),
                                                                                value: passengersNumber,
                                                                                data: carObject[quotation.carId]?.pax
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: (transfer_details_styles_module_default()).input_div,
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_phone_input_2_default()), {
                                                                                className: `phone_input ${direction === "rtl" ? "phone_input_direction" : ""}`,
                                                                                value: phone,
                                                                                onChange: (value, selectedCountry)=>handleOnChangeNumberInput(value, selectedCountry, index, "phone"),
                                                                                country: country.toLowerCase(),
                                                                                inputProps: {
                                                                                    name: "phone",
                                                                                    required: true,
                                                                                    style: {
                                                                                        border: reservationError?.passengerDetails?.phone ? "1px solid red" : " 1px solid #ced4da"
                                                                                    }
                                                                                },
                                                                                onCountryChange: handleCountry
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }) : /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {}),
                                                        quotations[0]?.taxiDeal ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: (transfer_details_styles_module_default()).selected_points_details,
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                                                    children: [
                                                                        "   ",
                                                                        index === 0 ? appData?.words["seGoingDetails"] : appData?.words["seReturnDetails"],
                                                                        "  "
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: (transfer_details_styles_module_default()).selecteditems,
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: `${(transfer_details_styles_module_default()).points} ${(transfer_details_styles_module_default()).selectedlist_points_left}`,
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                                    className: (transfer_details_styles_module_default()).points_header,
                                                                                    children: "Selected Pick Up points"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx(SelectedPointsOnTransferDetails, {
                                                                                    pointsError: reservationError["selectedPickupPoints"],
                                                                                    selectedPoints: selectedPickupPoints,
                                                                                    journeyType: index,
                                                                                    type: "pickup",
                                                                                    language: language
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: `${(transfer_details_styles_module_default()).points} ${(transfer_details_styles_module_default()).selectedlist_points_right}`,
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                                    className: (transfer_details_styles_module_default()).points_header,
                                                                                    children: "Selected Drop Off points"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx(SelectedPointsOnTransferDetails, {
                                                                                    pointsError: reservationError["selectedDropoffPoints"],
                                                                                    selectedPoints: selectedDropoffPoints,
                                                                                    journeyType: index,
                                                                                    type: "dropoff",
                                                                                    language: language
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: (transfer_details_styles_module_default()).textarea_div,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Textarea/* default */.Z, {
                                                                label: appData?.words["strSpecialRequestsTitle"],
                                                                name: "specialRequests",
                                                                value: specialRequests,
                                                                onChange: (e)=>onchangeHandler(e, index)
                                                            })
                                                        }),
                                                        index === 1 ? /*#__PURE__*/ jsx_runtime_.jsx(CheckBox["default"], {
                                                            direction: direction,
                                                            textSame: appData?.words["strPassengerDetailsCheckBox"],
                                                            textNotSame: ""
                                                        }) : /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {}),
                                                        index === 1 || index === 0 && +journeyType === 0 ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: ` ${direction === "rtl" ? (transfer_details_styles_module_default()).directionbuttons : (transfer_details_styles_module_default()).buttons}  ${quotations[0]?.taxiDeal ? (transfer_details_styles_module_default()).taxideal_buttons : ""}`,
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: (transfer_details_styles_module_default()).left,
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                                        href: `${localStorage?.getItem("path") ? localStorage?.getItem("path") : "/"}`,
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                                className: "btn btn_primary",
                                                                                children: appData?.words["strGoBack"]
                                                                            }),
                                                                            " "
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                        onClick: (e)=>checkValidation(e),
                                                                        className: "btn btn_primary",
                                                                        children: appData?.words["strNext"]
                                                                    })
                                                                ]
                                                            })
                                                        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
                                                    ]
                                                }),
                                                quotations[0].taxiDeal ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}) : /*#__PURE__*/ jsx_runtime_.jsx(elements_TransferJourneySummaryPanel, {
                                                    journeyType: journeyType,
                                                    index: index,
                                                    splitedHour: splitedHour,
                                                    splitedMinute: splitedMinute,
                                                    splitedDate: splitedDate,
                                                    quotation: quotation,
                                                    selectedDropoffPoints: selectedDropoffPoints,
                                                    selectedPickupPoints: selectedPickupPoints
                                                })
                                            ]
                                        }),
                                        index === 1 || index === 0 && +journeyType === 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: `${direction === "rtl" ? (transfer_details_styles_module_default()).directionbuttons_for_gap : (transfer_details_styles_module_default()).buttons_for_gap}  ${quotations[0]?.taxiDeal ? (transfer_details_styles_module_default()).taxideal_buttons : ""}`,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: (transfer_details_styles_module_default()).left
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: (transfer_details_styles_module_default()).right,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: `${(transfer_details_styles_module_default()).content} ${(transfer_details_styles_module_default()).summarycontent} `,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: `${(transfer_details_styles_module_default()).left_info} ${(transfer_details_styles_module_default()).acceptedcards} mt_0`,
                                                            title: "Accepted Cards for Airport Pickups London",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                className: (transfer_details_styles_module_default()).acceptedcards_img,
                                                                border: "0",
                                                                alt: "Accepted Cards for Airport Pickups London ",
                                                                src: "/images/accepted-cards10Final.png"
                                                            })
                                                        })
                                                    })
                                                })
                                            ]
                                        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
                                    ]
                                }, index);
                            })
                        }),
                        modalInfo ? /*#__PURE__*/ jsx_runtime_.jsx(InfoModal_InfoModal, {
                            content: /*#__PURE__*/ jsx_runtime_.jsx(FlightWaitingTimeContent/* default */.Z, {})
                        }) : /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {})
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const transfer_details = (TransferDetails);
const makestore = ()=>store/* default */.Z;
const wrapper = (0,external_next_redux_wrapper_.createWrapper)(makestore);
const getServerSideProps = wrapper.getServerSideProps((store)=>async ({ req , res , ...etc })=>{
        const initialLanguages = store.getState().initialReducer?.appData?.languages;
        const langs = initialLanguages.map((lang)=>lang.value);
        for(let i = 0; i < langs.length; i++){
            const lang = langs[i];
            const langUrl = lang === "en" ? "/transfer-details" : `/${lang}/transfer-details`;
            if (req.url === langUrl) {
                return {
                    redirect: {
                        destination: lang === "en" ? "/" : `/${lang}`,
                        permanent: false
                    }
                };
            }
        }
        // const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
        // const geo = geoip.lookup(ip);
        return {
            props: {
                data: ""
            }
        };
    });


/***/ }),

/***/ 4463:
/***/ (() => {



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

/***/ 5452:
/***/ ((module) => {

"use strict";
module.exports = require("react-phone-input-2");

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
var __webpack_exports__ = __webpack_require__.X(0, [9210,9505,3121,3061,4650,5277,8164,3290,3590,4140,8307,9966,8918], () => (__webpack_exec__(1877)));
module.exports = __webpack_exports__;

})();