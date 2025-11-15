exports.id = 809;
exports.ids = [809];
exports.modules = {

/***/ 5600:
/***/ ((module) => {

// Exports
module.exports = {
	"form_control": "styles_form_control__aGwor",
	"form_label": "styles_form_label__021Pc",
	"select_div": "styles_select_div__S3rig",
	"select": "styles_select__9ftlU",
	"error_select": "styles_error_select__zsXuJ",
	"form_icon": "styles_form_icon__rj68b",
	"form_icon_arrow": "styles_form_icon_arrow___dbNI",
	"tr_details": "styles_tr_details__9s7vl",
	"tr_details_withpadding": "styles_tr_details_withpadding__20F05",
	"labelWhite": "styles_labelWhite__DKA6q",
	"fromBooking": "styles_fromBooking__5JqdR"
};


/***/ }),

/***/ 6347:
/***/ ((module) => {

// Exports
module.exports = {
	"selected_list": "styles_selected_list__EEKrp",
	"animate": "styles_animate__9QQXa",
	"list_container": "styles_list_container__NEWmn",
	"icons": "styles_icons__lf4oY",
	"check_button": "styles_check_button__R_ZWV",
	"delete_icon": "styles_delete_icon__Lg_Sz",
	"list": "styles_list___IOiC",
	"list_number": "styles_list_number__l2Qyw",
	"list_image": "styles_list_image__sXtfs",
	"list_description": "styles_list_description__As57L",
	"intrasferComponent": "styles_intrasferComponent__N6nhW",
	"insideInputs": "styles_insideInputs__Pu8IG",
	"insideInputs_input": "styles_insideInputs_input__1YD6G",
	"insideInputs_select": "styles_insideInputs_select__ky07z",
	"forbookingpage": "styles_forbookingpage__aXxjO",
	"fromQuotation": "styles_fromQuotation__Ot1H6"
};


/***/ }),

/***/ 7167:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_pickUpDropOffReducer_pickUpDropTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8348);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5600);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);





/**
 * @TextInput { //? value:string , onChange:function,onFocus:function,onBlur:function, name, title:string, icon:string, className:string, placeholder:string,type:string ,errorMessage:string,isLoading:boolean,default:boolean,fromTrDetails:boolean,from_Tr_with_padding:boolean,readOnly:boolean,labelWhite:boolean,infoForFlight:boolean}
 **/ const Select = (props)=>{
    let { value , onChange =(e)=>{} , name , title ="" , icon , placeholder , errorMessage ="" , data , fromTrDetails =false , from_Tr_with_padding =false , readOnly =false , forBooking =false , defaultValue , infoForFlight =false , fromBooking =false , forFlight =false  } = props;
    const dispacth = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const setModal = ()=>{
        // console.log("ss");
        dispacth({
            type: _store_pickUpDropOffReducer_pickUpDropTypes__WEBPACK_IMPORTED_MODULE_3__/* .SET_MODAL_INFO */ .lk,
            payload: true
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().form_control)} ${fromTrDetails && (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().tr_details)} ${from_Tr_with_padding && (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().tr_details_withpadding)}
      ${fromBooking && (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().fromBooking)}
      `,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().form_label)} ${forBooking && (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().labelWhite)}`,
                children: [
                    title,
                    infoForFlight && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        onClick: setModal,
                        className: "fa-solid fa-circle-info"
                    }),
                    errorMessage ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: "required"
                    }) : ""
                ]
            }),
            " ",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().select_div)} ${errorMessage ? "error_borderr" : ""}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().form_icon)} fa-solid fa-${icon}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().form_icon_arrow)} fa-solid fa-angle-down`
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                        name: name,
                        onChange: onChange,
                        className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().select)} ${errorMessage ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().error_select) : ""}
          `,
                        defaultValue: forFlight ? value === null || value === void 0 ? void 0 : value.trim() : value,
                        disabled: readOnly,
                        children: [
                            defaultValue && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "",
                                id: 0,
                                children: placeholder
                            }),
                            Number(data) ? Array(data).fill().map((x, i)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: i + 1,
                                    children: `${i + 1}`
                                }, i);
                            }) : data === null || data === void 0 ? void 0 : data.map((d, i)=>{
                                var ref;
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: d.value,
                                    id: (d === null || d === void 0 ? void 0 : d.id) && (d === null || d === void 0 ? void 0 : d.id),
                                    selected: forFlight ? Number(defaultValue) === Number(d === null || d === void 0 ? void 0 : (ref = d.value) === null || ref === void 0 ? void 0 : ref.split(" ")[0]) : value === +(d === null || d === void 0 ? void 0 : d.id),
                                    children: d.value
                                }, i);
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Select);


/***/ }),

/***/ 809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SeletedLists)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/store/pickUpDropOffReducer/pickUpDropAction.js
var pickUpDropAction = __webpack_require__(3570);
// EXTERNAL MODULE: ./src/store/pickUpDropOffReducer/pickUpDropSelectors.js
var pickUpDropSelectors = __webpack_require__(5789);
// EXTERNAL MODULE: ./src/components/elements/TextInput/index.js + 1 modules
var TextInput = __webpack_require__(2747);
// EXTERNAL MODULE: ./src/components/elements/SeletedLists/styles.module.scss
var styles_module = __webpack_require__(6347);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: ./src/components/elements/SeletedLists/CheckForCruises.js







//bura propslar selected listeden geir
const CheckForCruises = ({ inTransferComp , item , index , journeyType , whichSelectedItem ,  })=>{
    var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10;
    const { appData , trDetailsPageError  } = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectPickUpDropOffReducer */.X7);
    const selectedPickUpPointsOneWay = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* PickUpPointsOneWayCopy */.l3);
    const selectedDropOffPointsOneWay = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* DroopOffPointsOneWayCopy */.eI);
    const selectedPickUpPointsReturn = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* PickUpPointsReturnCopy */.h_);
    const selectedDropOffPointsReturn = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* DropOffPointsReturnCopy */.z8);
    const { 0: cruiseNumber , 1: setCruiseNumber  } = (0,external_react_.useState)({
        cruiseNumber: ""
    });
    const dispatch = (0,external_react_redux_.useDispatch)();
    const objectDetailStatuses = appData === null || appData === void 0 ? void 0 : (ref = appData.pointTypeCategories) === null || ref === void 0 ? void 0 : ref.reduce((obj, item)=>({
            ...obj,
            [item.id]: JSON.parse(item.detailsStatus)
        }), []);
    const onchangeHandler = (e, pickUpOrDropOff, journeyType)=>{
        // console.log(waitingMinutes[e.target.selectedIndex].value);
        let inpValue = e.target.value;
        if (inpValue.includes('"') || inpValue.includes(`'`) || inpValue.includes("/") || inpValue.includes("\\")) {
            return;
        }
        dispatch((0,pickUpDropAction/* updateTransferDetailsInput */.kD)(e.target.value, pickUpOrDropOff, journeyType, e.target.name, whichSelectedItem, 2, item.pcatId));
        setCruiseNumber((cruiseNumber)=>({
                ...cruiseNumber,
                [e.target.name]: e.target.value
            }));
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            inTransferComp && item.pcatId === 2 && index === 0 && journeyType === 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).insideInputs,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (styles_module_default()).insideInputs_input,
                    children: ((ref1 = objectDetailStatuses[2]) === null || ref1 === void 0 ? void 0 : ref1.cruiseNumber.pickup) === 1 && /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        icon: "ship",
                        title: "Cruise Name",
                        type: "text",
                        name: "cruiseNumber",
                        value: cruiseNumber.cruiseNumber ? cruiseNumber.cruiseNumber : (ref2 = selectedPickUpPointsOneWay[whichSelectedItem]) === null || ref2 === void 0 ? void 0 : ref2.cruiseNumber,
                        fromTrDetails: true,
                        errorMessage: trDetailsPageError ? cruiseNumber.cruiseNumber.length < 1 && ((ref3 = selectedPickUpPointsOneWay[whichSelectedItem]) === null || ref3 === void 0 ? void 0 : ref3.errorMessage) : "",
                        onChange: (e)=>onchangeHandler(e, 0, 0),
                        fromBooking: true
                    })
                })
            }),
            inTransferComp && item.pcatId === 2 && index === 1 && journeyType === 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).insideInputs,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (styles_module_default()).insideInputs_input,
                    children: ((ref4 = objectDetailStatuses[2]) === null || ref4 === void 0 ? void 0 : ref4.cruiseNumber.dropoff) === 2 && /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        icon: "ship",
                        title: "Cruise Name",
                        type: "text",
                        name: "cruiseNumber",
                        value: cruiseNumber.cruiseNumber ? cruiseNumber.cruiseNumber : (ref5 = selectedDropOffPointsOneWay[whichSelectedItem]) === null || ref5 === void 0 ? void 0 : ref5.cruiseNumber,
                        fromTrDetails: true,
                        onChange: (e)=>onchangeHandler(e, 1, 0),
                        fromBooking: true
                    })
                })
            }),
            inTransferComp && item.pcatId === 2 && index === 0 && journeyType === 1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).insideInputs,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (styles_module_default()).insideInputs_input,
                    id: "sss",
                    children: ((ref6 = objectDetailStatuses[2]) === null || ref6 === void 0 ? void 0 : ref6.cruiseNumber.pickup) === 1 && /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        icon: "ship",
                        title: "Cruise Name",
                        type: "text",
                        name: "cruiseNumber",
                        value: cruiseNumber.cruiseNumber ? cruiseNumber.cruiseNumber : (ref7 = selectedPickUpPointsReturn[whichSelectedItem]) === null || ref7 === void 0 ? void 0 : ref7.cruiseNumber,
                        onChange: (e)=>onchangeHandler(e, 0, 1),
                        errorMessage: trDetailsPageError ? cruiseNumber.cruiseNumber.length < 1 && ((ref8 = selectedPickUpPointsReturn[whichSelectedItem]) === null || ref8 === void 0 ? void 0 : ref8.errorMessage) : "",
                        fromTrDetails: true
                    })
                })
            }),
            inTransferComp && item.pcatId === 2 && index === 1 && journeyType === 1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).insideInputs,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (styles_module_default()).insideInputs_input,
                    children: ((ref9 = objectDetailStatuses[2]) === null || ref9 === void 0 ? void 0 : ref9.cruiseNumber.dropoff) === 2 && /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        icon: "ship",
                        title: "Cruise Name",
                        type: "text",
                        name: "cruiseNumber",
                        value: cruiseNumber.cruiseNumber ? cruiseNumber.cruiseNumber : (ref10 = selectedDropOffPointsReturn[whichSelectedItem]) === null || ref10 === void 0 ? void 0 : ref10.cruiseNumber,
                        //
                        onChange: (e)=>onchangeHandler(e, 1, 1)
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const SeletedLists_CheckForCruises = (CheckForCruises);

