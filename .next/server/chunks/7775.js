"use strict";
exports.id = 7775;
exports.ids = [7775];
exports.modules = {

/***/ 7775:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(420);
/* harmony import */ var _oneway_module_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2);
/* harmony import */ var _oneway_module_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_oneway_module_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2747);
/* harmony import */ var _DateInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7551);
/* harmony import */ var _TimePicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4384);
/* harmony import */ var _AlertMessages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3714);
/* harmony import */ var _constants_showCase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7445);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store_pickUpDropOffReducer_pickUpDropSelectors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5789);
/* harmony import */ var _store_pickUpDropOffReducer_pickUpDropAction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3570);
/* harmony import */ var _helpers_getDate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5795);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _store_pickUpDropOffReducer_pickUpDropTypes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8348);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_10__);







// import BlueBotton from "../../Buttons/BlueButton";



// import HandleSearchResults from "../../HandleSearchResults";


// import SelectedLists from "../../SeletedLists";

// import LoadBtn from "../../Buttons/LoadBtn";



const LoadBtn = next_dynamic__WEBPACK_IMPORTED_MODULE_10___default()(()=>__webpack_require__.e(/* import() */ 8926).then(__webpack_require__.bind(__webpack_require__, 8926)), {
    loadableGenerated: {
        modules: [
            "..\\components\\elements\\Hero\\OneWay\\OneWay.js -> " + "../../Buttons/LoadBtn"
        ]
    }
});
const SelectedLists = next_dynamic__WEBPACK_IMPORTED_MODULE_10___default()(()=>Promise.all(/* import() */[__webpack_require__.e(9434), __webpack_require__.e(809)]).then(__webpack_require__.bind(__webpack_require__, 809)), {
    loadableGenerated: {
        modules: [
            "..\\components\\elements\\Hero\\OneWay\\OneWay.js -> " + "../../SeletedLists"
        ]
    }
});
const HandleSearchResults = next_dynamic__WEBPACK_IMPORTED_MODULE_10___default()(()=>__webpack_require__.e(/* import() */ 7295).then(__webpack_require__.bind(__webpack_require__, 7295)), {
    loadableGenerated: {
        modules: [
            "..\\components\\elements\\Hero\\OneWay\\OneWay.js -> " + "../../HandleSearchResults"
        ]
    }
});
const BlueBotton = next_dynamic__WEBPACK_IMPORTED_MODULE_10___default()(()=>__webpack_require__.e(/* import() */ 1599).then(__webpack_require__.bind(__webpack_require__, 1599)), {
    loadableGenerated: {
        modules: [
            "..\\components\\elements\\Hero\\OneWay\\OneWay.js -> " + "../../Buttons/BlueButton"
        ]
    }
});
const OneWay = ({ btnTittle , border , responsive , showHeader , noAlert , dontChangeRouter =false , forBooking , inTransferComp , fromQuotation =false , fromArticle =false , preSelectedPickupPoint =[] , preSelectedDropoffPoint =[] , env  })=>{
    var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7;
    //selectors
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();
    const { loadingDropOffOneWay , loadingPickUpOneWay , direction , params  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(_store_pickUpDropOffReducer_pickUpDropSelectors__WEBPACK_IMPORTED_MODULE_11__/* .selectPickUpDropOffReducer */ .X7);
    const selectJourneyType = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(_store_pickUpDropOffReducer_pickUpDropSelectors__WEBPACK_IMPORTED_MODULE_11__/* .selectedJourneyType */ .D0);
    const selectPickUpInputOneWay = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(_store_pickUpDropOffReducer_pickUpDropSelectors__WEBPACK_IMPORTED_MODULE_11__/* .selectedPickUpInputOneWay */ .W1);
    const selectDroppOffInputOneWay = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(_store_pickUpDropOffReducer_pickUpDropSelectors__WEBPACK_IMPORTED_MODULE_11__/* .selectedDroppOffInputOneWay */ .$r);
    const selectedPickUpPointsOneWay = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(_store_pickUpDropOffReducer_pickUpDropSelectors__WEBPACK_IMPORTED_MODULE_11__/* .PickUpPointsOneWay */ .Nw);
    const selectedDropOffPoints = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(_store_pickUpDropOffReducer_pickUpDropSelectors__WEBPACK_IMPORTED_MODULE_11__/* .DroopOffPointsOneWay */ .fe);
    const selectTransferDateTimeString = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(_store_pickUpDropOffReducer_pickUpDropSelectors__WEBPACK_IMPORTED_MODULE_11__/* .transferDateTimeString */ .Vo);
    const selectTransferErorParams = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(_store_pickUpDropOffReducer_pickUpDropSelectors__WEBPACK_IMPORTED_MODULE_11__/* .transferErrorParams */ .R6);
    const selectShowAddExtraTextPickUp = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(_store_pickUpDropOffReducer_pickUpDropSelectors__WEBPACK_IMPORTED_MODULE_11__/* .showExtraTextForPickUpTr */ .Zm);
    const selectShowInpAfterAdItmPicUp = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(_store_pickUpDropOffReducer_pickUpDropSelectors__WEBPACK_IMPORTED_MODULE_11__/* .showInputAfterAddPickUpTr */ .nC);
    const selectShowInpAddItemDropOff = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(_store_pickUpDropOffReducer_pickUpDropSelectors__WEBPACK_IMPORTED_MODULE_11__/* .showInputAfterAdDropTr */ .a4);
    const selectShowAddExtraTextDropOff = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(_store_pickUpDropOffReducer_pickUpDropSelectors__WEBPACK_IMPORTED_MODULE_11__/* .showExtraTextForDropTr */ .aE);
    const selectQuotTransferLoading = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(_store_pickUpDropOffReducer_pickUpDropSelectors__WEBPACK_IMPORTED_MODULE_11__/* .quotTransferLoading */ .Hk);
    const { 0: focused , 1: setFocused  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    let [internalState, setInternalState] = react__WEBPACK_IMPORTED_MODULE_1___default().useReducer((s, o)=>({
            ...s,
            ...o
        }), {
        "pickup-search-focus-0": false,
        "dropoff-search-focus-0": false,
        "pickup-search-focus-1": false,
        "dropoff-search-focus-1": false
    });
    let size = (0,_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_2__/* .useWindowSize */ .i)();
    let { width  } = size;
    const closeModal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((params = {})=>{
        if (width < 990) {
            let { index , destination  } = params;
            let inputField = document.querySelector('[dataid="input_focused"]');
            if (inputField) {
                inputField.style.opacity = 1;
            }
            setInternalState({
                [`${destination}-search-focus-${index}`]: false
            });
            let navbarElement = document.querySelector("#navbar_container");
            if (navbarElement) {
                navbarElement.style.display = "flex";
            }
        }
    }, [
        width,
        setInternalState
    ]); // Add other dependencies as needed
    // Assuming width, setFocused, setInternalState, and dispatch are props or state values
    const onFocus = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((params = {})=>{
        setFocused(true);
        if (width < 990) {
            let navbarElement = document.querySelector("#navbar_container");
            navbarElement.style.display = "none";
            let { e , destination , index  } = params;
            e.target.style.opacity = 0;
            setInternalState({
                [`${destination}-search-focus-${index}`]: window.innerWidth > 990 ? false : true
            });
            const pickup0 = document === null || document === void 0 ? void 0 : document.querySelector("#pickup0");
            const drop0 = document === null || document === void 0 ? void 0 : document.querySelector("#drop0");
            e.target.style.opacity = 1;
            if (destination === "pickup" && index === 0) {
                setTimeout(()=>{
                    window.scroll({
                        top: pickup0 === null || pickup0 === void 0 ? void 0 : pickup0.offsetTop,
                        left: 0,
                        behavior: "smooth"
                    });
                }, 100);
            }
            if (destination === "dropoff" && index === 0) {
                setTimeout(()=>{
                    window.scroll({
                        top: drop0 === null || drop0 === void 0 ? void 0 : drop0.offsetTop,
                        left: 0,
                        behavior: "smooth"
                    });
                }, 100);
            }
        }
    }, [
        width,
        setFocused,
        setInternalState
    ]); // Add other dependencies as needed
    const onBlur = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setTimeout(()=>{
            setFocused(false);
            dispatch((0,_store_pickUpDropOffReducer_pickUpDropAction__WEBPACK_IMPORTED_MODULE_12__/* .resetData */ .uY)());
        }, 200);
    }, [
        setFocused,
        dispatch
    ]);
    //handleChange function
    // Assuming dispatch, router, and direction are part of your component's props or state
    const onchangeHandler = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e, pickUpOrDropOff, journeyType)=>{
        let inpValue = e.target.value;
        if (inpValue.includes('"') || inpValue.includes(`'`) || inpValue.includes("/") || inpValue.includes("\\")) return;
        if (pickUpOrDropOff === "date") {
            dispatch((0,_store_pickUpDropOffReducer_pickUpDropAction__WEBPACK_IMPORTED_MODULE_12__/* .setDataTime */ .rR)(e.target.value, pickUpOrDropOff, journeyType));
            if (router.pathname === "/managebooking") {
                dispatch((0,_store_pickUpDropOffReducer_pickUpDropAction__WEBPACK_IMPORTED_MODULE_12__/* .gettingQuotations */ .HZ)(router, 0, {
                    updateInsideQuotation: true
                }));
            }
            if (router.pathname === "/quotation" && (direction === "left" || direction === "right") && journeyType === 0) {
                dispatch((0,_store_pickUpDropOffReducer_pickUpDropAction__WEBPACK_IMPORTED_MODULE_12__/* .gettingQuotations */ .HZ)(router, 0, {
                    updateInsideQuotation: true
                }));
            }
        } else {
            dispatch((0,_store_pickUpDropOffReducer_pickUpDropAction__WEBPACK_IMPORTED_MODULE_12__/* .updateSearchValue */ .vz)(e.target.value, pickUpOrDropOff, journeyType));
            if (e.target.value.length > 2) {
                dispatch((0,_store_pickUpDropOffReducer_pickUpDropAction__WEBPACK_IMPORTED_MODULE_12__/* .collectPickUpPoints */ .K1)(e.target.value, pickUpOrDropOff, journeyType));
            }
            if (e.target.value.length < 3) {
                dispatch((0,_store_pickUpDropOffReducer_pickUpDropAction__WEBPACK_IMPORTED_MODULE_12__/* .resetData */ .uY)());
            }
        }
    }, [
        dispatch,
        router,
        direction
    ]); // Include all dependencies here
    // Assuming dispatch, selectedDropOffPoints, selectedPickUpPointsOneWay, router,
    // selectTransferErorParams, and dontChangeRouter are props or part of the component's state
    const handleSubmit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{
        e.preventDefault();
        if (selectedDropOffPoints.length < 1 || selectedPickUpPointsOneWay.length < 1) {
            dispatch((0,_store_pickUpDropOffReducer_pickUpDropAction__WEBPACK_IMPORTED_MODULE_12__/* .setParamsError */ .Br)("Select one point at least, invalid", "both", 0));
        } else {
            dispatch((0,_store_pickUpDropOffReducer_pickUpDropAction__WEBPACK_IMPORTED_MODULE_12__/* .setParamsError */ .Br)("", "both", 0));
            if (router.pathname === "/quotation") {
                if (!selectTransferErorParams.dateTimeForBoolean) {
                    dispatch((0,_store_pickUpDropOffReducer_pickUpDropAction__WEBPACK_IMPORTED_MODULE_12__/* .gettingQuotations */ .HZ)(router, 0, {
                        updateInsideQuotation: true
                    }));
                }
            } else {
                if (!selectTransferErorParams.dateTimeForBoolean) {
                    dispatch((0,_store_pickUpDropOffReducer_pickUpDropAction__WEBPACK_IMPORTED_MODULE_12__/* .gettingQuotations */ .HZ)(!dontChangeRouter ? router : "", 0, {
                        updateInsideQuotation: false
                    }));
                }
            }
        }
    }, [
        dispatch,
        selectedDropOffPoints,
        selectedPickUpPointsOneWay,
        router,
        selectTransferErorParams.dateTimeForBoolean,
        dontChangeRouter
    ]); // Include all dependencies here
    const handleAddNewInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((pickOrDrop, journeyType, whereFuncComes)=>{
        dispatch((0,_store_pickUpDropOffReducer_pickUpDropAction__WEBPACK_IMPORTED_MODULE_12__/* .addExtraInputForJourney */ .QU)(pickOrDrop, journeyType, whereFuncComes));
    }, [
        dispatch
    ]);
    //burdaki use effect degerinde beraber farki var yuxardakiynan
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        var ref, ref1, ref2, ref3;
        if (Number((ref1 = (ref = (0,_helpers_getDate__WEBPACK_IMPORTED_MODULE_13__/* .dateTimeStringFunc */ .Hp)()) === null || ref === void 0 ? void 0 : ref.split(" ")) === null || ref1 === void 0 ? void 0 : ref1[1].split(":")[0]) >= 10) {
            var ref4, ref5;
            if ((0,_helpers_getDate__WEBPACK_IMPORTED_MODULE_13__/* .dateTimeStringFunc */ .Hp)().split(" ")[0] === (selectTransferDateTimeString === null || selectTransferDateTimeString === void 0 ? void 0 : selectTransferDateTimeString.split(" ")[0]) && Number((ref5 = (ref4 = (0,_helpers_getDate__WEBPACK_IMPORTED_MODULE_13__/* .dateTimeStringFunc */ .Hp)()) === null || ref4 === void 0 ? void 0 : ref4.split(" ")) === null || ref5 === void 0 ? void 0 : ref5[1].split(":")[0]) > Number(selectTransferDateTimeString.split(" ")[1].split(":")[0])) {
                dispatch((0,_store_pickUpDropOffReducer_pickUpDropAction__WEBPACK_IMPORTED_MODULE_12__/* .setParamsError */ .Br)("İnvalid  time", "dateTimeError", 0, true));
            } else {
                dispatch((0,_store_pickUpDropOffReducer_pickUpDropAction__WEBPACK_IMPORTED_MODULE_12__/* .setParamsError */ .Br)("", "dateTimeError", 0, false));
            }
        }
        //if date is equal 2022-02-19  ===2022-02-19       01 current  02 client choiced
        //yani bu durumda eger saat 01 is e client birden buyuk secmelidirki hata vermesin
        if (Number((ref3 = (ref2 = (0,_helpers_getDate__WEBPACK_IMPORTED_MODULE_13__/* .dateTimeStringFunc */ .Hp)()) === null || ref2 === void 0 ? void 0 : ref2.split(" ")) === null || ref3 === void 0 ? void 0 : ref3[1].split(":")[0]) <= 10) {
            var ref6, ref7;
            if ((0,_helpers_getDate__WEBPACK_IMPORTED_MODULE_13__/* .dateTimeStringFunc */ .Hp)().split(" ")[0] === selectTransferDateTimeString.split(" ")[0] && Number((ref7 = (ref6 = (0,_helpers_getDate__WEBPACK_IMPORTED_MODULE_13__/* .dateTimeStringFunc */ .Hp)()) === null || ref6 === void 0 ? void 0 : ref6.split(" ")) === null || ref7 === void 0 ? void 0 : ref7[1].split(":")[0]) > Number(selectTransferDateTimeString.split(" ")[1].split(":")[0])) {
                dispatch((0,_store_pickUpDropOffReducer_pickUpDropAction__WEBPACK_IMPORTED_MODULE_12__/* .setParamsError */ .Br)("İnvalid  time", "dateTimeError", 0, true));
            } else {
                dispatch((0,_store_pickUpDropOffReducer_pickUpDropAction__WEBPACK_IMPORTED_MODULE_12__/* .setParamsError */ .Br)("", "dateTimeError", 0, false));
            }
        }
    }, [
        selectTransferDateTimeString
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (fromArticle) {
            dispatch({
                type: _store_pickUpDropOffReducer_pickUpDropTypes__WEBPACK_IMPORTED_MODULE_14__/* .GET_VALUES_FROM_ARTICLES */ .fI,
                payload: {
                    preSelectedPickupPoint,
                    preSelectedDropoffPoint,
                    dateTime: (0,_helpers_getDate__WEBPACK_IMPORTED_MODULE_13__/* .dateTimeStringFuncOneHourAhead */ .l_)()
                }
            });
        }
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            border: `${fromArticle ? "1px solid #2565df66" : "none"}`
        },
        className: ` ${responsive ? (_oneway_module_scss__WEBPACK_IMPORTED_MODULE_15___default().responsive_oneway_tab_content) : (_oneway_module_scss__WEBPACK_IMPORTED_MODULE_15___default().oneway_tab_content)} ${border === "blue" ? (_oneway_module_scss__WEBPACK_IMPORTED_MODULE_15___default().border_blue) : " "} ${forBooking && (_oneway_module_scss__WEBPACK_IMPORTED_MODULE_15___default().forBooking)}  `,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                className: (_oneway_module_scss__WEBPACK_IMPORTED_MODULE_15___default().form_container),
                onSubmit: handleSubmit,
                children: [
                    showHeader && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: (_oneway_module_scss__WEBPACK_IMPORTED_MODULE_15___default().general_box_title),
                        children: "Transfer Details"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_oneway_module_scss__WEBPACK_IMPORTED_MODULE_15___default().form_flying),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `col_6 ${(_oneway_module_scss__WEBPACK_IMPORTED_MODULE_15___default().inp_box)} ${(_oneway_module_scss__WEBPACK_IMPORTED_MODULE_15___default()["search-input-container"])}`,
                                f: String(internalState[`pickup-search-focus-0`]),
                                id: "pickup0",
                                children: [
                                    !fromQuotation ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_oneway_module_scss__WEBPACK_IMPORTED_MODULE_15___default().popup_header),
                                        f: String(internalState[`pickup-search-focus-0`]),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: `fa fa-times sef-loc-delete ${(_oneway_module_scss__WEBPACK_IMPORTED_MODULE_15___default().close_icon)}`,
                                                onClick: (e)=>closeModal({
                                                        index: 0,
                                                        destination: "pickup"
                                                    })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "From ?"
                                            })
                                        ]
                                    }) : "",
                                    selectedPickUpPointsOneWay.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TextInput__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        title: `${internalState[`pickup-search-focus-0`] ? "" : "Pick Up Point"}`,
                                        icon: "location-dot",
                                        placeholder: "City or Airport",
                                        type: "text",
                                        name: "PickUpPoint",
                                        onChange: (e)=>onchangeHandler(e, 0, 0),
                                        value: selectPickUpInputOneWay,
                                        isLoading: loadingPickUpOneWay,
                                        onBlur: onBlur,
                                        errorMessage: selectedPickUpPointsOneWay.length < 1 && selectTransferErorParams.selectedPickUpPointError,
                                        onFocus: (e)=>onFocus({
                                                e,
                                                destination: "pickup",
                                                index: 0
                                            }),
                                        dataid: "input_focused",
                                        f: String(internalState[`pickup-search-focus-0`])
                                    }),
                                    selectedPickUpPointsOneWay.length === 0 && (selectPickUpInputOneWay === null || selectPickUpInputOneWay === void 0 ? void 0 : selectPickUpInputOneWay.length) > 2 && selectJourneyType === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HandleSearchResults, {
                                        env: env,
                                        pickOrDrop: "pickupPoints",
                                        setInternalState: setInternalState
                                    }),
                                    (selectedPickUpPointsOneWay === null || selectedPickUpPointsOneWay === void 0 ? void 0 : selectedPickUpPointsOneWay.length) > 0 && !internalState[`pickup-search-focus-0`] && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_oneway_module_scss__WEBPACK_IMPORTED_MODULE_15___default().point_headerr),
                                        children: "Pick up Points"
                                    }),
                                    (selectedPickUpPointsOneWay === null || selectedPickUpPointsOneWay === void 0 ? void 0 : selectedPickUpPointsOneWay.length) > 0 && !internalState[`pickup-search-focus-0`] && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SelectedLists, {
                                        selectedItems: selectedPickUpPointsOneWay,
                                        index: 0,
                                        journeyType: 0,
                                        env: env,
                                        inTransferComp: inTransferComp,
                                        forBooking: forBooking,
                                        fromQuotation: fromQuotation
                                    }),
                                    selectShowInpAfterAdItmPicUp && selectedPickUpPointsOneWay.length !== 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            position: "relative"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TextInput__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            title: "",
                                            icon: "location-dot",
                                            placeholder: "City or Airport",
                                            type: "text",
                                            name: "PickUpPoint",
                                            onChange: (e)=>onchangeHandler(e, 0, 0),
                                            value: selectPickUpInputOneWay,
                                            isLoading: loadingPickUpOneWay,
                                            onBlur: onBlur,
                                            errorMessage: selectedPickUpPointsOneWay.length < 1 && selectTransferErorParams.selectedPickUpPointError,
                                            noMarginTop: true,
                                            onFocus: (e)=>onFocus({
                                                    e,
                                                    destination: "pickup",
                                                    index: 0
                                                }),
                                            dataid: "input_focused",
                                            f: String(internalState[`pickup-search-focus-0`])
                                        })
                                    }),
                                    !selectShowAddExtraTextPickUp && (selectPickUpInputOneWay === null || selectPickUpInputOneWay === void 0 ? void 0 : selectPickUpInputOneWay.length) > 2 && selectJourneyType === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HandleSearchResults, {
                                        env: env,
                                        pickOrDrop: "pickupPoints",
                                        setInternalState: setInternalState
                                    }),
                                    selectedPickUpPointsOneWay.length > 0 && selectShowAddExtraTextPickUp && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_oneway_module_scss__WEBPACK_IMPORTED_MODULE_15___default().add_extrafly_div),
                                        onClick: ()=>handleAddNewInput("pickupPoints", 0, "handleInp"),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: `fa-solid fa-plus ${(_oneway_module_scss__WEBPACK_IMPORTED_MODULE_15___default().add_extrafly_div_icon)}`
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_oneway_module_scss__WEBPACK_IMPORTED_MODULE_15___default().add_extrafly_div_text),
                                                children: "Add Extra Point"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `col_6 ${(_oneway_module_scss__WEBPACK_IMPORTED_MODULE_15___default().inp_box)} ${(_oneway_module_scss__WEBPACK_IMPORTED_MODULE_15___default()["search-input-container"])}`,
                                f: String(internalState[`dropoff-search-focus-0`]),
                                id: "drop0",
                                children: [
                                    !fromQuotation ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_oneway_module_scss__WEBPACK_IMPORTED_MODULE_15___default().popup_header),
                                        f: String(internalState[`dropoff-search-focus-0`]),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: `fa fa-times sef-loc-delete ${(_oneway_module_scss__WEBPACK_IMPORTED_MODULE_15___default().close_icon)}`,
                                                onClick: (e)=>closeModal({
                                                        index: 0,
                                                        destination: "dropoff"
                                                    })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "From ?"
                                            })
                                        ]
                                    }) : "",
                                    selectedDropOffPoints.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TextInput__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        title: `${internalState[`dropoff-search-focus-0`] ? "" : "Drop Off Location"}`,
                                        name: "DropOffLocation",
                                        icon: "location-dot",
                                        placeholder: "City or Airport",
                                        type: "text",
                                        onChange: (e)=>onchangeHandler(e, 1, 0),
                                        value: selectDroppOffInputOneWay,
                                        onFocus: (e)=>onFocus({
                                                e,
                                                destination: "dropoff",
                                                index: 0
                                            }),
                                        onBlur: onBlur,
                                        isLoading: loadingDropOffOneWay,
                                        errorMessage: selectedDropOffPoints.length < 1 && selectTransferErorParams.selectedDropOffPointsError,
                                        dataid: "input_focused",
                                        f: String(internalState[`dropoff-search-focus-0`])
                                    }),
                                    selectedDropOffPoints.length === 0 && (selectDroppOffInputOneWay === null || selectDroppOffInputOneWay === void 0 ? void 0 : selectDroppOffInputOneWay.length) > 2 && selectJourneyType === 0 && focused && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HandleSearchResults, {
                                        env: env,
                                        pickOrDrop: "dropoffPoints",
                                        setInternalState: setInternalState
                                    }),
                                    (selectedDropOffPoints === null || selectedDropOffPoints === void 0 ? void 0 : selectedDropOffPoints.length) > 0 && !internalState[`dropoff-search-focus-0`] && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_oneway_module_scss__WEBPACK_IMPORTED_MODULE_15___default().point_headerr),
                                        children: "Drop Off Points"
                                    }),
                                    (selectedDropOffPoints === null || selectedDropOffPoints === void 0 ? void 0 : selectedDropOffPoints.length) > 0 && !internalState[`dropoff-search-focus-0`] && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SelectedLists, {
                                        selectedItems: selectedDropOffPoints,
                                        index: 1,
                                        env: env,
                                        journeyType: 0,
                                        inTransferComp: inTransferComp,
                                        forBooking: forBooking,
                                        fromQuotation: fromQuotation
                                    }),
                                    selectShowInpAddItemDropOff && selectedDropOffPoints.length !== 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            position: "relative"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TextInput__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            title: "",
                                            name: "DropOffLocation",
                                            icon: "location-dot",
                                            placeholder: "City or Airport",
                                            type: "text",
                                            onChange: (e)=>onchangeHandler(e, 1, 0),
                                            value: selectDroppOffInputOneWay,
                                            onBlur: onBlur,
                                            isLoading: loadingDropOffOneWay,
                                            errorMessage: selectedDropOffPoints.length < 1 && selectTransferErorParams.selectedDropOffPointsError,
                                            noMarginTop: true,
                                            forBooking: true,
                                            onFocus: (e)=>onFocus({
                                                    e,
                                                    destination: "dropoff",
                                                    index: 0
                                                }),
                                            dataid: "input_focused",
                                            f: String(internalState[`dropoff-search-focus-0`])
                                        })
                                    }),
                                    !selectShowAddExtraTextDropOff && (selectDroppOffInputOneWay === null || selectDroppOffInputOneWay === void 0 ? void 0 : selectDroppOffInputOneWay.length) > 2 && selectJourneyType === 0 && focused && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HandleSearchResults, {
                                        env: env,
                                        pickOrDrop: "dropoffPoints",
                                        setInternalState: setInternalState
                                    }),
                                    selectedDropOffPoints.length > 0 && selectShowAddExtraTextDropOff && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_oneway_module_scss__WEBPACK_IMPORTED_MODULE_15___default().add_extrafly_div),
                                        onClick: ()=>handleAddNewInput("dropoffPoints", 0, "handleInp"),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: `fa-solid fa-plus ${(_oneway_module_scss__WEBPACK_IMPORTED_MODULE_15___default().add_extrafly_div_icon)}`
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_oneway_module_scss__WEBPACK_IMPORTED_MODULE_15___default().add_extrafly_div_text),
                                                children: "Add Extra Point"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_oneway_module_scss__WEBPACK_IMPORTED_MODULE_15___default().form_departing),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `${(_oneway_module_scss__WEBPACK_IMPORTED_MODULE_15___default().departing_date)} coll_6 `,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DateInput__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    title: `${((ref = selectedPickUpPointsOneWay[0]) === null || ref === void 0 ? void 0 : ref.pcatId) === 1 ? "Flight Landing Date" : "Pick Up Date"}`,
                                    name: "DeparuteDate",
                                    min: (ref1 = (0,_helpers_getDate__WEBPACK_IMPORTED_MODULE_13__/* .dateTimeStringFunc */ .Hp)()) === null || ref1 === void 0 ? void 0 : ref1.split(" ")[0],
                                    type: "date",
                                    onChange: (e)=>onchangeHandler(e, "date", 0),
                                    //here we sending 2022-0422   part of
                                    value: selectTransferDateTimeString === null || selectTransferDateTimeString === void 0 ? void 0 : selectTransferDateTimeString.split(" ")[0],
                                    errorMessage: selectTransferErorParams.dateTimeForBoolean && selectTransferErorParams.selectedTimeError
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_oneway_module_scss__WEBPACK_IMPORTED_MODULE_15___default().departing_time),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TimePicker__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        name: "hour",
                                        title: `${((ref2 = selectedPickUpPointsOneWay[0]) === null || ref2 === void 0 ? void 0 : ref2.pcatId) === 1 ? "Landing Hour" : "Pick Up Hour"}`,
                                        className: (_oneway_module_scss__WEBPACK_IMPORTED_MODULE_15___default().hour),
                                        options: _constants_showCase__WEBPACK_IMPORTED_MODULE_7__/* .hourss */ .g,
                                        journeyType: 0,
                                        errorMessage: selectTransferErorParams.dateTimeForBoolean
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TimePicker__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        name: "minute",
                                        title: `${((ref3 = selectedPickUpPointsOneWay[0]) === null || ref3 === void 0 ? void 0 : ref3.pcatId) === 1 ? "Landing Minute" : "Pick Up Minute"}`,
                                        journeyType: 0,
                                        className: (_oneway_module_scss__WEBPACK_IMPORTED_MODULE_15___default().minute),
                                        options: _constants_showCase__WEBPACK_IMPORTED_MODULE_7__/* .minutes */ .L,
                                        errorMessage: selectTransferErorParams.dateTimeForBoolean
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_oneway_module_scss__WEBPACK_IMPORTED_MODULE_15___default().departing_btn),
                                children: selectQuotTransferLoading && !selectTransferErorParams.dateTimeForBoolean ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LoadBtn, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BlueBotton, {
                                    title: btnTittle ? btnTittle : "Search Now",
                                    type: "submit"
                                })
                            })
                        ]
                    }),
                    (params === null || params === void 0 ? void 0 : (ref4 = params.quotations) === null || ref4 === void 0 ? void 0 : (ref5 = ref4.quotationError) === null || ref5 === void 0 ? void 0 : ref5.errorMessage) && (params === null || params === void 0 ? void 0 : (ref6 = params.quotations) === null || ref6 === void 0 ? void 0 : (ref7 = ref6.transferQuotations) === null || ref7 === void 0 ? void 0 : ref7.status) !== 200 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_oneway_module_scss__WEBPACK_IMPORTED_MODULE_15___default().errorBookedMessage),
                        children: params.quotations.quotationError.errorMessage
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                ]
            }),
            !noAlert && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_oneway_module_scss__WEBPACK_IMPORTED_MODULE_15___default().alertOrMessage),
                children: responsive ? selectTransferErorParams.dateTimeForBoolean && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AlertMessages__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    alert: "alert",
                    alert_color: "alert_sky",
                    message: "If you would like to make a last minute booking or for within the next 3 hours please kindly call our office on +442086832330 in which our friendly team will be more than happy to assist you further. Have a safe journey! "
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AlertMessages__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    alert: "alert",
                    alert_color: "alert_sky",
                    message: "If you would like to make a last minute booking or for within the next 3 hours please kindly call our office on +442086832330 in which our friendly team will be more than happy to assist you further. Have a safe journey! "
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OneWay);


/***/ })

};
;