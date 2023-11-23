"use strict";
exports.id = 4650;
exports.ids = [4650];
exports.modules = {

/***/ 8006:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ extractLanguage)
/* harmony export */ });
const extractLanguage = (str)=>{
    if (str?.length === 3) {
        const match = str?.match(/^\/([a-z]{2})\/?/i); //burda deyirikki get bizim /ru ile ve ya "/es ile match ol"
        if (match) {
            return match[1];
        } else {
            return null;
        }
    } else {
        const match1 = str?.match(/^\/[a-z]{2}\//i);
        if (match1) {
            return match1[0].substr(1, 2);
        } else {
            return null;
        }
    }
};


/***/ }),

/***/ 9367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cQ": () => (/* binding */ currentDate),
/* harmony export */   "nX": () => (/* binding */ currentDateForJourney),
/* harmony export */   "tV": () => (/* binding */ convertDateToMilliSecond)
/* harmony export */ });
/* unused harmony export currentDateForReturnJourney */
//if return date is behind transfer date it will show up error
//we used to compare date(with milliseconds)
const convertDateToMilliSecond = (data)=>{
    var myDate = data.split("-");
    var newDateWithMs = new Date(Number(myDate[0]), Number(myDate[1] - 1), Number(myDate[2]));
    return newDateWithMs.getTime();
};
//!  'yyyy-mm-dd HH:MM'   FOR   transferDateTimeString
const currentDateForReturnJourney = ()=>{
    //6+24 =>1 day difference
    // 6+24+24 >2 day difference
    //6+24+24+24 =>3 day difference
    let tmpDt = new Date(Date.now() + 1000 * 60 * 60 * (6 + 24));
    let year = tmpDt.getFullYear();
    let month = tmpDt.getMonth() + 1 < 10 ? `0${tmpDt.getMonth() + 1}` : tmpDt.getMonth() + 1;
    let date = tmpDt.getDate() < 10 ? `0${tmpDt.getDate()}` : tmpDt.getDate();
    let hours = tmpDt.getHours() < 10 ? `0${tmpDt.getHours()}` : tmpDt.getHours();
    if (month === "00") {
        month = "01";
    }
    let minute = "00";
    let currentDate = `${year}-${month}-${date} ${hours}:${minute}`;
    return currentDate;
};
//We use it for setting  minimum date on transfer journey
const currentDate = ()=>{
    let tmpDt = new Date(Date.now());
    let year = tmpDt.getFullYear();
    let month = tmpDt.getMonth() + 1 < 10 ? `0${tmpDt.getMonth() + 1}` : tmpDt.getMonth() + 1;
    if (month === "00") {
        month = "01";
    }
    let date = tmpDt.getDate() < 10 ? `0${tmpDt.getDate()}` : tmpDt.getDate();
    let currentDate = `${year}-${month}-${date}`;
    return currentDate;
};
//!'yyyy-mm-dd HH:MM'   FOR   transferDateTimeString
const currentDateForJourney = ()=>{
    let tmpDt = new Date(Date.now() + 1000 * 60 * 60 * 6); //6
    let year = tmpDt.getFullYear();
    let month = tmpDt.getMonth() + 1 < 10 ? `0${tmpDt.getMonth() + 1}` : tmpDt.getMonth() + 1;
    let date = tmpDt.getDate() < 10 ? `0${tmpDt.getDate()}` : tmpDt.getDate();
    let hours = tmpDt.getHours() < 10 ? `0${tmpDt.getHours()}` : tmpDt.getHours();
    let minute = "00";
    let currentDate = `${year}-${month}-${date} ${hours}:${minute}`;
    return currentDate;
};


/***/ }),

/***/ 278:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ splitDateTimeStringIntoHourAndMinute),
/* harmony export */   "h": () => (/* binding */ splitDateTimeStringIntoDate)
/* harmony export */ });
//pass trasnferdateTimeString as parametr then split it  to hour and minute
const splitDateTimeStringIntoHourAndMinute = (dateString)=>{
    return dateString.split(" ")[1]?.split(":");
};
//pass trasnferdateTimeString as parameter then split it to date
const splitDateTimeStringIntoDate = (dateString)=>{
    return dateString.split(" ");
};


/***/ }),

/***/ 4603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const isDevelopment = true; // localohst -> true || live -> false
const env = {
    websiteDomain: isDevelopment ? "http://localhost:3500" : "https://aplairtest.netlify.app",
    apiDomain: "https://api.london-tech.com",
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
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (env);


/***/ }),

/***/ 8987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ store_store)
});

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(6695);
// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__(5648);
// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__(173);
;// CONCATENATED MODULE: ./src/store/pickUpDropOffActions/SET_ADRESS_DESCRIPTION_FOR_POINTS.js
function SET_ADRESS_DESCRIPTION_FOR_POINTS(params = {}) {
    let { state , action  } = params;
    let { data: { type , index: journeyType , pointIndex , value  }  } = action;
    let newState = JSON.parse(JSON.stringify(state));
    let point = newState.reservations[journeyType][`selected${type === "pickup" ? "Pickup" : "Dropoff"}Points`][pointIndex];
    newState.reservations[journeyType][`selected${type === "pickup" ? "Pickup" : "Dropoff"}Points`][pointIndex] = {
        ...point,
        ["address-description"]: value
    };
    return newState;
}
/* harmony default export */ const pickUpDropOffActions_SET_ADRESS_DESCRIPTION_FOR_POINTS = (SET_ADRESS_DESCRIPTION_FOR_POINTS);

;// CONCATENATED MODULE: ./src/store/pickUpDropOffActions/SET_SAME_PASSENGER_DETAILS_STATUS.js
function SET_SAME_PASSENGER_DETAILS_STATUS(params = {}) {
    let { state , action  } = params;
    let { data: { status  }  } = action;
    let newState = JSON.parse(JSON.stringify(state));
    let passengerDetailsTransfer = newState.reservations[0].passengerDetails;
    let trPassenegersNumber = newState.reservations[0].transferDetails.passengersNumber;
    if (status) {
        //update all passengerdetals
        newState.reservations[1].passengerDetails = {
            ...newState.reservations[1].passengerDetails,
            ...passengerDetailsTransfer
        };
        //update only passengersNumber inside transferDetails
        newState.reservations[1].transferDetails = {
            ...newState.reservations[1].transferDetails,
            passengersNumber: trPassenegersNumber
        };
    }
    //setting new journeytype
    newState.params.passengerDetailsStatus = status;
    return newState;
}
/* harmony default export */ const pickUpDropOffActions_SET_SAME_PASSENGER_DETAILS_STATUS = (SET_SAME_PASSENGER_DETAILS_STATUS);

;// CONCATENATED MODULE: ./src/store/pickUpDropOffActions/SET_POSTCODE_DETAILS_FOR_POINTS.js
function SET_POSTCODE_DETAILS_FOR_POINTS(params = {}) {
    let { state , action  } = params;
    let { data: { type , index: journeyType , pointIndex , postCodeDetails  }  } = action;
    let newState = JSON.parse(JSON.stringify(state));
    let point = newState.reservations[journeyType][`selected${type === "pickup" ? "Pickup" : "Dropoff"}Points`][pointIndex];
    newState.reservations[journeyType][`selected${type === "pickup" ? "Pickup" : "Dropoff"}Points`][pointIndex] = {
        ...point,
        postCodeDetails: {
            ...point.postCodeDetails,
            ...postCodeDetails
        }
    };
    return newState;
}
/* harmony default export */ const pickUpDropOffActions_SET_POSTCODE_DETAILS_FOR_POINTS = (SET_POSTCODE_DETAILS_FOR_POINTS);