;// CONCATENATED MODULE: ./src/constants/transferDetails/index.js
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
        id: i + 1,
        value: `${min} minute${min === 0 ? "" : "s"} after flight has landed`
    }));

// EXTERNAL MODULE: ./src/components/elements/Select/index.js
var Select = __webpack_require__(7167);
;// CONCATENATED MODULE: ./src/components/elements/SeletedLists/CheckForFlight.js









//bura propslar selected listeden geir
const CheckForFlight = ({ inTransferComp , item , index , journeyType , whichSelectedItem ,  })=>{
    var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10, ref11, ref12, ref13, ref14, ref15, ref16, ref17, ref18, ref19, ref20, ref21, ref22, ref23, ref24, ref25, ref26, ref27, ref28, ref29, ref30, ref31, ref32;
    const { appData , trDetailsPageError  } = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectPickUpDropOffReducer */.X7);
    const selectedPickUpPointsOneWay = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* PickUpPointsOneWayCopy */.l3);
    const selectedDropOffPointsOneWay = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* DroopOffPointsOneWayCopy */.eI);
    const selectedPickUpPointsReturn = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* PickUpPointsReturnCopy */.h_);
    const selectedDropOffPointsReturn = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* DropOffPointsReturnCopy */.z8);
    // const selectPointsOnewayCheckforFlight = useSelector(PointsOnewayCheckforFligh)
    // const selectPointsReturnCheckforFlight = useSelector(PointsReturnCheckforFligh)
    const { 0: flightDetails , 1: setFlightDetails  } = (0,external_react_.useState)({
        flightNumber: "",
        waitingPickupTime: ""
    });
    // const [indexSelected, setIndexSelected] = useState(0);
    const dispatch = (0,external_react_redux_.useDispatch)();
    const objectDetailStatuses = appData === null || appData === void 0 ? void 0 : (ref = appData.pointTypeCategories) === null || ref === void 0 ? void 0 : ref.reduce((obj, item)=>({
            ...obj,
            [item.id]: JSON.parse(item.detailsStatus)
        }), []);
    const onchangeHandler = (e, pickUpOrDropOff, journeyType)=>{
        let inpValue = e.target.value;
        if (inpValue.includes('"') || inpValue.includes(`'`) || inpValue.includes("/") || inpValue.includes("\\")) {
            return;
        }
        let sendedValue;
        if (e.target.value.length && e.target.name === "waitingPickupTime") {
            sendedValue = Number(e.target.value.split(" ")[0]);
        } else {
            sendedValue = e.target.value;
        }
        dispatch((0,pickUpDropAction/* updateTransferDetailsInput */.kD)(sendedValue, pickUpOrDropOff, journeyType, e.target.name, whichSelectedItem, 1));
        setFlightDetails((flightDetails)=>({
                ...flightDetails,
                [e.target.name]: e.target.name === "waitingPickupTime" ? Number(e.target.value.split(" ")[0]) : e.target.value
            }));
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            inTransferComp && item.pcatId === 1 && index === 0 && journeyType === 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).insideInputs,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (styles_module_default()).insideInputs_input,
                    children: [
                        ((ref1 = objectDetailStatuses[1]) === null || ref1 === void 0 ? void 0 : ref1.flightDetails.flightNumber.pickup) === 1 && /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                            title: "Flight No",
                            icon: "plane-departure",
                            type: "text",
                            name: "flightNumber",
                            //degerleri direk store da tutmadigimizdan client geri gayidanda storda olan degerleri yazdiririq
                            value: flightDetails.flightNumber ? flightDetails.flightNumber : (ref2 = selectedPickUpPointsOneWay[whichSelectedItem]) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.flightDetails) === null || ref3 === void 0 ? void 0 : ref3.flightNumber,
                            fromTrDetails: true,
                            errorMessage: trDetailsPageError ? flightDetails.flightNumber.length < 1 && ((ref4 = selectedPickUpPointsOneWay[whichSelectedItem]) === null || ref4 === void 0 ? void 0 : ref4.errorMessage) : "",
                            onChange: (e)=>onchangeHandler(e, 0, 0),
                            fromBooking: true
                        }),
                        ((ref5 = objectDetailStatuses[1]) === null || ref5 === void 0 ? void 0 : (ref6 = ref5.flightDetails) === null || ref6 === void 0 ? void 0 : ref6.waitingPickupTime.pickup) === 1 && /*#__PURE__*/ jsx_runtime_.jsx(Select/* default */.Z, {
                            icon: "plane-arrival",
                            title: "When should the driver pick you up?",
                            data: waitingMinutes,
                            name: "waitingPickupTime",
                            onChange: (e)=>onchangeHandler(e, 0, 0),
                            fromTrDetails: true,
                            //     flightDetails.flightNumber
                            // ? flightDetails.flightNumber
                            // : selectedPickUpPointsOneWay[whichSelectedItem]
                            //   ?.flightDetails?.flightNumber
                            errorMessage: trDetailsPageError ? ((ref7 = selectedPickUpPointsOneWay[whichSelectedItem]) === null || ref7 === void 0 ? void 0 : ref7.waitingTime.length) < 1 && "required" : "",
                            defaultValue: `${((ref8 = selectedPickUpPointsOneWay[whichSelectedItem]) === null || ref8 === void 0 ? void 0 : ref8.waitingTime) ? (ref9 = selectedPickUpPointsOneWay[whichSelectedItem]) === null || ref9 === void 0 ? void 0 : ref9.waitingTime : "--select--"}`,
                            value: `
                      ${(flightDetails === null || flightDetails === void 0 ? void 0 : flightDetails.waitingPickupTime) ? `${flightDetails === null || flightDetails === void 0 ? void 0 : flightDetails.waitingPickupTime} minute${+(flightDetails === null || flightDetails === void 0 ? void 0 : flightDetails.waitingPickupTime) === 0 ? "" : "s"} after flight has landed` : `${(ref10 = selectedPickUpPointsOneWay[whichSelectedItem]) === null || ref10 === void 0 ? void 0 : ref10.waitingTime} minute${+((ref11 = selectedPickUpPointsOneWay[whichSelectedItem]) === null || ref11 === void 0 ? void 0 : ref11.waitingTime) === 0 ? "" : "s"} after flight has landed`}
                      `,
                            infoForFlight: true,
                            fromBooking: true,
                            forFlight: true,
                            placeholder: "--select--"
                        })
                    ]
                })
            }),
            inTransferComp && item.pcatId === 1 && index === 1 && journeyType === 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).insideInputs,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (styles_module_default()).insideInputs_input,
                    children: ((ref12 = objectDetailStatuses[1]) === null || ref12 === void 0 ? void 0 : ref12.flightDetails.flightNumber.dropoff) === 2 && /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        title: "Flight No ",
                        icon: "plane-departure",
                        type: "text",
                        name: "flightNumber",
                        value: flightDetails.flightNumber ? flightDetails.flightNumber : (ref13 = selectedDropOffPointsOneWay[whichSelectedItem]) === null || ref13 === void 0 ? void 0 : (ref14 = ref13.flightDetails) === null || ref14 === void 0 ? void 0 : ref14.flightNumber,
                        onChange: (e)=>onchangeHandler(e, 1, 0),
                        fromTrDetails: true,
                        fromBooking: true
                    })
                })
            }),
            inTransferComp && item.pcatId === 1 && index === 0 && journeyType === 1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).insideInputs,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (styles_module_default()).insideInputs_input,
                    children: [
                        ((ref15 = objectDetailStatuses[1]) === null || ref15 === void 0 ? void 0 : ref15.flightDetails.flightNumber.pickup) === 1 && /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                            title: "Flight No",
                            icon: "plane-departure",
                            type: "text",
                            name: "flightNumber",
                            onChange: (e)=>onchangeHandler(e, 0, 1),
                            value: flightDetails.flightNumber ? flightDetails.flightNumber : (ref16 = selectedPickUpPointsReturn[whichSelectedItem]) === null || ref16 === void 0 ? void 0 : (ref17 = ref16.flightDetails) === null || ref17 === void 0 ? void 0 : ref17.flightNumber,
                            errorMessage: trDetailsPageError ? flightDetails.flightNumber.length < 1 && ((ref18 = selectedPickUpPointsReturn[whichSelectedItem]) === null || ref18 === void 0 ? void 0 : ref18.errorMessage) : "",
                            fromTrDetails: true,
                            fromBooking: true
                        }),
                        ((ref19 = objectDetailStatuses[1]) === null || ref19 === void 0 ? void 0 : (ref20 = ref19.flightDetails) === null || ref20 === void 0 ? void 0 : ref20.waitingPickupTime.pickup) === 1 && /*#__PURE__*/ jsx_runtime_.jsx(Select/* default */.Z, {
                            icon: "plane-arrival",
                            data: waitingMinutes,
                            name: "waitingPickupTime",
                            errorMessageIsMandatory: true,
                            title: "When should the driver pick you up?",
                            onChange: (e)=>onchangeHandler(e, 0, 1),
                            fromTrDetails: true,
                            infoForFlight: true,
                            fromBooking: true,
                            errorMessage: trDetailsPageError ? ((ref21 = selectedPickUpPointsReturn[whichSelectedItem]) === null || ref21 === void 0 ? void 0 : ref21.waitingTime.length) < 1 && "required" : "",
                            forFlight: true,
                            defaultValue: `${((ref22 = selectedPickUpPointsReturn[whichSelectedItem]) === null || ref22 === void 0 ? void 0 : ref22.waitingTime) ? (ref23 = selectedPickUpPointsReturn[whichSelectedItem]) === null || ref23 === void 0 ? void 0 : ref23.waitingTime : "--select--"}`,
                            value: `
                      ${(flightDetails === null || flightDetails === void 0 ? void 0 : flightDetails.waitingPickupTime) ? `${flightDetails === null || flightDetails === void 0 ? void 0 : flightDetails.waitingPickupTime} minute${+(flightDetails === null || flightDetails === void 0 ? void 0 : flightDetails.waitingPickupTime) === 0 ? "" : "s"} after flight has landed` : `${(ref24 = selectedPickUpPointsReturn[whichSelectedItem]) === null || ref24 === void 0 ? void 0 : ref24.waitingTime} minute${+((ref25 = selectedPickUpPointsReturn[whichSelectedItem]) === null || ref25 === void 0 ? void 0 : ref25.waitingTime) === 0 ? "" : "s"} after flight has landed`}
                      `,
                            placeholder: "--select--"
                        })
                    ]
                })
            }),
            inTransferComp && item.pcatId === 1 && index === 1 && journeyType === 1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).insideInputs,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (styles_module_default()).insideInputs_input,
                    children: [
                        ((ref26 = objectDetailStatuses[1]) === null || ref26 === void 0 ? void 0 : ref26.flightDetails.flightNumber.dropoff) === 2 && /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                            title: "Flight No",
                            icon: "plane-departure",
                            type: "text",
                            name: "flightNumber",
                            onChange: (e)=>onchangeHandler(e, 1, 1),
                            value: flightDetails.flightNumber ? flightDetails.flightNumber : (ref27 = selectedDropOffPointsReturn[whichSelectedItem]) === null || ref27 === void 0 ? void 0 : (ref28 = ref27.flightDetails) === null || ref28 === void 0 ? void 0 : ref28.flightNumber,
                            errorMessageIsMandatory: false,
                            fromTrDetails: true
                        }),
                        ((ref29 = objectDetailStatuses[1]) === null || ref29 === void 0 ? void 0 : (ref30 = ref29.flightDetails) === null || ref30 === void 0 ? void 0 : ref30.waitingPickupTime.droppoff) === 2 && /*#__PURE__*/ jsx_runtime_.jsx(Select/* default */.Z, {
                            icon: "plane-arrival",
                            title: "When should the driver dropp you off?",
                            data: waitingMinutes,
                            errorMessageIsMandatory: true,
                            onChange: (e)=>onchangeHandler(e, 1, 1),
                            fromTrDetails: true,
                            value: flightDetails.waitingPickupTime > 0 ? flightDetails.waitingPickupTime : `${(ref31 = selectedDropOffPointsReturn[whichSelectedItem]) === null || ref31 === void 0 ? void 0 : (ref32 = ref31.flightDetails) === null || ref32 === void 0 ? void 0 : ref32.waitingPickupTime} minutes`
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const SeletedLists_CheckForFlight = (CheckForFlight);

;// CONCATENATED MODULE: ./src/components/elements/SeletedLists/CheckForTrain.js







//bura propslar selected listeden geir
const CheckForTrain = ({ inTransferComp , item , index , journeyType , whichSelectedItem ,  })=>{
    var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8;
    const { appData  } = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectPickUpDropOffReducer */.X7);
    const { 0: trainNumber , 1: setTrainNumber  } = (0,external_react_.useState)({
        trainNumber: ""
    });
    const selectedPickUpPointsOneWay = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* PickUpPointsOneWayCopy */.l3);
    const selectedDropOffPointsOneWay = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* DroopOffPointsOneWayCopy */.eI);
    const selectedPickUpPointsReturn = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* PickUpPointsReturnCopy */.h_);
    const selectedDropOffPointsReturn = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* DropOffPointsReturnCopy */.z8);
    const dispatch = (0,external_react_redux_.useDispatch)();
    const objectDetailStatuses = appData === null || appData === void 0 ? void 0 : (ref = appData.pointTypeCategories) === null || ref === void 0 ? void 0 : ref.reduce((obj, item)=>({
            ...obj,
            [item.id]: JSON.parse(item.detailsStatus)
        }), []);
    const onchangeHandler = (e, pickUpOrDropOff, journeyType)=>{
        let inpValue = e.target.value;
        if (inpValue.includes('"') || inpValue.includes(`'`) || inpValue.includes("/") || inpValue.includes("\\")) {
            return;
        }
        dispatch((0,pickUpDropAction/* updateTransferDetailsInput */.kD)(e.target.value, pickUpOrDropOff, journeyType, e.target.name, whichSelectedItem, 3, item.pcatId));
        setTrainNumber((trainNumber)=>({
                ...trainNumber,
                [e.target.name]: e.target.value
            }));
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            inTransferComp && item.pcatId === 3 && index === 0 && journeyType === 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).insideInputs,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (styles_module_default()).insideInputs_input,
                    children: ((ref1 = objectDetailStatuses[3]) === null || ref1 === void 0 ? void 0 : ref1.trainNumber.pickup) === 2 && /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        icon: "train",
                        title: "Train Number",
                        type: "text",
                        name: "trainNumber",
                        value: trainNumber.trainNumber ? trainNumber.trainNumber : (ref2 = selectedPickUpPointsOneWay[whichSelectedItem]) === null || ref2 === void 0 ? void 0 : ref2.trainNumber,
                        fromTrDetails: true,
                        fromBooking: true,
                        onChange: (e)=>onchangeHandler(e, 0, 0)
                    })
                })
            }),
            inTransferComp && item.pcatId === 3 && index === 1 && journeyType === 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).insideInputs,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (styles_module_default()).insideInputs_input,
                    children: ((ref3 = objectDetailStatuses[3]) === null || ref3 === void 0 ? void 0 : ref3.trainNumber.dropoff) === 2 && /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        icon: "train",
                        title: "Train Number",
                        type: "text",
                        name: "trainNumber",
                        value: trainNumber.trainNumber ? trainNumber.trainNumber : (ref4 = selectedDropOffPointsOneWay[whichSelectedItem]) === null || ref4 === void 0 ? void 0 : ref4.trainNumber,
                        fromTrDetails: true,
                        fromBooking: true,
                        onChange: (e)=>onchangeHandler(e, 1, 0)
                    })
                })
            }),
            inTransferComp && item.pcatId === 3 && index === 0 && journeyType === 1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).insideInputs,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (styles_module_default()).insideInputs_input,
                    id: "sss",
                    children: ((ref5 = objectDetailStatuses[3]) === null || ref5 === void 0 ? void 0 : ref5.trainNumber.pickup) === 2 && /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        icon: "train",
                        title: "Train Number",
                        type: "text",
                        name: "trainNumber",
                        value: trainNumber.trainNumber ? trainNumber.trainNumber : (ref6 = selectedPickUpPointsReturn[whichSelectedItem]) === null || ref6 === void 0 ? void 0 : ref6.trainNumber,
                        onChange: (e)=>onchangeHandler(e, 0, 1),
                        fromBooking: true,
                        fromTrDetails: true
                    })
                })
            }),
            inTransferComp && item.pcatId === 3 && index === 1 && journeyType === 1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).insideInputs,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (styles_module_default()).insideInputs_input,
                    children: ((ref7 = objectDetailStatuses[3]) === null || ref7 === void 0 ? void 0 : ref7.trainNumber.dropoff) === 2 && /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        icon: "train",
                        title: "Train Number",
                        type: "text",
                        name: "trainNumber",
                        fromTrDetails: true,
                        value: trainNumber.trainNumber ? trainNumber.trainNumber : (ref8 = selectedDropOffPointsReturn[whichSelectedItem]) === null || ref8 === void 0 ? void 0 : ref8.trainNumber,
                        onChange: (e)=>onchangeHandler(e, 1, 1)
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const SeletedLists_CheckForTrain = (CheckForTrain);

