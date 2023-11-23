exports.id = 5277;
exports.ids = [5277];
exports.modules = {

/***/ 5932:
/***/ ((module) => {

// Exports
module.exports = {
	"loadingg": "loading_loadingg__TO0km",
	"text": "loading_text__BxPWf",
	"dash": "loading_dash__KIJw3"
};


/***/ }),

/***/ 4364:
/***/ ((module) => {

// Exports
module.exports = {
	"toast_notification": "toast_toast_notification__4VsKo",
	"toast_nofication_header": "toast_toast_nofication_header__eVc_s",
	"toast_notification_body": "toast_toast_notification_body__7cv2Q"
};


/***/ }),

/***/ 1759:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "styles_footer__7k6__",
	"footer_section_container": "styles_footer_section_container__lLhOv",
	"content": "styles_content__nkRIQ",
	"column": "styles_column__En1Yy",
	"list_items": "styles_list_items__bnZhb",
	"last_column": "styles_last_column__4Qi9W",
	"description": "styles_description__W_9rc",
	"first_column": "styles_first_column__TLugP",
	"logo": "styles_logo__Lg7Q7",
	"subcontent": "styles_subcontent__42BtJ",
	"subcontent_left": "styles_subcontent_left__XdEeJ",
	"copyright": "styles_copyright__dFLgZ",
	"lists": "styles_lists__NADvg",
	"subcontent_right": "styles_subcontent_right__bqTqg",
	"icons": "styles_icons__mt_7k"
};


/***/ }),

/***/ 3327:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "styles_header__P_d1H",
	"header_container": "styles_header_container__qHFoK",
	"header_flex_div": "styles_header_flex_div__O5S6s",
	"left_items": "styles_left_items__nmMt5",
	"left_items_flex_div": "styles_left_items_flex_div__ZN8TO",
	"logo_tag": "styles_logo_tag__0VVU8",
	"header_menu_content": "styles_header_menu_content__hOTGx",
	"hidefor_desktop": "styles_hidefor_desktop__vdUUZ",
	"has_children": "styles_has_children__vnPlL",
	"nocursor": "styles_nocursor__jeEwX",
	"hoverUl": "styles_hoverUl__V3zRX",
	"li_item": "styles_li_item__DVl5z",
	"header_content_menu_mobile": "styles_header_content_menu_mobile__o4TZm",
	"menu_content_ul": "styles_menu_content_ul__cuiG_",
	"active_header_content_menu_mobile": "styles_active_header_content_menu_mobile__Aa_OT",
	"first_child_a": "styles_first_child_a___vhqe",
	"right_items": "styles_right_items__s_SVH",
	"language_dropdown": "styles_language_dropdown__MtDTO",
	"top": "styles_top__5LevX",
	"img_div": "styles_img_div__CbGP3",
	"lang_text": "styles_lang_text__CWqTi",
	"all_languages": "styles_all_languages__42QtA",
	"content": "styles_content__ZT_SU",
	"buttons": "styles_buttons__WUyw_",
	"whitebtn_div": "styles_whitebtn_div__DqL_j",
	"bluebtn_div": "styles_bluebtn_div__4w8jb",
	"menu": "styles_menu__6D3nl",
	"line": "styles_line__soZZQ",
	"menuActive": "styles_menuActive__vh9AV",
	"navLinkFade": "styles_navLinkFade__V9UeX"
};


/***/ }),

/***/ 3260:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Hook that alerts clicks outside of the passed ref
 */ function useOutsideAlerter(ref, callback) {
    /**
       * Alert if clicked on outside of element
       */ function handleClickOutside(event) {
        if (event.target.getAttribute("data-name") === "language") return;
        if (ref.current && !ref.current.contains(event.target)) callback();
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        try {
            // Bind the event listener
            document.addEventListener("mousedown", (e)=>handleClickOutside(e));
            return ()=>{
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", (e)=>handleClickOutside(e));
            };
        } catch (error) {
            console.log(error.message);
        }
    }, [
        ref,
        callback
    ]);
}
/**
 * Component that alerts if you click outside of it
 */ function OutsideClickAlert(props) {
    const wrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    useOutsideAlerter(wrapperRef, ()=>{
        let onCLick = typeof props.onOutsideClick === "function" ? props.onOutsideClick : ()=>{};
        onCLick();
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: wrapperRef,
        children: props.children
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OutsideClickAlert);


/***/ }),

/***/ 7317:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loading_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5932);
/* harmony import */ var _loading_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_loading_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const Loading = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_loading_module_scss__WEBPACK_IMPORTED_MODULE_2___default().loadingg),
        style: {
            background: "#0007",
            color: "white",
            top: 0,
            left: 0,
            zIndex: 99
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            width: "205",
            height: "250",
            viewBox: "0 0 40 50",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polygon", {
                    stroke: "#fff",
                    strokeWidth: "1",
                    fill: "none",
                    points: "20,1 40,40 1,40"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("text", {
                    fill: "#fff",
                    x: "5",
                    y: "47",
                    children: "Loading"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);


/***/ }),

