exports.id = 9696;
exports.ids = [9696];
exports.modules = {

/***/ 2846:
/***/ ((module) => {

// Exports
module.exports = {
	"modal": "styles_modal__i_QmT",
	"zoomout": "styles_zoomout__gbcj6",
	"main_container": "styles_main_container__Co805",
	"icon": "styles_icon__THfpn",
	"title": "styles_title__LQ1uo",
	"start_from": "styles_start_from__rZo8y",
	"price": "styles_price__n49uf"
};


/***/ }),

/***/ 3858:
/***/ ((module) => {

// Exports
module.exports = {
	"taxideals": "styles_taxideals__lg3Qz",
	"taxideals_section": "styles_taxideals_section__6q5Oy",
	"taxideals_section_container": "styles_taxideals_section_container__K7Abk",
	"title": "styles_title__eGtqw",
	"cards": "styles_cards__1HzGg",
	"card": "styles_card__DaNZT",
	"card_image_div": "styles_card_image_div__lWSa7",
	"card_body": "styles_card_body__zR6JL",
	"start_from": "styles_start_from__i_v9E",
	"img": "styles_img__MGCD3",
	"review": "styles_review__SIlIq",
	"review_left": "styles_review_left__r2GgP",
	"review_center": "styles_review_center__MGkSy",
	"review_right": "styles_review_right__ctSdO",
	"start_from_text_left": "styles_start_from_text_left__xT2iw",
	"start_from_text_right": "styles_start_from_text_right__A7va0",
	"haveSpace": "styles_haveSpace__CUkVQ",
	"btn_div": "styles_btn_div__eeGCy",
	"tabs": "styles_tabs__oRrDn",
	"active": "styles_active__0tWqX",
	"islinkname": "styles_islinkname__KANT5"
};


/***/ }),

/***/ 9696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ widgets_TaxiDeals)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/resources/env.js
var env = __webpack_require__(4603);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/hooks/useOutsideClick.js
var useOutsideClick = __webpack_require__(3381);
// EXTERNAL MODULE: ./src/components/elements/PointsModal/styles.module.scss
var styles_module = __webpack_require__(2846);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: ./src/components/elements/PointsModal/index.js







const PointsModal = ({ points , title  })=>{
    const wrapperRef = (0,external_react_.useRef)();
    const dispatch = (0,external_react_redux_.useDispatch)();
    const { appData  } = (0,external_react_redux_.useSelector)((state)=>state.initialReducer);
    let clickedOutside = (0,useOutsideClick/* useOutsideClick */.O)(wrapperRef);
    const setToFalse = ()=>{
        dispatch({
            type: "SET_POINTS_MODAL",
            data: {
                trueOrFalse: false
            }
        });
        document.body.style.overflow = "unset";
    };
    const observerCallback = (entries)=>{
        entries.forEach((entry)=>{
            if (entry.isIntersecting) {
                entry.target.classList.add("loaded");
                entry.target.classList.remove("loadinUp");
            } else {
                // to fade out images out of the viewport
                entry.target.classList.add("loadinUp");
                entry.target.classList.remove("loaded");
            }
        });
    };
    // Load More
    (0,external_react_.useEffect)(()=>{
        const allList = document.querySelectorAll(".li_item");
        allList.forEach((el)=>{
            el.classList.add("loadin");
        });
        const observerOptions = {
            root: null,
            rootMargin: "10px",
            threshold: 0
        };
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        allList.forEach((el)=>observer.observe(el));
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (clickedOutside) {
            dispatch({
                type: "SET_POINTS_MODAL",
                data: {
                    trueOrFalse: false
                }
            });
            document.body.style.overflow = "unset";
        }
    }, [
        clickedOutside
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (styles_module_default()).modal,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (styles_module_default()).main_container,
            ref: wrapperRef,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        onClick: ()=>setToFalse(),
                        className: `fa-sharp fa-solid fa-xmark ${(styles_module_default()).icon}`
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    children: title
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    children: points?.map((point, index)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: point.pathname,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                className: "li_item",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: (styles_module_default()).title,
                                        children: point?.translatedPageTitle ? point?.translatedPageTitle : point?.title
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: (styles_module_default()).start_from,
                                        children: [
                                            appData.words["strStartFrom"],
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: (styles_module_default()).price,
                                                children: point.price
                                            }),
                                            "  "
                                        ]
                                    })
                                ]
                            })
                        }, index);
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const elements_PointsModal = (PointsModal);

