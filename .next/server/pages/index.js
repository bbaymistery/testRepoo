(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405,2197,9319,4557,5026,5126,6103];
exports.modules = {

/***/ 6149:
/***/ ((module) => {

// Exports
module.exports = {
	"seaport": "styles_seaport__4poLU",
	"seaport_section_container": "styles_seaport_section_container__Xh98G",
	"transfer_title": "styles_transfer_title__RtguB",
	"container": "styles_container__f1sQA",
	"content": "styles_content__DL3lA",
	"card": "styles_card__DtwsH",
	"img_div": "styles_img_div__18TJW",
	"img_original": "styles_img_original__Nivdn",
	"card_desc": "styles_card_desc__nKfkY",
	"card_desc_title": "styles_card_desc_title__pCRpd",
	"card_desc_subtitle": "styles_card_desc_subtitle__dON8_",
	"title": "styles_title__74TnY",
	"card_detail_btn_box": "styles_card_detail_btn_box__7x2b_",
	"detail_btn": "styles_detail_btn__Ltpee",
	"detail_arrow_icon": "styles_detail_arrow_icon__5C4E7"
};


/***/ }),

/***/ 3095:
/***/ ((module) => {

// Exports
module.exports = {
	"testimonials": "styles_testimonials__z7U9X",
	"testimonials_section_container": "styles_testimonials_section_container__vWGv8",
	"bold_span": "styles_bold_span__YscqD",
	"font_500": "styles_font_500__C1ACa"
};


/***/ }),

/***/ 5506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/layouts/GlobalLayout/index.js + 12 modules
var GlobalLayout = __webpack_require__(5277);
// EXTERNAL MODULE: ./src/components/widgets/Hero/index.js + 3 modules
var Hero = __webpack_require__(1141);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/widgets/SeaportTransfers/styles.module.scss
var styles_module = __webpack_require__(6149);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: ./src/constants/seaportTransfers/index.js
const seaport = [
    {
        title: "Southampton Cruise Terminal",
        linkUrl: "/southampton",
        imgUrl: "/images/seaport/southmpton.webp",
        id: 1
    },
    {
        id: 2,
        title: "Dover Cruise Terminal",
        linkUrl: "/dovercruise",
        imgUrl: "/images/seaport/dover.webp"
    },
    {
        id: 3,
        title: "Portsmouth Cruise Port",
        linkUrl: "/portsmouth",
        imgUrl: "/images/seaport/portsmoth.webp"
    },
    {
        id: 4,
        linkUrl: "/harwich",
        title: "Harwich Cruise Port",
        imgUrl: "/images/seaport/hcp.webp"
    }
];

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/widgets/SeaportTransfers/index.js





const index = (props)=>{
    let { bggray =false  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `${(styles_module_default()).seaport} page`,
        bggray: String(bggray),
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: `${(styles_module_default()).seaport_section} page_section`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `${(styles_module_default()).seaport_section_container} page_section_container`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: `${(styles_module_default()).transfer_title} seaportTtile`,
                        children: "Cruises Transfers"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (styles_module_default()).container,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (styles_module_default()).content,
                            children: seaport.map((item, i)=>{
                                const animationDelay = `${0.5 + i * 0.25}s`; // Calculate animation delay
                                return /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: item.linkUrl,
                                    style: {
                                        display: "block",
                                        width: "100%",
                                        animationDelay: animationDelay,
                                        animationDuration: "1s"
                                    },
                                    className: "seaportt",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (styles_module_default()).card,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (styles_module_default()).img_div,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: item.imgUrl,
                                                    className: (styles_module_default()).img_original,
                                                    alt: item.title,
                                                    fill: true,
                                                    sizes: "(max-width: 768px) 100vw, 50vw"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (styles_module_default()).card_desc,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                        className: (styles_module_default()).card_desc_title,
                                                        children: item.title
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: (styles_module_default()).card_desc_subtitle,
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: (styles_module_default()).card_detail_btn_box,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: (styles_module_default()).detail_btn,
                                                                    children: "See Details"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: (styles_module_default()).detail_arrow_icon,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fa-solid fa-angle-right"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }, item.id)
                                }, i);
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const SeaportTransfers = (index);

// EXTERNAL MODULE: ./src/components/widgets/CarsSlider/index.js + 2 modules
var CarsSlider = __webpack_require__(9595);
// EXTERNAL MODULE: ./src/pages/tours/index.js
var tours = __webpack_require__(7711);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/components/widgets/Testimonials/styles.module.scss
var Testimonials_styles_module = __webpack_require__(3095);
var Testimonials_styles_module_default = /*#__PURE__*/__webpack_require__.n(Testimonials_styles_module);
;// CONCATENATED MODULE: ./src/components/widgets/Testimonials/ShowContent.js



const ShowContent = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Every day, hundreds of international customers trust us for their London airport transfer needs. Our user-friendly website facilitates hassle-free bookings for essential transfers to and from Gatwick, Heathrow, Stansted, Luton, and City airports. Whether you're arriving in London or departing to one of its major airports, get in touch for a comprehensive and competitive quote. We proudly serve all major UK cities and destinations."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    "Serving all major London airports, ",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        title: "Airport Pickups London ",
                        className: (Testimonials_styles_module_default()).bold_span,
                        children: "Airport Pickups London"
                    }),
                    " offers an affordable and efficient solution for your travel needs. Popular routes include transfers to and from Gatwick, Heathrow, Luton, Stansted, and City Airports."
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: "Why Book With Airport Pickups London?"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    "Choose ",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        title: "Airport Pickups London",
                        className: (Testimonials_styles_module_default()).font_500,
                        children: "APL"
                    }),
                    " for the optimal way to travel between Heathrow, Gatwick, and Stansted airports and the heart of London. Our long list of satisfied customers and high rate of repeat bookings speak volumes about our commitment to excellence. We strive to not only meet but surpass your expectations. From your initial interaction with us, either online or through our dedicated call centre, you'll realize that your transfer needs are in expert hands."
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    "Should you have any queries about your London airport chauffeur service or prefer a more personal touch, our call centre operates 24/7. Reach us at ",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (Testimonials_styles_module_default()).font_500,
                        children: "+44 (0)208 688 7744."
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "Our Fleet"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "We predominantly use new and prestigious car models. Your comfort and safety are of utmost importance. Experience luxury and peace of mind with our top-of-the-line vehicles for all your London airport chauffeur needs."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "Our Drivers"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Our drivers are fully licensed and highly skilled. Their impeccable navigation skills are matched by their politeness and courtesy. Rest assured, your London airport pickup or drop-off is managed by the best in the business."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "Comprehensive London Airport Travel Quotes – No Hidden Extras"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    "With ",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        title: "Airport Pickups London",
                        className: (Testimonials_styles_module_default()).bold_span,
                        children: "Airport Pickups London"
                    }),
                    ", transparency is a hallmark. When we provide a taxi or limo quote, the price quoted is the final amount – no hidden fees. Our premium chauffeur services from Heathrow to London start at a competitive rate of \xa339."
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "What is Included in the Airport Taxi Service?"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Our comprehensive airport private car fares come with the following as standard:"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: "Airport meet and greet"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: "No charges for flight delays – we wait for free"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: "Flight tracking"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: "Age-appropriate baby/child seats (upon request)"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "Secure Payment"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (Testimonials_styles_module_default()).font_500,
                        children: "APL"
                    }),
                    " Cars' online booking platform operates round-the-clock for your convenience. Our system is fortified with 256 Bit SSL, ensuring utmost financial security and confidentiality."
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "Airport to Airport Transfers"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Recognizing London's status as one of Europe's major transport hubs, we prioritize punctuality. Our vehicles are equipped with advanced satellite navigation systems, and our drivers are adept at finding the quickest routes between the major airports. Count on us for timely transfers, be it from Heathrow to Gatwick or vice versa."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "London Airport to Cruise Port Private Transfers"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "In addition to specializing in London airport transfers, we're delighted to cater to major UK cruise ports. If you need transportation between a London airport and cruise ports such as Dover, Southampton, or Portsmouth, reach out for a competitive quote or book online."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "Executive/Business Class Airport Chauffeur Transfers"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "For those seeking an elevated travel experience or business trips, APL Cars' 'Business Class' transfer service offers:"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: "Luxury vehicles"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: "Complimentary laptop usage"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: "Daily newspapers"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: "Refreshing beverages"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "Airport Pickups’ Business Accounts"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    "Interested in a corporate account? Centralize all your London airport transfers on one streamlined platform; generate invoices, get priority bookings, and manage multiple reservations. Setting up a corporate account with ",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        title: "Airport Pickups London",
                        className: (Testimonials_styles_module_default()).bold_span,
                        children: "Airport Pickups London"
                    }),
                    "  is a breeze. ",
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "/AccountRegister",
                        target: "_blank",
                        children: " Learn more here."
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Testimonials_ShowContent = (ShowContent);