/***/ 5277:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layouts_GlobalLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./src/components/widgets/TopHeader/styles.module.scss
var styles_module = __webpack_require__(3327);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: ./public/logos/square_dark_blue.jpg
/* harmony default export */ const square_dark_blue = ({"src":"/_next/static/media/square_dark_blue.126f9f71.jpg","height":1500,"width":1500,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAfEAACAgICAwEAAAAAAAAAAAABAwIEABEFEgYhIlH/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAERAjH/2gAMAwEAAhEDEQA/AJOPTduOdf8AHVsZyzrJFpL39JVY9voqjLQkJezsbIB1r9YxjcvBLekonD//2Q==","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/resources/env.js
var env = __webpack_require__(4603);
;// CONCATENATED MODULE: ./src/constants/navigatior/index.js
//for footer
const Airports = [
    {
        innerText: "Heathrow Airport Transfer",
        path: "/heathrow-airport-transfer",
        title: "London Heathrow Transfer",
        type: "cell",
        hasTaxiDeals: "heathrow"
    },
    {
        innerText: "Gatwick Airport Transfer",
        path: "/gatwick-transfer",
        title: "London Gatwick Transfer",
        type: "cell",
        hasTaxiDeals: "gatwick"
    },
    {
        innerText: "City Airport Transfer",
        path: "/city-airport",
        title: "London City Airport Transfer",
        type: "cell",
        hasTaxiDeals: "city"
    },
    {
        innerText: "Luton Airport Transfer",
        path: "/luton-airport",
        title: "Luton Airport Transfer",
        type: "cell",
        hasTaxiDeals: "luton"
    },
    {
        innerText: "Stansted Airport Transfer",
        path: "/stansted-airport",
        title: "London Stansted Airport Transfer",
        type: "cell",
        hasTaxiDeals: "stansted"
    }
];
const CruisePorts = [
    {
        innerText: "Dover Cruise Port",
        path: "/dovercruise",
        title: "Dover Cruise Terminal Transfer",
        type: "cell",
        hasTaxiDeals: "dover"
    },
    {
        innerText: "Harwich Cruise Port ",
        path: "/harwich",
        title: "Harwich Cruise Port  Transfer",
        type: "cell",
        hasTaxiDeals: "harwich"
    },
    {
        innerText: "Portsmouth Cruise Port",
        path: "/portsmouth",
        title: "Portsmouth Cruise Port Transfer",
        type: "cell",
        hasTaxiDeals: "portsmouth"
    },
    {
        innerText: "Southampton Cruise Port",
        path: "/southampton",
        title: "Southampton Cruise Port Transfer",
        type: "cell",
        hasTaxiDeals: "southampton"
    }
];
// normal list
//hasTaxideals=>when we select any link we store that name of
//..hasTaxideals to redux then When we get from that redux and use it inside  Heathrow Airport Transfer|| Gatwick Airport Transfer
//+
const navigatior_navigator = [
    {
        innerText: "home",
        path: "/",
        title: "Home",
        type: "cell",
        hasTaxiDeals: ""
    },
    {
        innerText: "airports",
        path: "/",
        type: "list",
        hasTaxiDeals: "",
        list: [
            {
                innerText: "Heathrow Airport Transfer",
                path: "/heathrow-airport-transfer",
                title: "London Heathrow Transfer",
                type: "cell",
                hasTaxiDeals: "heathrow"
            },
            {
                innerText: "Gatwick Airport Transfer",
                path: "/gatwick-transfer",
                title: "London Gatwick Transfer",
                type: "cell",
                hasTaxiDeals: "gatwick"
            },
            {
                innerText: "City Airport Transfer",
                path: "/city-airport",
                title: "London City Airport Transfer",
                type: "cell",
                hasTaxiDeals: "city"
            },
            {
                innerText: "Luton Airport Transfer",
                path: "/luton-airport",
                title: "Luton Airport Transfer",
                type: "cell",
                hasTaxiDeals: "luton"
            },
            {
                innerText: "Stansted Airport Transfer",
                path: "/stansted-airport",
                title: "London Stansted Airport Transfer",
                type: "cell",
                hasTaxiDeals: "stansted"
            }
        ]
    },
    {
        innerText: "Cruise Ports",
        path: "/",
        type: "list",
        hasTaxiDeals: "",
        list: [
            {
                innerText: "Southampton Cruise Port",
                path: "/southampton",
                title: "Southampton Cruise Port Transfer",
                type: "cell",
                hasTaxiDeals: "southampton"
            },
            {
                innerText: "Dover Cruise Port",
                path: "/dovercruise",
                title: "Dover Cruise Terminal Transfer",
                type: "cell",
                hasTaxiDeals: "dover"
            },
            {
                innerText: "Portsmouth Cruise Port",
                path: "/portsmouth",
                title: "Portsmouth Cruise Port Transfer",
                type: "cell",
                hasTaxiDeals: "portsmouth"
            },
            {
                innerText: "Harwich Cruise Port ",
                path: "/harwich",
                title: "Harwich Cruise Port  Transfer",
                type: "cell",
                hasTaxiDeals: "harwich"
            }
        ]
    },
    {
        innerText: "Terms",
        path: "/terms",
        type: "cell",
        hasTaxiDeals: "",
        title: "Terms And Conditions"
    },
    {
        innerText: "Our Fleet",
        path: "/fleet",
        type: "cell",
        hasTaxiDeals: "",
        title: "Our fleet"
    },
    {
        innerText: "Contact Us ",
        path: "/contact-us",
        title: "Airport Pikcups London 24/7 telephone numbers",
        type: "cell",
        hasTaxiDeals: ""
    }
];
//+
const navigatorMobile = [
    {
        innerText: "home",
        path: "/",
        title: "Home",
        type: "cell",
        hasTaxiDeals: "",
        firstChild: false
    },
    {
        innerText: "airports",
        path: "/",
        type: "list",
        hasTaxiDeals: "",
        firstChild: true,
        list: [
            {
                innerText: "Heathrow Airport Transfer",
                path: "/heathrow-airport-transfer",
                title: "London Heathrow Transfer",
                type: "cell",
                hasTaxiDeals: "heathrow"
            },
            {
                innerText: "Gatwick Airport Transfer",
                path: "/gatwick-transfer",
                title: "London Gatwick Transfer",
                type: "cell",
                hasTaxiDeals: "gatwick"
            },
            {
                innerText: "City Airport Transfer",
                path: "/city-airport",
                title: "London City Airport Transfer",
                type: "cell",
                hasTaxiDeals: "city"
            },
            {
                innerText: "Luton Airport Transfer",
                path: "/luton-airport",
                title: "Luton Airport Transfer",
                type: "cell",
                hasTaxiDeals: "luton"
            },
            {
                innerText: "Stansted Airport Transfer",
                path: "/stansted-airport",
                title: "London Stansted Airport Transfer",
                type: "cell",
                hasTaxiDeals: "stansted"
            }
        ]
    },
    {
        innerText: "Cruise Ports",
        path: "/",
        firstChild: true,
        type: "list",
        hasTaxiDeals: "",
        list: [
            {
                innerText: "Southampton Cruise Port",
                path: "/southampton",
                title: "Southampton Cruise Port Transfer",
                type: "cell",
                hasTaxiDeals: "southampton"
            },
            {
                innerText: "Dover Cruise Port",
                path: "/dovercruise",
                title: "Dover Cruise Terminal Transfer",
                type: "cell",
                hasTaxiDeals: "dover"
            },
            {
                innerText: "Portsmouth Cruise Port",
                path: "/portsmouth",
                title: "Portsmouth Cruise Port Transfer",
                type: "cell",
                hasTaxiDeals: "portsmouth"
            },
            {
                innerText: "Harwich Cruise Port ",
                path: "/harwich",
                title: "Harwich Cruise Port  Transfer",
                type: "cell",
                hasTaxiDeals: "harwich"
            }
        ]
    },
    {
        innerText: "Terms",
        path: "/terms",
        type: "cell",
        hasTaxiDeals: "",
        title: "Terms And Conditions",
        firstChild: false
    },
    {
        innerText: "Contact Us ",
        path: "/contact-us",
        title: "Airport Pikcups London 24/7 telephone numbers",
        type: "cell",
        hasTaxiDeals: "",
        firstChild: false
    },
    {
        innerText: "Travel Agents",
        path: "/travelAgents",
        type: "cell",
        hasTaxiDeals: "",
        title: "Travel Agents",
        firstChild: false
    },
    {
        innerText: "Our Fleet",
        path: "/fleet",
        type: "cell",
        hasTaxiDeals: "",
        title: "Our fleet"
    },
    {
        innerText: "managebooking",
        path: "/manage-booking.html",
        type: "cell",
        hasTaxiDeals: "",
        title: "Manage My Booking",
        firstChild: false
    }
];
let lists = {
    "strNavHome": "home",
    "strNavAirports": "airports",
    "strNavHeathrowAirportTransfer": "heathrow airport transfer",
    "strNavGatwickAirportTransfer": "gatwick airport transfer",
    "strNavCityAirportTransfer": "city airport transfer",
    "strNavLutonAirportTransfer": "luton airport transfer",
    "strNavStanstedAirportTransfer": "stansted airport transfer",
    "strNavCruisePorts": "cruise ports",
    "strNavSouthamptonCruisePort": "southampton cruise port",
    "strNavDoverCruisePort": "dover cruise port",
    "strNavPortsmouthCruisePort": "portsmouth cruise port",
    "strNavHarwichCruisePort": "harwich cruise port",
    "strNavTerms": "terms",
    "strNavContactUs": "contact us",
    "strNavManageMyBooking": "manage my booking",
    "strNavCorporate": "corporate"
};

// EXTERNAL MODULE: ./src/store/store.js + 50 modules
var store = __webpack_require__(8987);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/helpers/extractLanguage.js
var extractLanguage = __webpack_require__(8006);
// EXTERNAL MODULE: ./src/components/elements/OutsideClickAlert/index.js
var OutsideClickAlert = __webpack_require__(3260);
// EXTERNAL MODULE: ./src/hooks/useRipple.js + 1 modules
var useRipple = __webpack_require__(2733);
;// CONCATENATED MODULE: ./src/components/widgets/TopHeader/index.js




// import logoImage from '../../../../public/logos/logowithtext.png'










const Header = ()=>{
    const ref = (0,external_react_.useRef)(null);
    const ripples = (0,useRipple/* default */.Z)(ref);
    const router = (0,router_.useRouter)();
    const menuRef = (0,external_react_.useRef)(null);
    const mobileMenu = (0,external_react_.useRef)(null);
    const languagesDivRef = (0,external_react_.useRef)(null);
    const dispatch = (0,external_react_redux_.useDispatch)();
    const { appData  } = (0,external_react_redux_.useSelector)((state)=>state.initialReducer);
    const { params: { language , langIndex: reducerLangIndex , journeyType  }  } = (0,external_react_redux_.useSelector)((state)=>state.pickUpDropOffActions);
    const [langFlag, setLangFlag] = (0,external_react_.useState)(language);
    const [langIndex, setLangIndex] = (0,external_react_.useState)(reducerLangIndex);
    const handleLanguage = async (params = {})=>{
        let { e , text , key , direction , index  } = params;
        setLangFlag(key);
        setLangIndex(index);
        //set language and dicertion  to localstorage
        localStorage.setItem("language", JSON.stringify(key));
        localStorage.setItem("direction", JSON.stringify(direction));
        localStorage.setItem("langIndex", JSON.stringify(index));
        try {
            let response = await fetch(`${env/* default.apiDomain */.Z.apiDomain}/app/${key}`);
            let data = await response.json();
            if (data.status === 200) {
                dispatch({
                    type: "SET_NEW_LANGUAGE",
                    data: {
                        languageKey: key,
                        direction,
                        langIndex: index
                    }
                });
                //passing inital state in order make update in store js when language changing
                dispatch({
                    type: "SET_NEW_APPDATA",
                    data,
                    initialStateReducer: store/* default.getState */.Z.getState().initialReducer
                });
            } else {
                //if sth wrong it means we can use en for dont crush our website
                let response1 = await fetch(`${env/* default.apiDomain */.Z.apiDomain}/app/en`);
                let data1 = await response1.json();
                dispatch({
                    type: "SET_NEW_LANGUAGE",
                    data: {
                        languageKey: key,
                        direction,
                        langIndex: index
                    }
                });
                //passing inital state in order make update in store js when language changing
                dispatch({
                    type: "SET_NEW_APPDATA",
                    data: data1,
                    initialStateReducer: store/* default.getState */.Z.getState().initialReducer
                });
            }
        } catch (error) {
            let message = "AIRPORT-PICK-UP-LONDON  handleLanguage function Top HeaderComponent";
            window.handelErrorLogs(error, message, {
                url: `${env/* default.apiDomain */.Z.apiDomain}/app/${key}`
            });
        }
        //url configuration based on language we select
        let checkTheUrlIfLangExist = (0,extractLanguage/* extractLanguage */.L)(router.asPath) //tr es or it
        ;
        //to be sure that selected language is exist among languages or not
        let hasEn = appData?.languages.some((language)=>language.value === checkTheUrlIfLangExist);
        if (checkTheUrlIfLangExist && hasEn) {
            //if length is 3 it means we r in the taxi deaals
            let replacedString = `${key === "en" ? "" : key}${router.asPath.length === 3 ? "" : "/"}`;
            let url = router.asPath.replace(/^\/([a-z]{2})\/?/i, replacedString);
            //tr|it|sp/transfer-details...  replacing withh
            router.push(url);
        } else {
            //then when ever i change language i will add tr it ar
            //if it is english then  we dont need lang atrribute=>>>>>     /transfer-details...
            let url1 = `/${key === "en" ? "" : key}${router.asPath}`;
            router.push(url1);
        }
        //make hidden language dropdown in mobile menu After clicking
        languagesDivRef.current.style.opacity = 0;
        languagesDivRef.current.style.visibility = "hidden";
    };
    const toggleMenu = ()=>{
        menuRef.current.classList.toggle(`${(styles_module_default()).menuActive}`);
        mobileMenu.current.classList.toggle(`${(styles_module_default()).active_header_content_menu_mobile}`);
        // let positionOfBody = getComputedStyle(document.body).position
        // if (positionOfBody === "relative") {
        //   document.body.style.position = "fixed"
        // } else {
        //   document.body.style.position = "relative"
        // }
        const navLinks = document.querySelectorAll("#navLink");
    // setTimeout(() => {
    //   //Animate Links
    //   navLinks.forEach((link, index) => {
    //     if (link.style.animation) {
    //       link.style.animation = ''
    //     } else {
    //       link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.3}s`;
    //     }
    //   });
    // }, 1000);
    };
    //!bu fonksyonu yazmayada bilersen Asagidaki degisdirildi yazilan yeri oxu A tagi icinde yazila biler
    // const gotoHomePage = (index) => {
    //   if (index === 0) {
    //     if (language === 'en') {
    //       router.push(`/`).then(() => { window.location.reload() });
    //     } else {
    //       router.push(`/${language}`).then(() => { window.location.reload() });
    //     }
    //   }
    // }
    //for language dropdown
    const outsideClickDropDown = (e)=>{
        languagesDivRef.current.style.opacity = 0;
        languagesDivRef.current.style.visibility = "hidden";
    };
    //when we click lang text it opens dropdown
    const setOpenLanguageDropdown = (e)=>{
        // prevent to open dropdown
        if (router.asPath === "/drivers-wanted") return;
        if (router.asPath === "/fleet") return;
        languagesDivRef.current.style.opacity = 1;
        languagesDivRef.current.style.visibility = "visible";
    };
    const handleClickNavLinkMobileMenuNotList = ({ index  })=>{
        //it means we r going to home page and we need to reset points
        if (index === 0) {
            dispatch({
                type: "RESET_SELECTED_POINTS",
                data: {
                    journeyType
                }
            });
            dispatch({
                type: "SET_NAVBAR_TAXI_DEALS",
                data: {
                    hasTaxiDeals: "heathrow"
                }
            });
        }
        toggleMenu();
        localStorage.setItem("hasTaxiDeals", JSON.stringify("heathrow"));
    };
    const handleClickNavLinkMobileMenuList = (params = {})=>{
        let { hasTaxiDeals ="heathrow"  } = params;
        if (hasTaxiDeals) {
            dispatch({
                type: "SET_NAVBAR_TAXI_DEALS",
                data: {
                    hasTaxiDeals
                }
            });
            localStorage.setItem("hasTaxiDeals", JSON.stringify(hasTaxiDeals));
        }
        dispatch({
            type: "RESET_SELECTED_POINTS",
            data: {
                journeyType
            }
        });
        toggleMenu();
    };
    const gotoHomeFromLogoClick = (par)=>{
        localStorage.setItem("hasTaxiDeals", JSON.stringify("heathrow"));
    };
    (0,external_react_.useEffect)(()=>{
        if (localStorage?.getItem("language")) {
            let langKey = JSON.parse(localStorage.getItem("language"));
            appData?.languages.map((item, index)=>{
                let { value: key  } = item;
                if (langKey === key) {
                    setLangFlag(key);
                    setLangIndex(index);
                }
            });
        }
    }, [
        language
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: (styles_module_default()).header,
        id: "navbar_container",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (styles_module_default()).header_container,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (styles_module_default()).header_flex_div,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (styles_module_default()).left_items,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (styles_module_default()).left_items_flex_div,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    onClick: gotoHomeFromLogoClick,
                                    href: language === "en" ? "/" : `/${language}`,
                                    className: `${(styles_module_default()).logo_tag}`,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: square_dark_blue,
                                            alt: "Airport-pickups-london Logo",
                                            width: 30,
                                            height: 30,
                                            priority: true
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Airport Pickups London"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (styles_module_default()).header_menu_content,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: navigatior_navigator.map((item, index)=>{
                                            let { path , innerText , list , type , title  } = item;
                                            return(// as={`${path==='/'?"/":""}`}
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: `${(styles_module_default()).li_item} ${type === "list" ? (styles_module_default()).has_children : ""}`,
                                                children: [
                                                    index === 0 ? /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        onClick: gotoHomeFromLogoClick,
                                                        href: language === "en" ? "/" : `/${language}`,
                                                        title: title,
                                                        className: `${path.length ? (styles_module_default()).nocursor : ""}`,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: innerText
                                                        })
                                                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        href: `${language === "en" ? `${path}` : `${language}${path}`}`,
                                                        title: title,
                                                        className: `${path.length ? (styles_module_default()).nocursor : ""}`,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: innerText
                                                            }),
                                                            type === "list" ? /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fa-solid fa-angle-down"
                                                            }) : ""
                                                        ]
                                                    }),
                                                    type === "list" ? /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                        className: (styles_module_default()).hoverUl,
                                                        children: list.map((item)=>{
                                                            //hasTaxideals setting taxiDealsName to redux
                                                            let { path: listPath , innerText: listInnerText , title: listTitle , hasTaxiDeals  } = item;
                                                            //!
                                                            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: `${(styles_module_default()).li_item}`,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    onClick: ()=>{
                                                                        dispatch({
                                                                            type: "SET_NAVBAR_TAXI_DEALS",
                                                                            data: {
                                                                                hasTaxiDeals
                                                                            }
                                                                        });
                                                                        dispatch({
                                                                            type: "RESET_SELECTED_POINTS",
                                                                            data: {
                                                                                journeyType
                                                                            }
                                                                        });
                                                                        localStorage.setItem("hasTaxiDeals", JSON.stringify(hasTaxiDeals));
                                                                    },
                                                                    href: `${language === "en" ? `${listPath}` : `${language}${listPath}`}`,
                                                                    title: listTitle,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: listInnerText
                                                                    })
                                                                })
                                                            }, listInnerText);
                                                        })
                                                    }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
                                                ]
                                            }, innerText));
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    ref: mobileMenu,
                                    className: `${(styles_module_default()).header_content_menu_mobile} `,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: (styles_module_default()).menu_content_ul,
                                        children: navigatorMobile.map((item, index)=>{
                                            let { path , innerText , list , type , title , firstChild  } = item;
                                            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: `${(styles_module_default()).li_item} ${type === "list" ? (styles_module_default()).has_children : ""}`,
                                                id: "navLink",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                        onClick: ()=>handleClickNavLinkMobileMenuNotList({
                                                                index
                                                            }),
                                                        href: `${language === "en" ? `${path}` : `${language}${path}`}`,
                                                        title: title,
                                                        className: `${!path.length ? (styles_module_default()).nocursor : ""}  ${firstChild ? (styles_module_default()).first_child_a : ""} `,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: innerText
                                                            }),
                                                            type === "list" ? /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fa-solid fa-angle-down"
                                                            }) : ""
                                                        ]
                                                    }),
                                                    type === "list" ? /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                        className: (styles_module_default()).hoverUl,
                                                        children: list.map((item)=>{
                                                            let { path: listPath , innerText: listInnerText , title: listTitle , hasTaxiDeals  } = item;
                                                            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: `${(styles_module_default()).li_item} ${!listPath.length ? (styles_module_default()).nocursor : ""}  `,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    onClick: ()=>handleClickNavLinkMobileMenuList({
                                                                            hasTaxiDeals
                                                                        }),
                                                                    href: `${language === "en" ? `${listPath}` : `${language}${listPath}`}`,
                                                                    title: listTitle,
                                                                    tabIndex: "-1",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: listInnerText
                                                                    })
                                                                })
                                                            }, listInnerText);
                                                        })
                                                    }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
                                                ]
                                            }, innerText);
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (styles_module_default()).right_items,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `${router.asPath === "/drivers-wanted" ? "no_cursor" : ""} ${(styles_module_default()).language_dropdown}`,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (styles_module_default()).top,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (styles_module_default()).img_div,
                                            onClick: setOpenLanguageDropdown,
                                            "data-name": "language",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: `/languages/${langFlag}.gif`,
                                                width: 20,
                                                height: 11,
                                                priority: true,
                                                alt: langFlag,
                                                "data-name": "language"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            "data-name": "language",
                                            onClick: setOpenLanguageDropdown,
                                            className: (styles_module_default()).lang_text,
                                            children: [
                                                appData?.languages[langIndex]?.innerText,
                                                router.asPath === "/drivers-wanted" || router.asPath === "/fleet" ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}) : /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fa-solid fa-angle-down"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(OutsideClickAlert/* default */.Z, {
                                            onOutsideClick: outsideClickDropDown,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                ref: languagesDivRef,
                                                className: (styles_module_default()).all_languages,
                                                style: {
                                                    opacity: "0",
                                                    visibility: "hidden"
                                                },
                                                children: appData?.languages.map((item, index)=>{
                                                    let { innerText: text , value: key , dir: direction  } = item;
                                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: (styles_module_default()).content,
                                                        name: key,
                                                        onClick: (e)=>handleLanguage({
                                                                e,
                                                                text,
                                                                key,
                                                                direction,
                                                                index
                                                            }),
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: (styles_module_default()).img_div,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                    src: `/languages/${key}.gif`,
                                                                    fill: true,
                                                                    style: {
                                                                        objectFit: "cover"
                                                                    },
                                                                    sizes: "(max-width: 768px) 100vw, 50vw",
                                                                    alt: text
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: text
                                                            })
                                                        ]
                                                    }, index);
                                                })
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (styles_module_default()).buttons,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (styles_module_default()).whitebtn_div,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: language === "en" ? "/travelAgents" : `/${language}/travelAgents`,
                                            title: "Travel Agents",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                ref: ref,
                                                children: [
                                                    ripples,
                                                    " Travel Agents"
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (styles_module_default()).bluebtn_div,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "/manage-booking.html",
                                            title: "Manage Booking",
                                            target: "_blank",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                children: "Manage My Booking"
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                onClick: toggleMenu,
                                ref: menuRef,
                                className: (styles_module_default()).menu,
                                id: "menu",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: (styles_module_default()).line
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: (styles_module_default()).line
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: (styles_module_default()).line
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const TopHeader = (Header);

;// CONCATENATED MODULE: ./public/logos/blueLogoAirPort.png
/* harmony default export */ const blueLogoAirPort = ({"src":"/_next/static/media/blueLogoAirPort.236b91bd.png","height":1119,"width":12635,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAABlBMVEUAAxYABBjgtZYOAAAAAnRSTlNDOfLCWfYAAAAJcEhZcwAALiMAAC4jAXilP3YAAAARSURBVHicY2BgZGBgYGRkAAAAFQAE/1kC3wAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":1});
;// CONCATENATED MODULE: ./public/social/fb.gif
/* harmony default export */ const fb = ({"src":"/_next/static/media/fb.6e727a8e.gif","height":32,"width":32});
;// CONCATENATED MODULE: ./public/social/tw.gif
/* harmony default export */ const tw = ({"src":"/_next/static/media/tw.15f8619a.gif","height":32,"width":32});
;// CONCATENATED MODULE: ./public/social/Blog.png
/* harmony default export */ const Blog = ({"src":"/_next/static/media/Blog.6ad975ff.png","height":32,"width":32,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAIVBMVEXscCDzdCL0dSLycBv76+H0k1T0xKX6za/6zK74oWj4rn4HFOm2AAAAAnRSTlPa2fJLit0AAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAySURBVHicJcq5EQAwCANBIfHZ/RfsAV+0wcG4GUhJJEFFXy3a/WhQ7rWIzBjMPA8+8AAcuQDMu1HPQgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/social/rss.png
/* harmony default export */ const rss = ({"src":"/_next/static/media/rss.97426b7f.png","height":32,"width":32,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAS1BMVEX/eB7x18H+gij/dB7/plH+qlj9mET9rFz9pFD/sFzm2c3kv6XdwrD2uYj+eij0xpr3qGb1487/gB/9tnTzlVLqr4H7gDDvqHf+jjrbMn9FAAAAF3RSTlPW////////1sL/////////////////8tYxdnoAAAAJcEhZcwAALiIAAC4iAari3ZIAAABASURBVHicBcEHAoAgDASw69SywcX/X2qCM1TN4oDN2SMioFelNFThRNaTO3jX5PlZ4Dq+fBfGotzKLgyISJP2/lMhAm/5JVpYAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/social/Instigram.gif
/* harmony default export */ const Instigram = ({"src":"/_next/static/media/Instigram.ce81be8d.gif","height":32,"width":32});
// EXTERNAL MODULE: ./src/components/widgets/Footer/styles.module.scss
var Footer_styles_module = __webpack_require__(1759);
var Footer_styles_module_default = /*#__PURE__*/__webpack_require__.n(Footer_styles_module);
;// CONCATENATED MODULE: ./src/components/widgets/Footer/index.js













const Footer = (props)=>{
    let { bggray  } = props;
    const state = (0,external_react_redux_.useSelector)((state)=>state.pickUpDropOffActions);
    let { params: { direction , language , journeyType  }  } = state;
    const { appData  } = (0,external_react_redux_.useSelector)((state)=>state.initialReducer);
    const dispatch = (0,external_react_redux_.useDispatch)();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `${(Footer_styles_module_default()).footer}  ${direction} page`,
        bggray: String(bggray),
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: `${(Footer_styles_module_default()).footer_section} page_section`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `${(Footer_styles_module_default()).footer_section_container} page_section_container`,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Footer_styles_module_default()).content,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: `${(Footer_styles_module_default()).column} ${(Footer_styles_module_default()).first_column}`,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (Footer_styles_module_default()).logo,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: blueLogoAirPort,
                                            alt: "Airport-pickups-london Logo",
                                            width: 300,
                                            height: 28
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: " Airport Pickups London (APL Cars) "
                                            }),
                                            "is a leading provider of London airport transfers and shuttle services in London. Our standards of reliability and comfort are second to none. What’s more, we pride ourselves on offering the very best service and value for money."
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Footer_styles_module_default()).column,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: "Company"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: (Footer_styles_module_default()).list_items,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: `${language === "en" ? `/drivers-wanted` : `${language}/drivers-wanted`}`,
                                                    title: "Drivers",
                                                    children: "Drivers"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    children: "Sitemap"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: `${language === "en" ? `/about-us` : `${language}/about-us`}`,
                                                    title: appData.words["aboutUs"],
                                                    children: appData.words["aboutUs"]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: `${language === "en" ? `/contact-us` : `${language}/contact-us`}`,
                                                    title: appData.words["appContactUsHeader"],
                                                    children: appData.words["appContactUsHeader"]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: `${language === "en" ? `/terms` : `${language}/terms`}`,
                                                    title: appData.words["strTermsOfUse"],
                                                    children: appData.words["strTermsOfUse"]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: `${language === "en" ? `/terms` : `${language}/terms`}`,
                                                    title: appData.words["strPrivacyPolicy"],
                                                    children: appData.words["strPrivacyPolicy"]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: `${language === "en" ? `/heathrow-porter-service` : `${language}/heathrow-porter-service`}`,
                                                    children: "Porter Service"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: `${language === "en" ? `/heathrow-vip-meet-and-assist` : `${language}/heathrow-vip-meet-and-assist`}`,
                                                    children: "Meet and assist"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Footer_styles_module_default()).column,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: "Cruise Ports"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: (Footer_styles_module_default()).list_items,
                                        children: CruisePorts.map((airport, index)=>{
                                            let { path: listPath , innerText: listInnerText , title: listTitle , hasTaxiDeals  } = airport;
                                            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    onClick: ()=>{
                                                        dispatch({
                                                            type: "SET_NAVBAR_TAXI_DEALS",
                                                            data: {
                                                                hasTaxiDeals
                                                            }
                                                        });
                                                        dispatch({
                                                            type: "RESET_SELECTED_POINTS",
                                                            data: {
                                                                journeyType
                                                            }
                                                        });
                                                    },
                                                    href: `${language === "en" ? `${listPath}` : `${language}${listPath}`}`,
                                                    title: listTitle,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: listInnerText
                                                    })
                                                })
                                            }, index);
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Footer_styles_module_default()).column,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: "Airports"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: (Footer_styles_module_default()).list_items,
                                        children: Airports.map((airport, index)=>{
                                            let { path: listPath , innerText: listInnerText , title: listTitle , hasTaxiDeals  } = airport;
                                            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    onClick: ()=>{
                                                        dispatch({
                                                            type: "SET_NAVBAR_TAXI_DEALS",
                                                            data: {
                                                                hasTaxiDeals
                                                            }
                                                        });
                                                        dispatch({
                                                            type: "RESET_SELECTED_POINTS",
                                                            data: {
                                                                journeyType
                                                            }
                                                        });
                                                    },
                                                    href: `${language === "en" ? `${listPath}` : `${language}${listPath}`}`,
                                                    title: listTitle,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: listInnerText
                                                    })
                                                })
                                            }, index);
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: `${(Footer_styles_module_default()).column} ${(Footer_styles_module_default()).last_column}`,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: "Contact Us"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Footer_styles_module_default()).description,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Toll Free Customer Care"
                                            }),
                                            direction === "rtl" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                style: {
                                                    flexDirection: "row-reverse",
                                                    justifyContent: "flex-end",
                                                    display: "flex"
                                                },
                                                href: "tel:+442086887744",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "  + "
                                                    }),
                                                    "4402086887744"
                                                ]
                                            }) : /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "tel:+442086887744",
                                                children: "+44 (0) 208 688 7744"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Footer_styles_module_default()).description,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Need live support ?"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "mailto:info@aplcars.com",
                                                children: "info@aplcars.com"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Footer_styles_module_default()).description,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "WhatsApp"
                                            }),
                                            direction === "rtl" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                target: "_blank",
                                                href: "https://wa.me/447387901028",
                                                style: {
                                                    flexDirection: "row-reverse",
                                                    justifyContent: "flex-end",
                                                    display: "flex"
                                                },
                                                tabIndex: "-1",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "  + "
                                                    }),
                                                    "447387901028"
                                                ]
                                            }) : /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "tel:+442086887744",
                                                children: "+44 73 8790 1028"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Footer_styles_module_default()).subcontent,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Footer_styles_module_default()).subcontent_left,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (Footer_styles_module_default()).copyright,
                                        children: "Copyrights  \xa9 2022  Airport Pickups London"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: (Footer_styles_module_default()).lists,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: `${language === "en" ? `/terms` : `${language}/terms`}`,
                                                    title: appData.words["strPrivacyPolicy"],
                                                    children: appData.words["strPrivacyPolicy"]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: `${language === "en" ? `/terms` : `${language}/terms`}`,
                                                    title: appData.words["strTermsOfUse"],
                                                    children: appData.words["strTermsOfUse"]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    children: "Site Map"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Footer_styles_module_default()).subcontent_right,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (Footer_styles_module_default()).icons,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://www.facebook.com/AirportPickupsLondon",
                                            target: "_blank",
                                            title: "Airport Pickups London Facebook",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: fb,
                                                alt: "Airport Pickups London Facebook",
                                                width: 25,
                                                height: 25,
                                                priority: true
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://twitter.com/Airport_Pickups",
                                            target: "_blank",
                                            title: "Airport Pickups London Twitters",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: tw,
                                                alt: "Airport Pickups London Twitters",
                                                width: 25,
                                                height: 25,
                                                priority: true
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "http://feeds2.feedburner.com/London-Airport-News",
                                            target: "_blank",
                                            title: "Airport Pickups London News RSS",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: rss,
                                                alt: "Airport Pickups London News RSS",
                                                width: 25,
                                                height: 25,
                                                priority: true
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://www.instagram.com/airport_pickups_london/",
                                            target: "_blank",
                                            title: "irport Pickups London Instigram page",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: Instigram,
                                                alt: "Airport Pickups London Instigram page",
                                                width: 25,
                                                height: 25,
                                                priority: true
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const widgets_Footer = (Footer);

