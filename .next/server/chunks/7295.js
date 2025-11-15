exports.id = 7295;
exports.ids = [7295];
exports.modules = {

/***/ 2582:
/***/ ((module) => {

// Exports
module.exports = {
	"search_results": "styles_search_results__r8jXF",
	"no_results": "styles_no_results__esK0G",
	"groupName": "styles_groupName__XT4In",
	"googleImage": "styles_googleImage__BD4So"
};


/***/ }),

/***/ 7295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ elements_HandleSearchResults)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/hooks/useWindowSize.js
var useWindowSize = __webpack_require__(420);
// EXTERNAL MODULE: ./src/store/pickUpDropOffReducer/pickUpDropAction.js
var pickUpDropAction = __webpack_require__(3570);
// EXTERNAL MODULE: ./src/store/pickUpDropOffReducer/pickUpDropSelectors.js
var pickUpDropSelectors = __webpack_require__(5789);
// EXTERNAL MODULE: ./src/components/elements/HandleSearchResults/styles.module.scss
var styles_module = __webpack_require__(2582);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: ./src/components/elements/HandleSearchResults/NoResult.js



const NoResult = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
            className: (styles_module_default()).no_results,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    className: "fas fa-times-circle",
                    "aria-hidden": "true"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    children: [
                        "No any result matched ",
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        " if you want a quotation, try to contact with this phone number :",
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "tel: +44 (0) 208 683 2330",
                            children: "+44 (0) 208 683 2330"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const HandleSearchResults_NoResult = (NoResult);

;// CONCATENATED MODULE: ./src/components/elements/HandleSearchResults/index.js









const HandleSearchResults = ({ pickOrDrop , setInternalState , env  })=>{
    var ref, ref1, ref2;
    const { params , params: { journeyType  } , direction , appData ,  } = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectPickUpDropOffReducer */.X7);
    const imgObj = appData === null || appData === void 0 ? void 0 : (ref = appData.pointTypeCategories) === null || ref === void 0 ? void 0 : ref.reduce((obj, item)=>({
            ...obj,
            [item.id]: item.image
        }), {});
    const namePlaceOfObj = appData === null || appData === void 0 ? void 0 : (ref1 = appData.pointTypeCategories) === null || ref1 === void 0 ? void 0 : ref1.reduce((obj, item)=>({
            ...obj,
            [item.id]: item.categoryName
        }), {});
    const objectDetailss = appData === null || appData === void 0 ? void 0 : (ref2 = appData.pointTypeCategories) === null || ref2 === void 0 ? void 0 : ref2.reduce((obj, item)=>({
            ...obj,
            [item.id]: JSON.parse(item.objectDetails)
        }), {});
    const { 0: newItems , 1: setNewItems  } = (0,external_react_.useState)(null);
    const { 0: noResult , 1: setNoresult  } = (0,external_react_.useState)(false);
    const dispatch = (0,external_react_redux_.useDispatch)();
    const router = (0,router_.useRouter)();
    let size = (0,useWindowSize/* useWindowSize */.i)();
    let { width  } = size;
    const handleAddItemToSelectList = (item)=>{
        //sending request to google placeis
        dispatch((0,pickUpDropAction/* addItemToSelectedList */.Gt)(item, pickOrDrop, journeyType, objectDetailss[item.pcatId]));
        //  setDatas((perviousValues) => [
        //    {
        //      ...perviousValues[0],
        //      selectedDropoffPoints: [...selectOrijinalPickUpPoints],
        //      selectedDropoffPoints: [...selectOrijinalDropOffPoints],
        //    },
        //  ]);
        dispatch((0,pickUpDropAction/* addExtraInputForJourney */.QU)(pickOrDrop, journeyType, "insideHandleSearch"));
        console.log("S");
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
        if (width < 990) {
            setInternalState({
                [`pickup-search-focus-0`]: false,
                [`dropoff-search-focus-0`]: false,
                [`pickup-search-focus-1`]: false,
                [`dropoff-search-focus-1`]: false
            });
        }
    };
    (0,external_react_.useEffect)(()=>{
        if (params.searchEngine[journeyType][pickOrDrop]) {
            let keyss = Object.keys(params.searchEngine[journeyType][pickOrDrop]);
            //console.log(params.searchEngine[journeyType][pickOrDrop]); //{0: Array(30), 1: Array(4)}
            const moveZeroosToTheEnd = (nums)=>{
                let zeros = 0;
                for(let i = 0; i < nums.length; i++){
                    let isZero = nums[i] === "0";
                    if (isZero) {
                        zeros++;
                        nums.splice(i, 1);
                        i--;
                    }
                }
                for(let i1 = 0; i1 < zeros; i1++){
                    nums.push("0");
                }
                return nums;
            };
            moveZeroosToTheEnd(keyss);
            keyss = moveZeroosToTheEnd(keyss);
            let newA = keyss.map((key)=>{
                return params.searchEngine[journeyType][pickOrDrop][key];
            });
            if (newA[0] === true) setNoresult(true);
            //console.log(newA); // [Array(4), Array(30)]
            setNewItems(newA);
        } else {
            setNoresult(true);
        }
    }, [
        params
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (styles_module_default()).search_results,
        children: [
            noResult && /*#__PURE__*/ jsx_runtime_.jsx(HandleSearchResults_NoResult, {}),
            (newItems === null || newItems === void 0 ? void 0 : newItems.length) && !noResult ? /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                children: (newItems === null || newItems === void 0 ? void 0 : newItems.length) && (newItems === null || newItems === void 0 ? void 0 : newItems.map((arr)=>{
                    return arr === null || arr === void 0 ? void 0 : arr.map((item, i)=>{
                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                i === 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: i === 0 ? (styles_module_default()).groupName : "",
                                    children: [
                                        item.pcatId === 10 ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: `${env.apiDomain}/media/g-google.svg`,
                                            alt: ""
                                        }) : imgObj && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: `${env.apiDomain}${imgObj[item.pcatId]}`,
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "/location/londiani-188981",
                                            children: namePlaceOfObj && namePlaceOfObj[item.pcatId]
                                        }),
                                        item.pcatId === 10 && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: `${env.apiDomain}/media/powered-by-google.png`,
                                            alt: "",
                                            className: (styles_module_default()).googleImage
                                        })
                                    ]
                                }, i),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    onClick: ()=>handleAddItemToSelectList(item),
                                    children: [
                                        imgObj && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: `${env.apiDomain}${imgObj[item.pcatId]}`,
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            href: "/location/londiani-188981",
                                            children: [
                                                item.address,
                                                `   ${(item === null || item === void 0 ? void 0 : item.postcode) ? `-  ${item === null || item === void 0 ? void 0 : item.postcode}` : ""}`
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }, i);
                    });
                }))
            }) : ""
        ]
    });
};
/* harmony default export */ const elements_HandleSearchResults = (HandleSearchResults);


/***/ })

};
;