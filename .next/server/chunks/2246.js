exports.id = 2246;
exports.ids = [2246];
exports.modules = {

/***/ 7847:
/***/ ((module) => {

// Exports
module.exports = {
	"container_layout": "styles_container_layout__8VT7S"
};


/***/ }),

/***/ 2047:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "styles_footer__7k6__",
	"container_main": "styles_container_main__5wz6e",
	"row1": "styles_row1__4G4oa",
	"col_3": "styles_col_3__8E89e",
	"footer_item": "styles_footer_item__PVe_v",
	"footer_logo": "styles_footer_logo__NBxlM",
	"footer_desc": "styles_footer_desc__P8vBk",
	"desc_mail": "styles_desc_mail__788Yv",
	"title": "styles_title___WWcP",
	"list_items": "styles_list_items__bnZhb",
	"item": "styles_item__A5AdB",
	"item_link": "styles_item_link__r1eTm",
	"contact_form": "styles_contact_form__DT4IZ",
	"form": "styles_form__uKkhJ",
	"input_box": "styles_input_box__Zy8HP",
	"label_text": "styles_label_text__LXSAD",
	"form_group": "styles_form_group__j7R4B",
	"mail_div": "styles_mail_div__vohXz",
	"mail_div_icon": "styles_mail_div_icon__Z7b8I",
	"form_control": "styles_form_control__iYLa1",
	"btn": "styles_btn__2OfXj",
	"form_desc": "styles_form_desc__6gC6J",
	"info_icon": "styles_info_icon__mu6mC",
	"row2": "styles_row2__aGu2s",
	"col_8": "styles_col_8__5Z3LC",
	"col_4": "styles_col_4__hY2Uv",
	"section_line": "styles_section_line__98MLB",
	"sub_container": "styles_sub_container__AsOHL",
	"copy__desc": "styles_copy__desc__Wy0Lv",
	"icon": "styles_icon__vqa5v",
	"heart": "styles_heart__cwLiU",
	"link": "styles_link__CTnM1",
	"copy_right": "styles_copy_right__BNAmq",
	"copy_right_title": "styles_copy_right_title__qmxXY"
};


/***/ }),

/***/ 6994:
/***/ ((module) => {

// Exports
module.exports = {
	"nav_container": "styles_nav_container__uGozd",
	"nav": "styles_nav__CEuKe",
	"logoDiv": "styles_logoDiv__5pdp_",
	"logo": "styles_logo__i8J58",
	"ulDiv": "styles_ulDiv__i9pz4",
	"ul": "styles_ul__wXaNV",
	"li_item": "styles_li_item__l9X9a",
	"item": "styles_item__LBLXT",
	"ulActive": "styles_ulActive__vIRzO",
	"menu": "styles_menu__tljGU",
	"line": "styles_line__UTqDa",
	"menuActive": "styles_menuActive__EQXpd"
};


/***/ }),

/***/ 2246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layouts_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./src/components/layouts/Layout/styles.module.scss
var styles_module = __webpack_require__(7847);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/constants/header/index.js
const headerLinkNames = [
    {
        linkName: "home",
        id: 1,
        linkUrl: "/"
    },
    // {
    //   id: 2,
    //   linkName: "about",
    //   linkUrl: "/about",
    // },
    {
        id: 3,
        linkName: "our fleet",
        linkUrl: "/ourfleet"
    },
    {
        id: 4,
        linkName: "terms",
        linkUrl: "/terms"
    },
    {
        id: 5,
        linkName: "faqs",
        linkUrl: "/faqs"
    },
    {
        id: 8,
        linkName: "manage booking",
        linkUrl: "/manage-booking.html"
    },
    {
        id: 7,
        linkName: "contact us",
        linkUrl: "/contactus"
    }, 
];

// EXTERNAL MODULE: ./src/components/widgets/Header/styles.module.scss
var Header_styles_module = __webpack_require__(6994);
var Header_styles_module_default = /*#__PURE__*/__webpack_require__.n(Header_styles_module);
;// CONCATENATED MODULE: ./public/webpImages/logo.webp
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.a47b992c.webp","height":42,"width":300,"blurDataURL":"data:image/webp;base64,UklGRmAAAABXRUJQVlA4WAoAAAAQAAAABwAAAAAAQUxQSAkAAAAAjygqHykeJiQAVlA4IDAAAACwAQCdASoIAAEAAkA4JQBOgCHfwHHAAP734Tm3NsDLtTINNJawXEauGmj1cNDsAAA=","blurWidth":8,"blurHeight":1});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/widgets/Header/index.js






