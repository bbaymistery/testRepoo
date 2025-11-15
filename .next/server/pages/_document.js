"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660,2858,8817];
exports.modules = {

/***/ 4178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6859);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4298);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




class CustomDocument extends next_document__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static async getInitialProps(ctx) {
        let pageProps = null;
        const originalRenderPage = ctx.renderPage;
        ctx.renderPage = ()=>originalRenderPage({
                enhanceApp: (App)=>(props)=>{
                        pageProps = props.pageProps;
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(App, {
                            ...props
                        });
                    },
                enhanceComponent: (Component)=>Component
            });
        const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1__["default"].getInitialProps(ctx);
        return {
            ...initialProps,
            pageProps
        };
    }
    render() {
        var ref, ref1;
        const { pageProps  } = this.props;
        let { title ="The best way to travel between Heathrow to Gatwick | Gatwick airport to Heathrow transfer and transportation" , description ="Heathrow to Gatwick and Gatwick to Heathrow transfer prices.  Heathrow airport and Gatwick travel and transportation information. How do i get from heathrow to gatwick." , keywords ="Heathrow to Gatwick,gatwick to heathrow,heathrow to Gatwick travel,Gatwick to Heathrow travel,Gatwick to Heathrow transfer,Heathrow to Gatwick transfer." ,  } = typeof pageProps === "object" && typeof (pageProps === null || pageProps === void 0 ? void 0 : pageProps.head) === "object" ? pageProps === null || pageProps === void 0 ? void 0 : pageProps.head : {};
        let extraTags = typeof (pageProps === null || pageProps === void 0 ? void 0 : pageProps.head) === "object" && Array.isArray(pageProps === null || pageProps === void 0 ? void 0 : (ref = pageProps.head) === null || ref === void 0 ? void 0 : ref.extraTags) ? pageProps === null || pageProps === void 0 ? void 0 : (ref1 = pageProps.head) === null || ref1 === void 0 ? void 0 : ref1.extraTags : [];
        if (typeof (pageProps === null || pageProps === void 0 ? void 0 : pageProps.head) === "object") {
            var ref2;
            pageProps === null || pageProps === void 0 ? void 0 : (ref2 = pageProps.head) === null || ref2 === void 0 ? void 0 : delete ref2.extraTags;
        }
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                            children: title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "description",
                            content: description
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "keywords",
                            content: keywords
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                            async: true,
                            src: "https://www.googletagmanager.com/gtag/js?id=AW-954888543"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                            dangerouslySetInnerHTML: {
                                __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-954888543')
            gtag('config', 'UA-108287779-1');
            ;`
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                            dangerouslySetInnerHTML: {
                                __html: `function gtag_report_conversion(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
                'send_to': 'AW-954888543/AUzgCLz8s5MBEN_iqccD',
                'transaction_id': '',
                'event_callback': callback
            });
            return false;
          }`
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                            dangerouslySetInnerHTML: {
                                __html: `
         (
          function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  new Date().getTime(),event:'gtm.js'});
           var f=d.getElementsByTagName(s)[0],
           j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
           j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;
           f.parentNode.insertBefore(j,f);})
           (window,document,'script','dataLayer','GTM-K3Z58DMH')
            `
                            }
                        }),
                        extraTags.map((tag, i)=>{
                            let { attr , name , textContent  } = tag;
                            if (name === "link") {
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                                    ...attr
                                }, i);
                            } else if (name === "script") {
                                let { type , data  } = typeof textContent === "object" ? textContent : {};
                                if (type === "object") {
                                    // return <script key={i} {...attr} dangerouslySetInnerHTML={{__html:JSON.stringify(data,null,2)}} ></script>
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        ...attr,
                                        strategy: "beforeInteractive",
                                        children: JSON.stringify(data, null, 2)
                                    }, i);
                                //{JSON.stringify(data, null, 2)}
                                } else if (type === "string") {
                                    // return <script key={i} {...attr} dangerouslySetInnerHTML={{__html:data}} ></script>
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        ...attr,
                                        strategy: "beforeInteractive",
                                        children: data
                                    }, i);
                                }
                                {
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {}, i);
                                }
                            } else {
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {}, i);
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                            dangerouslySetInnerHTML: {
                                __html: `
                                    (function() {
                                        // Check viewport width
                                        // Load Zendesk snippet script
                                        var zendeskScript = document.createElement('script');
                                        zendeskScript.id = 'ze-snippet';
                                        zendeskScript.src = 'https://static.zdassets.com/ekr/snippet.js?key=473f7b02-4850-4045-8010-1fedf9752180';
                                        zendeskScript.async = true;
                                        document.body.appendChild(zendeskScript);

                                        // Load custom chat widget script
                                        var chatWidgetScript = document.createElement('script');
                                        chatWidgetScript.src = 'https://www.airport-pickups-london.com/js/chat_widget.js?112';
                                        chatWidgetScript.async = true;
                                        document.body.appendChild(chatWidgetScript);
                                    })();
            `
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("noscript", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                                src: "https://www.googletagmanager.com/ns.html?id=GTM-K3Z58DMH",
                                height: "0",
                                width: "0",
                                style: {
                                    display: "none",
                                    visibility: "hidden"
                                }
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                    ]
                })
            ]
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomDocument);


/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6377,699,676,1803], () => (__webpack_exec__(4178)));
module.exports = __webpack_exports__;

})();