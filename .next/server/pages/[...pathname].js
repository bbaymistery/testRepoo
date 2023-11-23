"use strict";
(() => {
var exports = {};
exports.id = 22;
exports.ids = [22,2197,9319,4557,5026,5126,6103,4233];
exports.modules = {

/***/ 2950:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ checkLanguageAttributeOntheUrl)
/* harmony export */ });
/* harmony import */ var _extractLanguage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8006);

//when ever we  go to /tr/heahtor/heathrow airport or sth else  we r checking do we have lang attribute or not
//based on that we r making request to get appDatas and to show on the screen
const checkLanguageAttributeOntheUrl = (url)=>{
    let lang = "";
    let allLanguages = [
        "en",
        "tr",
        "ar",
        "es",
        "zh",
        "it",
        "ru"
    ];
    let checkTheUrlIfLangExist = (0,_extractLanguage__WEBPACK_IMPORTED_MODULE_0__/* .extractLanguage */ .L)(url) //it is gonna match with first two letter
    ;
    if (checkTheUrlIfLangExist && allLanguages.includes(checkTheUrlIfLangExist)) {
        lang = checkTheUrlIfLangExist;
    } else {
        lang = "en";
    }
    return lang;
};


/***/ }),

/***/ 547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ postDataAPI)
/* harmony export */ });
/* unused harmony export getDataApi */
const postDataAPI = async (params = {})=>{
    let { url , body  } = params;
    const method = "POST";
    const headers = {
        "Content-Type": "application/json"
    };
    const reqOpt = {
        body: JSON.stringify(body),
        method,
        headers
    };
    const response = await fetch(url, reqOpt);
    const datas = await response.json();
    return datas;
};
const getDataApi = async (params = {})=>{
    let { url  } = params;
    const response = await fetch(url);
    const datas = await response.json();
    return datas;
};


/***/ }),

/***/ 5477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _pathname_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__(5648);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/helpers/fetchDatas.js
var fetchDatas = __webpack_require__(547);
// EXTERNAL MODULE: ./src/resources/env.js
var env = __webpack_require__(4603);
// EXTERNAL MODULE: ./src/store/store.js + 50 modules
var store = __webpack_require__(8987);
// EXTERNAL MODULE: ./src/pages/quotation-results/index.js + 5 modules
var quotation_results = __webpack_require__(8611);
// EXTERNAL MODULE: ./src/pages/404/index.js
var _404 = __webpack_require__(5319);
;// CONCATENATED MODULE: external "url"
const external_url_namespaceObject = require("url");
// EXTERNAL MODULE: ./src/helpers/checkLanguageAttributeOntheUrl.js
var checkLanguageAttributeOntheUrl = __webpack_require__(2950);
;// CONCATENATED MODULE: ./src/pages/[...pathname].js