const Header = ()=>{
    const navRef = (0,external_react_.useRef)(null);
    const menuRef = (0,external_react_.useRef)(null);
    const { 0: activeClass , 1: setActiveClass  } = (0,external_react_.useState)(false);
    const toggleMenu = (par)=>{
        setActiveClass(!activeClass);
        navRef.current.style.setProperty("--childenNumber", navRef.current.children.length);
        menuRef.current.classList.toggle(`${(Header_styles_module_default()).menuActive}`);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Header_styles_module_default()).nav_container,
        id: "navbar_container",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: (Header_styles_module_default()).nav,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Header_styles_module_default()).logoDiv,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "/",
                        className: (Header_styles_module_default()).logo,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            priority: true,
                            src: logo,
                            className: (Header_styles_module_default()).logo_header,
                            alt: "Heathrow Gatwick Transfers Logo",
                            layout: "responsive",
                            width: 100,
                            height: 14,
                            srcSet: "(max-width: 768px) 600px 88px,"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Header_styles_module_default()).ulDiv,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        id: "nav",
                        className: `${(Header_styles_module_default()).ul} ${activeClass ? (Header_styles_module_default()).ulActive : "false"}`,
                        ref: navRef,
                        children: headerLinkNames.map((item)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: (Header_styles_module_default()).li_item,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: item.linkUrl,
                                    className: (Header_styles_module_default()).item,
                                    children: item.linkName
                                })
                            }, item.id);
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    onClick: toggleMenu,
                    ref: menuRef,
                    className: (Header_styles_module_default()).menu,
                    id: "menu",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: (Header_styles_module_default()).line
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: (Header_styles_module_default()).line
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: (Header_styles_module_default()).line
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const widgets_Header = (Header);

;// CONCATENATED MODULE: ./src/constants/footer/index.js
const socialLinks = [
    {
        linkName: "Twitter",
        id: 1,
        linkUrl: "https://twitter.com/HeathrowGatwick"
    },
    {
        id: 2,
        linkName: "Facebook",
        linkUrl: "http://www.facebook.com/#!/group.php?gid=116318648401090&ref=ts"
    },
    {
        id: 3,
        linkName: "Plus Goggle",
        linkUrl: "https://plus.google.com/b/117512941670231296558/"
    }, 
];
const companyLinksName = [
    {
        linkName: "home",
        id: 1,
        linkUrl: "/"
    },
    {
        id: 2,
        linkName: "about",
        linkUrl: "/about"
    },
    {
        id: 4,
        linkName: "terms",
        linkUrl: "/terms"
    },
    {
        id: 3,
        linkName: "our fleet",
        linkUrl: "/ourfleet"
    },
    {
        id: 6,
        linkName: "contact us",
        linkUrl: "/contactus"
    },
    {
        id: 5,
        linkName: "manage booking",
        linkUrl: "/managebooking"
    }, 
];
const row2TermsPrivacyHelp = [
    {
        linkName: "Terms & Conditions",
        id: 1,
        linkUrl: "/terms"
    },
    {
        id: 2,
        linkName: "Privacy Policy",
        linkUrl: "/privacy.html"
    },
    {
        id: 3,
        linkName: "Help Center",
        linkUrl: "/contactus"
    }, 
];
const socialIconss = [
    {
        linkName: "/images/twitter.png",
        id: 1,
        linkUrl: "https://twitter.com/HeathrowGatwick"
    },
    {
        id: 2,
        linkName: "/images/facebook.png",
        linkUrl: "http://www.facebook.com/#!/group.php?gid=116318648401090&ref=ts"
    },
    {
        id: 3,
        linkName: "/images/plusGoggle.png",
        linkUrl: "https://plus.google.com/b/117512941670231296558/"
    }, 
];