// EXTERNAL MODULE: ./src/components/widgets/TaxiDeals/styles.module.scss
var TaxiDeals_styles_module = __webpack_require__(3858);
var TaxiDeals_styles_module_default = /*#__PURE__*/__webpack_require__.n(TaxiDeals_styles_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/constants/taxideals/index.js
const taxidealsImages = [
    {
        id: 1,
        image: "/images/hgtto/toOxford.webp"
    },
    {
        id: 2,
        image: "/images/hgtto/toBrimingham.webp"
    },
    {
        id: 3,
        image: "/images/hgtto/toCambridge1.webp"
    },
    {
        id: 4,
        image: "/images/hgtto/toBath.webp"
    },
    {
        id: 5,
        image: "/images/hgtto/toBristol.webp"
    },
    {
        id: 6,
        image: "/images/hgtto/toBrighton.webp"
    },
    {
        id: 7,
        image: "/images/hgtto/toNorwich.webp"
    },
    {
        id: 8,
        image: "/images/hgtto/toCanterburry.webp"
    }
];
const cruisePortimages = [
    {
        id: 1,
        image: "/images/hgtto/heathrowto.jpg"
    },
    {
        id: 2,
        image: "/images/hgtto/gatwickto.jpg"
    },
    {
        id: 3,
        image: "/images/hgtto/stansetto.jpg"
    },
    {
        id: 4,
        image: "/images/hgtto/lutonto.jpg"
    },
    {
        id: 5,
        image: "/images/hgtto/cityairport.jpg"
    },
    {
        id: 6,
        image: "/images/hgtto/toheathrow.jpg"
    },
    {
        id: 7,
        image: "/images/hgtto/gatwickto.jpg"
    },
    {
        id: 8,
        image: "/images/hgtto/stansetto.jpg"
    }
];

;// CONCATENATED MODULE: ./src/components/widgets/TaxiDeals/TaxiDealViewContent.js






//taking delas name and making it dynamic for gatwixk for heathrow and the others
const taxiDealsValidLocations = (dealsName)=>{
    //first letter uppercase
    dealsName = dealsName.charAt(0).toUpperCase() + dealsName.slice(1);
    if (dealsName === "City") dealsName = "City Airport";
    //we r destcructing to taxi trasnfer
    return [
        `${dealsName} to Oxford taxi`,
        `${dealsName} to Birmingham taxi`,
        `${dealsName} to Cambridge taxi`,
        `${dealsName} to Bath taxi`,
        `${dealsName} to Bristol taxi`,
        `${dealsName} to Brighton taxi`,
        `${dealsName} to Norwich taxi`,
        `${dealsName} to Canterbury taxi`
    ];
};
const TaxiDealViewContent = ({ points , dealsName , islinknamecomponent  })=>{
    const { appData  } = (0,external_react_redux_.useSelector)((state)=>state.initialReducer);
    function filterDatas(datas) {
        if ([
            "portsmouth",
            "dover",
            "harwich",
            "southampton"
        ].includes(dealsName)) {
            //we  do not need any destructing
            return datas = points;
        } else {
            return datas.filter(({ pageTitle  })=>taxiDealsValidLocations(dealsName).includes(pageTitle)).sort((a, b)=>taxiDealsValidLocations(dealsName).indexOf(a.pageTitle) - taxiDealsValidLocations(dealsName).indexOf(b.pageTitle));
        }
    }
    //dealsName === 'dover' || dealsName === 'southampton' || dealsName === 'portsmouth' || dealsName === 'harwich'
    const filteredDatas = filterDatas(points);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (TaxiDeals_styles_module_default()).cards,
                children: points.length > 1 ? filteredDatas.slice(0, 4).map((item, index)=>{
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        "data-id": "a",
                        title: item?.pageTitle,
                        href: item.pathname,
                        className: `${(TaxiDeals_styles_module_default()).card}`,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (TaxiDeals_styles_module_default()).card_image_div,
                                children: dealsName === "dover" || dealsName === "southampton" || dealsName === "portsmouth" || dealsName === "harwich" ? /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: `${cruisePortimages.slice(0, 4)?.[index]?.image}`,
                                    className: (TaxiDeals_styles_module_default()).img,
                                    fill: true,
                                    alt: item.pageTitle,
                                    sizes: "(max-width: 768px) 100vw, 50vw"
                                }) : /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: `${taxidealsImages.slice(0, 4)?.[index]?.image}`,
                                    className: (TaxiDeals_styles_module_default()).img,
                                    fill: true,
                                    alt: item.pageTitle,
                                    sizes: "(max-width: 768px) 100vw, 50vw"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (TaxiDeals_styles_module_default()).card_body,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: item?.translatedPageTitle ? item?.translatedPageTitle : item?.title
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (TaxiDeals_styles_module_default()).review,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (TaxiDeals_styles_module_default()).review_left,
                                                children: [
                                                    item.point,
                                                    " "
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (TaxiDeals_styles_module_default()).review_center,
                                                children: "Exceptional "
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (TaxiDeals_styles_module_default()).review_right,
                                                children: [
                                                    item.review,
                                                    " reviews  "
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (TaxiDeals_styles_module_default()).start_from,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (TaxiDeals_styles_module_default()).start_from_text_left,
                                                children: [
                                                    appData.words["strStartFrom"],
                                                    " "
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (TaxiDeals_styles_module_default()).start_from_text_right,
                                                children: [
                                                    " ",
                                                    item?.price,
                                                    " "
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }, item.id);
                }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "text_center w_100",
                    children: "No content"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (TaxiDeals_styles_module_default()).haveSpace,
                children: " "
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (TaxiDeals_styles_module_default()).cards,
                children: points.length > 1 ? filteredDatas.slice(4, 8).map((item, index)=>{
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        "data-id": "a",
                        title: item?.pageTitle,
                        href: item.pathname,
                        className: `${(TaxiDeals_styles_module_default()).card}`,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (TaxiDeals_styles_module_default()).card_image_div,
                                children: dealsName === "dover" || dealsName === "southampton" || dealsName === "portsmouth" || dealsName === "harwich" ? /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: `${cruisePortimages.slice(4, 8)?.[index]?.image}`,
                                    className: (TaxiDeals_styles_module_default()).img,
                                    fill: true,
                                    alt: item.pageTitle,
                                    sizes: "(max-width: 768px) 100vw, 50vw"
                                }) : /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: `${taxidealsImages.slice(4, 8)?.[index]?.image}`,
                                    className: (TaxiDeals_styles_module_default()).img,
                                    fill: true,
                                    alt: item.pageTitle,
                                    sizes: "(max-width: 768px) 100vw, 50vw"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (TaxiDeals_styles_module_default()).card_body,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: item?.translatedPageTitle ? item?.translatedPageTitle : item?.title
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (TaxiDeals_styles_module_default()).review,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (TaxiDeals_styles_module_default()).review_left,
                                                children: [
                                                    item.point,
                                                    " "
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (TaxiDeals_styles_module_default()).review_center,
                                                children: "Exceptional "
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (TaxiDeals_styles_module_default()).review_right,
                                                children: [
                                                    item.review,
                                                    " reviews  "
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (TaxiDeals_styles_module_default()).start_from,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (TaxiDeals_styles_module_default()).start_from_text_left,
                                                children: [
                                                    appData.words["strStartFrom"],
                                                    " "
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (TaxiDeals_styles_module_default()).start_from_text_right,
                                                children: [
                                                    " ",
                                                    item?.price,
                                                    " "
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }, item.id);
                }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
            })
        ]
    });
};
/* harmony default export */ const TaxiDeals_TaxiDealViewContent = (TaxiDealViewContent);