;// CONCATENATED MODULE: ./src/store/pickUpDropOffActions/SET_FLIGHT_DETAILS_FOR_POINTS.js
function SET_FLIGHT_DETAILS_FOR_POINTS(params = {}) {
    let { state , action  } = params;
    let { data: { type , index: journeyType , pointIndex , flightDetails  }  } = action;
    let newState = JSON.parse(JSON.stringify(state));
    let point = newState.reservations[journeyType][`selected${type === "pickup" ? "Pickup" : "Dropoff"}Points`][pointIndex];
    newState.reservations[journeyType][`selected${type === "pickup" ? "Pickup" : "Dropoff"}Points`][pointIndex] = {
        ...point,
        flightDetails: {
            ...point.flightDetails,
            ...flightDetails
        }
    };
    return newState;
}
/* harmony default export */ const pickUpDropOffActions_SET_FLIGHT_DETAILS_FOR_POINTS = (SET_FLIGHT_DETAILS_FOR_POINTS);

;// CONCATENATED MODULE: ./src/store/pickUpDropOffActions/SET_TOKEN_TO_PASSENGERDETAILS.js
function SET_TOKEN_TO_PASSENGERDETAILS(params = {}) {
    let { state , action  } = params;
    let { data: { token  }  } = action;
    let newState = JSON.parse(JSON.stringify(state));
    let { params: { journeyType  }  } = newState;
    if (parseInt(journeyType) === 0) {
        newState.reservations[0].passengerDetails.token = token;
    } else {
        newState.reservations[0].passengerDetails.token = token;
        newState.reservations[1].passengerDetails.token = token;
    }
    newState.params.tokenForArchieve = token;
    return newState;
}
/* harmony default export */ const pickUpDropOffActions_SET_TOKEN_TO_PASSENGERDETAILS = (SET_TOKEN_TO_PASSENGERDETAILS);

;// CONCATENATED MODULE: ./src/store/pickUpDropOffActions/DELETE_ITEM_FROM_SELECTEDLIST.js
function DELETE_ITEM_FROM_SELECTEDLIST(params = {}) {
    let { state , action  } = params;
    let { data: { currentIndexOfDeletedItem , index: journeyType , destination  }  } = action;
    let newState = JSON.parse(JSON.stringify(state));
    let points = newState.reservations[journeyType][`selected${destination === "pickup" ? "Pickup" : "Dropoff"}Points`];
    newState.reservations[journeyType][`selected${destination === "pickup" ? "Pickup" : "Dropoff"}Points`] = points.filter((point, i)=>i !== currentIndexOfDeletedItem);
    return newState;
}
/* harmony default export */ const pickUpDropOffActions_DELETE_ITEM_FROM_SELECTEDLIST = (DELETE_ITEM_FROM_SELECTEDLIST);

;// CONCATENATED MODULE: ./src/store/pickUpDropOffActions/SET_CRUISE_NUMBER_FOR_POINTS.js
function SET_CRUISE_NUMBER_FOR_POINTS(params = {}) {
    let { state , action  } = params;
    let { data: { type , index: journeyType , pointIndex , cruiseNumber  }  } = action;
    let newState = JSON.parse(JSON.stringify(state));
    let point = newState.reservations[journeyType][`selected${type === "pickup" ? "Pickup" : "Dropoff"}Points`][pointIndex];
    newState.reservations[journeyType][`selected${type === "pickup" ? "Pickup" : "Dropoff"}Points`][pointIndex] = {
        ...point,
        cruiseNumber
    };
    return newState;
}
/* harmony default export */ const pickUpDropOffActions_SET_CRUISE_NUMBER_FOR_POINTS = (SET_CRUISE_NUMBER_FOR_POINTS);

;// CONCATENATED MODULE: ./src/store/pickUpDropOffActions/SET_TRAIN_NUMBER_FOR_POINTS.js
function SET_TRAIN_NUMBER_FOR_POINTS(params = {}) {
    let { state , action  } = params;
    let { data: { type , index: journeyType , pointIndex , trainNumber  }  } = action;
    let newState = JSON.parse(JSON.stringify(state));
    let point = newState.reservations[journeyType][`selected${type === "pickup" ? "Pickup" : "Dropoff"}Points`][pointIndex];
    newState.reservations[journeyType][`selected${type === "pickup" ? "Pickup" : "Dropoff"}Points`][pointIndex] = {
        ...point,
        trainNumber
    };
    return newState;
}
/* harmony default export */ const pickUpDropOffActions_SET_TRAIN_NUMBER_FOR_POINTS = (SET_TRAIN_NUMBER_FOR_POINTS);

;// CONCATENATED MODULE: ./src/store/pickUpDropOffActions/CHECHK_FLIGHT_WAITING_TIME.js
function CHECHK_FLIGHT_WAITING_TIME(params = {}) {
    let { state , action  } = params;
    let { data: { journeyType  }  } = action;
    let newState = JSON.parse(JSON.stringify(state));
    let pickUpSelectedPoints = newState.reservations[journeyType].selectedPickupPoints;
    let dropOffSelectedPoints = newState.reservations[journeyType].selectedDropoffPoints;
    //changing waitingpickuptime to empty string if destination is pickup
    let newSelectedPickUpPoints = pickUpSelectedPoints.map((point, index)=>{
        if (point.pcatId === 1) {
            return point = {
                ...point,
                flightDetails: {
                    ...point.flightDetails,
                    waitingPickupTime: 0
                }
            };
        } else if (point.pcatId === 5) {
            return {
                ...point,
                postCodeDetails: {
                    ...point.postCodeDetails,
                    id: point.postCodeDetails.id ? point.postCodeDetails.id : 0
                }
            };
        } else {
            return point;
        }
    });
    let newSelectedDropoffPoints = dropOffSelectedPoints.map((point, index)=>{
        if (point.pcatId === 5) {
            return point = {
                ...point,
                postCodeDetails: {
                    ...point.postCodeDetails,
                    id: point.postCodeDetails.id ? point.postCodeDetails.id : 0
                }
            };
        } else {
            return point;
        }
    });
    newState.reservations[journeyType].selectedPickupPoints = newSelectedPickUpPoints;
    newState.reservations[journeyType].selectedDropoffPoints = newSelectedDropoffPoints;
    return newState;
}
/* harmony default export */ const pickUpDropOffActions_CHECHK_FLIGHT_WAITING_TIME = (CHECHK_FLIGHT_WAITING_TIME);

;// CONCATENATED MODULE: ./src/store/pickUpDropOffActions/SET_PAYMENT_TYPE_AND_TOKEN.js
function SET_PAYMENT_TYPE_AND_TOKEN(params = {}) {
    let { state , action  } = params;
    let { data: { token , paymentType  }  } = action;
    let newState = JSON.parse(JSON.stringify(state));
    newState.reservations.map((obj, index)=>{
        return newState.reservations[index].paymentDetails = {
            ...newState.reservations[index].paymentDetails,
            token,
            paymentType
        };
    });
    return newState;
}
/* harmony default export */ const pickUpDropOffActions_SET_PAYMENT_TYPE_AND_TOKEN = (SET_PAYMENT_TYPE_AND_TOKEN);

;// CONCATENATED MODULE: ./src/store/pickUpDropOffActions/SET_POST_CODE_ADRESSES.js
function SET_POST_CODE_ADRESSES(params = {}) {
    let { state , action  } = params;
    let { data: { result  }  } = action;
    let newState = JSON.parse(JSON.stringify(state));
    newState.params.postCodeAdresses.push(result);
    return newState;
}
/* harmony default export */ const pickUpDropOffActions_SET_POST_CODE_ADRESSES = (SET_POST_CODE_ADRESSES);

;// CONCATENATED MODULE: ./src/store/pickUpDropOffActions/SET_PASSEGER_DETAILS.js
function SET_PASSEGER_DETAILS(params = {}) {
    let { state , action  } = params;
    let { data: { name , value , index , updateBothJourneyCheckBox  }  } = action;
    let { params: { journeyType  }  } = state;
    let newState = JSON.parse(JSON.stringify(state));
    let passengerDetails = newState.reservations[index].passengerDetails;
    if (journeyType === 1 && updateBothJourneyCheckBox) {
        newState.reservations[0].passengerDetails = {
            ...passengerDetails,
            [name]: value
        };
        newState.reservations[1].passengerDetails = {
            ...passengerDetails,
            [name]: value
        };
    } else {
        newState.reservations[index].passengerDetails = {
            ...passengerDetails,
            [name]: value
        };
    }
    return newState;
}
/* harmony default export */ const pickUpDropOffActions_SET_PASSEGER_DETAILS = (SET_PASSEGER_DETAILS);