// EXTERNAL MODULE: ./src/components/elements/TextArea/index.js
var TextArea = __webpack_require__(9434);
;// CONCATENATED MODULE: ./src/components/elements/SeletedLists/CheckingForPostcodes.js








const CheckingForPostcodes = ({ inTransferComp , item , index , journeyType , whichSelectedItem ,  })=>{
    var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10, ref11, ref12, ref13, ref14, ref15, ref16, ref17, ref18, ref19, ref20, ref21, ref22, ref23, ref24, ref25, ref26, ref27, ref28, ref29, ref30, ref31, ref32, ref33, ref34, ref35, ref36, ref37, ref38, ref39, ref40, ref41, ref42, ref43, ref44, ref45, ref46, ref47, ref48;
    const { appData , trDetailsPageError , postCodeAdresses  } = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectPickUpDropOffReducer */.X7);
    const { 0: postCodes , 1: setPostCodes  } = (0,external_react_.useState)([]);
    const selectedPickUpPointsOneWay = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* PickUpPointsOneWayCopy */.l3);
    const selectedDropOffPointsOneWay = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* DroopOffPointsOneWayCopy */.eI);
    const selectedPickUpPointsReturn = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* PickUpPointsReturnCopy */.h_);
    const selectedDropOffPointsReturn = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* DropOffPointsReturnCopy */.z8);
    const { 0: postCodeDetails , 1: setPostCodeDetails  } = (0,external_react_.useState)({
        id: 0,
        postCodeAddress: ""
    });
    const dispatch = (0,external_react_redux_.useDispatch)();
    const objectDetailStatuses = appData === null || appData === void 0 ? void 0 : (ref = appData.pointTypeCategories) === null || ref === void 0 ? void 0 : ref.reduce((obj, item)=>({
            ...obj,
            [item.id]: JSON.parse(item.detailsStatus)
        }), []);
    //   console.log(objectDetailStatuses);
    const onchangeHandler = (e, pickUpOrDropOff, journeyType)=>{
        var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9;
        let inpValue = e.target.value;
        if (inpValue.includes('"') || inpValue.includes(`'`) || inpValue.includes("/") || inpValue.includes("\\")) {
            return;
        }
        dispatch((0,pickUpDropAction/* updateTransferDetailsInput */.kD)((e === null || e === void 0 ? void 0 : (ref = e.target) === null || ref === void 0 ? void 0 : ref.name) === "id" ? Number(e === null || e === void 0 ? void 0 : (ref1 = e.target) === null || ref1 === void 0 ? void 0 : ref1.options[e === null || e === void 0 ? void 0 : (ref2 = e.target) === null || ref2 === void 0 ? void 0 : ref2.selectedIndex].getAttribute("id")) : 0, pickUpOrDropOff, journeyType, (e === null || e === void 0 ? void 0 : (ref3 = e.target) === null || ref3 === void 0 ? void 0 : ref3.name) === "postCodeAddress" ? e === null || e === void 0 ? void 0 : e.target.value : (ref6 = e === null || e === void 0 ? void 0 : (ref4 = e.target) === null || ref4 === void 0 ? void 0 : ref4.options[e === null || e === void 0 ? void 0 : (ref5 = e.target) === null || ref5 === void 0 ? void 0 : ref5.selectedIndex]) === null || ref6 === void 0 ? void 0 : ref6.value, whichSelectedItem, 5));
        let id = (e === null || e === void 0 ? void 0 : (ref7 = e.target) === null || ref7 === void 0 ? void 0 : ref7.name) === "id" ? Number(e === null || e === void 0 ? void 0 : (ref8 = e.target) === null || ref8 === void 0 ? void 0 : ref8.options[e === null || e === void 0 ? void 0 : (ref9 = e.target) === null || ref9 === void 0 ? void 0 : ref9.selectedIndex].getAttribute("id")) : 0;
        setPostCodeDetails((postCodeDetails)=>{
            var ref, ref1, ref2, ref3;
            return {
                ...postCodeDetails,
                id,
                postCodeAddress: (e === null || e === void 0 ? void 0 : (ref = e.target) === null || ref === void 0 ? void 0 : ref.name) === "postCodeAddress" ? e === null || e === void 0 ? void 0 : e.target.value : (ref3 = e === null || e === void 0 ? void 0 : (ref1 = e.target) === null || ref1 === void 0 ? void 0 : ref1.options[e === null || e === void 0 ? void 0 : (ref2 = e.target) === null || ref2 === void 0 ? void 0 : ref2.selectedIndex]) === null || ref3 === void 0 ? void 0 : ref3.value
            };
        });
    };
    (0,external_react_.useEffect)(()=>{
        var ref;
        let postcodes = postCodeAdresses.filter((codes)=>item.postcode === codes.postcode && codes.addresses);
        setPostCodes((ref = postcodes[0]) === null || ref === void 0 ? void 0 : ref.addresses);
    }, [
        item,
        objectDetailStatuses
    ]);
    if (postCodeDetails.id) {
        console.log("zero");
        console.log(postCodeDetails);
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            inTransferComp && item.pcatId === 5 && index === 0 && journeyType === 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).insideInputs,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (styles_module_default()).insideInputs_input,
                    children: [
                        ((ref1 = objectDetailStatuses[5]) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.postCodeDetails) === null || ref2 === void 0 ? void 0 : ref2.id.pickup) === 1 && /*#__PURE__*/ jsx_runtime_.jsx(Select/* default */.Z, {
                            icon: "thumbtack",
                            placeholder: "add a new address if not listed ",
                            data: (postCodes === null || postCodes === void 0 ? void 0 : postCodes.length) > 0 ? postCodes : postCodes,
                            name: "id",
                            onChange: (e)=>onchangeHandler(e, 0, 0),
                            defaultValue: true,
                            value: postCodeDetails.id ? postCodeDetails.id : (ref3 = selectedPickUpPointsOneWay[whichSelectedItem]) === null || ref3 === void 0 ? void 0 : (ref4 = ref3.postCodeDetails) === null || ref4 === void 0 ? void 0 : ref4.id,
                            fromTrDetails: true,
                            fromBooking: true,
                            title: "Postcode Address"
                        }),
                        ((ref5 = selectedPickUpPointsOneWay[whichSelectedItem]) === null || ref5 === void 0 ? void 0 : (ref6 = ref5.postCodeDetails) === null || ref6 === void 0 ? void 0 : ref6.id) === 0 ? ((ref7 = objectDetailStatuses[5]) === null || ref7 === void 0 ? void 0 : (ref8 = ref7.postCodeDetails) === null || ref8 === void 0 ? void 0 : ref8.postCodeAddress.pickup) === 1 && /*#__PURE__*/ jsx_runtime_.jsx(TextArea/* default */.Z, {
                            fromTrDetails: true,
                            title: "Address Description *",
                            name: "postCodeAddress",
                            icon: "id-badge",
                            onChange: (e)=>onchangeHandler(e, 0, 0),
                            value: postCodeDetails.postCodeAddress ? postCodeDetails.postCodeAddress : (ref9 = selectedPickUpPointsOneWay[whichSelectedItem]) === null || ref9 === void 0 ? void 0 : (ref10 = ref9.postCodeDetails) === null || ref10 === void 0 ? void 0 : ref10.postCodeAddress,
                            errorMessage: trDetailsPageError ? (postCodeDetails === null || postCodeDetails === void 0 ? void 0 : (ref11 = postCodeDetails.postCodeAddress) === null || ref11 === void 0 ? void 0 : ref11.length) < 1 && ((ref12 = selectedPickUpPointsOneWay[whichSelectedItem]) === null || ref12 === void 0 ? void 0 : ref12.errorMessage) : "",
                            defaultValue: true,
                            fromBooking: true
                        }) : null
                    ]
                })
            }),
            inTransferComp && item.pcatId === 5 && index === 1 && journeyType === 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).insideInputs,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (styles_module_default()).insideInputs_input,
                    children: [
                        ((ref13 = objectDetailStatuses[5]) === null || ref13 === void 0 ? void 0 : (ref14 = ref13.postCodeDetails) === null || ref14 === void 0 ? void 0 : ref14.id.dropoff) === 1 && /*#__PURE__*/ jsx_runtime_.jsx(Select/* default */.Z, {
                            icon: "thumbtack",
                            placeholder: "add a new address if not listed ",
                            data: (postCodes === null || postCodes === void 0 ? void 0 : postCodes.length) > 0 ? postCodes : postCodes,
                            name: "id",
                            onChange: (e)=>onchangeHandler(e, 1, 0),
                            defaultValue: true,
                            value: postCodeDetails.id ? postCodeDetails.id : (ref15 = selectedDropOffPointsOneWay[whichSelectedItem]) === null || ref15 === void 0 ? void 0 : (ref16 = ref15.postCodeDetails) === null || ref16 === void 0 ? void 0 : ref16.id,
                            fromTrDetails: true,
                            title: "Postcode Address",
                            fromBooking: true
                        }),
                        ((ref17 = selectedDropOffPointsOneWay[whichSelectedItem]) === null || ref17 === void 0 ? void 0 : (ref18 = ref17.postCodeDetails) === null || ref18 === void 0 ? void 0 : ref18.id) === 0 ? ((ref19 = objectDetailStatuses[5]) === null || ref19 === void 0 ? void 0 : (ref20 = ref19.postCodeDetails) === null || ref20 === void 0 ? void 0 : ref20.postCodeAddress.dropoff) === 1 && /*#__PURE__*/ jsx_runtime_.jsx(TextArea/* default */.Z, {
                            fromTrDetails: true,
                            title: "Address Description",
                            name: "postCodeAddress",
                            fromBooking: true,
                            icon: "id-badge",
                            onChange: (e)=>onchangeHandler(e, 1, 0),
                            value: postCodeDetails.postCodeAddress ? postCodeDetails.postCodeAddress : (ref21 = selectedDropOffPointsOneWay[whichSelectedItem]) === null || ref21 === void 0 ? void 0 : (ref22 = ref21.postCodeDetails) === null || ref22 === void 0 ? void 0 : ref22.postCodeAddress,
                            errorMessage: trDetailsPageError ? (postCodeDetails === null || postCodeDetails === void 0 ? void 0 : (ref23 = postCodeDetails.postCodeAddress) === null || ref23 === void 0 ? void 0 : ref23.length) < 1 && ((ref24 = selectedDropOffPointsOneWay[whichSelectedItem]) === null || ref24 === void 0 ? void 0 : ref24.errorMessage) : "",
                            defaultValue: true
                        }) : null
                    ]
                })
            }),
            inTransferComp && item.pcatId === 5 && index === 0 && journeyType === 1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).insideInputs,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (styles_module_default()).insideInputs_input,
                    children: [
                        ((ref25 = objectDetailStatuses[5]) === null || ref25 === void 0 ? void 0 : (ref26 = ref25.postCodeDetails) === null || ref26 === void 0 ? void 0 : ref26.id.pickup) === 1 && /*#__PURE__*/ jsx_runtime_.jsx(Select/* default */.Z, {
                            icon: "thumbtack",
                            placeholder: "add a new address if not listed ",
                            data: (postCodes === null || postCodes === void 0 ? void 0 : postCodes.length) > 0 ? postCodes : postCodes,
                            name: "id",
                            onChange: (e)=>onchangeHandler(e, 0, 1),
                            defaultValue: true,
                            value: postCodeDetails.id ? postCodeDetails.id : (ref27 = selectedPickUpPointsReturn[whichSelectedItem]) === null || ref27 === void 0 ? void 0 : (ref28 = ref27.postCodeDetails) === null || ref28 === void 0 ? void 0 : ref28.id,
                            fromTrDetails: true,
                            title: "Postcode Address"
                        }),
                        ((ref29 = selectedPickUpPointsReturn[whichSelectedItem]) === null || ref29 === void 0 ? void 0 : (ref30 = ref29.postCodeDetails) === null || ref30 === void 0 ? void 0 : ref30.id) === 0 ? ((ref31 = objectDetailStatuses[5]) === null || ref31 === void 0 ? void 0 : (ref32 = ref31.postCodeDetails) === null || ref32 === void 0 ? void 0 : ref32.postCodeAddress.pickup) === 1 && /*#__PURE__*/ jsx_runtime_.jsx(TextArea/* default */.Z, {
                            fromTrDetails: true,
                            title: "Address Description",
                            name: "postCodeAddress",
                            icon: "id-badge",
                            onChange: (e)=>onchangeHandler(e, 0, 1),
                            value: postCodeDetails.postCodeAddress ? postCodeDetails.postCodeAddress : (ref33 = selectedPickUpPointsReturn[whichSelectedItem]) === null || ref33 === void 0 ? void 0 : (ref34 = ref33.postCodeDetails) === null || ref34 === void 0 ? void 0 : ref34.postCodeAddress,
                            errorMessage: trDetailsPageError ? (postCodeDetails === null || postCodeDetails === void 0 ? void 0 : (ref35 = postCodeDetails.postCodeAddress) === null || ref35 === void 0 ? void 0 : ref35.length) < 1 && ((ref36 = selectedPickUpPointsReturn[whichSelectedItem]) === null || ref36 === void 0 ? void 0 : ref36.errorMessage) : "",
                            placeholder: "add a new address if not listed ",
                            defaultValue: true
                        }) : null
                    ]
                })
            }),
            inTransferComp && item.pcatId === 5 && index === 1 && journeyType === 1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).insideInputs,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (styles_module_default()).insideInputs_input,
                    children: [
                        ((ref37 = objectDetailStatuses[5]) === null || ref37 === void 0 ? void 0 : (ref38 = ref37.postCodeDetails) === null || ref38 === void 0 ? void 0 : ref38.id.dropoff) === 1 && /*#__PURE__*/ jsx_runtime_.jsx(Select/* default */.Z, {
                            icon: "plane-arrival",
                            placeholder: "add a new address if not listed ",
                            data: (postCodes === null || postCodes === void 0 ? void 0 : postCodes.length) > 0 ? postCodes : postCodes,
                            name: "id",
                            onChange: (e)=>onchangeHandler(e, 1, 1),
                            defaultValue: true,
                            value: postCodeDetails.id ? postCodeDetails.id : (ref39 = selectedDropOffPointsReturn[whichSelectedItem]) === null || ref39 === void 0 ? void 0 : (ref40 = ref39.postCodeDetails) === null || ref40 === void 0 ? void 0 : ref40.id,
                            fromTrDetails: true,
                            title: "Postcode Address"
                        }),
                        ((ref41 = selectedDropOffPointsReturn[whichSelectedItem]) === null || ref41 === void 0 ? void 0 : (ref42 = ref41.postCodeDetails) === null || ref42 === void 0 ? void 0 : ref42.id) === 0 ? ((ref43 = objectDetailStatuses[5]) === null || ref43 === void 0 ? void 0 : (ref44 = ref43.postCodeDetails) === null || ref44 === void 0 ? void 0 : ref44.postCodeAddress.dropoff) === 1 && /*#__PURE__*/ jsx_runtime_.jsx(TextArea/* default */.Z, {
                            fromTrDetails: true,
                            title: "Address Description",
                            name: "postCodeAddress",
                            icon: "id-badge",
                            onChange: (e)=>onchangeHandler(e, 1, 1),
                            value: postCodeDetails.postCodeAddress ? postCodeDetails.postCodeAddress : (ref45 = selectedDropOffPointsReturn[whichSelectedItem]) === null || ref45 === void 0 ? void 0 : (ref46 = ref45.postCodeDetails) === null || ref46 === void 0 ? void 0 : ref46.postCodeAddress,
                            errorMessage: trDetailsPageError ? (postCodeDetails === null || postCodeDetails === void 0 ? void 0 : (ref47 = postCodeDetails.postCodeAddress) === null || ref47 === void 0 ? void 0 : ref47.length) < 1 && ((ref48 = selectedDropOffPointsReturn[whichSelectedItem]) === null || ref48 === void 0 ? void 0 : ref48.errorMessage) : "",
                            placeholder: "add a new address if not listed ",
                            defaultValue: true
                        }) : null
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const SeletedLists_CheckingForPostcodes = (CheckingForPostcodes);

;// CONCATENATED MODULE: ./src/components/elements/SeletedLists/CheckForRoomNumber.js







//bura propslar selected listeden geir
const CheckForRoomNumber_CheckForCruises = ({ inTransferComp , item , index , journeyType , whichSelectedItem ,  })=>{
    var ref;
    const { appData , trDetailsPageError  } = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectPickUpDropOffReducer */.X7);
    const selectedPickUpPointsOneWay = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* PickUpPointsOneWayCopy */.l3);
    const selectedDropOffPointsOneWay = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* DroopOffPointsOneWayCopy */.eI);
    const selectedPickUpPointsReturn = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* PickUpPointsReturnCopy */.h_);
    const selectedDropOffPointsReturn = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* DropOffPointsReturnCopy */.z8);
    const { 0: roomNumber , 1: setRoomNumber  } = (0,external_react_.useState)({
        roomNumber: ""
    });
    const dispatch = (0,external_react_redux_.useDispatch)();
    const objectDetailStatuses = appData === null || appData === void 0 ? void 0 : (ref = appData.pointTypeCategories) === null || ref === void 0 ? void 0 : ref.reduce((obj, item)=>({
            ...obj,
            [item.id]: JSON.parse(item.detailsStatus)
        }), []);
    const onchangeHandler = (e, pickUpOrDropOff, journeyType)=>{
        let inpValue = e.target.value;
        if (inpValue.includes('"') || inpValue.includes(`'`) || inpValue.includes("/") || inpValue.includes("\\")) {
            return;
        }
        dispatch((0,pickUpDropAction/* updateTransferDetailsInput */.kD)(e.target.value, pickUpOrDropOff, journeyType, e.target.name, whichSelectedItem, 4, item.pcatId));
        setRoomNumber((roomNumber)=>({
                ...roomNumber,
                [e.target.name]: e.target.value
            }));
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
};
/* harmony default export */ const CheckForRoomNumber = (CheckForRoomNumber_CheckForCruises);