// EXTERNAL MODULE: ./src/components/elements/alert/toast.module.scss
var toast_module = __webpack_require__(4364);
var toast_module_default = /*#__PURE__*/__webpack_require__.n(toast_module);
;// CONCATENATED MODULE: ./src/components/elements/alert/Toast.js



const Toast = ({ title , body , bgColor  })=>{
    const dispatch = (0,external_react_redux_.useDispatch)();
    const handleClose = ()=>dispatch({
            type: "ALERT",
            payload: {}
        });
    let state = (0,external_react_redux_.useSelector)((state)=>state.pickUpDropOffActions);
    let { params: { direction  }  } = state;
    return(// style={{ top: '5px', right: '5px', zIndex: 50, minWidth: '200px' }}
    //
    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `${(toast_module_default()).toast_notification} ${direction} fade_bottom_to_top_hidden  ${bgColor}`,
        style: {
            zIndex: 50,
            minWidth: "200px"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: ` ${(toast_module_default()).toast_nofication_header}  ${bgColor}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        onClick: handleClose,
                        className: `fa-solid fa-x ${(toast_module_default()).close_icon}`
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (toast_module_default()).toast_notification_body,
                children: typeof body === "string" ? body : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    children: [
                        body.map((text, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: text
                            }, index)),
                        " "
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const alert_Toast = (Toast);

// EXTERNAL MODULE: ./src/components/elements/alert/Loading.js
var Loading = __webpack_require__(7317);
;// CONCATENATED MODULE: ./src/components/elements/alert/Alert.js




const Alert = ()=>{
    const alert = (0,external_react_redux_.useSelector)((state)=>state.alertReducer);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            alert.loading && /*#__PURE__*/ jsx_runtime_.jsx(Loading/* default */.Z, {}),
            alert.errors && /*#__PURE__*/ jsx_runtime_.jsx(alert_Toast, {
                title: "Errors",
                body: alert.errors,
                bgColor: "alert_danger"
            }),
            alert.success && /*#__PURE__*/ jsx_runtime_.jsx(alert_Toast, {
                title: "Success",
                body: alert.success,
                bgColor: "alert_success"
            })
        ]
    });
};
/* harmony default export */ const alert_Alert = (Alert);

;// CONCATENATED MODULE: ./src/components/layouts/GlobalLayout/index.js






const GlobalLayout = ({ children , title ="London Airport Transfers to Airport-Car Service-Minicab" , description ="Airport Pickups London offers  London airport taxi, transfers and airport shuttle services. We cover Heathrow, Gatwick, Stansted, Luton and City Airport and UK Cruise port." , keywords ="London airport transfers ,Heathrow pickups,Gatwick pickups,airport pickups,Heathrow transfer,Gatwick transfer ,Stansted transfer ,Luton transfer ,Heathrow airport transfer ,Gatwick airport transfer." , footerbggray =false  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "keywords",
                        content: keywords
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, maximum-scale=1 "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        httpEquiv: "Content-Type",
                        content: "text/html; charset=UTF-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "googlebot",
                        content: "noindex"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "robots",
                        content: "noindex"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com",
                        crossOrigin: "anonymous"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preload",
                        href: "/images/Excellent.webp",
                        as: "image"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preload",
                        href: "/images/Reviews.webp",
                        as: "image"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preload",
                        href: "/images/advisorTrip.webp",
                        as: "image"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(alert_Alert, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(TopHeader, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(widgets_Footer, {
                bggray: footerbggray
            })
        ]
    });
};
/* harmony default export */ const layouts_GlobalLayout = (GlobalLayout);


/***/ }),

/***/ 2733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ hooks_useRipple)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/hooks/useDebounce.js

function useDebounce(value, delay = 500) {
    const [debouncedValue, setDebouncedValue] = (0,external_react_.useState)(value);
    (0,external_react_.useEffect)(()=>{
        const timer = setTimeout(()=>setDebouncedValue(value), delay);
        return ()=>{
            clearTimeout(timer);
        };
    }, [
        value,
        delay
    ]);
    return debouncedValue;
}
/* harmony default export */ const hooks_useDebounce = (useDebounce);

;// CONCATENATED MODULE: ./src/hooks/useRipple.js



const useRipple = (ref)=>{
    const [ripples, setRipples] = external_react_.useState([]);
    const _debounced = hooks_useDebounce(ripples, 1000);
    external_react_.useEffect(()=>{
        if (ref.current) {
            const btn = ref.current;
            const clickHandler = (e)=>{
                var rect = btn.getBoundingClientRect();
                var left = e.clientX - rect.left;
                var top = e.clientY - rect.top;
                const height = btn.clientHeight;
                const width = btn.clientWidth;
                const diameter = Math.max(width, height);
                setRipples([
                    ...ripples,
                    {
                        top: top - diameter / 2,
                        left: left - diameter / 2,
                        height: Math.max(width, height),
                        width: Math.max(width, height)
                    }
                ]);
            };
            btn.addEventListener("click", clickHandler);
            return ()=>{
                btn.removeEventListener("click", clickHandler);
            };
        }
    }, [
        ref,
        ripples
    ]);
    external_react_.useEffect(()=>{
        if (_debounced.length) {
            setRipples([]);
        }
    }, [
        _debounced.length
    ]);
    return ripples?.map((style, i)=>{
        return /*#__PURE__*/ jsx_runtime_.jsx("span", {
            style: {
                ...style,
                position: "absolute",
                backgroundColor: "#FFFFFF",
                opacity: "25%",
                transform: "scale(0)",
                animation: "ripple 600ms linear",
                borderRadius: "50%"
            }
        }, i);
    });
};
/* harmony default export */ const hooks_useRipple = (useRipple);


/***/ })

};
;