function Pages(props) {
    let { data , pickUps , dropoffs , keywords , language , pageTitle , headTitle , description , returnPathname , urlOfPage , pageContent , returnHeadTitle , returnPageTitle  } = props;
    if (data === "not found") return /*#__PURE__*/ jsx_runtime_.jsx(_404["default"], {});
    const state = (0,external_react_redux_.useSelector)((state)=>state.pickUpDropOffActions);
    let { reservations , params: { journeyType , quotations  }  } = state;
    const dispatch = (0,external_react_redux_.useDispatch)();
    const { appData  } = (0,external_react_redux_.useSelector)((state)=>state.initialReducer);
    const objectDetailss = appData?.pointTypeCategories.reduce((obj, item)=>({
            ...obj,
            [item.id]: JSON.parse(item.objectDetails)
        }), {});
    const getDataBasedLanguage = async (language)=>{
        try {
            //payment hydation error ucun
            let response = await fetch(`${env/* default.apiDomain */.Z.apiDomain}/app/${language}`);
            let data = await response.json();
            if (data.status === 200) {
                //passing inital state in order make update in store js when language changing
                dispatch({
                    type: "SET_NEW_APPDATA",
                    data,
                    initialStateReducer: store/* default.getState */.Z.getState().initialReducer
                });
            }
        } catch (error) {
            window.handelErrorLogs(error, " APL ...pathname -getDataBasedLanguage function try catch blog ", {
                url: `${env/* default.apiDomain */.Z.apiDomain}/app/${language}`
            });
        }
    };
    const setLanguage = (params = {})=>{
        let { language  } = params;
        if (language) {
            let index;
            let direction;
            direction = language === "ar" ? "rtl" : "ltr";
            appData?.languages.map((item, idx)=>{
                let { value: key  } = item;
                if (language === key) index = idx;
            });
            dispatch({
                type: "SET_NEW_LANGUAGE",
                data: {
                    languageKey: language,
                    direction,
                    langIndex: index
                }
            });
            //set language and dicertion  to localstorage
            localStorage.setItem("language", JSON.stringify(language));
            localStorage.setItem("direction", JSON.stringify(direction));
            localStorage.setItem("langIndex", JSON.stringify(index));
            getDataBasedLanguage(language);
        }
    };
    (0,external_react_.useEffect)(()=>{
        //when we go to transfer details then go back in that case we need to check if we have already quotations or not
        if (!quotations[0]?.quotationOptions?.length) dispatch({
            type: "GET_QUOTATION_AT_PATHNAME",
            data: {
                results: data,
                journeyType
            }
        });
        if (parseInt(journeyType) === 0) {
            //if it is already selected It means when user go to quotain and go to transfer details then come back It should be selected
            if (reservations[0].selectedDropoffPoints.length > 0 && reservations[0].selectedPickupPoints.length > 0) {
                let pickupPoints = reservations[0].selectedPickupPoints;
                let dropoffPoints = reservations[0].selectedDropoffPoints;
                dispatch({
                    type: "ADD_NEW_POINT_AT_PATHNAME",
                    data: {
                        pickupPoints,
                        dropoffPoints,
                        index: 0
                    }
                });
            } else {
                //for first time
                //   point = { ...point, ...objectDetailss[point.pcatId] }   flightDetails{ flightNumber="",waitingPickupTime=0}
                let pickupPoints1 = pickUps.length > 0 ? [
                    {
                        ...pickUps[0],
                        ...objectDetailss[pickUps[0].pcatId]
                    }
                ] : [];
                let dropoffPoints1 = dropoffs.length > 0 ? [
                    {
                        ...dropoffs[0],
                        ...objectDetailss[dropoffs[0].pcatId]
                    }
                ] : [];
                dispatch({
                    type: "ADD_NEW_POINT_AT_PATHNAME",
                    data: {
                        pickupPoints: pickupPoints1,
                        dropoffPoints: dropoffPoints1,
                        index: 0
                    }
                });
            }
        }
        //set language and bring appDAtas
        if (language?.length === 2) {
            setLanguage({
                language
            });
        } else {
            setLanguage({
                language: JSON.parse(localStorage.getItem("language"))
            });
        }
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(quotation_results["default"], {
        isTaxiDeal: true,
        keywords: keywords,
        pageTitle: pageTitle,
        headTitle: headTitle,
        description: description,
        previousUrl: urlOfPage,
        returnPathname: returnPathname,
        pageContent: pageContent,
        returnHeadTitle: returnHeadTitle,
        returnPageTitle: returnPageTitle
    });
}
/* harmony default export */ const _pathname_ = (Pages);
const makestore = ()=>store/* default */.Z;
const wrapper = (0,external_next_redux_wrapper_.createWrapper)(makestore);
const cache = {};
const getServerSideProps = wrapper.getServerSideProps((store)=>async ({ req , res , ...etc })=>{
        let pickUps = [];
        let dropoffs = [];
        let dealUrl = `${req.url}`;
        const { pathname  } = (0,external_url_namespaceObject.parse)(req.url, true);
        dealUrl = pathname.replace(/^\/_next\/data\/[^/]+\//, "/").replace(/\.[^/.]+$/, "").replace(/\.json$/, "");
        const cacheKey = `page-${req.url}`;
        let language = (0,checkLanguageAttributeOntheUrl/* checkLanguageAttributeOntheUrl */.t)(dealUrl);
        // Check if the data is cached
        if (cache[cacheKey]) return {
            props: cache[cacheKey]
        };
        const body = {
            language,
            checkRedirect: true,
            taxiDealPathname: dealUrl
        };
        const url = `${env/* default.apiDomain */.Z.apiDomain}/api/v1/taxi-deals/details`;
        const { status , data  } = await (0,fetchDatas/* postDataAPI */.S)({
            url,
            body
        });
        if (status === 205) return {
            redirect: {
                destination: data.redirectPathname,
                permanent: false
            }
        };
        // homepagedeki appDatafalanbunu asagisinda idi
        if (status === 200) {
            let { taxiDeal: { pickupPoints , dropoffPoints , pageTitle ="" , headTitle ="" , description ="" , keywords ="" , returnPathname ="" , pageContent ="" , returnHeadTitle ="" , returnPageTitle =""  }  } = data;
            // select first item from all points
            pickUps = pickupPoints?.length >= 1 ? [
                pickupPoints[0]
            ] : [];
            dropoffs = dropoffPoints?.length >= 1 ? [
                dropoffPoints[0]
            ] : [];
            const newPageContent = pageContent?.replace(/__website_domain__/g, "https://www.airport-pickups-london.com/");
            let schemaOfTaxiDeals = data?.taxiDeal?.schema || [];
            schemaOfTaxiDeals = Object.keys(schemaOfTaxiDeals).map((key)=>({
                    [key]: schemaOfTaxiDeals[key]
                })); //array of objects [b:{ab:"1"},c:{ab:"2"},d:{ab:"3"}]
            schemaOfTaxiDeals = schemaOfTaxiDeals.map((obj)=>Object.values(obj)[0]); //Output: ["1", "2", "3"]
            // Cache the data
            cache[cacheKey] = {
                data,
                pickUps,
                dropoffs,
                keywords,
                language,
                pageTitle,
                headTitle,
                description,
                returnPathname,
                urlOfPage: dealUrl,
                schemaOfTaxiDeals,
                pageContent: newPageContent,
                returnHeadTitle,
                returnPageTitle
            };
            return {
                props: cache[cacheKey]
            };
        } else {
            return {
                props: {
                    data: "not found"
                }
            };
        }
    }); // const cache = {}
 // export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, res, ...etc }) => {
 //     let dealUrl = `${etc.resolvedUrl}`
 //     const cacheKey = `page-${etc.resolvedUrl}`
 //     if (containsUppercase(dealUrl)) {
 //         //convert uppercase to lowercase
 //         dealUrl = dealUrl.replace(/[A-Z]/g, function (match) {
 //             return match.toLowerCase();
 //         });
 //     }
 //     //rediction if html or asp exist in the url
 //     if (dealUrl.includes(".asp") || dealUrl.includes(".html")) {
 //         dealUrl = dealUrl.split(".")[0]
 //         return { redirect: { destination: dealUrl, permanent: false } }
 //     }
 //     let hasLangauge = dealUrl.split('/').filter(s => s.length > 0)[0];
 //     //check if tr ar exist in url
 //     let language = store.getState().pickUpDropOffActions.params.language
 //     if ((hasLangauge || '').length === 2) {
 //         language = hasLangauge;
 //         dealUrl = dealUrl.slice(3)
 //     }
 //     const body = { taxiDealPathname: dealUrl, language }
 //     const url = `${env.apiDomain}/api/v1/taxi-deals/details`
 //     const { status, data } = await postDataAPI({ url, body })
 //     let pickUps = []
 //     let dropoffs = []
 //     let titleOfTaxiDeal = ""
 //     if (status === 200) {
 //         let { taxiDeal: { pickupPoints, dropoffPoints, title } } = data
 //         //in case  /heathrow/london/taxi-to-oxfordstreet    this url title ends with  by   ( )
 //         titleOfTaxiDeal = title.split("by")[0]
 //         // select first item from all points
 //         pickUps = pickupPoints?.length >= 1 ? [pickupPoints[0]] : []
 //         dropoffs = dropoffPoints?.length >= 1 ? [dropoffPoints[0]] : []
 //         //make redirection to home page with else part of if
 //         let scriptProductSchema = (data?.taxiDeal?.schema?.Product)
 //         let scriptLocalBusinessSchema = (data?.taxiDeal?.schema?.LocalBusiness)
 //         return {
 //             props: { data, pickUps, dropoffs, urlOfPage: dealUrl, titleOfTaxiDeal, minPrice: data.quotationOptions[0].price, hasLangauge, scriptProductSchema, scriptLocalBusinessSchema },
 //         }
 //     } else {
 //         return { props: { data: "not found", loading: false } }
 //     }
 // });
 //https://api.london-tech.com/api/v1/taxi-deals/list?pickup=gatwick&dropoff=woking&language=tr&channelId=2
 //https://api.london-tech.com/api/v1/taxi-deals/list?points=heathrow&language=tr&channelId=2
 /*
!replace with json
export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, res, ...etc }) => {
    let pickUps = []
    let dropoffs = []
    let dealUrl = `${req.url}`
    const { pathname, query } = parse(req.url, true)
    // dealUrl = pathname
    dealUrl = pathname.replace(/^\/_next\/data\/[^/]+\//, '/').replace(/\.[^/.]+$/, '').replace(/\.json$/, '')
    const cacheKey = `page-${req.url}`
    let language = checkLanguageAttributeOntheUrl(dealUrl)


    // Check if the data is cached
    if (cache[cacheKey]) return { props: cache[cacheKey] }

    const body = { language, checkRedirect: true, taxiDealPathname: dealUrl, }
    const url = `${env.apiDomain}/api/v1/taxi-deals/details`
    const { status, data } = await postDataAPI({ url, body })


    if (status === 205) return { redirect: { destination: data.redirectPathname, permanent: false } }
    // homepagedeki appDatafalanbunu asagisinda idi
    if (status === 200) {
        let { taxiDeal: { pickupPoints, dropoffPoints, pageTitle, headTitle, description, keywords, returnPathname } } = data
        // select first item from all points
        pickUps = pickupPoints?.length >= 1 ? [pickupPoints[0]] : []
        dropoffs = dropoffPoints?.length >= 1 ? [dropoffPoints[0]] : []
        let scriptProductSchema = data?.taxiDeal?.schema?.Product
        let scriptLocalBusinessSchema = data?.taxiDeal?.schema?.LocalBusiness
        let scriptQAPage = data?.taxiDeal?.schema?.QAPage


        // Cache the data
        cache[cacheKey] = {
            data,
            pickUps,
            dropoffs,
            keywords,
            language,
            pageTitle,
            headTitle,
            description,
            scriptQAPage,
            returnPathname,
            urlOfPage: dealUrl,
            scriptProductSchema,
            scriptLocalBusinessSchema,
        }

        return { props: cache[cacheKey] }

    } else {
        return { props: { data: "not found", } }
    }
});

*/ 


/***/ }),

/***/ 7535:
/***/ ((module) => {

module.exports = require("@react-google-maps/api");

/***/ }),

/***/ 5648:
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ 173:
/***/ ((module) => {

module.exports = require("redux-devtools-extension");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9210,9505,3121,3061,4650,5277,8164,3290,3590,5319,5900,8611], () => (__webpack_exec__(5477)));
module.exports = __webpack_exports__;

})();