;// CONCATENATED MODULE: ./src/components/elements/SeletedLists/CheckPlaceOfInterest.js







//bura propslar selected listeden geir
const CheckPlaceOfInterest = ({ inTransferComp , item , index , journeyType , whichSelectedItem ,  })=>{
    var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8;
    const { appData  } = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectPickUpDropOffReducer */.X7);
    const { 0: placeOfInterest , 1: setPlaceOfInterest  } = (0,external_react_.useState)({
        "address-description": ""
    });
    const selectedPickUpPointsOneWay = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* PickUpPointsOneWayCopy */.l3);
    const selectedDropOffPointsOneWay = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* DroopOffPointsOneWayCopy */.eI);
    const selectedPickUpPointsReturn = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* PickUpPointsReturnCopy */.h_);
    const selectedDropOffPointsReturn = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* DropOffPointsReturnCopy */.z8);
    const dispatch = (0,external_react_redux_.useDispatch)();
    const objectDetailStatuses = appData === null || appData === void 0 ? void 0 : (ref = appData.pointTypeCategories) === null || ref === void 0 ? void 0 : ref.reduce((obj, item)=>({
            ...obj,
            [item.id]: JSON.parse(item.detailsStatus)
        }), []);
    const onchangeHandler = (e, pickUpOrDropOff, journeyType)=>{
        let inpValue = e.target.value;
        if (inpValue.includes('"') || inpValue.includes(`'`) || inpValue.includes("/") || inpValue.includes("\\")) {
            return;
        }
        dispatch((0,pickUpDropAction/* updateTransferDetailsInput */.kD)(e.target.value, pickUpOrDropOff, journeyType, e.target.name, whichSelectedItem, 7, item.pcatId));
        setPlaceOfInterest((placeOfInterest)=>({
                ...placeOfInterest,
                [e.target.name]: e.target.value
            }));
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            inTransferComp && item.pcatId === 7 && index === 0 && journeyType === 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).insideInputs,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (styles_module_default()).insideInputs_input,
                    children: ((ref1 = objectDetailStatuses[7]) === null || ref1 === void 0 ? void 0 : ref1["address-description"].pickup) === 2 && /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        title: "Places of Interest",
                        type: "text",
                        name: "address-description",
                        onChange: (e)=>onchangeHandler(e, 0, 0),
                        fromBooking: true,
                        icon: "id-badge",
                        value: placeOfInterest["address-description"] ? placeOfInterest["address-description"] : (ref2 = selectedPickUpPointsOneWay[whichSelectedItem]) === null || ref2 === void 0 ? void 0 : ref2["address-description"],
                        fromTrDetails: true
                    })
                })
            }),
            inTransferComp && item.pcatId === 7 && index === 1 && journeyType === 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).insideInputs,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (styles_module_default()).insideInputs_input,
                    children: ((ref3 = objectDetailStatuses[7]) === null || ref3 === void 0 ? void 0 : ref3["address-description"].dropoff) === 2 && /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        icon: "id-badge",
                        title: "Places of Interest",
                        type: "text",
                        fromBooking: true,
                        onChange: (e)=>onchangeHandler(e, 1, 0),
                        name: "address-description",
                        value: placeOfInterest["address-description"] ? placeOfInterest["address-description"] : (ref4 = selectedDropOffPointsOneWay[whichSelectedItem]) === null || ref4 === void 0 ? void 0 : ref4["address-description"],
                        fromTrDetails: true
                    })
                })
            }),
            inTransferComp && item.pcatId === 7 && index === 0 && journeyType === 1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).insideInputs,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (styles_module_default()).insideInputs_input,
                    children: ((ref5 = objectDetailStatuses[7]) === null || ref5 === void 0 ? void 0 : ref5["address-description"].pickup) === 2 && /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        icon: "id-badge",
                        fromBooking: true,
                        title: "Places of Interest",
                        type: "text",
                        name: "address-description",
                        value: placeOfInterest["address-description"] ? placeOfInterest["address-description"] : (ref6 = selectedPickUpPointsReturn[whichSelectedItem]) === null || ref6 === void 0 ? void 0 : ref6["address-description"],
                        fromTrDetails: true,
                        onChange: (e)=>onchangeHandler(e, 0, 1)
                    })
                })
            }),
            inTransferComp && item.pcatId === 7 && index === 1 && journeyType === 1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).insideInputs,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (styles_module_default()).insideInputs_input,
                    children: ((ref7 = objectDetailStatuses[7]) === null || ref7 === void 0 ? void 0 : ref7["address-description"].dropoff) === 2 && /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        icon: "id-badge",
                        title: "Places of Interest",
                        type: "text",
                        fromBooking: true,
                        name: "address-description",
                        value: placeOfInterest["address-description"] ? placeOfInterest["address-description"] : (ref8 = selectedDropOffPointsReturn[whichSelectedItem]) === null || ref8 === void 0 ? void 0 : ref8["address-description"],
                        fromTrDetails: true,
                        onChange: (e)=>onchangeHandler(e, 1, 1)
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const SeletedLists_CheckPlaceOfInterest = (CheckPlaceOfInterest);