// EXTERNAL MODULE: ./src/components/widgets/Footer/styles.module.scss
var Footer_styles_module = __webpack_require__(2047);
var Footer_styles_module_default = /*#__PURE__*/__webpack_require__.n(Footer_styles_module);
;// CONCATENATED MODULE: ./public/webpImages/payment.webp
/* harmony default export */ const payment = ({"src":"/_next/static/media/payment.211157e9.webp","height":21,"width":100,"blurDataURL":"data:image/webp;base64,UklGRnQAAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAA+fJz+fl27fn79HT7+3fv+wBWUDggPAAAAPABAJ0BKggAAgACQDglmAJ0RwABuHD3wAD9vIrQxisf22lEgwmGEclNgXS+TSREfSD6YScvT0lCpPAAAA==","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./src/components/widgets/Footer/FooterCopyRight.js





const FooterCopyRight = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Footer_styles_module_default()).sub_container,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Footer_styles_module_default()).row2,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Footer_styles_module_default()).col_8,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: (Footer_styles_module_default()).copy__desc,
                        children: [
                            "Copyright \xa9 2021 Heathrow Gatwick Transfers",
                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: `fa-solid fa-heart ${(Footer_styles_module_default()).icon}`
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Footer_styles_module_default()).col_4,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Footer_styles_module_default()).copy_right,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: (Footer_styles_module_default()).copy_right_title,
                                children: "We Accept"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                style: {
                                    minWidth: "15%"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: payment,
                                    className: (Footer_styles_module_default()).logo_header,
                                    alt: "Heathrow Gatwick Transfers Payment",
                                    width: 100,
                                    height: 21,
                                    layout: "responsive"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const Footer_FooterCopyRight = (FooterCopyRight);

;// CONCATENATED MODULE: ./src/components/widgets/Footer/FooterItem.js



const FooterItem = (props)=>{
    const { linkNames , titleName , withImage  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Footer_styles_module_default()).footer_item,
        children: [
            titleName && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (Footer_styles_module_default()).title,
                "data-text": "curvs",
                children: titleName
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: (Footer_styles_module_default()).list_items,
                children: linkNames.map((item)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: (Footer_styles_module_default()).item,
                        children: withImage ? /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: item.linkUrl,
                            className: (Footer_styles_module_default()).item_link,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: item.linkName,
                                className: (Footer_styles_module_default()).img,
                                alt: ""
                            })
                        }) : /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: item.linkUrl,
                            className: (Footer_styles_module_default()).item_link,
                            children: item.linkName
                        })
                    }, item.id);
                })
            })
        ]
    });
};
/* harmony default export */ const Footer_FooterItem = (FooterItem);

;// CONCATENATED MODULE: ./src/components/widgets/Footer/FooterItemLogo.js





const FooterItemLogo = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Footer_styles_module_default()).footer_item,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Footer_styles_module_default()).footer_logo,
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    href: "",
                    className: (Footer_styles_module_default()).footer_logo_link,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: logo,
                        className: (Footer_styles_module_default()).logo_header,
                        alt: "Heathrow Gatwick Transfers Logo",
                        width: 300,
                        height: 42,
                        layout: "responsive"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (Footer_styles_module_default()).footer_desc,
                children: "HGT (Heathrow Gatwick Transfers) is London based company specialising in Airports and Cruise terminal transfers. We provide airport and seaport taxi services to or from any destination in the UK"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: (Footer_styles_module_default()).footer_desc,
                children: [
                    "+44 208 683 2330",
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                className: (Footer_styles_module_default()).footer_desc,
                href: "mailto: info@heathrow-gatwick-transfers.com",
                target: "_blank",
                children: " info@heathrow-gatwick-transfers.com"
            })
        ]
    });
};
/* harmony default export */ const Footer_FooterItemLogo = (FooterItemLogo);

;// CONCATENATED MODULE: ./src/components/widgets/Footer/FooterItemSubscribe.js



const FooterItemSubscribe = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Footer_styles_module_default()).footer_item,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: (Footer_styles_module_default()).title,
                "data-text": "curvs",
                children: "Subscribe Now"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (Footer_styles_module_default()).footer_desc,
                children: "Subscribe for latest updates & promotions"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Footer_styles_module_default()).contact_form,
                children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
                    className: (Footer_styles_module_default()).form,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Footer_styles_module_default()).input_box,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (Footer_styles_module_default()).label_text,
                                children: "Enter email address"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Footer_styles_module_default()).form_group,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: (Footer_styles_module_default()).mail_div,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: `fa-solid fa-envelope ${(Footer_styles_module_default()).mail_div_icon}`
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        className: (Footer_styles_module_default()).form_control,
                                        name: "email",
                                        placeholder: "Email address"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (Footer_styles_module_default()).btn,
                                        children: "Go"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: (Footer_styles_module_default()).form_desc,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: `fa-solid fa-lock  ${(Footer_styles_module_default()).info_icon}`
                                            }),
                                            "Your information is safe with us."
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const Footer_FooterItemSubscribe = (FooterItemSubscribe);