;// CONCATENATED MODULE: ./src/store/pickUpDropOffActions/SET_TRANSFER_DETAILS.js
function SET_TRANSFER_DETAILS(params = {}) {
    let { state , action  } = params;
    let { data: { name , value , index , updateBothJourneyCheckBox  }  } = action;
    let { params: { journeyType  }  } = state;
    let newState = JSON.parse(JSON.stringify(state));
    let transferDetails = newState.reservations[index].transferDetails;
    if (name === "passengersNumber") {
        if (journeyType === 1 && updateBothJourneyCheckBox) {
            newState.reservations[0].transferDetails = {
                ...transferDetails,
                [name]: parseInt(value)
            };
            newState.reservations[1].transferDetails = {
                ...transferDetails,
                [name]: parseInt(value)
            };
        } else {
            newState.reservations[index].transferDetails = {
                ...transferDetails,
                [name]: parseInt(value)
            };
        }
    } else if (name === "specialRequests") {
        newState.reservations[index].transferDetails = {
            ...transferDetails,
            [name]: value
        };
    }
    return newState;
}
/* harmony default export */ const pickUpDropOffActions_SET_TRANSFER_DETAILS = (SET_TRANSFER_DETAILS);

// EXTERNAL MODULE: ./src/helpers/getDates.js
var getDates = __webpack_require__(9367);
// EXTERNAL MODULE: ./src/helpers/splitHelper.js
var splitHelper = __webpack_require__(278);
;// CONCATENATED MODULE: ./src/store/pickUpDropOffActions/SET_JOURNEY_DATETIME.js


//when date changes :if transfer date behind return date then it will trigger
const isReturnDateLessThanTransferDate = (transferDate, returnDate)=>{
    const TRANSFER_DATE_IN_MILLISECONDS = (0,getDates/* convertDateToMilliSecond */.tV)(transferDate.split(" ")[0]);
    const RETURN_DATE_IN_MILLI_SECONDS = (0,getDates/* convertDateToMilliSecond */.tV)(returnDate?.split(" ")[0]);
    return TRANSFER_DATE_IN_MILLISECONDS >= RETURN_DATE_IN_MILLI_SECONDS;
};
const putReturnDateTimeOneHourForward = (params = {})=>{
    let { newState , value , DateTimeString , splitedMinute , splitedHour  } = params;
    //vaue => 2022-11-11
    let trDate = value;
    let returnDate = newState?.reservations[1]?.transferDetails?.transferDateTimeString.split(" ")[0];
    //If return transferDateTimeString less than trasnfer transferDateTimeString
    // then we add 1 day to returndateTimeString
    if (isReturnDateLessThanTransferDate(trDate, returnDate)) {
        const MILLISECONDS_PER_DAY = 60 * 60 * 24 * 1000;
        //TAKE TRASNFER DATE MILLISECOND ADD One day to it and assing to returnTranferDate
        const TR_DATE_IN_MILLISECONDS = (0,getDates/* convertDateToMilliSecond */.tV)(trDate);
        //Add one day to transfer date and assign to new variable
        //Wed Jan 04 2023 00:00:00 GMT+0400 (Azerbaijan Standard Time)
        let newDatee = new Date(TR_DATE_IN_MILLISECONDS + MILLISECONDS_PER_DAY);
        //arranging new date like 2022-01-01
        let year = `${newDatee.getFullYear()}`;
        let month = `${newDatee.getMonth() + 1 < 10 ? `0${newDatee.getMonth() + 1}` : newDatee.getMonth() + 1}`;
        let day = `${newDatee.getDate() < 10 ? `0${newDatee.getDate()}` : newDatee.getDate()}`;
        if (month === "00") month = "01";
        //2021-11-11  for return
        let newDatee2 = `${year}-${month}-${day}`;
        let returnDateTimeString = DateTimeString;
        returnDateTimeString = `${newDatee2} ${splitedHour}:${splitedMinute}`;
        // returnDateTimeString = trDate;
        //saving date to reservation
        newState.reservations[1].transferDetails.transferDateTimeString = returnDateTimeString;
    }
    return newState;
};
function SET_JOURNEY_DATETIME(params = {}) {
    let { state , action  } = params;
    let { data: { journeyType , hourOrMinute , value  }  } = action;
    let newState = JSON.parse(JSON.stringify(state));
    //reaching to previous dateTimeString
    let DateTimeString = newState.reservations[journeyType].transferDetails.transferDateTimeString;
    //destructing one by one
    const [splitedHour, splitedMinute] = (0,splitHelper/* splitDateTimeStringIntoHourAndMinute */.D)(DateTimeString) || [];
    const [splitedDate] = (0,splitHelper/* splitDateTimeStringIntoDate */.h)(DateTimeString) || [];
    //setting hour || minute || date  to DateTimeString
    if (hourOrMinute === "hour") DateTimeString = `${splitedDate} ${value}:${splitedMinute}`;
    if (hourOrMinute === "minute") DateTimeString = `${splitedDate} ${splitedHour}:${value}`;
    if (hourOrMinute === "date") DateTimeString = `${value} ${splitedHour}:${splitedMinute}`;
    //here we chack if client choiced both journey by newState.reservations.length > 1
    if (newState.reservations.length > 1 && hourOrMinute === "date") {
        newState = putReturnDateTimeOneHourForward({
            newState,
            value,
            DateTimeString,
            splitedHour,
            splitedMinute
        });
    }
    //saving DateTimeString by journeytpe
    newState.reservations[journeyType].transferDetails.transferDateTimeString = DateTimeString;
    return newState;
}
/* harmony default export */ const pickUpDropOffActions_SET_JOURNEY_DATETIME = (SET_JOURNEY_DATETIME);

;// CONCATENATED MODULE: ./src/store/pickUpDropOffActions/CHECK_MOBILE_OR_NOT.js
function CHECK_MOBILE_OR_NOT(params = {}) {
    let { state , action  } = params;
    let { data: { mobileAndTabletCheck  }  } = action;
    let newState = JSON.parse(JSON.stringify(state));
    newState.reservations[0].reservationDetails.channelId = mobileAndTabletCheck ? 3 : 2;
    return newState;
}
/* harmony default export */ const pickUpDropOffActions_CHECK_MOBILE_OR_NOT = (CHECK_MOBILE_OR_NOT);

;// CONCATENATED MODULE: ./src/store/pickUpDropOffActions/SET_SESSION_TOKEN.js
function SET_SESSION_TOKEN(params = {}) {
    let { state , action  } = params;
    let { data: { sessionToken  }  } = action;
    let newState = JSON.parse(JSON.stringify(state));
    newState.params.sessionToken = sessionToken;
    return newState;
}
/* harmony default export */ const pickUpDropOffActions_SET_SESSION_TOKEN = (SET_SESSION_TOKEN);

;// CONCATENATED MODULE: ./src/store/pickUpDropOffActions/SET_POINTS_MODAL.js
function SET_POINTS_MODAL(params = {}) {
    let { state , action  } = params;
    let { data: { trueOrFalse  }  } = action;
    let newState = JSON.parse(JSON.stringify(state));
    newState.params.pointsModalStatus = trueOrFalse;
    return newState;
}
/* harmony default export */ const pickUpDropOffActions_SET_POINTS_MODAL = (SET_POINTS_MODAL);

;// CONCATENATED MODULE: ./src/store/pickUpDropOffActions/SET_NEW_LANGUAGE.js
function SET_NEW_LANGUAGE(params = {}) {
    let { state , action  } = params;
    let { data: { languageKey , direction , langIndex  }  } = action;
    let newState = JSON.parse(JSON.stringify(state));
    newState.params.language = languageKey;
    newState.params.direction = direction;
    newState.params.langIndex = langIndex;
    return newState;
}
/* harmony default export */ const pickUpDropOffActions_SET_NEW_LANGUAGE = (SET_NEW_LANGUAGE);

