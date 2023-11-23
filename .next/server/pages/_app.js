(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888,2197,9319,4557,5026,6103];
exports.modules = {

/***/ 2950:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 8274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "MyApp": () => (/* binding */ MyApp),
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/helpers/mobileAndTabletCheck.js
const mobileAndTabletCheck = function() {
    let check = false;
    (function(a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__(5648);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/store/store.js + 50 modules
var store = __webpack_require__(8987);
// EXTERNAL MODULE: ./src/resources/env.js
var env = __webpack_require__(4603);
// EXTERNAL MODULE: ./src/styles/global.scss
var global = __webpack_require__(7439);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/helpers/extractLanguage.js
var extractLanguage = __webpack_require__(8006);
// EXTERNAL MODULE: ./src/helpers/checkLanguageAttributeOntheUrl.js
var checkLanguageAttributeOntheUrl = __webpack_require__(2950);
// EXTERNAL MODULE: ./src/pages/404/index.js
var _404 = __webpack_require__(5319);
;// CONCATENATED MODULE: ./src/pages/_app.js












const MyApp = ({ Component , pageProps  })=>{
    const router = (0,router_.useRouter)();
    const dispatch = (0,external_react_redux_.useDispatch)();
    //it comes from index js serVerSide props
    const { store , props  } = wrapper.useWrappedStore(pageProps);
    let { hasLanguage , appData  } = props //has language used for when user comes it write lcalhost:3000/tr
    ;
    //based on hasnLAnguage attribute we r upding appData content
    const languages = appData?.languages;
    const hasLanguageCode = languages.map((lang)=>`/${lang.value}/`).some((code)=>router.asPath.includes(code));
    let langAtrribute = "en";
    if (hasLanguageCode) langAtrribute = (0,extractLanguage/* extractLanguage */.L)(router.asPath) //if it is tr then we assingg langAtribute to tr
    ;
    const setLanguage = async (params = {})=>{
        let { language , hydrate =true  } = params;
        if (language) {
            let index;
            let direction = language === "ar" ? "rtl" : "ltr";
            //assign idx to index
            appData?.languages.map((item, idx)=>language === item.value ? index = idx : idx);
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
            //in order to hydate redux store i need to save to localstorage new version of appData(based on langugae) so i use
            if (hydrate) {
                dispatch({
                    type: "SET_NEW_APPDATA",
                    data: appData,
                    initialStateReducer: store.getState().initialReducer
                });
            } else {
                const appDataUrl = `${env/* default.apiDomain */.Z.apiDomain}/app/${language}`; // Use the preferred language if available, otherwise default to English
                const response = await fetch(appDataUrl);
                const appDatass = await response.json();
                // Dispatch values to Redux store
                dispatch({
                    type: "SET_NEW_APPDATA",
                    data: appDatass,
                    initialStateReducer: store.getState().initialReducer
                });
            }
        }
    };
    (0,external_react_.useEffect)(()=>{
        //global errors
        if (false) {}
        dispatch({
            type: "CHECK_MOBILE_OR_NOT",
            data: {
                mobileAndTabletCheck: mobileAndTabletCheck()
            }
        });
        //set language and bring appDAtas  when user write loaclhost3500/tr
        if (hasLanguage?.length === 2) {
            setLanguage({
                language: hasLanguage
            });
        } else {
            setLanguage({
                language: "en"
            });
        }
        //if user close browser initialize localstorage
        const handleBeforeUnload = ()=>{
            localStorage.removeItem("langIndex"); // remove an item from local storage
            localStorage.removeItem("appData"); // remove an item from local storage
            localStorage.removeItem("language"); // remove an item from local storage
            localStorage.removeItem("direction"); // remove an item from local storage
            localStorage.removeItem("path"); // remove an item from local storage
        };
        window.addEventListener("beforeunload", handleBeforeUnload);
        return ()=>{
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, []);
    //when we r on payment page and change lang twice then go back with browser then our content changes
    (0,external_react_.useEffect)(()=>{
        setLanguage({
            language: hasLanguage !== "en" ? hasLanguage : langAtrribute,
            hydrate: false
        });
    }, [
        langAtrribute
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_redux_.Provider, {
        store: store,
        children: [
            " ",
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            " "
        ]
    });
};
const makestore = ()=>store/* default */.Z;
const wrapper = (0,external_next_redux_wrapper_.createWrapper)(makestore);
MyApp.getInitialProps = wrapper.getInitialAppProps((store)=>async ({ Component , ctx  })=>{
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        //language congiguration based on the url
        let lang = (0,checkLanguageAttributeOntheUrl/* checkLanguageAttributeOntheUrl */.t)(ctx?.req?.url);
        let appDataInitial = store.getState().initialReducer?.appData;
        let paymentTypesInitial = store.getState().initialReducer?.paymentTypes;
        // Fetch app data and payment types only if not already fetched
        if (!appDataInitial || !paymentTypesInitial) {
            // Fetch app data and payment types
            const paymentUrl = `${env/* default.apiDomain */.Z.apiDomain}/api/v1/payment-types`;
            const appDataUrl = `${env/* default.apiDomain */.Z.apiDomain}/app/${lang?.length === 2 ? lang : "en"}`; // Use the preferred language if available, otherwise default to English
            const urls = [
                paymentUrl,
                appDataUrl
            ];
            let response = await Promise.all(urls.map(async (url)=>{
                let resp = await fetch(url);
                return resp.json();
            }));
            appDataInitial = response[1];
            paymentTypesInitial = response[0].data;
            // Dispatch values to Redux store
            store.dispatch({
                type: "GET_APP_DATA",
                data: {
                    appData: appDataInitial,
                    paymentTypes: paymentTypesInitial
                }
            });
        }
        return {
            pageProps: {
                ...pageProps,
                appData: appDataInitial,
                hasLanguage: lang || "en"
            }
        };
    });
/* harmony default export */ const _app = (wrapper.withRedux(MyApp));


/***/ }),

/***/ 7439:
/***/ (() => {



/***/ }),

/***/ 5648:
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

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
var __webpack_exports__ = __webpack_require__.X(0, [4650,5319], () => (__webpack_exec__(8274)));
module.exports = __webpack_exports__;

})();