;// CONCATENATED MODULE: ./src/components/widgets/Footer/index.js








const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Footer_styles_module_default()).footer,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Footer_styles_module_default()).container_main,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Footer_styles_module_default()).row1,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Footer_styles_module_default()).col_3,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Footer_FooterItemLogo, {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Footer_styles_module_default()).col_3,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Footer_FooterItem, {
                                    titleName: "Company",
                                    linkNames: companyLinksName
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Footer_styles_module_default()).col_3,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (Footer_styles_module_default()).footer_item,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: (Footer_styles_module_default()).title,
                                            "data-text": "curvs",
                                            children: "Other Links"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            className: (Footer_styles_module_default()).list_items,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: (Footer_styles_module_default()).item,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "/sitemap",
                                                    className: (Footer_styles_module_default()).item_link,
                                                    children: "Site Map"
                                                })
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Footer_styles_module_default()).col_3,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Footer_FooterItemSubscribe, {})
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Footer_styles_module_default()).row2,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (Footer_styles_module_default()).col_8,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Footer_FooterItem, {
                                linkNames: row2TermsPrivacyHelp
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Footer_styles_module_default()).section_line
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer_FooterCopyRight, {})
        ]
    });
};
/* harmony default export */ const widgets_Footer = (Footer);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/layouts/Layout/index.js







const Layout = ({ children , title ="The best way to travel between Heathrow to Gatwick | Gatwick airport to Heathrow transfer and transportation" , noFooter , description ="Heathrow to Gatwick and Gatwick to Heathrow transfer prices.  Heathrow airport and Gatwick travel and transportation information. How do i get from heathrow to gatwick." , keywords ="Heathrow to Gatwick,gatwick to heathrow,heathrow to Gatwick travel,Gatwick to Heathrow travel,Gatwick to Heathrow transfer,Heathrow to Gatwick transfer." ,  })=>{
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        document.documentElement.setAttribute("lang", "en");
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (styles_module_default()).container_layout,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "keywords",
                        content: keywords
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "distribution",
                        content: "Global"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "rating",
                        content: "Safe For Kids"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "robots",
                        content: "index,follow"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        httpEquiv: "X-UA-Compatible",
                        content: "IE=8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        httpEquiv: "X-UA-Compatible",
                        content: "IE=7"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        httpEquiv: "X-UA-Compatible",
                        content: "IE=10"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        httpEquiv: "X-UA-Compatible",
                        content: "IE=Edge"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        httpEquiv: "X-UA-Compatible",
                        content: "chrome=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "author",
                        content: "Heathrow Gatwick Transfers Ltd"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "copyright",
                        content: "Heathrow Gatwick Transfers Ltd"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, maximum-scale=1 "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preload",
                        href: "/webpImages/logo.webp",
                        as: "image"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preload",
                        href: "/webpImages/hero.webp",
                        as: "image"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "google-site-verification",
                        content: "9niN--Hxw6fLfS5Om0lK1dGEvoDbwo-ZTxjamC9oz64"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }),
                    router.pathname === "/" ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}) : /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/fontAwesome/css/all.min.css"
                    }),
                    router.pathname === "/" ? /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preload",
                        href: "/fontAwesomeHomePage/css/all.min.css",
                        as: "style",
                        onLoad: "this.onLoad=null;this.rel='stylesheet'"
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                    router.pathname === "/" ? /*#__PURE__*/ jsx_runtime_.jsx("noscript", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "stylesheet",
                            href: "/fontAwesomeHomePage/css/all.min.css"
                        })
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(widgets_Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            }),
            !noFooter && /*#__PURE__*/ jsx_runtime_.jsx(widgets_Footer, {})
        ]
    });
};
/* harmony default export */ const layouts_Layout = (Layout);
{}{}{}

/***/ })

};
;