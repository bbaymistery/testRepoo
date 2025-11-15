"use strict";
exports.id = 3570;
exports.ids = [3570];
exports.modules = {

/***/ 3570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$s": () => (/* binding */ getAppData),
/* harmony export */   "Br": () => (/* binding */ setParamsError),
/* harmony export */   "Gt": () => (/* binding */ addItemToSelectedList),
/* harmony export */   "HZ": () => (/* binding */ gettingQuotations),
/* harmony export */   "K1": () => (/* binding */ collectPickUpPoints),
/* harmony export */   "K2": () => (/* binding */ deleteItemFromList),
/* harmony export */   "QU": () => (/* binding */ addExtraInputForJourney),
/* harmony export */   "Ry": () => (/* binding */ changeCheckedInput),
/* harmony export */   "Yd": () => (/* binding */ setQuotation),
/* harmony export */   "c": () => (/* binding */ updatePassDetailsForBothJourney),
/* harmony export */   "do": () => (/* binding */ setErrorForPassengerDetails),
/* harmony export */   "e_": () => (/* binding */ setHourAndMinute),
/* harmony export */   "kD": () => (/* binding */ updateTransferDetailsInput),
/* harmony export */   "rR": () => (/* binding */ setDataTime),
/* harmony export */   "s_": () => (/* binding */ setErrorInTransferDetailsPage),
/* harmony export */   "tP": () => (/* binding */ setErorReturnDetailsPage),
/* harmony export */   "tl": () => (/* binding */ setPayment),
/* harmony export */   "uY": () => (/* binding */ resetData),
/* harmony export */   "vz": () => (/* binding */ updateSearchValue)
/* harmony export */ });
/* unused harmony exports switchJourneyType, getAllDatasForEditing, editSaveTransferPassenger */
/* harmony import */ var _resources_getEnvConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1635);
/* harmony import */ var _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8348);


const updateSearchValue = (inpValue, index, journeyType)=>(dispatch)=>{
        dispatch({
            type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_0__/* .SET_SEARCH_ENGINE_VALUE */ .id,
            payload: {
                inpValue,
                index,
                journeyType
            }
        });
    };
const collectPickUpPoints = (inpValue, index, journeyType)=>async (dispatch, getState)=>{
        const env = await (0,_resources_getEnvConfig__WEBPACK_IMPORTED_MODULE_1__/* .fetchConfig */ .Q)();
        const { pickUpDropOffReducer: { cookies: { sessionToken  } ,  } ,  } = getState();
        dispatch({
            type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_0__/* .FETCH_LOCATIONS_REQUEST */ .Cz,
            payload: {
                journeyType,
                index
            }
        });
        const url = `${env.apiDomain}/api/v1/suggestions`;
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                value: inpValue,
                "session-token": `${sessionToken ? sessionToken : ""}`
            })
        };
        fetch(url, config).then((res)=>res.json()).then((data)=>{
            dispatch({
                type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_0__/* .FETCH_LOCATIONS_SUCCESS */ .pN,
                payload: {
                    data,
                    index,
                    inpValue,
                    journeyType
                }
            });
        }).catch((error)=>{
            dispatch({
                type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_0__/* .FETCH_LOCATIONS_FAILURE */ .rZ,
                payload: {
                    errorMessage: error.message,
                    index
                }
            });
        });
    };