;// CONCATENATED MODULE: ./src/components/elements/SeletedLists/CheckForCitites.js







//bura propslar selected listeden geir
const CheckForCitites = ({ inTransferComp , item , index , journeyType , whichSelectedItem ,  })=>{
    var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8;
    const { appData  } = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectPickUpDropOffReducer */.X7);
    const { 0: placeOfInterest , 1: setPlaceOfInterest  } = (0,external_react_.useState)({
        "address-description": ""
    });
    const dispatch = (0,external_react_redux_.useDispatch)();
    const selectedPickUpPointsOneWay = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* PickUpPointsOneWayCopy */.l3);
    const selectedDropOffPointsOneWay = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* DroopOffPointsOneWayCopy */.eI);
    const selectedPickUpPointsReturn = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* PickUpPointsReturnCopy */.h_);
    const selectedDropOffPointsReturn = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* DropOffPointsReturnCopy */.z8);
    const objectDetailStatuses = appData === null || appData === void 0 ? void 0 : (ref = appData.pointTypeCategories) === null || ref === void 0 ? void 0 : ref.reduce((obj, item)=>({
            ...obj,
            [item.id]: JSON.parse(item.detailsStatus)
        }), []);
    const onchangeHandler = (e, pickUpOrDropOff, journeyType)=>{
        let inpValue = e.target.value;
        if (inpValue.includes('"') || inpValue.includes(`'`) || inpValue.includes("/") || inpValue.includes("\\")) {
            return;
        }
        dispatch((0,pickUpDropAction/* updateTransferDetailsInput */.kD)(e.target.value, pickUpOrDropOff, journeyType, e.target.name, whichSelectedItem, 8, item.pcatId));
        setPlaceOfInterest((placeOfInterest)=>({
                ...placeOfInterest,
                [e.target.name]: e.target.value
            }));
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            inTransferComp && item.pcatId === 8 && index === 0 && journeyType === 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).insideInputs,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (styles_module_default()).insideInputs_input,
                    children: ((ref1 = objectDetailStatuses[8]) === null || ref1 === void 0 ? void 0 : ref1["address-description"].pickup) === 2 && /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        icon: "location-dot",
                        title: "Cities",
                        type: "text",
                        name: "address-description",
                        value: placeOfInterest["address-description"] ? placeOfInterest["address-description"] : (ref2 = selectedPickUpPointsOneWay[whichSelectedItem]) === null || ref2 === void 0 ? void 0 : ref2["address-description"],
                        fromTrDetails: true,
                        onChange: (e)=>onchangeHandler(e, 0, 0),
                        fromBooking: true
                    })
                })
            }),
            inTransferComp && item.pcatId === 8 && index === 1 && journeyType === 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).insideInputs,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (styles_module_default()).insideInputs_input,
                    children: ((ref3 = objectDetailStatuses[8]) === null || ref3 === void 0 ? void 0 : ref3["address-description"].dropoff) === 2 && /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        icon: "location-dot",
                        title: "Cities",
                        type: "text",
                        name: "address-description",
                        fromTrDetails: true,
                        value: placeOfInterest["address-description"] ? placeOfInterest["address-description"] : (ref4 = selectedDropOffPointsOneWay[whichSelectedItem]) === null || ref4 === void 0 ? void 0 : ref4["address-description"],
                        onChange: (e)=>onchangeHandler(e, 1, 0)
                    })
                })
            }),
            inTransferComp && item.pcatId === 8 && index === 0 && journeyType === 1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).insideInputs,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (styles_module_default()).insideInputs_input,
                    children: ((ref5 = objectDetailStatuses[8]) === null || ref5 === void 0 ? void 0 : ref5["address-description"].pickup) === 2 && /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        icon: "location-dot",
                        title: "Cities",
                        type: "text",
                        name: "address-description",
                        value: placeOfInterest["address-description"] ? placeOfInterest["address-description"] : (ref6 = selectedPickUpPointsReturn[whichSelectedItem]) === null || ref6 === void 0 ? void 0 : ref6["address-description"],
                        fromTrDetails: true,
                        onChange: (e)=>onchangeHandler(e, 0, 1),
                        fromBooking: true
                    })
                })
            }),
            inTransferComp && item.pcatId === 8 && index === 1 && journeyType === 1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).insideInputs,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (styles_module_default()).insideInputs_input,
                    children: ((ref7 = objectDetailStatuses[8]) === null || ref7 === void 0 ? void 0 : ref7["address-description"].dropoff) === 2 && /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        icon: "location-dot",
                        title: "Cities",
                        type: "text",
                        name: "address-description",
                        value: placeOfInterest["address-description"] ? placeOfInterest["address-description"] : (ref8 = selectedDropOffPointsReturn[whichSelectedItem]) === null || ref8 === void 0 ? void 0 : ref8["address-description"],
                        //
                        fromTrDetails: true,
                        onChange: (e)=>onchangeHandler(e, 1, 1),
                        fromBooking: true
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const SeletedLists_CheckForCitites = (CheckForCitites);