;// CONCATENATED MODULE: ./src/store/pickUpDropOffActions/SET_NEW_APPDATA.js
function SET_NEW_APPDATA(params = {}) {
    let { state , action  } = params;
    let { data , initialStateReducer  } = action;
    let newState = JSON.parse(JSON.stringify(state));
    // newState.appData = data
    initialStateReducer.appData = data;
    localStorage.setItem("appData", JSON.stringify(data));
    return newState;
}
/* harmony default export */ const pickUpDropOffActions_SET_NEW_APPDATA = (SET_NEW_APPDATA);

;// CONCATENATED MODULE: ./src/store/pickUpDropOffActions/SET_MODAL_INFO.js
function SET_MODAL_INFO(params = {}) {
    let { state , action  } = params;
    let { data: { trueOrFalse  }  } = action;
    let newState = JSON.parse(JSON.stringify(state));
    newState.params.modalInfo = trueOrFalse;
    return newState;
}
/* harmony default export */ const pickUpDropOffActions_SET_MODAL_INFO = (SET_MODAL_INFO);

;// CONCATENATED MODULE: ./src/store/pickUpDropOffActions/SWITCH_JOURNEY.js


//if trasnfer date 11-11-2021   then retun will be 12-11-2021 (when ever journeytype chnage)
const putReturnDateTimeOneDayForward = (params = {})=>{
    let { newState  } = params;
    //in order put forward one day return dateTimEsTRING WE ARE REACHING TO TRANSFERDateTIme string
    let trDate = newState.reservations[0].transferDetails.transferDateTimeString;
    //destructing one by one
    const [splitedHour, splitedMinute] = (0,splitHelper/* splitDateTimeStringIntoHourAndMinute */.D)(trDate) || [];
    const [splitedDate] = (0,splitHelper/* splitDateTimeStringIntoDate */.h)(trDate) || [];
    const MILLISECONDS_PER_DAY = 60 * 60 * 24 * 1000;
    //TAKE TRASNFER DATE MILLISECOND ADD One day to it and assing to returnTranferDate
    const TR_DATE_IN_MILLISECONDS = (0,getDates/* convertDateToMilliSecond */.tV)(splitedDate);
    //Add one day to transfer date and assign to new variable //Wed Jan 04 2023 00:00:00 GMT+0400 (Azerbaijan Standard Time)
    let newDatee = new Date(TR_DATE_IN_MILLISECONDS + MILLISECONDS_PER_DAY);
    //arranging new date like 2022-01-01
    let year = `${newDatee.getFullYear()}`;
    let month = `${newDatee.getMonth() + 1 < 10 ? `0${newDatee.getMonth() + 1}` : newDatee.getMonth() + 1}`;
    let day = `${newDatee.getDate() < 10 ? `0${newDatee.getDate()}` : newDatee.getDate()}`;
    if (month === "00") month = "01";
    //2021-11-11  for return
    let newDatee2 = `${year}-${month}-${day}`;
    let returnDateTimeString = trDate;
    returnDateTimeString = `${newDatee2} ${splitedHour}:${splitedMinute}`;
    return returnDateTimeString;
};
function SWITCH_JOURNEY(params = {}) {
    let { state , action  } = params;
    let { data: { journeyType  }  } = action;
    let newState = JSON.parse(JSON.stringify(state));
    //setting new journeytype
    newState.params.journeyType = journeyType;
    //get pick and drops point from transferJourney
    let pickUpsTr = newState.reservations[0].selectedPickupPoints;
    let dropOffsTr = newState.reservations[0].selectedDropoffPoints;
    //11/ 10/2022
    if (parseInt(journeyType) === 1) {
        //clone the first reservation obj
        let newReserVationObject = [
            {
                ...newState.reservations[0]
            }
        ];
        //Changing pick and drop points  and setting return transferDateTimeString
        newReserVationObject = [
            {
                ...newReserVationObject[0],
                selectedPickupPoints: [
                    ...dropOffsTr
                ],
                selectedDropoffPoints: [
                    ...pickUpsTr
                ],
                transferDetails: {
                    ...newReserVationObject[0].transferDetails,
                    transferDateTimeString: putReturnDateTimeOneDayForward({
                        newState
                    })
                }
            }
        ];
        //putting newReserVationObject to the near of  previous one
        newState.reservations = [
            {
                ...newState.reservations[0]
            },
            {
                ...newReserVationObject[0]
            }
        ];
    } else {
        newState.reservations = [
            {
                ...newState.reservations[0]
            }
        ];
    }
    return newState;
}
/* harmony default export */ const pickUpDropOffActions_SWITCH_JOURNEY = (SWITCH_JOURNEY);

;// CONCATENATED MODULE: ./src/store/pickUpDropOffActions/SET_QUOTATION.js
function SET_QUOTATION(params = {}) {
    let { state , action  } = params;
    let { data: { quotation , journeyType  }  } = action;
    let newState = JSON.parse(JSON.stringify(state));
    // set Quotation
    newState.reservations[journeyType].quotation = quotation;
    let pickUpSelectedPoints = newState.reservations[journeyType].selectedPickupPoints;
    let dropOffSelectedPoints = newState.reservations[journeyType].selectedDropoffPoints;
    let paymentDetails = newState.reservations[journeyType].paymentDetails;
    //changing waitingpickuptime to empty string if destination is pickup
    let newSelectedPickUpPoints = pickUpSelectedPoints.map((point, index)=>{
        if (point.pcatId === 1) {
            return {
                ...point,
                flightDetails: {
                    ...point.flightDetails,
                    waitingPickupTime: ""
                }
            };
        } else if (point.pcatId === 5) {
            return {
                ...point,
                postCodeDetails: {
                    ...point.postCodeDetails,
                    id: ""
                }
            };
        } else {
            return point;
        }
    });
    let newSelectedDropoffPoints = dropOffSelectedPoints.map((point, index)=>{
        if (point.pcatId === 5) {
            return point = {
                ...point,
                postCodeDetails: {
                    ...point.postCodeDetails,
                    id: ""
                }
            };
        } else {
            return point;
        }
    });
    newState.reservations[journeyType].selectedPickupPoints = newSelectedPickUpPoints;
    newState.reservations[journeyType].selectedDropoffPoints = newSelectedDropoffPoints;
    // set quotation  price to payment details object
    newState.reservations[journeyType].paymentDetails = {
        ...paymentDetails,
        price: parseInt(quotation.price)
    };
    return newState;
}
/* harmony default export */ const pickUpDropOffActions_SET_QUOTATION = (SET_QUOTATION);

;// CONCATENATED MODULE: ./src/store/pickUpDropOffActions/ADD_NEW_POINT.js
function ADD_NEW_POINT(params = {}) {
    let { state , action  } = params;
    let { data: { point , index , destination  }  } = action;
    let newState = JSON.parse(JSON.stringify(state));
    //changing waitingpickuptime to empty string if destination is pickup
    // if (destination == "pickup") point = { ...point, flightDetails: { ...point.flightDetails, waitingPickupTime: "" } }
    let points = newState.reservations[index][`selected${destination === "pickup" ? "Pickup" : "Dropoff"}Points`];
    newState.reservations[index][`selected${destination === "pickup" ? "Pickup" : "Dropoff"}Points`] = [
        ...points,
        point
    ];
    //set pickUpCategoryId first item of selectedPickUppoints
    let pickUpSelectedPoints = newState.reservations[0].selectedPickupPoints;
    let transferDetails = newState.reservations[0].transferDetails;
    newState.reservations[index].transferDetails = {
        ...transferDetails,
        pickupCategoryId: pickUpSelectedPoints[0]?.pcatId
    };
    return newState;
}
/* harmony default export */ const pickUpDropOffActions_ADD_NEW_POINT = (ADD_NEW_POINT);