//Make Request for google places .This action was triggeren inside HanndleSearchResults
//we r also  cleaning input after selecting one item
const addItemToSelectedList = (requestBody, pickOrDrop, journeyType, objectDetails)=>{
    return async (dispatch)=>{
        const env = await (0,_resources_getEnvConfig__WEBPACK_IMPORTED_MODULE_1__/* .fetchConfig */ .Q)();
        const url = `${env.apiDomain}/api/v1/google-places`;
        let index = pickOrDrop === "pickupPoints" ? 0 : 1;
        //request for google place and add item to the list
        if (requestBody.pcatId === 10) {
            const config = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    point: requestBody
                })
            };
            fetch(url, config).then((res)=>res.json()).then((data)=>{
                dispatch({
                    type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_0__/* .ADD_ITEM_TO_SELECTED_LIST */ .Z3,
                    payload: {
                        data: data === null || data === void 0 ? void 0 : data.point,
                        index,
                        journeyType,
                        objectDetails
                    }
                });
            }).catch((error)=>{
                console.log(error);
            });
        } else if (requestBody.pcatId === 5) {
            //?transfer details icin post coda uygun adresleri getiririk
            const url1 = `${env.apiDomain}/api/v1/postcode-address`;
            const config1 = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    postcodes: [
                        requestBody.postcode
                    ]
                })
            };
            fetch(url1, config1).then((res)=>res.json()).then((data)=>{
                dispatch({
                    type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_0__/* .SET_POST_CODE_ADRESSES */ .II,
                    payload: data.results[0]
                });
            }).catch((error)=>{
                console.log(error);
            });
            // add item to the list directly
            dispatch({
                type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_0__/* .ADD_ITEM_TO_SELECTED_LIST */ .Z3,
                payload: {
                    data: requestBody,
                    index,
                    journeyType,
                    objectDetails
                }
            });
        } else {
            // add item to the list directly
            dispatch({
                type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_0__/* .ADD_ITEM_TO_SELECTED_LIST */ .Z3,
                payload: {
                    data: requestBody,
                    index,
                    journeyType,
                    objectDetails
                }
            });
        }
        let navbarElement = document.querySelector("#navbar_container");
        if (navbarElement) {
            navbarElement.style.display = "flex";
        }
    };
};
const deleteItemFromList = (item, index, journeyType, indexOfCurrentItem)=>(dispatch)=>{
        dispatch({
            type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_0__/* .DELETE_ITEM_FROM_SELECTED_LIST */ .pB,
            payload: {
                item,
                index,
                journeyType,
                indexOfCurrentItem
            }
        });
    };
const setDataTime = (dateValue, pickupOrDropOrDate, journeyType)=>(dispatch)=>{
        //here we wiil not touch to index becase it is obvious that when journey type zero it means that it is transferdetails
        dispatch({
            type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_0__/* .SET_DATE_TIME */ .YM,
            payload: {
                dateValue,
                pickupOrDropOrDate,
                journeyType
            }
        });
    };
const setHourAndMinute = (valueOfHourOrMinute, transferOrReturn)=>(dispatch)=>{
        dispatch({
            type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_0__/* .SET_HOUR_AND_MINUTE */ .Su,
            payload: {
                valueOfHourOrMinute,
                transferOrReturn
            }
        });
    // console.log(valueOfHourOrMinute, transferOrReturn);
    };
//SET APRAMS IT IS ASSINGING error message inside field
const setParamsError = (message, pickOrDrop, journeyType, dateTimeForBoolean = false)=>(dispatch)=>{
        dispatch({
            type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_0__/* .SET_PARAMS */ .Sb,
            payload: {
                message,
                pickOrDrop,
                journeyType,
                dateTimeForBoolean
            }
        });
    };