;// CONCATENATED MODULE: ./src/components/elements/SeletedLists/CheckForUniversity.js







//bura propslar selected listeden geir
const CheckForUniversity = ({ inTransferComp , item , index , journeyType , whichSelectedItem ,  })=>{
    var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8;
    const selectedPickUpPointsOneWay = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* PickUpPointsOneWayCopy */.l3);
    const selectedDropOffPointsOneWay = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* DroopOffPointsOneWayCopy */.eI);
    const selectedPickUpPointsReturn = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* PickUpPointsReturnCopy */.h_);
    const selectedDropOffPointsReturn = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* DropOffPointsReturnCopy */.z8);
    const { appData  } = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectPickUpDropOffReducer */.X7);
    const { 0: placeOfInterest , 1: setPlaceOfInterest  } = (0,external_react_.useState)({
        "address-description": ""
    });
    const dispatch = (0,external_react_redux_.useDispatch)();
    const objectDetailStatuses = appData === null || appData === void 0 ? void 0 : (ref = appData.pointTypeCategories) === null || ref === void 0 ? void 0 : ref.reduce((obj, item)=>({
            ...obj,
            [item.id]: JSON.parse(item.detailsStatus)
        }), []);
    const onchangeHandler = (e, pickUpOrDropOff, journeyType)=>{
        let inpValue = e.target.value;
        if (inpValue.includes('"') || inpValue.includes(`'`) || inpValue.includes("/") || inpValue.includes("\\")) {
            return;
        }
        dispatch((0,pickUpDropAction/* updateTransferDetailsInput */.kD)(e.target.value, pickUpOrDropOff, journeyType, e.target.name, whichSelectedItem, 9, item.pcatId));
        setPlaceOfInterest((placeOfInterest)=>({
                ...placeOfInterest,
                [e.target.name]: e.target.value
            }));
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            inTransferComp && item.pcatId === 9 && index === 0 && journeyType === 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).insideInputs,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (styles_module_default()).insideInputs_input,
                    children: ((ref1 = objectDetailStatuses[9]) === null || ref1 === void 0 ? void 0 : ref1["address-description"].pickup) === 2 && /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        icon: "building-columns",
                        title: "Universities And Colleges",
                        type: "text",
                        name: "address-description",
                        value: placeOfInterest["address-description"] ? placeOfInterest["address-description"] : (ref2 = selectedPickUpPointsOneWay[whichSelectedItem]) === null || ref2 === void 0 ? void 0 : ref2["address-description"],
                        fromTrDetails: true,
                        fromBooking: true,
                        onChange: (e)=>onchangeHandler(e, 0, 0)
                    })
                })
            }),
            inTransferComp && item.pcatId === 9 && index === 1 && journeyType === 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).insideInputs,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (styles_module_default()).insideInputs_input,
                    children: ((ref3 = objectDetailStatuses[9]) === null || ref3 === void 0 ? void 0 : ref3["address-description"].dropoff) === 2 && /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        icon: "building-columns",
                        title: "Universities And Colleges",
                        type: "text",
                        name: "address-description",
                        value: placeOfInterest["address-description"] ? placeOfInterest["address-description"] : (ref4 = selectedDropOffPointsOneWay[whichSelectedItem]) === null || ref4 === void 0 ? void 0 : ref4["address-description"],
                        fromBooking: true,
                        fromTrDetails: true,
                        onChange: (e)=>onchangeHandler(e, 1, 0)
                    })
                })
            }),
            inTransferComp && item.pcatId === 9 && index === 0 && journeyType === 1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).insideInputs,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (styles_module_default()).insideInputs_input,
                    children: ((ref5 = objectDetailStatuses[9]) === null || ref5 === void 0 ? void 0 : ref5["address-description"].pickup) === 2 && /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        icon: "building-columns",
                        title: "Universities And Colleges",
                        type: "text",
                        name: "address-description",
                        value: placeOfInterest["address-description"] ? placeOfInterest["address-description"] : (ref6 = selectedPickUpPointsReturn[whichSelectedItem]) === null || ref6 === void 0 ? void 0 : ref6["address-description"],
                        fromBooking: true,
                        fromTrDetails: true,
                        onChange: (e)=>onchangeHandler(e, 0, 1)
                    })
                })
            }),
            inTransferComp && item.pcatId === 9 && index === 1 && journeyType === 1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).insideInputs,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (styles_module_default()).insideInputs_input,
                    children: ((ref7 = objectDetailStatuses[9]) === null || ref7 === void 0 ? void 0 : ref7["address-description"].dropoff) === 2 && /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        icon: "building-columns",
                        title: "Universities And Colleges",
                        type: "text",
                        name: "address-description",
                        value: placeOfInterest["address-description"] ? placeOfInterest["address-description"] : (ref8 = selectedDropOffPointsReturn[whichSelectedItem]) === null || ref8 === void 0 ? void 0 : ref8["address-description"],
                        fromBooking: true,
                        fromTrDetails: true,
                        onChange: (e)=>onchangeHandler(e, 1, 1)
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const SeletedLists_CheckForUniversity = (CheckForUniversity);