;// CONCATENATED MODULE: ./src/store/pickUpDropOffActions/GET_QUOTATION.js
function GET_QUOTATION(params = {}) {
    let { state , action  } = params;
    let { data: { results , journeyType  }  } = action;
    let newState = JSON.parse(JSON.stringify(state));
    if (parseInt(journeyType) === 0) {
        newState.params.quotations = [
            {
                ...newState.params.quotations[0],
                ...results
            }
        ];
    } else {
        // ..when we make both journey request ıt's responds already array
        newState.params.quotations = [
            {
                ...newState.params.quotations[0],
                ...results[0]
            },
            {
                ...results[1]
            }
        ];
    }
    return newState;
}
/* harmony default export */ const pickUpDropOffActions_GET_QUOTATION = (GET_QUOTATION);

;// CONCATENATED MODULE: ./src/store/pickUpDropOffActions/GET_QUOTATION_AT_PATHNAME.js
function GET_QUOTATION_AT_PATHNAME(params = {}) {
    let { state , action  } = params;
    let { data: { results , journeyType  }  } = action;
    let newState = JSON.parse(JSON.stringify(state));
    if (parseInt(journeyType) === 0) {
        newState.params.quotations = [
            results
        ];
    } else {
        // ..when we make both journey request ıt's responds already array
        newState.params.quotations = results;
    }
    return newState;
}
/* harmony default export */ const pickUpDropOffActions_GET_QUOTATION_AT_PATHNAME = (GET_QUOTATION_AT_PATHNAME);

;// CONCATENATED MODULE: ./src/store/pickUpDropOffActions/ADD_NEW_POINT_AT_PATHNAME.js
function ADD_NEW_POINT_AT_PATHNAME(params = {}) {
    let { state , action  } = params;
    let { data: { pickupPoints , dropoffPoints , index  }  } = action;
    let newState = JSON.parse(JSON.stringify(state));
    newState.reservations[index][`selectedPickupPoints`] = pickupPoints;
    newState.reservations[index][`selectedDropoffPoints`] = dropoffPoints;
    //    if(parseInt(index)===0){
    //    }else{
    //    newState.reservations[0][`selectedPickupPoints`] = pickupPoints
    //    newState.reservations[0][`selectedDropoffPoints`] = dropoffPoints
    //set pickUpCategoryId first item of selectedPickUppoints
    let pickUpSelectedPoints = newState.reservations[0].selectedPickupPoints;
    let transferDetails = newState.reservations[0].transferDetails;
    newState.reservations[index].transferDetails = {
        ...transferDetails,
        pickupCategoryId: pickUpSelectedPoints[0]?.pcatId
    };
    return newState;
}
/* harmony default export */ const pickUpDropOffActions_ADD_NEW_POINT_AT_PATHNAME = (ADD_NEW_POINT_AT_PATHNAME);

;// CONCATENATED MODULE: ./src/store/pickUpDropOffActions/RESET_SELECTED_POINTS.js

function RESET_SELECTED_POINTS(params = {}) {
    let { state , action  } = params;
    let { data: { journeyType  }  } = action;
    let newState = JSON.parse(JSON.stringify(state));
    if (parseInt(journeyType) === 0) {
        newState.reservations[0]["selectedPickupPoints"] = [];
        newState.reservations[0]["selectedDropoffPoints"] = [];
        newState.reservations[0].transferDetails.transferDateTimeString = (0,getDates/* currentDateForJourney */.nX)();
        newState.reservations[0].quotation = {};
    } else {
        newState.reservations[0].quotation = {};
        newState.reservations[0]["selectedPickupPoints"] = [];
        newState.reservations[0]["selectedDropoffPoints"] = [];
        newState.reservations[0].transferDetails.transferDateTimeString = (0,getDates/* currentDateForJourney */.nX)();
        newState.reservations[1].quotation = {};
        newState.reservations[1]["selectedPickupPoints"] = [];
        newState.reservations[1]["selectedDropoffPoints"] = [];
        newState.reservations[1].transferDetails.transferDateTimeString = (0,getDates/* currentDateForJourney */.nX)();
    }
    return newState;
}
/* harmony default export */ const pickUpDropOffActions_RESET_SELECTED_POINTS = (RESET_SELECTED_POINTS);

;// CONCATENATED MODULE: ./src/store/pickUpDropOffActions/SET_NAVBAR_TAXI_DEALS.js
function SET_NAVBAR_TAXI_DEALS(params = {}) {
    let { state , action  } = params;
    let { data: { hasTaxiDeals  }  } = action;
    let newState = JSON.parse(JSON.stringify(state));
    if (hasTaxiDeals.length > 0) newState.params.hasTaxiDeals = hasTaxiDeals;
    return newState;
}
/* harmony default export */ const pickUpDropOffActions_SET_NAVBAR_TAXI_DEALS = (SET_NAVBAR_TAXI_DEALS);

;// CONCATENATED MODULE: ./src/store/pickUpDropOffActions/RESELECT_POINTS_FROM_STORE.js
function RESELECT_POINTS_FROM_STORE(params = {}) {
    let { state , action  } = params;
    let { data: { type  }  } = action;
    let newState = JSON.parse(JSON.stringify(state));
    let pickUpSelectedPoints = [];
    let dropOffSelectedPoints = [];
    //BIZ NORMALDA TRANSFER DETAILSE GECENDE TOKENLI PCARid li falan full point ile gecerik
    //ama --select gorsensin deye biz sadece butun o tekonleri falan icin bosaldiriq
    if (type === "pickup") {
        pickUpSelectedPoints = [
            {
                token: "",
                pcatdId: "",
                address: "",
                ptype: ""
            }
        ];
    }
    if (type === "dropoff") {
        dropOffSelectedPoints = [
            {
                token: "",
                pcatdId: "",
                address: "",
                ptype: ""
            }
        ];
    }
    newState.reservations[0].selectedPickupPoints = pickUpSelectedPoints;
    newState.reservations[0].selectedDropoffPoints = dropOffSelectedPoints;
    return newState;
}
/* harmony default export */ const pickUpDropOffActions_RESELECT_POINTS_FROM_STORE = (RESELECT_POINTS_FROM_STORE);

;// CONCATENATED MODULE: ./src/store/pickUpDropOffActions/index.js
























//taxi deals