const gettingQuotations = (router, journeyType, updateInsideQuotation)=>{
    return async (dispatch, getState)=>{
        var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7;
        const env = await (0,_resources_getEnvConfig__WEBPACK_IMPORTED_MODULE_1__/* .fetchConfig */ .Q)();
        const { pickUpDropOffReducer: { reservations  } ,  } = getState();
        //transfer
        let trSelectedPickPoints = (ref = reservations[0]) === null || ref === void 0 ? void 0 : ref.selectedPickupPoints;
        let trSelectedDroppPoints = (ref1 = reservations[0]) === null || ref1 === void 0 ? void 0 : ref1.selectedDropoffPoints;
        let transferDAteTimeString = (ref2 = reservations[0]) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.transferDetails) === null || ref3 === void 0 ? void 0 : ref3.transferDateTimeString;
        //return
        let returnPickPoints = (ref4 = reservations[1]) === null || ref4 === void 0 ? void 0 : ref4.selectedPickupPoints;
        let returnDroppPoints = (ref5 = reservations[1]) === null || ref5 === void 0 ? void 0 : ref5.selectedDropoffPoints;
        let returnDAteTimeString = (ref6 = reservations[1]) === null || ref6 === void 0 ? void 0 : (ref7 = ref6.transferDetails) === null || ref7 === void 0 ? void 0 : ref7.transferDateTimeString;
        const url = `${env.apiDomain}/api/v1/quotation`;
        const configTransfer = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                selectedPickupPoints: trSelectedPickPoints,
                selectedDropoffPoints: trSelectedDroppPoints,
                transferDateTimeString: transferDAteTimeString
            })
        };
        const configReturn = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                selectedPickupPoints: returnPickPoints,
                selectedDropoffPoints: returnDroppPoints,
                transferDateTimeString: returnDAteTimeString
            })
        };
        //!
        //sadece disardan home pageden isteg gondererse calisir Transfer
        if (journeyType === 0 && !updateInsideQuotation.updateInsideQuotation) {
            dispatch({
                type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_0__/* .GET_TRANSFER_QUOT_REQUEST */ .eS,
                payload: ""
            });
            fetch(url, configTransfer).then((res)=>res.json()).then((data)=>{
                if (data.status === 200) {
                    if (router) {
                        dispatch({
                            type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_0__/* .GET_TRANSFER_QUOTATIONS */ .p_,
                            payload: {
                                data
                            }
                        });
                        router === null || router === void 0 ? void 0 : router.push("/quotation");
                    }
                } else {
                    var ref;
                    dispatch({
                        type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_0__/* .GET_QUOT_TRANSFER_ERROR */ .w7,
                        payload: {
                            errorMessage: data === null || data === void 0 ? void 0 : (ref = data.error) === null || ref === void 0 ? void 0 : ref.global[0]
                        }
                    });
                    setTimeout(()=>{
                        dispatch({
                            type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_0__/* .GET_QUOT_TRANSFER_ERROR */ .w7,
                            payload: {
                                errorMessage: ""
                            }
                        });
                    }, 4000);
                }
            }).catch((error)=>{
                dispatch({
                    type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_0__/* .GET_QUOT_TRANSFER_ERROR */ .w7,
                    payload: {
                        errorMessage: error.message
                    }
                });
            });
        }
        //!
        //sadece disardan return ile istek gondererse Ikisi icinde calisdiririq
        if (journeyType === 1 && !updateInsideQuotation.updateInsideQuotation) {
            dispatch({
                type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_0__/* .GET_BOTH_TOGETHER_QUOT_REQUEST */ .NW,
                payload: ""
            });
            Promise.all([
                fetch(url, configTransfer),
                fetch(url, configReturn)
            ]).then(function(responses) {
                // Get a JSON object from each of the responses
                return Promise.all(responses.map(function(response) {
                    return response.json();
                }));
            }).then(function(data) {
                var ref, ref1, ref2, ref3;
                // Log the data to the console
                // You would do something with both sets of data here
                if (data[0].status === 200 && data[1].status === 200) {
                    dispatch({
                        type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_0__/* .GET_BOTH_TOGETHER_QUOTATIONS */ .RO,
                        payload: {
                            trQuots: data[0],
                            retrunQuots: data[1]
                        }
                    });
                    if (router) {
                        router === null || router === void 0 ? void 0 : router.push("/quotation");
                    }
                }
                if (data[0].status !== 200 && ((ref = data[0]) === null || ref === void 0 ? void 0 : (ref1 = ref.error) === null || ref1 === void 0 ? void 0 : ref1.global[0])) {
                    var ref4, ref5;
                    dispatch({
                        type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_0__/* .GET_BOTH_TOGETHER_ERROR_QUOT */ .DH,
                        payload: {
                            errorMessage: (ref4 = data[0]) === null || ref4 === void 0 ? void 0 : (ref5 = ref4.error) === null || ref5 === void 0 ? void 0 : ref5.global[0]
                        }
                    });
                    setTimeout(()=>{
                        dispatch({
                            type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_0__/* .GET_QUOT_TRANSFER_ERROR */ .w7,
                            payload: {
                                errorMessage: ""
                            }
                        });
                    }, 4000);
                }
                if (data[1].status !== 200 && ((ref2 = data[1]) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.error) === null || ref3 === void 0 ? void 0 : ref3.global[0])) {
                    var ref6, ref7;
                    dispatch({
                        type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_0__/* .GET_BOTH_TOGETHER_ERROR_QUOT */ .DH,
                        payload: {
                            errorMessage: (ref6 = data[1]) === null || ref6 === void 0 ? void 0 : (ref7 = ref6.error) === null || ref7 === void 0 ? void 0 : ref7.global[0]
                        }
                    });
                    setTimeout(()=>{
                        dispatch({
                            type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_0__/* .GET_QUOT_TRANSFER_ERROR */ .w7,
                            payload: {
                                errorMessage: ""
                            }
                        });
                    }, 4000);
                }
            }).catch(function(error) {
                dispatch({
                    type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_0__/* .GET_BOTH_TOGETHER_ERROR_QUOT */ .DH,
                    payload: {
                        errorMessage: error.message
                    }
                });
                console.log(error);
            });
        }
        //!inside quotation pageden request ederse
        //fo tr
        //!
        if (updateInsideQuotation.updateInsideQuotation && journeyType === 0) {
            console.log("calisiyorum for transfer");
            dispatch({
                type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_0__/* .GET_TRANSFER_QUOT_REQUEST */ .eS,
                payload: ""
            });
            fetch(url, configTransfer).then((res)=>res.json()).then((data)=>{
                if (data.status === 200) {
                    dispatch({
                        type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_0__/* .GET_TRANSFER_QUOTATIONS */ .p_,
                        payload: {
                            data
                        }
                    });
                } else {
                    var ref;
                    dispatch({
                        type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_0__/* .GET_QUOT_TRANSFER_ERROR */ .w7,
                        payload: {
                            errorMessage: data === null || data === void 0 ? void 0 : (ref = data.error) === null || ref === void 0 ? void 0 : ref.global[0]
                        }
                    });
                    dispatch({
                        type: "IF_HAS_BOOKED_INSIDE_QUOTATION_PAGE_TRANSFER"
                    });
                }
            }).catch((error)=>{
                dispatch({
                    type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_0__/* .GET_QUOT_TRANSFER_ERROR */ .w7,
                    payload: {
                        errorMessage: error.message
                    }
                });
            });
        }
        // for rt
        if (updateInsideQuotation.updateInsideQuotation && journeyType === 1) {
            console.log("calisiyorum for rt");
            dispatch({
                type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_0__/* .GET_RETURN_QUOT_REQUEST */ .Xz,
                payload: ""
            });
            fetch(url, configReturn).then((res)=>res.json()).then((data)=>{
                if (data.status === 200) {
                    dispatch({
                        type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_0__/* .GET_RETURN_QUOTATIONS */ .aT,
                        payload: {
                            data
                        }
                    });
                } else {
                    var ref;
                    dispatch({
                        type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_0__/* .GET_RETURN_ERROR_QUOT */ .ho,
                        payload: {
                            errorMessage: data === null || data === void 0 ? void 0 : (ref = data.error) === null || ref === void 0 ? void 0 : ref.global[0]
                        }
                    });
                    dispatch({
                        type: "IF_HAS_BOOKED_INSIDE_QUOTATION_PAGE_RETURN"
                    });
                }
            }).catch((error)=>{
                console.log(error);
            });
        }
    };
};
const setQuotation = (quotation, journeyType)=>(dispatch)=>{
        dispatch({
            type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_0__/* .SET_QUOTATION */ .bz,
            payload: {
                quotation,
                journeyType
            }
        });
    };