;// CONCATENATED MODULE: ./src/components/elements/SeletedLists/CheckForOther.js







//bura propslar selected listeden geir
const CheckForOther = ({ inTransferComp , item , index , journeyType , whichSelectedItem ,  })=>{
    var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8;
    const { appData  } = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectPickUpDropOffReducer */.X7);
    const { 0: placeOfInterest , 1: setPlaceOfInterest  } = (0,external_react_.useState)({
        "address-description": ""
    });
    const selectedPickUpPointsOneWay = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* PickUpPointsOneWayCopy */.l3);
    const selectedDropOffPointsOneWay = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* DroopOffPointsOneWayCopy */.eI);
    const selectedPickUpPointsReturn = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* PickUpPointsReturnCopy */.h_);
    const selectedDropOffPointsReturn = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* DropOffPointsReturnCopy */.z8);
    const dispatch = (0,external_react_redux_.useDispatch)();
    const objectDetailStatuses = appData === null || appData === void 0 ? void 0 : (ref = appData.pointTypeCategories) === null || ref === void 0 ? void 0 : ref.reduce((obj, item)=>({
            ...obj,
            [item.id]: JSON.parse(item.detailsStatus)
        }), []);
    const onchangeHandler = (e, pickUpOrDropOff, journeyType)=>{
        let inpValue = e.target.value;
        if (inpValue.includes('"') || inpValue.includes(`'`) || inpValue.includes("/") || inpValue.includes("\\")) {
            return;
        }
        dispatch((0,pickUpDropAction/* updateTransferDetailsInput */.kD)(e.target.value, pickUpOrDropOff, journeyType, e.target.name, whichSelectedItem, 10, item.pcatId));
        setPlaceOfInterest((placeOfInterest)=>({
                ...placeOfInterest,
                [e.target.name]: e.target.value
            }));
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            inTransferComp && item.pcatId === 10 && index === 0 && journeyType === 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).insideInputs,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (styles_module_default()).insideInputs_input,
                    children: ((ref1 = objectDetailStatuses[10]) === null || ref1 === void 0 ? void 0 : ref1["address-description"].pickup) === 2 && /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        icon: "location-arrow",
                        title: "Description ",
                        type: "text",
                        name: "address-description",
                        value: placeOfInterest["address-description"] ? placeOfInterest["address-description"] : (ref2 = selectedPickUpPointsOneWay[whichSelectedItem]) === null || ref2 === void 0 ? void 0 : ref2["address-description"],
                        fromBooking: true,
                        fromTrDetails: true,
                        onChange: (e)=>onchangeHandler(e, 0, 0)
                    })
                })
            }),
            inTransferComp && item.pcatId === 10 && index === 1 && journeyType === 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).insideInputs,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (styles_module_default()).insideInputs_input,
                    children: ((ref3 = objectDetailStatuses[10]) === null || ref3 === void 0 ? void 0 : ref3["address-description"].dropoff) === 2 && /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        icon: "location-arrow",
                        title: "Description ",
                        type: "text",
                        name: "address-description",
                        value: placeOfInterest["address-description"] ? placeOfInterest["address-description"] : (ref4 = selectedDropOffPointsOneWay[whichSelectedItem]) === null || ref4 === void 0 ? void 0 : ref4["address-description"],
                        fromTrDetails: true,
                        fromBooking: true,
                        onChange: (e)=>onchangeHandler(e, 1, 0)
                    })
                })
            }),
            inTransferComp && item.pcatId === 10 && index === 0 && journeyType === 1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).insideInputs,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (styles_module_default()).insideInputs_input,
                    children: ((ref5 = objectDetailStatuses[10]) === null || ref5 === void 0 ? void 0 : ref5["address-description"].pickup) === 2 && /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        icon: "location-arrow",
                        title: "Description ",
                        type: "text",
                        name: "address-description",
                        value: placeOfInterest["address-description"] ? placeOfInterest["address-description"] : (ref6 = selectedPickUpPointsReturn[whichSelectedItem]) === null || ref6 === void 0 ? void 0 : ref6["address-description"],
                        fromBooking: true,
                        fromTrDetails: true,
                        onChange: (e)=>onchangeHandler(e, 0, 1)
                    })
                })
            }),
            inTransferComp && item.pcatId === 10 && index === 1 && journeyType === 1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).insideInputs,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (styles_module_default()).insideInputs_input,
                    children: ((ref7 = objectDetailStatuses[10]) === null || ref7 === void 0 ? void 0 : ref7["address-description"].dropoff) === 2 && /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                        icon: "location-arrow",
                        title: "Description ",
                        type: "text",
                        name: "address-description",
                        value: placeOfInterest["address-description"] ? placeOfInterest["address-description"] : (ref8 = selectedDropOffPointsReturn[whichSelectedItem]) === null || ref8 === void 0 ? void 0 : ref8["address-description"],
                        fromBooking: true,
                        fromTrDetails: true,
                        onChange: (e)=>onchangeHandler(e, 1, 1)
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const SeletedLists_CheckForOther = (CheckForOther);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/elements/SeletedLists/index.js
