let initialReservationState = [
    {
        reservationDetails: {
            channelId: 2,
            accountId: 1
        },
        selectedPickupPoints: [],
        selectedDropoffPoints: [],
        quotation: {},
        transferDetails: {
            transferDateTimeString: (0,getDates/* currentDateForJourney */.nX)(),
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
            account: 1
        }
    }
];
const INITIAL_STATE = {
    reservations: initialReservationState,
    params: {
        journeyType: "0",
        sessionToken: "",
        language:  false ? 0 : "en",
        direction:  false ? 0 : "ltr",
        langIndex:  false ? 0 : 0,
        modalInfo: false,
        quotations: [
            {}
        ],
        postCodeAdresses: [],
        passengerDetailsStatus: true,
        tokenForArchieve: "",
        pointsModalStatus: false,
        //when we click  Heathrow Airport transfer on navbar we set taxidealsName then we cath it with serverSideProps[linkname].js
        // inthatCase WE need to pass a props to the changed router So we use redux for that
        hasTaxiDeals:  false ? 0 : "heathrow"
    }
};
const pickUpDropOffActions = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case "SWITCH_JOURNEY":
            {
                return pickUpDropOffActions_SWITCH_JOURNEY({
                    state,
                    action
                });
            }
        case "SET_JOURNEY_DATETIME":
            {
                return pickUpDropOffActions_SET_JOURNEY_DATETIME({
                    state,
                    action
                });
            }
        case "SET_TOKEN_TO_PASSENGERDETAILS":
            {
                return pickUpDropOffActions_SET_TOKEN_TO_PASSENGERDETAILS({
                    state,
                    action
                });
            }
        case "ADD_NEW_POINT":
            {
                return pickUpDropOffActions_ADD_NEW_POINT({
                    state,
                    action
                });
            }
        case "DELETE_ITEM_FROM_SELECTEDLIST":
            {
                return pickUpDropOffActions_DELETE_ITEM_FROM_SELECTEDLIST({
                    state,
                    action
                });
            }
        case "SET_SESSION_TOKEN":
            {
                return pickUpDropOffActions_SET_SESSION_TOKEN({
                    state,
                    action
                });
            }
        case "GET_QUOTATION":
            {
                return pickUpDropOffActions_GET_QUOTATION({
                    state,
                    action
                });
            }
        case "SET_MODAL_INFO":
            {
                return pickUpDropOffActions_SET_MODAL_INFO({
                    state,
                    action
                });
            }
        case "SET_QUOTATION":
            {
                return pickUpDropOffActions_SET_QUOTATION({
                    state,
                    action
                });
            }
        case "SET_POST_CODE_ADRESSES":
            {
                return pickUpDropOffActions_SET_POST_CODE_ADRESSES({
                    state,
                    action
                });
            }
        case "SET_PASSEGER_DETAILS":
            {
                return pickUpDropOffActions_SET_PASSEGER_DETAILS({
                    state,
                    action
                });
            }
        case "SET_SAME_PASSENGER_DETAILS_STATUS":
            {
                return pickUpDropOffActions_SET_SAME_PASSENGER_DETAILS_STATUS({
                    state,
                    action
                });
            }
        case "SET_TRANSFER_DETAILS":
            {
                return pickUpDropOffActions_SET_TRANSFER_DETAILS({
                    state,
                    action
                });
            }
        //!handling selected points inside transfer details
        case "SET_FLIGHT_DETAILS_FOR_POINTS":
            {
                return pickUpDropOffActions_SET_FLIGHT_DETAILS_FOR_POINTS({
                    state,
                    action
                });
            }
        case "SET_TRAIN_NUMBER_FOR_POINTS":
            {
                return pickUpDropOffActions_SET_TRAIN_NUMBER_FOR_POINTS({
                    state,
                    action
                });
            }
        case "SET_POSTCODE_DETAILS_FOR_POINTS":
            {
                return pickUpDropOffActions_SET_POSTCODE_DETAILS_FOR_POINTS({
                    state,
                    action
                });
            }
        case "SET_CRUISE_NUMBER_FOR_POINTS":
            {
                return pickUpDropOffActions_SET_CRUISE_NUMBER_FOR_POINTS({
                    state,
                    action
                });
            }
        case "SET_ADRESS_DESCRIPTION_FOR_POINTS":
            {
                return pickUpDropOffActions_SET_ADRESS_DESCRIPTION_FOR_POINTS({
                    state,
                    action
                });
            }
        //!finish handling selected points inside transfer details
        case "SET_PAYMENT_TYPE_AND_TOKEN":
            {
                return pickUpDropOffActions_SET_PAYMENT_TYPE_AND_TOKEN({
                    state,
                    action
                });
            }
        //?&****here we start new projects
        case "SET_NEW_LANGUAGE":
            {
                return pickUpDropOffActions_SET_NEW_LANGUAGE({
                    state,
                    action
                });
            }
        case "SET_NEW_APPDATA":
            {
                return pickUpDropOffActions_SET_NEW_APPDATA({
                    state,
                    action
                });
            }
        case "CHECHK_FLIGHT_WAITING_TIME":
            {
                return pickUpDropOffActions_CHECHK_FLIGHT_WAITING_TIME({
                    state,
                    action
                });
            }
        case "CHECK_MOBILE_OR_NOT":
            {
                return pickUpDropOffActions_CHECK_MOBILE_OR_NOT({
                    state,
                    action
                });
            }
        case "SET_POINTS_MODAL":
            {
                return pickUpDropOffActions_SET_POINTS_MODAL({
                    state,
                    action
                });
            }
        case "GET_QUOTATION_AT_PATHNAME":
            {
                return pickUpDropOffActions_GET_QUOTATION_AT_PATHNAME({
                    state,
                    action
                });
            }
        case "ADD_NEW_POINT_AT_PATHNAME":
            {
                return pickUpDropOffActions_ADD_NEW_POINT_AT_PATHNAME({
                    state,
                    action
                });
            }
        case "RESET_SELECTED_POINTS":
            {
                return pickUpDropOffActions_RESET_SELECTED_POINTS({
                    state,
                    action
                });
            }
        case "SET_NAVBAR_TAXI_DEALS":
            {
                return pickUpDropOffActions_SET_NAVBAR_TAXI_DEALS({
                    state,
                    action
                });
            }
        case "RESELECT_POINTS_FROM_STORE":
            {
                return pickUpDropOffActions_RESELECT_POINTS_FROM_STORE({
                    state,
                    action
                });
            }
        default:
            return state;
    }
};

;// CONCATENATED MODULE: ./src/store/alertReducer/ALERT.js
const ALERT = (params = {})=>params.action.payload;
/* harmony default export */ const alertReducer_ALERT = (ALERT);

;// CONCATENATED MODULE: ./src/store/alertReducer/index.js

const alertReducer = (state = {}, action)=>{
    switch(action.type){
        case "ALERT":
            {
                return alertReducer_ALERT({
                    action
                });
            }
        default:
            return state;
    }
};

;// CONCATENATED MODULE: ./src/store/meetAndGreetActions/SET_AIRLINE.js
function SET_AIRLINE(params = {}) {
    let { state , action  } = params;
    let { data: { newAirline  }  } = action;
    let newState = JSON.parse(JSON.stringify(state));
    newState = {
        ...state,
        flightDetails: {
            ...state.flightDetails,
            airline: newAirline
        }
    };
    return newState;
}
/* harmony default export */ const meetAndGreetActions_SET_AIRLINE = (SET_AIRLINE);

;// CONCATENATED MODULE: ./src/store/meetAndGreetActions/SET_BOOKER_DETAILS.js
function SET_BOOKER_DETAILS(params = {}) {
    let { state , action  } = params;
    let { data: { name , value  }  } = action;
    console.log({
        name,
        value
    });
    let newState = JSON.parse(JSON.stringify(state));
    newState = {
        ...state,
        bookersDetails: {
            ...state.bookersDetails,
            [name]: value
        }
    };
    return newState;
}
/* harmony default export */ const meetAndGreetActions_SET_BOOKER_DETAILS = (SET_BOOKER_DETAILS);

;// CONCATENATED MODULE: ./src/store/meetAndGreetActions/SET_BUGGER_PORTER.js
const updatePriceBuggerLists = (newBuggerLists)=>{
    const pricesBuggerLists = newBuggerLists.map((item)=>item.minNum * item.price);
    const newbuggerListsTotalPrice = pricesBuggerLists.reduce((sum, price)=>sum + price, 0);
    return {
        newbuggerListsTotalPrice
    };
};
function SET_BUGGER_PORTER(params = {}) {
    let { state , action  } = params;
    let { data: { idx , incordec  }  } = action;
    let newState = JSON.parse(JSON.stringify(state));
    let newBuggerLists = [
        ...newState.buggerLists
    ];
    let seatlistPrice = newState.seatListPrice;
    let vat = newState.vat;
    if (incordec === "inc") newBuggerLists[idx].minNum += 1;
    if (incordec === "dec") newBuggerLists[idx].minNum -= 1;
    let { newbuggerListsTotalPrice  } = updatePriceBuggerLists(newBuggerLists);
    newState.buggerLists = newBuggerLists;
    newState.totalPrice = newbuggerListsTotalPrice + seatlistPrice + vat;
    newState.buggerListTotalPrice = newbuggerListsTotalPrice;
    return newState;
}
/* harmony default export */ const meetAndGreetActions_SET_BUGGER_PORTER = (SET_BUGGER_PORTER);

;// CONCATENATED MODULE: ./src/store/meetAndGreetActions/SET_FLIGHT_CLASS.js
function SET_FLIGHT_CLASS(params = {}) {
    let { state , action  } = params;
    let { data: { newFlightClass  }  } = action;
    let newState = JSON.parse(JSON.stringify(state));
    newState = {
        ...state,
        flightDetails: {
            ...state.flightDetails,
            flightClass: newFlightClass
        }
    };
    return newState;
}
/* harmony default export */ const meetAndGreetActions_SET_FLIGHT_CLASS = (SET_FLIGHT_CLASS);