//words cartypes categorytypes ...
const getAppData = (props)=>async (dispatch)=>{
        const env = await (0,_resources_getEnvConfig__WEBPACK_IMPORTED_MODULE_1__/* .fetchConfig */ .Q)();
        const url = `${env.apiDomain}/app/en`;
        const config = {
            method: "GET"
        };
        fetch(url, config).then((res)=>res.json()).then((data)=>{
            dispatch({
                type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_0__/* .GET_APP_DATA */ .Y4,
                payload: data
            });
        }).catch((error)=>{
            console.log(error);
        });
        //getting all payment types
        //
        const urlPaymentTypes = `${env.apiDomain}/api/v1/payment-types`;
        fetch(urlPaymentTypes, config).then((res)=>res.json()).then((data)=>{
            dispatch({
                type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_0__/* .GET_PAYMENT_DATA */ .Sr,
                payload: data
            });
        }).catch((error)=>{
            console.log(error);
        });
    };
const resetData = ()=>(dispatch)=>{
        dispatch({
            type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_0__/* .RESET_DATA */ .Kk
        });
    };
const switchJourneyType = (journeyType)=>(dispatch)=>{
        dispatch({
            type: SWITCH_JOURNEY,
            payload: journeyType
        });
    };
const changeCheckedInput = ()=>(dispatch)=>{
        dispatch({
            type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_0__/* .CHECKED_INPUT_FOR_RETURN */ .rt
        });
    };