//bura propslar transfer js deki journey detailsden gelir
const SelectedLists = ({ selectedItems , index , journeyType , inTransferComp , forBooking , fromQuotation , env  })=>{
    var ref;
    const { direction , appData  } = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectPickUpDropOffReducer */.X7);
    const dispatch = (0,external_react_redux_.useDispatch)();
    const imageObjects = appData === null || appData === void 0 ? void 0 : (ref = appData.pointTypeCategories) === null || ref === void 0 ? void 0 : ref.reduce((obj, item)=>({
            ...obj,
            [item.id]: item.image
        }), {});
    const router = (0,router_.useRouter)();
    const handleDelete = (item, indexOfCurrentItem)=>{
        dispatch((0,pickUpDropAction/* deleteItemFromList */.K2)(item, index, journeyType, indexOfCurrentItem));
        if (router.pathname === "/quotation" && direction === "left") {
            dispatch((0,pickUpDropAction/* gettingQuotations */.HZ)(router, 0, {
                updateInsideQuotation: true
            }));
        }
        //bunu deyiseceyik sadece return ucun edeceyik
        if (router.pathname === "/quotation" && direction === "right") {
            dispatch((0,pickUpDropAction/* gettingQuotations */.HZ)(router, 1, {
                updateInsideQuotation: true
            }));
        }
        if (router.pathname === "/managebooking") {
            dispatch((0,pickUpDropAction/* gettingQuotations */.HZ)(router, 0, {
                updateInsideQuotation: true
            }));
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.map((item, i)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `
            ${(styles_module_default()).selected_list}

            ${inTransferComp && (styles_module_default()).intrasferComponent}
            ${fromQuotation && (styles_module_default()).fromQuotation}
               ${forBooking && (styles_module_default()).forbookingpage}
            `,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (styles_module_default()).list_container,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (styles_module_default()).list,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: (styles_module_default()).list_number,
                                    children: i + 1
                                }),
                                imageObjects && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: (styles_module_default()).list_image,
                                    src: `${env.apiDomain}${imageObjects[item === null || item === void 0 ? void 0 : item.pcatId]}`,
                                    alt: item.address
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: (styles_module_default()).list_description,
                                    children: item === null || item === void 0 ? void 0 : item.address
                                }),
                                forBooking ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (styles_module_default()).icons,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: `fa fa-times sef-loc-delete ${(styles_module_default()).delete_icon}`,
                                        "aria-hidden": "true",
                                        onClick: ()=>handleDelete(item, i)
                                    })
                                }) : null,
                                !inTransferComp ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (styles_module_default()).icons,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: `fa fa-times sef-loc-delete ${(styles_module_default()).delete_icon}`,
                                            "aria-hidden": "true",
                                            onClick: ()=>handleDelete(item, i)
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: `fa-solid fa-check ${(styles_module_default()).check_button}`
                                        })
                                    ]
                                }) : null
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(SeletedLists_CheckForFlight, {
                            item: item,
                            journeyType: journeyType,
                            index: index,
                            inTransferComp: inTransferComp,
                            whichSelectedItem: i
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(SeletedLists_CheckForCruises, {
                            item: item,
                            journeyType: journeyType,
                            index: index,
                            inTransferComp: inTransferComp,
                            whichSelectedItem: i
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(SeletedLists_CheckForTrain, {
                            item: item,
                            journeyType: journeyType,
                            index: index,
                            inTransferComp: inTransferComp,
                            whichSelectedItem: i
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(CheckForRoomNumber, {
                            item: item,
                            journeyType: journeyType,
                            index: index,
                            inTransferComp: inTransferComp,
                            whichSelectedItem: i
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(SeletedLists_CheckingForPostcodes, {
                            item: item,
                            journeyType: journeyType,
                            index: index,
                            inTransferComp: inTransferComp,
                            whichSelectedItem: i
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(SeletedLists_CheckPlaceOfInterest, {
                            item: item,
                            journeyType: journeyType,
                            index: index,
                            inTransferComp: inTransferComp,
                            whichSelectedItem: i
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(SeletedLists_CheckForCitites, {
                            item: item,
                            journeyType: journeyType,
                            index: index,
                            inTransferComp: inTransferComp,
                            whichSelectedItem: i
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(SeletedLists_CheckForUniversity, {
                            item: item,
                            journeyType: journeyType,
                            index: index,
                            inTransferComp: inTransferComp,
                            whichSelectedItem: i
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(SeletedLists_CheckForOther, {
                            item: item,
                            journeyType: journeyType,
                            index: index,
                            inTransferComp: inTransferComp,
                            whichSelectedItem: i
                        })
                    ]
                })
            }, i);
        })
    });
};
/* harmony default export */ const SeletedLists = (SelectedLists);


/***/ })

};
;