// EXTERNAL MODULE: ./src/hooks/useWindowSize.js
var useWindowSize = __webpack_require__(4787);
;// CONCATENATED MODULE: ./src/components/widgets/Testimonials/index.js






const Testimonials = (props)=>{
    let { bggray  } = props;
    const state = (0,external_react_redux_.useSelector)((state)=>state.pickUpDropOffActions);
    let { params: { direction  }  } = state;
    const [showText, setshowText] = (0,external_react_.useState)(false);
    let size = (0,useWindowSize/* useWindowSize */.i)();
    let { width  } = size;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `${(Testimonials_styles_module_default()).testimonials} ${direction} page`,
        bggray: String(bggray),
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: `${(Testimonials_styles_module_default()).testimonials_section} page_section`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `${(Testimonials_styles_module_default()).testimonials_section_container} page_section_container`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: "Reliable & Comfortable London Airport Transfers with APL Cars"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                title: "Airport Pickups London (APL Cars)",
                                className: (Testimonials_styles_module_default()).bold_span,
                                children: "Airport Pickups London (APL Cars) "
                            }),
                            "is a premier provider of London airport transfers and shuttle services.",
                            "Renowned for our reliability and comfort, we're committed to delivering exceptional service and value for money.",
                            showText ? /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: ()=>setshowText(!showText),
                                children: "Hide "
                            }) : /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: ()=>setshowText(!showText),
                                children: "Show More"
                            })
                        ]
                    }),
                    width > 768 ? /*#__PURE__*/ jsx_runtime_.jsx(Testimonials_ShowContent, {}) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                    showText && width <= 768 ? /*#__PURE__*/ jsx_runtime_.jsx(Testimonials_ShowContent, {}) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
                ]
            })
        })
    });
};
/* harmony default export */ const widgets_Testimonials = (Testimonials);

// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
;// CONCATENATED MODULE: ./src/pages/index.js








const TaxiDeals = dynamic_default()(()=>__webpack_require__.e(/* import() */ 9696).then(__webpack_require__.bind(__webpack_require__, 9696)), {
    loadableGenerated: {
        modules: [
            "../C:\\Users\\Пользователь\\OneDrive\\Masa\xfcst\xfc\\aplTest\\src\\pages\\index.js -> " + "../components/widgets/TaxiDeals"
        ]
    }
});
function Home(props) {
    // const [countryCode, setCountryCode] = useState(null);
    // useEffect(() => {
    //   if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(showPosition, handleError);
    //   }
    //   async function showPosition(position) {
    //     const lat = position.coords.latitude;
    //     const lon = position.coords.longitude;
    //     // Use the latitude and longitude to fetch the countryCode
    //     const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
    //     const data = await response.json();
    //     setCountryCode(data.address.country_code);
    //   }
    //   function handleError(error) {
    //     switch (error.code) {
    //       case error.PERMISSION_DENIED:
    //       case error.POSITION_UNAVAILABLE:
    //       case error.TIMEOUT:
    //       case error.UNKNOWN_ERROR:
    //       default:
    //         setCountryCode("gb");
    //         break;
    //     }
    //   }
    // }, []);
    // console.log(`Country is : ${countryCode} `);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GlobalLayout/* default */.Z, {
        footerbggray: true,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Hero/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(TaxiDeals, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(SeaportTransfers, {
                bggray: true
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(tours["default"], {
                insideGlobalLayout: false
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(CarsSlider/* default */.Z, {
                bggray: true
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(widgets_Testimonials, {
                bggray: false
            })
        ]
    });
}
async function getServerSideProps({ req , res  }) {
    res.setHeader("Cache-Control", "public, s-maxage=10, stale-while-revalidate=59");
    return {
        props: {}
    };
} // const makestore = () => store;
 // const wrapper = createWrapper(makestore);
 // export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, res, ...etc }) => {
 // const paymentUrl = `${env.apiDomain}/api/v1/payment-types`;
 // const appDataUrl = `${env.apiDomain}/app/en`;
 // const urls = [paymentUrl, appDataUrl];
 // let response = await Promise.all(urls.map(async url => {
 //   let resp = await fetch(url);
 //   return resp.json();
 // }));
 // const appData = response[1];
 // const paymentTypes = response[0].data;
 // // Dispatch values to Redux store
 // store.dispatch({ type: "GET_APP_DATA", data: { appData: appData, paymentTypes: paymentTypes, }, });
 //!get api adress based on geo
 // const forwarded = req.headers["x-forwarded-for"];
 // const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
 // // Use geoip-lite to lookup country based on IP address
 // const geo = geoip.lookup(ip);
 // let country = "gb";  // default country
 // if (geo && geo.country) {
 //   country = geo.country.toLowerCase();
 // }
 // console.log(`IP: ${ip}, Country: ${country}`);
 // return {
 //   props: {
 //     ip,
 //     country,
 //   },
 // }
 // });


/***/ }),

/***/ 5648:
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 7342:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/no-ssr-error.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

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

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

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
var __webpack_exports__ = __webpack_require__.X(0, [9210,9505,3121,3061,5152,4650,5277,3290,9595,1140,1141,7711], () => (__webpack_exec__(5506)));
module.exports = __webpack_exports__;

})();