const addExtraInputForJourney = (pickOrDrop, journeyType, whereFuncComes)=>(dispatch)=>{
        dispatch({
            type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_0__/* .ADD_EXTRA_INPUT_FOR_JOURNEY */ .l_,
            payload: {
                pickOrDrop,
                journeyType,
                whereFuncComes
            }
        });
    };
//
//?updating trasfer details page selected items values   and giing error for them
const updateTransferDetailsInput = (value, pickOrDrop, journeyType, nameOfInput, whichSelectedItem, categoryOfTheType, Id)=>(dispatch)=>{
        dispatch({
            type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_0__/* .UPDATE_SELECTED_ITEMS_INPUTS */ .EY,
            payload: {
                value,
                pickOrDrop,
                journeyType,
                nameOfInput,
                whichSelectedItem,
                categoryOfTheType,
                Id
            }
        });
    };
const setErrorInTransferDetailsPage = (erMessage, jourrneyType, categoryOfError, router, whichSelectedItem)=>(dispatch)=>{
        dispatch({
            type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_0__/* .SET_ERROR_IN_TRANSFER_DETAILS_PAGE */ .xx,
            payload: {
                erMessage,
                jourrneyType,
                categoryOfError,
                whichSelectedItem
            }
        });
    };
const setErorReturnDetailsPage = (erMessage, jourrneyType, categoryOfError, whichSelectedItem)=>(dispatch)=>{
        dispatch({
            type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_0__/* .SET_ERROR_IN_RETURN_DETAILS_PAGE */ .Ke,
            payload: {
                erMessage,
                jourrneyType,
                categoryOfError,
                whichSelectedItem
            }
        });
    };
//?updating passenger  details page values   and giving error for them
const updatePassDetailsForBothJourney = (value, nameofInput, journeyType, selectAndRequest = false)=>(dispatch)=>{
        dispatch({
            type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_0__/* .UPDATE_PASSENGER_DETAILS_FOR_BOTH_JOURNEY */ .TP,
            payload: {
                value,
                nameofInput,
                journeyType,
                selectAndRequest
            }
        });
    };
const setErrorForPassengerDetails = (erMessage, journeyType)=>(dispatch)=>{
        dispatch({
            type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_0__/* .SET_ERROR_FOR_PASSENGER_DETAILS */ .qN,
            payload: {
                erMessage,
                journeyType
            }
        });
    };
