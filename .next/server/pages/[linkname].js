"use strict";
(() => {
var exports = {};
exports.id = 3757;
exports.ids = [3757,2197,9319,4557,5026,5126,6103];
exports.modules = {

/***/ 6799:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _linkname_)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__(5648);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/layouts/GlobalLayout/index.js + 12 modules
var GlobalLayout = __webpack_require__(5277);
// EXTERNAL MODULE: ./src/components/widgets/CarsSlider/index.js + 2 modules
var CarsSlider = __webpack_require__(9595);
// EXTERNAL MODULE: ./src/components/widgets/Hero/index.js + 3 modules
var Hero = __webpack_require__(1141);
// EXTERNAL MODULE: ./src/components/widgets/TaxiDeals/index.js + 3 modules
var TaxiDeals = __webpack_require__(9696);
// EXTERNAL MODULE: ./src/store/store.js + 50 modules
var store = __webpack_require__(8987);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: ./src/components/elements/LinkNameDescription/index.js




const LinkNameDescription = (props)=>{
    let { bggray =false  } = props;
    const state = useSelector((state)=>state.pickUpDropOffActions);
    let { params: { direction  }  } = state;
    return /*#__PURE__*/ _jsx("div", {
        className: `${styles.linkname_description_section} ${direction} page`,
        bggray: String(bggray === "true"),
        children: /*#__PURE__*/ _jsx("div", {
            className: `${styles.linkname_description_section_section} page_section`,
            children: /*#__PURE__*/ _jsx("div", {
                className: `${styles.linkname_description_section_section_container} page_section_container`,
                children: /*#__PURE__*/ _jsxs("div", {
                    className: styles.content,
                    children: [
                        /*#__PURE__*/ _jsx("h1", {
                            className: "text_center mb_1",
                            children: "Heathrow Taxi Prices & information"
                        }),
                        /*#__PURE__*/ _jsx("p", {
                            children: "Airport Pickups London (APL Cars) specialises in taxi transfers to and from all London airports, including Heathrow. Heathrow Airport pickup service quotes provided by APL are affordable and all inclusive."
                        }),
                        /*#__PURE__*/ _jsx("p", {
                            children: "Travelling to or from Heathrow Airport? Taxi prices are cheaper than you might think. There are a number of public transport options when travelling to or from London Heathrow. Private car fares often work out to be cheaper than you think, however, particularly by the time you factor in group size, luggage, travel time and convenience."
                        }),
                        /*#__PURE__*/ _jsx("p", {
                            children: "APL’s impressive fleet ranges from saloon cars to people carriers, MPVs and prestige model executive vehicles. Your safety and comfort is our absolute priority. Our drivers are properly licenced and highly experienced. When booking your transfer to Heathrow Airport, car service fares are calculated on the basis of need (vehicle type, party size, destination and so on). Quotes are then finalised and there will be nothing more to pay."
                        }),
                        /*#__PURE__*/ _jsx("p", {
                            children: "If you are a regular Heathrow airport traveller, why not open an account with APL Cars? You’ll benefit from priority on bookings and can avail of our simple-to-use admin system – generate your own invoices and cancel/amend bookings at the drop of a hat. Another option is our executive Heathrow car service. Prices are competitive and include on board wi-fi, refreshments and newspapers."
                        }),
                        /*#__PURE__*/ _jsx("p", {
                            children: "Find out more about travelling with APL Cars – from basic London Heathrow transport prices to executive and business fares. Contact us on 020 8688 7744 (+44 (0)20 8688 7744 if calling from outside the UK) or send an email to info@aplcars.com. We look forward to serving you!"
                        }),
                        /*#__PURE__*/ _jsx("hr", {}),
                        /*#__PURE__*/ _jsx("h2", {
                            className: "mt_1 mb_1 text_center",
                            children: "4 ways to travel to and from Heathrow"
                        }),
                        /*#__PURE__*/ _jsx("h3", {
                            className: "text_center",
                            children: " By Train "
                        }),
                        /*#__PURE__*/ _jsx("p", {
                            children: "London Underground's Piccadilly Line  provides a simple rail route between Heathrow and the London Journey time by Tube is under an hour  and you shouldn't have to wait longer than ten minutes for a train, even during off-peak hours. The London to Heathrow travels are quick and efficient. Heathrow has three London Underground  stations – one for Terminals 2 and 3 and one each at Terminal 4 and Terminal 5. Underground tickets are available at all stations. The single fare to central  London (Zone 1) is \xa35.70. A one-day Travelcard, giving unlimited travel in  Zones 1-6, costs \xa317. Airport transfers operate from as early as 6am to  midnight."
                        }),
                        /*#__PURE__*/ _jsx("h4", {
                            className: "text_center",
                            children: "By Coach"
                        }),
                        /*#__PURE__*/ _jsx("p", {
                            children: "Coach companies vary in rates, but are  generally the most cost effective as these services are shared between other  passengers. They also have specific pickup locations including the airport pickups where a set time and location will be mark the start of the journey.  Some companies provide individual private pickups before setting off for your  transfer to Heathrow. Various websites can be found for such services including  the commonly used National Express which operations mainly for Heathrow airport  including long distance drop offs such as Oxford, Bristol, etc..."
                        }),
                        /*#__PURE__*/ _jsx("h4", {
                            className: "text_center",
                            children: "By Bus"
                        }),
                        /*#__PURE__*/ _jsx("p", {
                            children: "This public service costs only \xa31.50 per journey and operates from Heathrow and to Heathrow Airport. This bus arrives on an average of every 15-20 minutes. During peak hours the average waiting time is every 10 minutes as these buses are frequently used by the public. The X26 bus starts its journey from Croydon to London Heathrow and takes various routes before reaching its final destination."
                        }),
                        /*#__PURE__*/ _jsx("h4", {
                            className: "text_center",
                            children: "With Airport Pickups London Car service"
                        }),
                        /*#__PURE__*/ _jsx("p", {
                            children: "You can book your private transfer to Heathrow in advance where you know the time of the pickup will be adjusted for you. APL operates 24 hours a day and 7 days a week with fixed prices. All other bespoke services can be included in your Heathrow pickup including collections from hotels in London to Heathrow or vice versa. An option of multiple pickups/ drop offs can be tailored to suit your London transfer requirements."
                        }),
                        /*#__PURE__*/ _jsx("h4", {
                            className: "text_center",
                            children: "Heathrow Airport Meeting Points"
                        }),
                        /*#__PURE__*/ _jsxs("ul", {
                            children: [
                                /*#__PURE__*/ _jsxs("li", {
                                    children: [
                                        /*#__PURE__*/ _jsx("span", {
                                            dir: direction
                                        }),
                                        /*#__PURE__*/ _jsx("b", {
                                            children: "Heathrow Terminal 1="
                                        }),
                                        " \xa0 Meeting point for  international flights will be outside the Costa Coffee shop, just next to the  international arrivals gate. For domestic flights Meeting point is front of the  domestic arrivals gate. Please click here for ",
                                        /*#__PURE__*/ _jsx("a", {
                                            className: "text_underline",
                                            href: "https://www.airport-pickups-london.com/Images/Heathrow_T1-Meeting-Point.jpg",
                                            target: "_blank",
                                            title: "Heathrow Terminal 1 meeting point",
                                            children: "TERMINAL MAP "
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("li", {
                                    children: [
                                        /*#__PURE__*/ _jsx("span", {
                                            dir: direction
                                        }),
                                        /*#__PURE__*/ _jsx("b", {
                                            children: "Heathrow Terminal 2="
                                        }),
                                        "   \xa0 Meeting point for  international flights will be front of the Arrival Gate, just in front of the  Currency Exchange office. For Domestic flights Meeting point is front of the  Coffee Nero which is in front of the domestic arrivals gate. Please click here  for ",
                                        /*#__PURE__*/ _jsx("a", {
                                            className: "text_underline",
                                            href: "https://www.airport-pickups-london.com/Images/Heathrow_T2_Map-6.jpg",
                                            target: "_blank",
                                            title: "Heathrow Terminal 2 meeting point",
                                            children: "TERMINAL MAP"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("li", {
                                    children: [
                                        /*#__PURE__*/ _jsx("span", {
                                            dir: direction
                                        }),
                                        /*#__PURE__*/ _jsx("b", {
                                            children: "   Heathrow Terminal 3="
                                        }),
                                        "  \xa0Meeting point is in front of  the WH Smith shop under the Heathrow Terminal Welcome Board. Please click here  for ",
                                        /*#__PURE__*/ _jsx("a", {
                                            className: "text_underline",
                                            href: "https://www.airport-pickups-london.com/Images/Heathrow_T3-Meeting-Point.jpg",
                                            target: "_blank",
                                            title: "Heathrow Terminal 3 meeting point",
                                            children: "TERMINAL MAP"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("li", {
                                    children: [
                                        /*#__PURE__*/ _jsx("span", {
                                            dir: direction
                                        }),
                                        /*#__PURE__*/ _jsx("b", {
                                            children: "Heathrow Terminal 4="
                                        }),
                                        " \xa0 Meeting point is in front of  the Costa Coffee shop, which is situated near to the arrivals gate. Please  click here for ",
                                        /*#__PURE__*/ _jsx("a", {
                                            className: "text_underline",
                                            href: "https://www.airport-pickups-london.com/Images/Heathrow_T4-Meeting-Point.jpg",
                                            target: "_blank",
                                            title: "Heathrow terminal 4 meeting point",
                                            children: "TERMINAL MAP"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("li", {
                                    children: [
                                        /*#__PURE__*/ _jsx("span", {
                                            dir: direction
                                        }),
                                        /*#__PURE__*/ _jsx("b", {
                                            children: "Heathrow Terminal 5="
                                        }),
                                        " Meeting point for  international flights will be outside the Costa Coffee shop, just opposite the  international arrivals gate. For domestic flights Meeting point is front of the  domestic arrivals gate. Please click here for ",
                                        /*#__PURE__*/ _jsx("a", {
                                            className: "text_underline",
                                            href: "https://www.airport-pickups-london.com/Images/Heathrow_T5-Meeting-Point.jpg",
                                            target: "_blank",
                                            title: "Heathrow terminal 5 Meeting Point",
                                            children: "TERMINAL MAP "
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx("h4", {
                            className: "text_center",
                            children: "What is included in the price?"
                        }),
                        /*#__PURE__*/ _jsxs("ul", {
                            style: {
                                display: "flex",
                                justifyContent: "space-between"
                            },
                            children: [
                                /*#__PURE__*/ _jsxs("p", {
                                    children: [
                                        /*#__PURE__*/ _jsx("li", {
                                            children: "All taxes"
                                        }),
                                        /*#__PURE__*/ _jsx("li", {
                                            children: "Fixed Prices -No hidden charges"
                                        }),
                                        /*#__PURE__*/ _jsx("li", {
                                            children: "Baby/Child Seat (where necessary)"
                                        }),
                                        /*#__PURE__*/ _jsx("li", {
                                            children: "Internet and Laptop usage (Business Class bookings only)"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("p", {
                                    children: [
                                        /*#__PURE__*/ _jsx("li", {
                                            children: "Waiting time"
                                        }),
                                        /*#__PURE__*/ _jsx("li", {
                                            children: "A comfortable car"
                                        }),
                                        /*#__PURE__*/ _jsx("li", {
                                            children: "Free credit card booking service"
                                        }),
                                        /*#__PURE__*/ _jsx("li", {
                                            children: "Greeting service ( inside the airport)"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const elements_LinkNameDescription = ((/* unused pure expression or super */ null && (LinkNameDescription)));

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/pages/404/index.js
var _404 = __webpack_require__(5319);
;// CONCATENATED MODULE: ./src/pages/[linkname].js













const NavbarLinkName = (props)=>{
    let title = "", description = "", keywords = "";
    const dispatch = (0,external_react_redux_.useDispatch)();
    const router = (0,router_.useRouter)();
    const { linkname  } = router.query;
    // Check if the linkname is valid
    // if (linkname !== 'terms' && linkname !== 'about' && linkname !== 'contact') {
    //     return <Error404 />;
    // }
    (0,external_react_.useEffect)(()=>{
        /*
 !mesela biz gelib navbardan harwich ve ya heathrow-airport-transfer
 !tiklasak garsiliginda heathrow ve ya harwich olarak link name alariq

 !simdi manuel olarak elle yazib SET_NAVBNAR_TAXI_dEALS  seklinde linknamenen geleni hastaxidealsa atyrq
 !bunu yazmamin sebebi ise  http://localhost:3500/harwich  "e tikladigimda eger bunnan once http://localhost:3500/southampton" olubsa
 !gedib heathrownu gorsedir

 harwich
 [linkname].js:18 portsmouth //portsmouth
 [linkname].js:18 dovercruise //dovercruise
 [linkname].js:18 southampton //southampton
 harwich//harwich
 [linkname].js:18 heathrow-airport-transfer  //heathrow
 [linkname].js:18 gatwick-transfer //gatwick
 [linkname].js:18 luton-airport //luton
 [linkname].js:18 city-airport //city
 [linkname].js:18 stansted-airport //stansted
 */ //normalda bunu appDatadan destructure edicez
        let lists = [
            "portsmouth",
            "dovercruise",
            "southampton",
            "harwich",
            "heathrow",
            "heathrow",
            "city",
            "gatwick",
            "luton",
            "stansted"
        ];
        if (lists.includes(linkname)) dispatch({
            type: "SET_NAVBAR_TAXI_DEALS",
            data: {
                hasTaxiDeals: linkname
            }
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GlobalLayout/* default */.Z, {
        keywords: keywords,
        title: title,
        description: description,
        footerbggray: false,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Hero/* default */.Z, {
                islinknamecomponent: true,
                bggray: false
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(TaxiDeals["default"], {
                showTabs: false,
                bggray: false,
                islinknamecomponent: true
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(CarsSlider/* default */.Z, {
                bggray: true
            })
        ]
    });
};
/* harmony default export */ const _linkname_ = (NavbarLinkName);
const makestore = ()=>store/* default */.Z;
const wrapper = (0,external_next_redux_wrapper_.createWrapper)(makestore);


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
var __webpack_exports__ = __webpack_require__.X(0, [9210,9505,3121,3061,4650,5277,3290,9595,5319,1141,9696], () => (__webpack_exec__(6799)));
module.exports = __webpack_exports__;

})();