;// CONCATENATED MODULE: ./src/store/meetAndGreetActions/SET_FLIGHT_NUMBER_OR_LUGGAGE.js
function SET_FLIGHT_NUMBER_OR_LUGGAGE(params = {}) {
    let { state , action  } = params;
    let { data: { name , value  }  } = action;
    let newState = JSON.parse(JSON.stringify(state));
    newState = {
        ...state,
        flightDetails: {
            ...state.flightDetails,
            [name]: value
        }
    };
    return newState;
}
/* harmony default export */ const meetAndGreetActions_SET_FLIGHT_NUMBER_OR_LUGGAGE = (SET_FLIGHT_NUMBER_OR_LUGGAGE);

;// CONCATENATED MODULE: ./src/store/meetAndGreetActions/SET_FLIGHT_TIME.js
function SET_FLIGHT_TIME(params = {}) {
    let { state , action  } = params;
    let { data: { value , index  }  } = action;
    let newState = JSON.parse(JSON.stringify(state));
    const timeParts = newState.flightDetails.flightTime.split(":");
    if (index === 0) {
        // Update the hour part
        timeParts[0] = value;
    } else if (index === 1) {
        // Update the minute part
        timeParts[1] = value;
    }
    newState.flightDetails.flightTime = timeParts.join(":");
    return newState;
}
/* harmony default export */ const meetAndGreetActions_SET_FLIGHT_TIME = (SET_FLIGHT_TIME);

;// CONCATENATED MODULE: ./src/store/meetAndGreetActions/SET_MEET_GREET_ACTIVE_BTN.js
function SET_MEET_GREET_ACTIVE_BTN(params = {}) {
    let { state , action  } = params;
    let { data: { activeBtnValue , newSelectedService  }  } = action;
    let newState = JSON.parse(JSON.stringify(state));
    newState.meetgreetActiveBtn = activeBtnValue;
    newState.selectedService = newSelectedService;
    return newState;
}
/* harmony default export */ const meetAndGreetActions_SET_MEET_GREET_ACTIVE_BTN = (SET_MEET_GREET_ACTIVE_BTN);

;// CONCATENATED MODULE: ./src/store/meetAndGreetActions/SET_MEET_GREET_DATE.js
function SET_MEET_GREET_DATE(params = {}) {
    let { state , action  } = params;
    let { data: { dateValue  }  } = action;
    let newState = JSON.parse(JSON.stringify(state));
    newState.meetgreetDate = dateValue;
    return newState;
}
/* harmony default export */ const meetAndGreetActions_SET_MEET_GREET_DATE = (SET_MEET_GREET_DATE);

;// CONCATENATED MODULE: ./src/store/meetAndGreetActions/SET_PASSENGERS_FROM.js
function SET_PASSENGERS_FROM(params = {}) {
    let { state , action  } = params;
    let { data: { name , value , index  }  } = action;
    let newState = JSON.parse(JSON.stringify(state));
    const updatedPassengersForm = [
        ...newState.passengersForm
    ];
    updatedPassengersForm[index] = {
        ...updatedPassengersForm[index],
        [name]: value
    };
    newState.passengersForm = updatedPassengersForm;
    return newState;
}
/* harmony default export */ const meetAndGreetActions_SET_PASSENGERS_FROM = (SET_PASSENGERS_FROM);

;// CONCATENATED MODULE: ./src/store/meetAndGreetActions/SET_SEATLISTS.js
const updatePrice = (newSeatLists)=>{
    let newTotalPrice = 180;
    const adultsNum = newSeatLists[0].minNum;
    const childrenNum = newSeatLists[1].minNum;
    const totalGuestsSelected = adultsNum + childrenNum;
    //settng total price for theright side of box
    if (totalGuestsSelected > 2) newTotalPrice += (totalGuestsSelected - 2) * 50;
    //based on totalGuestSelected i am creating new passengers which is equal to that number
    //if totalGuestSelected=2=>it means =[{name:"",lastname:""},{name:"",lastname:""}]
    const newPassengersForm = Array.from({
        length: totalGuestsSelected
    }, ()=>({
            firstname: "",
            lastname: ""
        }));
    return {
        newTotalPrice,
        newPassengersForm
    };
};
function SET_SEATLISTS(params = {}) {
    let { state , action  } = params;
    let { data: { idx , incordec  }  } = action;
    console.log(idx, incordec);
    let newState = JSON.parse(JSON.stringify(state));
    let newSeatLists = [
        ...newState.seatLists
    ];
    if (incordec === "inc") newSeatLists[idx].minNum += 1;
    if (incordec === "dec") newSeatLists[idx].minNum = Math.max(0, newSeatLists[idx].minNum - 1);
    let { newTotalPrice , newPassengersForm  } = updatePrice(newSeatLists);
    newState.seatLists = newSeatLists;
    newState.totalPrice = newTotalPrice;
    //by defaults seatlist price is already180
    //incase if seatlist changes we update price of seatlist
    newState.seatListPrice = newTotalPrice;
    newState.passengersForm = newPassengersForm;
    return newState;
}
/* harmony default export */ const meetAndGreetActions_SET_SEATLISTS = (SET_SEATLISTS);

;// CONCATENATED MODULE: ./src/store/meetAndGreetActions/SET_TERMINAL.js
function SET_TERMINAL(params = {}) {
    let { state , action  } = params;
    let { data: { newTerminal  }  } = action;
    let newState = JSON.parse(JSON.stringify(state));
    newState.terminalName = newTerminal;
    return newState;
}
/* harmony default export */ const meetAndGreetActions_SET_TERMINAL = (SET_TERMINAL);

;// CONCATENATED MODULE: ./src/store/meetAndGreetActions/index.js












const meetAndGreetActions_INITIAL_STATE = {
    seatLists: [
        {
            name: "Adults",
            desc: "(above 12y.o.)",
            minNum: 1,
            maxNum: 20
        },
        {
            name: "Children",
            desc: "(from 2 to  12y.o.)",
            minNum: 0,
            maxNum: 20
        },
        {
            name: "Infants",
            desc: "(below 12y.o.)",
            minNum: 0,
            maxNum: 20
        }
    ],
    seatListPrice: 180,
    buggerLists: [
        {
            name: "Porter",
            desc: "(\xa354.00 inc VAT)",
            minNum: 0,
            price: 54
        },
        {
            name: "Buggy",
            desc: "(\xa360.00 inc VAT) ",
            minNum: 0,
            price: 60
        },
        {
            name: "Additional Greeter",
            desc: "(\xa375.00 inc VAT)",
            minNum: 0,
            price: 75
        }
    ],
    buggerListTotalPrice: 0,
    passengersForm: [
        {
            firstname: "",
            lastname: ""
        }
    ],
    flightDetails: {
        airline: "-- Select Airline --",
        flightNumber: "",
        flightClass: "-- Select Class --",
        flightTime: "00:00",
        noOfLuggageBags: ""
    },
    bookersDetails: {
        firstname: "",
        lastname: "",
        email: "",
        mobileNumber: ""
    },
    totalPrice: 180,
    meetgreetDate: (0,getDates/* currentDate */.cQ)(),
    meetgreetActiveBtn: 0,
    selectedService: "Arrival Airport",
    terminalName: "-- Select Terminal --",
    porter: 0,
    buggy: 0,
    additionalGreeter: 0,
    vat: 30
};
const meetAndGreetActions = (state = meetAndGreetActions_INITIAL_STATE, action)=>{
    switch(action.type){
        case "SET_SEATLISTS":
            {
                return meetAndGreetActions_SET_SEATLISTS({
                    state,
                    action
                });
            }
        case "SET_MEET_GREET_DATE":
            {
                return meetAndGreetActions_SET_MEET_GREET_DATE({
                    state,
                    action
                });
            }
        case "SET_MEET_GREET_ACTIVE_BTN":
            {
                return meetAndGreetActions_SET_MEET_GREET_ACTIVE_BTN({
                    state,
                    action
                });
            }
        case "SET_TERMINAL":
            {
                return meetAndGreetActions_SET_TERMINAL({
                    state,
                    action
                });
            }
        case "SET_PASSENGERS_FROM":
            {
                return meetAndGreetActions_SET_PASSENGERS_FROM({
                    state,
                    action
                });
            }
        case "SET_BUGGER_PORTER":
            {
                return meetAndGreetActions_SET_BUGGER_PORTER({
                    state,
                    action
                });
            }
        case "SET_FLIGHT_NUMBER_OR_LUGGAGE":
            {
                return meetAndGreetActions_SET_FLIGHT_NUMBER_OR_LUGGAGE({
                    state,
                    action
                });
            }
        case "SET_FLIGHT_CLASS":
            {
                return meetAndGreetActions_SET_FLIGHT_CLASS({
                    state,
                    action
                });
            }
        case "SET_AIRLINE":
            {
                return meetAndGreetActions_SET_AIRLINE({
                    state,
                    action
                });
            }
        case "SET_FLIGHT_TIME":
            {
                return meetAndGreetActions_SET_FLIGHT_TIME({
                    state,
                    action
                });
            }
        case "SET_BOOKER_DETAILS":
            {
                return meetAndGreetActions_SET_BOOKER_DETAILS({
                    state,
                    action
                });
            }
        default:
            return state;
    }
};