//!odo finish ****
//Payment
const setPayment = (id, token, router)=>{
    return (dispatch, getState)=>{
        let payment;
        let paymentPagePath;
        const { pickUpDropOffReducer: { paymentTypes  } ,  } = getState();
        if (id === 1) {
            var ref, ref1;
            payment = (ref = paymentTypes.filter((payment)=>payment.id === id)[0]) === null || ref === void 0 ? void 0 : ref.pagePath;
            paymentPagePath = (ref1 = JSON.parse(payment)) === null || ref1 === void 0 ? void 0 : ref1.path;
        }
        dispatch({
            type: _pickUpDropTypes__WEBPACK_IMPORTED_MODULE_0__/* .SET_PAYMENT */ .UE,
            payload: {
                token,
                paymentType: id
            }
        });
        console.log(id, token, router);
        if (id === 1) {
            router === null || router === void 0 ? void 0 : router.push(`${paymentPagePath}`);
        } else {
            router === null || router === void 0 ? void 0 : router.push(`/reservations-document`);
            console.log("calisdim push teref");
        }
    };
};
/*



*/ /*
  const {
    pickUpDropOffReducer: { paymentTypes },
  } = getState();

  let paymentPagePath = JSON.parse(
    paymentTypes.filter((payment) => payment.id === id)[0].pagePath
  ).path;

  let paymentType = "";
  let token = "";
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      quotations: [],
      type: id,
      language: "en",
      passengerEmail: "info@aplcars.com",
      mode: "sandbox",
    }),
  };

  dispatch({ type: SET_PAYMENT, payload: { token, paymentType } });


*/ // * EDITINGS ITEMSSSS
const getAllDatasForEditing = (datas)=>{
    return async (dispatch)=>{
        var ref, ref1, ref2, ref3, ref4, ref5;
        const env = await fetchConfig();
        //transfer
        let trSelectedPickPoints = (ref = datas[0]) === null || ref === void 0 ? void 0 : ref.selectedPickupPoints;
        let trSelectedDroppPoints = (ref1 = datas[0]) === null || ref1 === void 0 ? void 0 : ref1.selectedDropoffPoints;
        let transferDAteTimeString = (ref2 = datas[0]) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.transferDetails) === null || ref3 === void 0 ? void 0 : ref3.transferDateTimeString;
        //!operation for postcodes
        let allTogetherForGetPostCode = [];
        if ((datas === null || datas === void 0 ? void 0 : datas.length) > 1) {
            allTogetherForGetPostCode = [
                ...trSelectedDroppPoints,
                ...trSelectedPickPoints, 
            ];
        }
        let postCodes = [];
        allTogetherForGetPostCode === null || allTogetherForGetPostCode === void 0 ? void 0 : allTogetherForGetPostCode.map((item)=>{
            if (item.pcatId === 5) {
                postCodes.push(item.postcode);
            }
        });
        if ((postCodes === null || postCodes === void 0 ? void 0 : postCodes.length) > 0) {
            // ?transfer details icin post coda uygun adresleri getiririk
            const url = `${env.apiDomain}/api/v1/postcode-address`;
            const config = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    postcodes: postCodes
                })
            };
            fetch(url, config).then((res)=>res.json()).then((data)=>{
                dispatch({
                    type: SET_POST_CODE_ADRESSES,
                    payload: data.results
                });
            }).catch((error)=>{
                console.log(error);
            });
        }
        // Getting Guotations
        const url1 = `${env.apiDomain}/api/v1/quotation`;
        const configTransfer = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                selectedPickupPoints: trSelectedPickPoints,
                selectedDropoffPoints: trSelectedDroppPoints,
                transferDateTimeString: new Date((ref4 = datas[0]) === null || ref4 === void 0 ? void 0 : (ref5 = ref4.transferDetails) === null || ref5 === void 0 ? void 0 : ref5.transferDateTime).toISOString().slice(0, 16).replace("T", " ")
            })
        };
        if ((datas === null || datas === void 0 ? void 0 : datas.length) === 1) {
            dispatch({
                type: GET_TRANSFER_QUOT_REQUEST,
                payload: ""
            });
            fetch(url1, configTransfer).then((res)=>res.json()).then((data)=>{
                dispatch({
                    type: GET_TRANSFER_QUOTATIONS,
                    payload: {
                        data
                    }
                });
            }).catch((error)=>{
                dispatch({
                    type: GET_QUOT_TRANSFER_ERROR,
                    payload: {
                        errorMessage: error.message
                    }
                });
            });
        }
        dispatch({
            type: GET_DATAS_FOR_EDITING,
            payload: datas
        });
    };
};
const editSaveTransferPassenger = (phone, email, firstname, passengersNumber)=>(dispatch)=>{
        dispatch({
            type: EDIT_SAVE_TRANSFER_PASSENGER_VALUES,
            payload: {
                phone,
                email,
                firstname,
                passengersNumber
            }
        });
    }; // export const calcelTransferJourneyEditing =
 //   (PickUpPointsOneWayCopy, DroopOffPointsOneWayCopy, reservations) =>
 //   (dispatch) => {
 //     dispatch({
 //       type: CANCEL__TRANSFER_JOURNEY_EDITING,
 //       payload: {
 //         PickUpPointsOneWayCopy,
 //         DroopOffPointsOneWayCopy,
 //         reservations,
 //       },
 //     });
 //   };
 // !finishhhhhhhhhh
 /*

*/ 


/***/ })

};
;