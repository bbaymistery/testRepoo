exports.id = 3290;
exports.ids = [3290];
exports.modules = {

/***/ 9304:
/***/ ((module) => {

// Exports
module.exports = {
	"search_results": "styles_search_results__r8jXF",
	"groupName": "styles_groupName__XT4In",
	"googleImage": "styles_googleImage__BD4So",
	"no_results": "styles_no_results__esK0G",
	"istaxideal_search_results": "styles_istaxideal_search_results__qNC5u"
};


/***/ }),

/***/ 5130:
/***/ ((module) => {

// Exports
module.exports = {
	"lds_ellipsis": "styles_lds_ellipsis__U_4BN",
	"lds_ellipsis1": "styles_lds_ellipsis1__qZaJ9",
	"lds_ellipsis2": "styles_lds_ellipsis2__9ZRtu",
	"lds_ellipsis3": "styles_lds_ellipsis3__ObR_Z"
};


/***/ }),

/***/ 4917:
/***/ ((module) => {

// Exports
module.exports = {
	"selected_points": "styles_selected_points__Zdmzx",
	"point_div": "styles_point_div__1LJ5m",
	"icons": "styles_icons__JzQRX",
	"icons_check_span": "styles_icons_check_span__Ft6mi",
	"icons_delete_span": "styles_icons_delete_span__l1zkK",
	"isTaxiDeal_selected_points": "styles_isTaxiDeal_selected_points__Q71IX",
	"hasoneitem_taxideals": "styles_hasoneitem_taxideals__wLRsD"
};


/***/ }),

/***/ 6760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4787);
/* harmony import */ var _resources_env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4603);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9304);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__);







