"use strict";
exports.id = 9858;
exports.ids = [9858];
exports.modules = {

/***/ 1635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ fetchConfig)
/* harmony export */ });
// env.js
const getEnvConfig = (config)=>{
    const isDevelopment = false; // localohst -> true || live -> false
    return {
        websiteDomain: isDevelopment ? "http://localhost:7000" : "https://www.heathrow-gatwick-transfers.com",
        apiDomain: config.API_SERVER_ORIGIN || "https://api.london-tech.com",
        status: {
            success: 200,
            error: 403,
            success: 200,
            badRequest: 400,
            unauthorized: 401,
            forbidden: 403,
            methodNotAllowed: 405,
            notAcceptable: 406,
            internalServerError: 500
        },
        a: "Sss"
    };
};
async function fetchConfig() {
    const configFetch = await fetch("https://env.london-tech.com/configration.json");
    const config = await configFetch.json();
    return getEnvConfig(config);
} /*
          apiDomain: "https://api.london-tech.com",
apiDomain: "https://api-backup.london-tech.com",
*/ 


/***/ }),

/***/ 8348:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A4": () => (/* binding */ RESERVATION_TOKEN_UPDATED),
/* harmony export */   "Ci": () => (/* binding */ SET_ERROR_FOR_TRANSFER_DETAILS_PAGE),
/* harmony export */   "Co": () => (/* binding */ RESET_RESERVATION),
/* harmony export */   "Cz": () => (/* binding */ FETCH_LOCATIONS_REQUEST),
/* harmony export */   "DH": () => (/* binding */ GET_BOTH_TOGETHER_ERROR_QUOT),
/* harmony export */   "DR": () => (/* binding */ GET_MEET_POINT),
/* harmony export */   "EY": () => (/* binding */ UPDATE_SELECTED_ITEMS_INPUTS),
/* harmony export */   "Ef": () => (/* binding */ CANCEL__TRANSFER_JOURNEY_EDITING),
/* harmony export */   "II": () => (/* binding */ SET_POST_CODE_ADRESSES),
/* harmony export */   "KR": () => (/* binding */ EDIT_SAVE_TRANSFER_PASSENGER_VALUES),
/* harmony export */   "Ke": () => (/* binding */ SET_ERROR_IN_RETURN_DETAILS_PAGE),
/* harmony export */   "Kk": () => (/* binding */ RESET_DATA),
/* harmony export */   "L5": () => (/* binding */ EDIT_SAVE_SPECIAL_REQUESTS_TR),
/* harmony export */   "NW": () => (/* binding */ GET_BOTH_TOGETHER_QUOT_REQUEST),
/* harmony export */   "QI": () => (/* binding */ SWITCH_JOURNEY),
/* harmony export */   "RO": () => (/* binding */ GET_BOTH_TOGETHER_QUOTATIONS),
/* harmony export */   "Sb": () => (/* binding */ SET_PARAMS),
/* harmony export */   "Sr": () => (/* binding */ GET_PAYMENT_DATA),
/* harmony export */   "Su": () => (/* binding */ SET_HOUR_AND_MINUTE),
/* harmony export */   "TP": () => (/* binding */ UPDATE_PASSENGER_DETAILS_FOR_BOTH_JOURNEY),
/* harmony export */   "Tk": () => (/* binding */ SET_INITIAL_PRICE_IF_CANCELED),
/* harmony export */   "UE": () => (/* binding */ SET_PAYMENT),
/* harmony export */   "Xz": () => (/* binding */ GET_RETURN_QUOT_REQUEST),
/* harmony export */   "Y4": () => (/* binding */ GET_APP_DATA),
/* harmony export */   "YM": () => (/* binding */ SET_DATE_TIME),
/* harmony export */   "Z3": () => (/* binding */ ADD_ITEM_TO_SELECTED_LIST),
/* harmony export */   "aT": () => (/* binding */ GET_RETURN_QUOTATIONS),
/* harmony export */   "bz": () => (/* binding */ SET_QUOTATION),
/* harmony export */   "eS": () => (/* binding */ GET_TRANSFER_QUOT_REQUEST),
/* harmony export */   "ez": () => (/* binding */ SET_INITIAL_MANAGE_BOOKING_PRICE_FOR_QUOTATION_DIFFERENCE),
/* harmony export */   "fI": () => (/* binding */ GET_VALUES_FROM_ARTICLES),
/* harmony export */   "ho": () => (/* binding */ GET_RETURN_ERROR_QUOT),
/* harmony export */   "id": () => (/* binding */ SET_SEARCH_ENGINE_VALUE),
/* harmony export */   "l_": () => (/* binding */ ADD_EXTRA_INPUT_FOR_JOURNEY),
/* harmony export */   "lk": () => (/* binding */ SET_MODAL_INFO),
/* harmony export */   "pB": () => (/* binding */ DELETE_ITEM_FROM_SELECTED_LIST),
/* harmony export */   "pN": () => (/* binding */ FETCH_LOCATIONS_SUCCESS),
/* harmony export */   "p_": () => (/* binding */ GET_TRANSFER_QUOTATIONS),
/* harmony export */   "qN": () => (/* binding */ SET_ERROR_FOR_PASSENGER_DETAILS),
/* harmony export */   "qf": () => (/* binding */ GET_DATAS_FOR_EDITING),
/* harmony export */   "rZ": () => (/* binding */ FETCH_LOCATIONS_FAILURE),
/* harmony export */   "rt": () => (/* binding */ CHECKED_INPUT_FOR_RETURN),
/* harmony export */   "uV": () => (/* binding */ SET_NEW_CURRENT_QUOTATION),
/* harmony export */   "vq": () => (/* binding */ IF_HAS_BOOKED_INSIDE_QUOTATION_PAGE),
/* harmony export */   "w7": () => (/* binding */ GET_QUOT_TRANSFER_ERROR),
/* harmony export */   "xx": () => (/* binding */ SET_ERROR_IN_TRANSFER_DETAILS_PAGE)
/* harmony export */ });
/* unused harmony exports GET_QUOTATIONS_REQUEST, GET_QUOTATIONS_ERROR */
//FETCHING REQUEST AND GETTING SUGGESTIONS
const FETCH_LOCATIONS_REQUEST = " FETCH_LOCATIONS_REQUEST";
const FETCH_LOCATIONS_SUCCESS = "FETCH_LOCATIONS_SUCCESS";
const FETCH_LOCATIONS_FAILURE = "FETCH_LOCATIONS_FAILURE";
//ading item to the list
const ADD_ITEM_TO_SELECTED_LIST = "ADD_ITEM_TO_SELECTED_LIST";
const DELETE_ITEM_FROM_SELECTED_LIST = "DELETE_ITEM_FROM_SELECTED_LIST";
//getting all app datas which cars   =>    /app/en
const GET_APP_DATA = "GET_APP_DATA";
const GET_PAYMENT_DATA = "GET_PAYMENT_DATA";
//settting serach engine and updating values inside reducer
const SET_SEARCH_ENGINE_VALUE = "SET_SEARCH_ENGINE_VALUE";
//swithing types of journey
const SWITCH_JOURNEY = "SWITCH_JOURNEY";
//RESET DATAS WHENVER I WILL FOCUS OUTSIDE OF INPUT
const RESET_DATA = "RESET_DATA";
//setting datetime hour minute
const SET_DATE_TIME = "SET_DATE_TIME";
const SET_HOUR_AND_MINUTE = "SET_HOUR_AND_MINUTE";
//set params it is about error messages
const SET_PARAMS = "SET_PARAMS";
//getting quatations
const GET_QUOTATIONS_REQUEST = "GET_QUOTATIONS_REQUEST";
const GET_QUOTATIONS_ERROR = "GET_QUOTATIONS_ERROR";
const GET_TRANSFER_QUOT_REQUEST = "GET_TRANSFER_QUOT_REQUEST";
const GET_TRANSFER_QUOTATIONS = "GET_TRANSFER_QUOTATIONS";
const GET_QUOT_TRANSFER_ERROR = "GET_QUOT_TRANSFER_ERROR";
const GET_BOTH_TOGETHER_QUOTATIONS = "GET_BOTH_TOGETHER_QUOTATIONS";
const GET_BOTH_TOGETHER_QUOT_REQUEST = "GET_BOTH_TOGETHER_QUOT_REQUEST";
const GET_BOTH_TOGETHER_ERROR_QUOT = "GET_BOTH_TOGETHER_ERROR_QUOT";
const GET_RETURN_QUOTATIONS = "GET_RETURN_QUOTATIONS";
const GET_RETURN_QUOT_REQUEST = "GET_RETURN_QUOT_REQUEST";
const GET_RETURN_ERROR_QUOT = "GET_RETURN_ERROR_QUOT";
const SET_QUOTATION = "SET_QUOTATION";
const CHECKED_INPUT_FOR_RETURN = "CHECKED_INPUT_FOR_RETURN";
const IF_HAS_BOOKED_INSIDE_QUOTATION_PAGE = "IF_HAS_BOOKED_INSIDE_QUOTATION_PAGE";
//for addingextra pick or dropinputs
const ADD_EXTRA_INPUT_FOR_JOURNEY = " ADD_EXTRA_INPUT_FOR_JOURNEY";
//
//? ******************* start  update and giving error of selected items on transfer page details
//flightdetails faln onlari udpdate elyrk
const UPDATE_SELECTED_ITEMS_INPUTS = "UPDATE_SELECTED_ITEMS_INPUTS";
//FOR  TRANSFER DETAILS PAGE selected items
const SET_ERROR_IN_TRANSFER_DETAILS_PAGE = "SET_ERROR_IN_TRANSFER_DETAILS_PAGE";
const SET_ERROR_IN_RETURN_DETAILS_PAGE = "SET_ERROR_IN_RETURN_DETAILS_PAGE";
//! ******************* end of update and giving error of selected items on transfer page details
//
//? ******************* start update and giving error of passenger details
//passenger details
const UPDATE_PASSENGER_DETAILS_FOR_BOTH_JOURNEY = "UPDATE_PASSENGER_DETAILS_FOR_BOTH_JOURNEY";
const SET_ERROR_FOR_PASSENGER_DETAILS = "SET_ERROR_FOR_PASSENGER_DETAILS";
//! ******************* end of update and giving   error of passenger details
const SET_ERROR_FOR_TRANSFER_DETAILS_PAGE = "SET_ERROR_FOR_TRANSFER_DETAILS_PAGE";
const SET_POST_CODE_ADRESSES = "SET_POST_CODE_ADRESSES";
//?payment start
const SET_PAYMENT = "SET_PAYMENT";
//!payment finish
// ?Mnage booking
const GET_DATAS_FOR_EDITING = "GET_DATAS_FOR_EDITING";
const EDIT_SAVE_TRANSFER_PASSENGER_VALUES = "EDIT_SAVE_TRANSFER_PASSENGER_VALUES";
const EDIT_SAVE_SPECIAL_REQUESTS_TR = "EDIT_SAVE_SPECIAL_REQUESTS_TR";
const CANCEL__TRANSFER_JOURNEY_EDITING = "CANCEL__TRANSFER_JOURNEY_EDITING";
//!manage booking finish
//?modal ifo
const SET_MODAL_INFO = "SET_MODAL_INFO";
//get meeting point
const GET_MEET_POINT = "GET_MEET_POINT";
const GET_VALUES_FROM_ARTICLES = "GET_VALUES_FROM_ARTICLES";
const RESET_RESERVATION = "RESET_RESERVATION"; //KULLANMADIK
const SET_INITIAL_MANAGE_BOOKING_PRICE_FOR_QUOTATION_DIFFERENCE = "SET_INITIAL_MANAGE_BOOKING_PRICE_FOR_QUOTATION_DIFFERENCE";
const SET_INITIAL_PRICE_IF_CANCELED = "SET_INITIAL_PRICE_IF_CANCELED";
const RESERVATION_TOKEN_UPDATED = "RESERVATION_TOKEN_UPDATED";
const SET_NEW_CURRENT_QUOTATION = "SET_NEW_CURRENT_QUOTATION"; // kullanmadk


/***/ })

};
;