// EXTERNAL MODULE: ./src/hooks/useRipple.js + 1 modules
var useRipple = __webpack_require__(2733);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/widgets/TaxiDeals/index.js











const tabsBttons = [
    {
        name: "Heathrow Taxi Deals",
        id: 1,
        dealsName: "heathrow"
    },
    {
        name: "Gatwick Taxi Deals",
        id: 2,
        dealsName: "gatwick"
    },
    {
        name: "Stansted Taxi Deals",
        id: 3,
        dealsName: "stansted"
    },
    {
        name: "Luton Taxi Deals",
        id: 4,
        dealsName: "luton"
    },
    {
        name: "City Airport",
        id: 5,
        dealsName: "city"
    }
];
//showTabs=>they come from here > heathrow-airport-transfer
//isLinknameComponent comes driom [..linkname]
const TaxiDeals = (props)=>{
    let { showTabs =true , bggray =false , islinknamecomponent =false  } = props;
    const dispatch = (0,external_react_redux_.useDispatch)();
    const state = (0,external_react_redux_.useSelector)((state)=>state.pickUpDropOffActions);
    let { params: { direction , language , pointsModalStatus , hasTaxiDeals ="heathrow"  }  } = state;
    const [tabs, setTabs] = (0,external_react_.useState)(0);
    const [taxiPoints, setTaxiPoints] = (0,external_react_.useState)([]);
    const refs = tabsBttons.map(()=>(0,external_react_.useRef)(null));
    const ripples = refs.map((ref)=>(0,useRipple/* default */.Z)(ref));
    const router = (0,router_.useRouter)();
    const fecthPoints = async (params = {})=>{
        let { language , dealsNameProp =hasTaxiDeals  } = params;
        let channelId = state.reservations[0].reservationDetails.channelId;
        let url = `${env/* default.apiDomain */.Z.apiDomain}/api/v1/taxi-deals/list?points=${dealsNameProp}&language=${language}&channelId=${channelId}`;
        let response = await fetch(url);
        let { data , status  } = await response.json();
        if (status === 200) {
            setTaxiPoints(data.destinations);
        }
    };
    const tabsHandler = async (params = {})=>{
        let { index , dealsNameProp  } = params;
        setTabs(index);
        fecthPoints({
            dealsNameProp,
            language
        });
        dispatch({
            type: "SET_NAVBAR_TAXI_DEALS",
            data: {
                hasTaxiDeals: dealsNameProp
            }
        });
        localStorage.setItem("hasTaxiDeals", JSON.stringify(dealsNameProp));
    };
    const setModal = ()=>{
        dispatch({
            type: "SET_POINTS_MODAL",
            data: {
                trueOrFalse: true
            }
        });
        document.body.style.overflow = "hidden";
    };
    (0,external_react_.useEffect)(()=>{
        fecthPoints({
            dealsNameProp: hasTaxiDeals,
            language
        });
    }, [
        language,
        hasTaxiDeals
    ]);
    (0,external_react_.useEffect)(()=>{
        // if (hasTaxiDeals === "heathrow") {
        //     setTabs(0)
        // }
        // if (hasTaxiDeals === "gatwick") {
        //     setTabs(1)
        // }
        // if (hasTaxiDeals === "stansted") {
        //     setTabs(2)
        // }
        // if (hasTaxiDeals === "luton") {
        //     setTabs(3)
        // }
        // if (hasTaxiDeals === "city") {
        //     setTabs(4)
        // // }
        const validPaths = [
            "/",
            "/es",
            "/tr",
            "/zh",
            "/ru",
            "/it",
            "/ar"
        ];
        if (validPaths.includes(router.pathname)) {
            const hasTaxiDeals = "heathrow";
            localStorage.setItem("hasTaxiDeals", JSON.stringify(hasTaxiDeals));
            dispatch({
                type: "SET_NAVBAR_TAXI_DEALS",
                data: {
                    hasTaxiDeals
                }
            });
            fecthPoints({
                dealsNameProp: hasTaxiDeals,
                language
            });
        }
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `${(TaxiDeals_styles_module_default()).taxideals} ${direction} ${islinknamecomponent ? (TaxiDeals_styles_module_default()).islinkname : ""} page `,
            bggray: String(bggray),
            children: [
                pointsModalStatus && /*#__PURE__*/ jsx_runtime_.jsx(elements_PointsModal, {
                    points: taxiPoints,
                    title: `${hasTaxiDeals} Transfer Deals`
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `${(TaxiDeals_styles_module_default()).taxideals_section} page_section`,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `${(TaxiDeals_styles_module_default()).taxideals_section_container} page_section_container`,
                        children: [
                            taxiPoints.length > 1 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (TaxiDeals_styles_module_default()).title,
                                children: [
                                    hasTaxiDeals === "dover" || hasTaxiDeals === "southampton" || hasTaxiDeals === "portsmouth" || hasTaxiDeals === "harwich" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                        children: [
                                            hasTaxiDeals,
                                            " Cruise Port"
                                        ]
                                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                        children: [
                                            hasTaxiDeals,
                                            " Taxi Deals"
                                        ]
                                    }),
                                    islinknamecomponent ? "" : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "All Inclusive Price !"
                                    })
                                ]
                            }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                            showTabs ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `${(TaxiDeals_styles_module_default()).tabs} ${(TaxiDeals_styles_module_default()).btn_div}`,
                                children: tabsBttons.map((btn, index)=>{
                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                        onClick: ()=>tabsHandler({
                                                index,
                                                dealsNameProp: btn.dealsName
                                            }),
                                        className: `${tabs === index ? (TaxiDeals_styles_module_default()).active : ""} btn`,
                                        ref: refs[index],
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "ripple-wrapper",
                                                children: ripples[index]
                                            }),
                                            btn.name
                                        ]
                                    }, index);
                                })
                            }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                            taxiPoints.length > 1 ? /*#__PURE__*/ jsx_runtime_.jsx(TaxiDeals_TaxiDealViewContent, {
                                islinknamecomponent: islinknamecomponent,
                                points: taxiPoints,
                                dealsName: hasTaxiDeals
                            }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                            taxiPoints.length > 1 ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (TaxiDeals_styles_module_default()).btn_div,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    className: "btn",
                                    onClick: ()=>{
                                        setModal();
                                    },
                                    children: [
                                        "View All",
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fa-solid fa-arrow-right"
                                        })
                                    ]
                                })
                            }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const widgets_TaxiDeals = (TaxiDeals);


/***/ }),

/***/ 3381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ useOutsideClick)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useOutsideClick(ref) {
    const [clickedOutside, setclickedOutside] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) setclickedOutside(true);
        }
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>document.removeEventListener("mousedown", handleClickOutside);
    }, [
        ref
    ]);
    return clickedOutside;
}


/***/ })

};
;