;// CONCATENATED MODULE: ./src/store/pickUpDropOffActions/GET_APP_DATA.js
function GET_APP_DATA(params = {}) {
    let { state , action  } = params;
    let { data: { appData , paymentTypes  }  } = action;
    let newState = JSON.parse(JSON.stringify(state));
    newState.appData = {
        ...appData
    };
    newState.paymentTypes = paymentTypes;
    // localStorage.setItem("paymentTypes", JSON.stringify(paymentTypes));
    return newState;
}
/* harmony default export */ const pickUpDropOffActions_GET_APP_DATA = (GET_APP_DATA);

;// CONCATENATED MODULE: ./src/store/accountRegisterReducer/SET_APPLICANT_FOR_CREADIT_DETAILS.js
function SET_APPLICANT_FOR_CREADIT_DETAILS(params = {}) {
    let { state , action  } = params;
    let { data: { name , value  }  } = action;
    let newState = JSON.parse(JSON.stringify(state));
    let applicantForCreditAccount = newState.accountRegisterDatas.applicantForCreditAccount;
    newState.accountRegisterDatas.applicantForCreditAccount = {
        ...applicantForCreditAccount,
        [name]: value
    };
    return newState;
}
/* harmony default export */ const accountRegisterReducer_SET_APPLICANT_FOR_CREADIT_DETAILS = (SET_APPLICANT_FOR_CREADIT_DETAILS);

;// CONCATENATED MODULE: ./src/store/accountRegisterReducer/SET_APPROXIMATE_DATA.js
function SET_APPROXIMATE_DATA(params = {}) {
    let { state , action  } = params;
    let { data: { value  }  } = action;
    let newState = JSON.parse(JSON.stringify(state));
    newState.accountRegisterDatas.approximateSpend = value;
    return newState;
}
/* harmony default export */ const accountRegisterReducer_SET_APPROXIMATE_DATA = (SET_APPROXIMATE_DATA);

;// CONCATENATED MODULE: ./src/store/accountRegisterReducer/SET_CONTACT_DETAILS.js
function SET_CONTACT_DETAILS(params = {}) {
    let { state , action  } = params;
    let { data: { name , value  }  } = action;
    let newState = JSON.parse(JSON.stringify(state));
    let contactDetails = newState.accountRegisterDatas.contactDetails;
    newState.accountRegisterDatas.contactDetails = {
        ...contactDetails,
        [name]: value
    };
    return newState;
}
/* harmony default export */ const accountRegisterReducer_SET_CONTACT_DETAILS = (SET_CONTACT_DETAILS);

;// CONCATENATED MODULE: ./src/store/accountRegisterReducer/SET_OPERATION_NOTES.js
function SET_OPERATION_NOTES(params = {}) {
    let { state , action  } = params;
    let { data: { name , value  }  } = action;
    let newState = JSON.parse(JSON.stringify(state));
    let operationNotes = newState.accountRegisterDatas.operationNotes;
    newState.accountRegisterDatas.operationNotes = {
        ...operationNotes,
        [name]: value
    };
    if (name === "urgentSituationStatus" && value === "No") {
        newState.accountRegisterDatas.operationNotes = {
            ...operationNotes,
            urgentSituationNumber: "",
            urgentSituationStatus: "No"
        };
    }
    return newState;
}
/* harmony default export */ const accountRegisterReducer_SET_OPERATION_NOTES = (SET_OPERATION_NOTES);

;// CONCATENATED MODULE: ./src/store/accountRegisterReducer/index.js




/*
    accountRegisterDatas: {
        applicantForCreditAccount: {
            companyName: "companyName",
            natureOfBusiness: "natureOfBusiness",
            companyFax: "companyFax",
            postCode: "postCode",
            address: "address",
            registrationNo: "registrationNo",
            companyTel: "companyTel"
        },
        contactDetails: {
            contactName: "test",
            jobTitle: "test",
            department: "test",
            email: "test@mail.ru",
            telephoneNo: "telephoneNo"
        },
        approximateSpend: "122"
    }

      accountRegisterDatas: {
        applicantForCreditAccount: {
            companyName: "",
            natureOfBusiness: "",
            companyFax: "",
            postCode: "",
            address: "",
            registrationNo: "",
            companyTel: ""
        },
        contactDetails: {
            contactName: "",
            jobTitle: "",
            department: "",
            email: "",
            telephoneNo: ""
        },
        approximateSpend: ""
    }
*/ const accountRegisterReducer_INITIAL_STATE = {
    accountRegisterDatas: {
        applicantForCreditAccount: {
            companyName: "",
            natureOfBusiness: "",
            address: "",
            registrationNo: ""
        },
        contactDetails: {
            contactName: "",
            jobTitle: "",
            email: "",
            telephoneNo: ""
        },
        operationNotes: {
            urgentSituationStatus: "Yes",
            accountPassengerStatus: "Account",
            anyOtherOperationComments: "",
            urgentSituationNumber: ""
        }
    }
};
const accountRegisterActions = (state = accountRegisterReducer_INITIAL_STATE, action)=>{
    switch(action.type){
        case "SET_CONTACT_DETAILS":
            {
                return accountRegisterReducer_SET_CONTACT_DETAILS({
                    state,
                    action
                });
            }
        case "SET_APPROXIMATE_DATA":
            {
                return accountRegisterReducer_SET_APPROXIMATE_DATA({
                    state,
                    action
                });
            }
        case "SET_APPLICANT_FOR_CREADIT_DETAILS":
            {
                return accountRegisterReducer_SET_APPLICANT_FOR_CREADIT_DETAILS({
                    state,
                    action
                });
            }
        case "SET_OPERATION_NOTES":
            {
                return accountRegisterReducer_SET_OPERATION_NOTES({
                    state,
                    action
                });
            }
        default:
            return state;
    }
};

;// CONCATENATED MODULE: ./src/store/store.js








//!quotations a gelende paymentTypes sorunu yasanir onu coz
// create your reducer
const initialReducer = (state = {}, action)=>{
    switch(action.type){
        case external_next_redux_wrapper_.HYDRATE:
            {
                if (false) {}
                return {
                    ...state.initialReducer,
                    ...action.payload.initialReducer
                };
            }
        case "GET_APP_DATA":
            return pickUpDropOffActions_GET_APP_DATA({
                state,
                action
            }) //page(index.js)
            ;
        default:
            return state;
    }
};
const reducer = (0,external_redux_.combineReducers)({
    pickUpDropOffActions: pickUpDropOffActions,
    initialReducer,
    alertReducer: alertReducer,
    accountRegisterActions: accountRegisterActions,
    meetAndGreetActions: meetAndGreetActions
});
const store = (0,external_redux_.createStore)(reducer, (0,external_redux_devtools_extension_.composeWithDevTools)((0,external_redux_.applyMiddleware)()));
/* harmony default export */ const store_store = (store);


/***/ })

};
;