//!when we get search result: there pcatId is :  from greater to less    like >>   4 3 2 1
//!arrange points maake that from less to more  like >> 1 2 3 4
const moveZeroosToTheEndMakeAnArray = (params = {})=>{
    let { keyss =[] , collectingPoints ={}  } = params;
    let zeros = 0;
    for(let i = 0; i < keyss.length; i++){
        let isZero = keyss[i] === "0";
        if (isZero) {
            zeros++;
            keyss.splice(i, 1);
            i--;
        }
    }
    for(let i1 = 0; i1 < zeros; i1++){
        keyss.push("0");
    }
    let newOrderedItems = keyss.map((key)=>collectingPoints[key]);
    return newOrderedItems;
};
const getPostCodesAndAddToList = (params = {}, callback = ()=>{})=>{
    let { point  } = params;
    const url = `${_resources_env__WEBPACK_IMPORTED_MODULE_5__/* ["default"].apiDomain */ .Z.apiDomain}/api/v1/postcode-address`;
    const headers = {
        "Content-Type": "application/json"
    };
    const method = "POST";
    const body = JSON.stringify({
        postcodes: [
            point.postcode
        ]
    });
    const config = {
        method,
        headers,
        body
    };
    fetch(url, config).then((res)=>res.json()).then((data)=>{
        callback(data);
    }).catch((error)=>{
        let message = "APL HandleSearchResults Component - getPostCodesAndAddToList function      fetching catch blog  ";
        window.handelErrorLogs(error, message, {
            config,
            url
        });
    });
};
const requestForGooglePLace = (params = {}, callback = ()=>{})=>{
    let { point  } = params;
    const url = `${_resources_env__WEBPACK_IMPORTED_MODULE_5__/* ["default"].apiDomain */ .Z.apiDomain}/api/v1/google-places`;
    const headers = {
        "Content-Type": "application/json"
    };
    const method = "POST";
    const body = JSON.stringify({
        point
    });
    const config = {
        method,
        headers,
        body
    };
    fetch(url, config).then((res)=>res.json()).then((data)=>{
        callback(data);
    }).catch((error)=>{
        let message = "APL HandleSearchResults Component - requestForGooglePLace function      fetching catch blog  ";
        window.handelErrorLogs(error, message, {
            config,
            url
        });
    });
};
const getPostCodesAndAddToListAsync = (params)=>new Promise((resolve, reject)=>getPostCodesAndAddToList(params, (log)=>resolve(log)));
const requestForGogglePalceAsync = (params)=>new Promise((resolve, reject)=>requestForGooglePLace(params, (log)=>resolve(log)));
const HandleSearchResults = (params = {})=>{
    let { collectingPoints , destination , setInternalState , index , getQuotations =()=>{} , language , isTaxiDeal =false  } = params;
    let newOrderedItems = [];
    //simplify collectedpoints
    if (Object.keys(collectingPoints)?.length !== 0) {
        let keyss = Object.keys(collectingPoints);
        //take this  f12(collectingPoints); >>//{0: Array(30), 1: Array(4)} to turn this   //f12(newOrderedItems); // [Array(4), Array(30)]
        newOrderedItems = moveZeroosToTheEndMakeAnArray({
            keyss,
            collectingPoints
        });
    }
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    const state = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.pickUpDropOffActions);
    let { params: { direction  } , reservations  } = state;
    const { appData  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.initialReducer);
    const imgObj = appData?.pointTypeCategories?.reduce((obj, item)=>({
            ...obj,
            [item.id]: item.image
        }), {});
    const namePlaceOfObj = appData?.pointTypeCategories?.reduce((obj, item)=>({
            ...obj,
            [item.id]: item.categoryName
        }), {});
    const objectDetailss = appData?.pointTypeCategories?.reduce((obj, item)=>({
            ...obj,
            [item.id]: JSON.parse(item.objectDetails)
        }), {});
    //hook
    let size = (0,_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_4__/* .useWindowSize */ .i)();
    let { width  } = size;
    const handleAddItemToSelectList = (params = {})=>{
        let { point , destination  } = params;
        //setting postcode adressess
        if (point.pcatId === 5) {
            (async ()=>{
                let log = await getPostCodesAndAddToListAsync({
                    point
                });
                let { status , results  } = log;
                if (status && results.length > 0) dispatch({
                    type: "SET_POST_CODE_ADRESSES",
                    data: {
                        result: results[0]
                    }
                });
            })();
        }
        //make one request more if point pcatId is equal to 10
        if (point.pcatId === 10) {
            (async ()=>{
                let log = await requestForGogglePalceAsync({
                    point
                });
                if (log.status) point = log.point;
            })();
        }
        point = {
            ...point,
            ...objectDetailss[point.pcatId]
        } //...point    flightDetails{ flightNumber="",waitingPickupTime=0}
        ;
        if (isTaxiDeal && point.pcatId === 5) {
            point = {
                ...point,
                postCodeDetails: {
                    ...point.postCodeDetails,
                    id: ""
                }
            };
            dispatch({
                type: "ADD_NEW_POINT",
                data: {
                    point,
                    destination,
                    index
                }
            });
        } else {
            dispatch({
                type: "ADD_NEW_POINT",
                data: {
                    point,
                    destination,
                    index
                }
            });
        }
        // cleaning input field after adding item
        setInternalState({
            [`${destination}-search-value-${index}`]: "",
            [`${destination}-points-error-${index}`]: "",
            [`${destination}-search-focus-${index}`]: false,
            [`collecting-${destination}-points-${index}`]: [],
            [`show-${destination}-extra-point-${index}`]: true
        });
        let points = reservations[index][`selected${destination === "pickup" ? "Pickup" : "Dropoff"}Points`];
        reservations[index][`selected${destination === "pickup" ? "Pickup" : "Dropoff"}Points`] = [
            ...points,
            point
        ];
        getQuotations();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().search_results)} ${isTaxiDeal ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().istaxideal_search_results) : ""} `,
        w: String(width <= 990),
        children: newOrderedItems?.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            children: newOrderedItems?.map((arr)=>{
                return arr?.map((item, i)=>{
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            i === 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: `${i === 0 ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().groupName) : ""} ${direction}`,
                                children: [
                                    item.pcatId === 10 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: `${_resources_env__WEBPACK_IMPORTED_MODULE_5__/* ["default"].apiDomain */ .Z.apiDomain}/media/g-google.svg`,
                                        alt: ""
                                    }) : imgObj && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: `${_resources_env__WEBPACK_IMPORTED_MODULE_5__/* ["default"].apiDomain */ .Z.apiDomain}${imgObj[item.pcatId]}`,
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        href: "/",
                                        className: `${direction}`,
                                        children: [
                                            " ",
                                            namePlaceOfObj && namePlaceOfObj[item.pcatId],
                                            "   "
                                        ]
                                    }),
                                    item.pcatId === 10 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: `${_resources_env__WEBPACK_IMPORTED_MODULE_5__/* ["default"].apiDomain */ .Z.apiDomain}/media/powered-by-google.png`,
                                        alt: "",
                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().googleImage)
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {})
                                ]
                            }, i) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {}),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                onClick: ()=>handleAddItemToSelectList({
                                        point: item,
                                        destination
                                    }),
                                className: `${direction}`,
                                children: [
                                    imgObj ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: `${_resources_env__WEBPACK_IMPORTED_MODULE_5__/* ["default"].apiDomain */ .Z.apiDomain}${imgObj[item.pcatId]}`,
                                        alt: ""
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {}),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: `${direction}`,
                                        direction: String(direction === "rtl"),
                                        children: [
                                            language === "en" ? item.address : item.translatedAddress,
                                            " ",
                                            `${item?.postcode ? `-  ${item?.postcode}` : ""}`
                                        ]
                                    })
                                ]
                            })
                        ]
                    }, i);
                });
            })
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().no_results),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: "fas fa-times-circle",
                        "aria-hidden": "true"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        children: [
                            "No any result matched ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            " if you want a quotation, try to contact with this phone number :",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "tel: +44 (0) 208 683 2330",
                                children: "+44 (0) 208 683 2330"
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HandleSearchResults);


/***/ }),

/***/ 2290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5130);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const Loading = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().lds_ellipsis),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);


/***/ }),

/***/ 7681:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _resources_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4603);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4917);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__);






const SelectedPointsOnHomePage = (params = {})=>{
    //hasOneItem related to taxi deals
    let { points , index , destination , getQuotations =()=>{} , isTaxiDeal =false , hasOneItem =false  } = params;
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const state = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.pickUpDropOffActions);
    let { params: { direction , journeyType , language  } , reservations  } = state;
    const { appData  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.initialReducer);
    const imageObjects = appData?.pointTypeCategories?.reduce((obj, item)=>({
            ...obj,
            [item.id]: item.image
        }), {});
    const handleDelete = (params = {})=>{
        let { currentIndexOfDeletedItem  } = params;
        dispatch({
            type: "DELETE_ITEM_FROM_SELECTEDLIST",
            data: {
                currentIndexOfDeletedItem,
                index,
                destination
            }
        });
        let points = reservations[index][`selected${destination === "pickup" ? "Pickup" : "Dropoff"}Points`];
        reservations[index][`selected${destination === "pickup" ? "Pickup" : "Dropoff"}Points`] = points.filter((point, i)=>i !== currentIndexOfDeletedItem);
        getQuotations();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().selected_points)} ${isTaxiDeal ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().isTaxiDeal_selected_points) : ""} ${hasOneItem ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().hasoneitem_taxideals) : ""}`,
        children: points.map((point, index)=>{
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().point_div),
                direction: String(direction === "rtl"),
                title: `${language === "en" ? point.address : point.translatedAddress}`,
                children: [
                    imageObjects && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().point_image),
                        src: `${_resources_env__WEBPACK_IMPORTED_MODULE_4__/* ["default"].apiDomain */ .Z.apiDomain}${imageObjects[point?.pcatId]}`,
                        alt: `${language === "en" ? point.address : point.translatedAddress}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        readOnly: true,
                        className: direction,
                        name: "pickup-address",
                        placeholder: `${language === "en" ? point.address : point.translatedAddress}`
                    }),
                    !hasOneItem ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        hideme: String(router.pathname === "/quotation-result"),
                        className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().icons)} ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().icons_delete_span)}`,
                        onClick: (e)=>handleDelete({
                                currentIndexOfDeletedItem: index,
                                v: e.target
                            }),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fa fa-times sef-loc-delete",
                            "aria-hidden": "true"
                        })
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        hideme: String(router.pathname === "/quotation-result"),
                        className: `${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().icons_check_span)} ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().icons)}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: `fa-solid fa-check ${(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().check_button)}`,
                            "aria-hidden": "true"
                        })
                    })
                ]
            }, index);
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectedPointsOnHomePage);


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

/***/ 4745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ reservationSchemeValidator)
/* harmony export */ });
function reservationSchemeValidator(params = {}, options = {}) {
    if (params.reservations) {
        let { appData  } = params;
        let reservations = params.reservations || [];
        let { checkTransferDetails =false , checkQuotation =false , checkPaymentDetails =false  } = options;
        let errorHolder = {
            "status": 200,
            "reservations": reservations?.map((obj)=>({
                    quotation: {},
                    paymentDetails: {},
                    transferDetails: {},
                    passengerDetails: {},
                    reservationDetails: {},
                    selectedPickupPoints: obj.selectedPickupPoints.map((obj)=>({})),
                    selectedDropoffPoints: obj.selectedDropoffPoints.map((obj)=>({}))
                }))
        };
        // looping
        for(let index in reservations){
            let keys = Object.keys(reservations[index]);
            // looping inside reservation keys
            for (let key of keys){
                if (Array.isArray(reservations[index][key])) {
                    if (reservations[index][key].length === 0) {
                        errorHolder.status = 403;
                        errorHolder.reservations[index]["selectedPickupPoints"] = appData?.words["seSelectPickupPointAtLeast"];
                        errorHolder.reservations[index]["selectedDropoffPoints"] = appData?.words["seSelectDropoffPointAtLeast"];
                    } else {
                        // looping inside points
                        for(let i in reservations[index][key]){
                            //if (typeof reservations[index][key][i] !== 'object' || (typeof reservations[index][key][i] === 'object' && typeof reservations[index][key][i].token !== 'string')) {
                            if (typeof reservations[index][key][i] === "object" && typeof reservations[index][key][i].token !== "string") {
                                errorHolder.reservations[index][key][i] = "invalid point";
                                errorHolder.status = 403;
                            }
                            // checking points details
                            if (checkTransferDetails === true) {
                                let point = reservations[index][key][i];
                                let { pcatId  } = point;
                                let type = key.includes("Pickup") ? "pickup" : "dropoff";
                                if (pcatId === 1) {
                                    let { flightDetails  } = point; // flightDetails.flightNumber  , flightDetails.waitingPickupTime
                                    if (typeof flightDetails === "object") {
                                        errorHolder.reservations[index][key][i]["flightDetails"] = {};
                                        // flightNumber is mandutary for first pickup point
                                        if (typeof flightDetails.flightNumber === "string") {
                                            if (type === "pickup" && parseInt(i) === 0 && flightDetails.flightNumber.length === 0) {
                                                errorHolder.status = 403;
                                                errorHolder.reservations[index][key][i]["flightDetails"]["flightNumber"] = "required";
                                            }
                                        // the rest of points have optional flightNumber value
                                        } else {
                                            errorHolder.status = 403;
                                            errorHolder.reservations[index][key][i]["flightDetails"]["flightNumber"] = "required";
                                        }
                                        // waitingPickupTime is must be have integer valud and it is mandutary for first pickup point
                                        if (!Number.isInteger(flightDetails.waitingPickupTime)) {
                                            errorHolder.status = 403;
                                            errorHolder.reservations[index][key][i]["flightDetails"]["waitingPickupTime"] = "required";
                                        }
                                    } else {
                                        errorHolder.reservations[index][key][i]["flightDetails"] = {};
                                        errorHolder.reservations[index][key][i]["flightDetails"]["flightNumber"] = "invalid";
                                        errorHolder.reservations[index][key][i]["flightDetails"]["waitingPickupTime"] = "invalid";
                                        errorHolder.status = 403;
                                    }
                                } else if (pcatId === 2) {
                                    let { cruiseNumber  } = point;
                                    if (typeof cruiseNumber === "string") {
                                        // cruise number is mandutary for first pickup point
                                        errorHolder.reservations[index][key][i]["cruiseNumber"] = "";
                                        if (typeof cruiseNumber === "string") {
                                            if (type === "pickup" && parseInt(i) === 0 && cruiseNumber.length === 0) {
                                                errorHolder.status = 403;
                                                errorHolder.reservations[index][key][i]["cruiseNumber"] = "required";
                                            }
                                        } else {
                                            errorHolder.status = 403;
                                            errorHolder.reservations[index][key][i]["cruiseNumber"] = "required";
                                        }
                                    } else {
                                        errorHolder.reservations[index][key][i]["cruiseNumber"] = "invalid";
                                        errorHolder.status = 403;
                                    }
                                } else if (pcatId === 3) {
                                    let { trainNumber  } = point;
                                    if (typeof trainNumber !== "string") {
                                        errorHolder.reservations[index][key][i]["trainNumber"] = "invalid";
                                        errorHolder.status = 403;
                                    }
                                } else if (pcatId === 4) {
                                    let { roomNumber  } = point;
                                    if (typeof roomNumber !== "string") {
                                        errorHolder.reservations[index][key][i]["roomNumber"] = "invalid";
                                        errorHolder.status = 403;
                                    }
                                } else if (pcatId === 5) {
                                    let { postCodeDetails  } = point // postCodeDetails.id  , postCodeDetails.postCodeAddress
                                    ;
                                    if (typeof postCodeDetails === "object") {
                                        errorHolder.reservations[index][key][i]["postCodeDetails"] = {};
                                        // postCodeDetails.adress mundaty if postcodeDetails.id ===0 (typeof number)
                                        if (typeof postCodeDetails.postCodeAddress === "string" && Number.isInteger(postCodeDetails.id)) {
                                            if (postCodeDetails.id === 0 && postCodeDetails.postCodeAddress.length === 0) {
                                                errorHolder.status = 403;
                                                errorHolder.reservations[index][key][i]["postCodeDetails"]["postCodeAddress"] = "required";
                                            }
                                        } else {
                                            errorHolder.status = 403;
                                            errorHolder.reservations[index][key][i]["postCodeDetails"]["id"] = !Number.isInteger(postCodeDetails.id) ? "invalid" : undefined;
                                            errorHolder.reservations[index][key][i]["postCodeDetails"]["postCodeAddress"] = typeof postCodeDetails.postCodeAddress !== "string" ? "required" : undefined;
                                        }
                                    } else {
                                        errorHolder.reservations[index][key][i]["postCodeDetails"] = "invalid";
                                        errorHolder.status = 403;
                                    }
                                } else if (pcatId === 7 || pcatId === 8 || pcatId === 9 || pcatId === 10) {
                                    //!iam not sure about this desctructing
                                    let { ["address-description"]: adressDescription  } = point;
                                    if (typeof adressDescription !== "string") {
                                        errorHolder.reservations[index][key][i]["address-description"] = "invalid";
                                        errorHolder.status = 403;
                                    }
                                }
                            }
                        }
                    }
                } else if (typeof reservations[index][key] === "object" && reservations[index][key] !== null) {
                    // quotation transferDetails , passengerDetails , paymentDetails , reservationDetails
                    //!new addition
                    if (key === "quotation") {
                        if (checkQuotation === true) {
                            let quotation = reservations[index][key];
                            let { token , price , carId  } = quotation;
                            if (typeof token !== "string") {
                                errorHolder.status = 403;
                                errorHolder.reservations[index][key]["token"] = "invalid data type";
                            }
                            if (typeof price !== "string") {
                                errorHolder.status = 403;
                                errorHolder.reservations[index][key]["price"] = "invalid data type";
                            }
                            if (!Number.isInteger(carId)) {
                                errorHolder.status = 403;
                                errorHolder.reservations[index][key]["price"] = "invalid data type";
                            }
                        }
                    } else if (key === "transferDetails") {
                        let transferDetails = reservations[index][key];
                        let { transferDateTimeString , passengersNumber , pickupCategoryId , specialRequests  } = transferDetails;
                        if (!Number.isInteger(passengersNumber)) {
                            errorHolder.status = 403;
                            errorHolder.reservations[index][key]["passengersNumber"] = "invalid data type";
                        }
                        if (!Number.isInteger(pickupCategoryId)) {
                            errorHolder.status = 403;
                            errorHolder.reservations[index][key]["pickupCategoryId"] = "invalid data type";
                        }
                        //in our hgt "2022-12-01 20:00"     date structure in this way
                        if (typeof transferDateTimeString !== "string") {
                            errorHolder.status = 403;
                            errorHolder.reservations[index][key]["transferDateTimeString"] = "invalid data type";
                        }
                        if (typeof specialRequests !== "string") {
                            errorHolder.status = 403;
                            errorHolder.reservations[index][key]["specialRequests"] = "invalid data type";
                        }
                    } else if (key === "passengerDetails") {
                        if (checkTransferDetails === true) {
                            let passengerDetails = reservations[index][key];
                            // firstname , lastname , email , phone , language
                            if (typeof passengerDetails["firstname"] !== "string" || typeof passengerDetails["firstname"] === "string" && passengerDetails["firstname"].length === 0) {
                                errorHolder.status = 403;
                                errorHolder.reservations[index][key]["firstname"] = "required";
                            }
                            //!new addition for @ email checking
                            if (typeof passengerDetails["email"] !== "string" || typeof passengerDetails["email"] === "string" && passengerDetails["email"].length === 0 || !passengerDetails["email"].includes("@")) {
                                errorHolder.status = 403;
                                errorHolder.reservations[index][key]["email"] = "required";
                            }
                            if (typeof passengerDetails["phone"] !== "string" || typeof passengerDetails["phone"] === "string" && passengerDetails["phone"].length === 0) {
                                errorHolder.status = 403;
                                errorHolder.reservations[index][key]["phone"] = "required";
                            }
                            if (typeof passengerDetails["lastname"] !== "string") {
                                errorHolder.status = 403;
                                errorHolder.reservations[index][key]["lastname"] = "invalid data type";
                            }
                            if (typeof passengerDetails["language"] !== "string") {
                                errorHolder.status = 403;
                                errorHolder.reservations[index][key]["language"] = "invalid data type";
                            }
                            if (typeof passengerDetails["token"] !== "string") {
                                errorHolder.status = 403;
                                errorHolder.reservations[index][key]["token"] = "invalid data type";
                            }
                            // check all keys
                            let undifinedKeys = Object.keys(passengerDetails).filter((key)=>![
                                    "firstname",
                                    "lastname",
                                    "email",
                                    "phone",
                                    "language",
                                    "token"
                                ].includes(key));
                            if (undifinedKeys.length !== 0) {
                                errorHolder.status = 403;
                                for (let invalidKey of undifinedKeys){
                                    errorHolder.reservations[index][key][invalidKey] = "invalid";
                                }
                            }
                        }
                    } else if (key === "paymentDetails") {
                        if (checkPaymentDetails) {
                            let paymentDetails = reservations[index][key];
                            let { token: token1 , paymentTpye , account , price: price1  } = paymentDetails;
                            if (typeof token1 !== "string") {
                                errorHolder.status = 403;
                                errorHolder.reservations[index][key]["token"] = "invalid";
                            }
                            if (typeof paymentTpye !== "string" || !Number.isInteger(paymentTpye)) {
                                errorHolder.status = 403;
                                errorHolder.reservations[index][key]["paymentTpye"] = "invalid";
                            }
                            if (!Number.isInteger(account)) {
                                errorHolder.status = 403;
                                errorHolder.reservations[index][key]["account"] = "invalid";
                            }
                            if (!Number.isInteger(price1)) {
                                errorHolder.status = 403;
                                errorHolder.reservations[index][key]["price"] = "invalid";
                            }
                        }
                    } else if (key === "reservationDetails") {
                        let reservationDetails = reservations[index][key];
                        let { channelId , accountId  } = reservationDetails;
                        if (!Number.isInteger(channelId)) {
                            errorHolder.status = 403;
                            errorHolder.reservations[index][key]["channelId"] = "invalid";
                        }
                        if (!Number.isInteger(accountId)) {
                            errorHolder.status = 403;
                            errorHolder.reservations[index][key]["accountId"] = "invalid";
                        }
                    } else {
                        errorHolder.status = 403;
                        errorHolder.reservations[index][key] = "Invalid property inside reservation object";
                    }
                } else {
                    errorHolder.status = 403;
                    errorHolder.reservations[index][key] = "Invalid property inside reservation object";
                }
            }
        }
        return errorHolder;
    }
}


/***/ }),

/***/ 4787:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ useWindowSize)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// Hook
function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        width: undefined,
        height: undefined
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return ()=>window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}


/***/ })

};
;