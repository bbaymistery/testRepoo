(() => {
var exports = {};
exports.id = 4699;
exports.ids = [4699,2858,8817,150,1344];
exports.modules = {

/***/ 670:
/***/ ((module) => {

// Exports
module.exports = {
	"notfound_containerId": "styles_notfound_containerId__Fg3R_",
	"notfound": "styles_notfound__JxEeM",
	"notfounf404": "styles_notfounf404__1EsEL",
	"h2": "styles_h2__Xn8Z1"
};


/***/ }),

/***/ 2564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ HomePage),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/components/layouts/Layout/index.js + 10 modules
var Layout = __webpack_require__(2246);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/store/pickUpDropOffReducer/pickUpDropAction.js
var pickUpDropAction = __webpack_require__(3570);
// EXTERNAL MODULE: ./src/components/elements/Hero/OneWay/OneWay.js
var OneWay = __webpack_require__(7775);
// EXTERNAL MODULE: ./src/components/elements/CustomError/styles.module.scss
var styles_module = __webpack_require__(670);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: ./src/components/elements/CustomError/index.js



const CustomError = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (styles_module_default()).notfound_containerId,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (styles_module_default()).notfound,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (styles_module_default()).notfounf404,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: ":("
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: (styles_module_default()).h2,
                    children: "404 - Page not found"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: "The page you are looking for might have been removed had its name changed or is temporarily unavailable."
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "/",
                    children: "home page"
                })
            ]
        })
    });
};
/* harmony default export */ const elements_CustomError = (CustomError);

// EXTERNAL MODULE: ./src/resources/getEnvConfig.js
var getEnvConfig = __webpack_require__(1635);
;// CONCATENATED MODULE: ./src/pages/[article].js



//





function HomePage(props) {
    let { status , file , hasSearchEngine , data , head , filename , articlePath , env  } = props;
    const dispacth = (0,external_react_redux_.useDispatch)();
    if (!filename) return /*#__PURE__*/ jsx_runtime_.jsx(elements_CustomError, {});
    (0,external_react_.useEffect)(()=>{
        dispacth((0,pickUpDropAction/* getAppData */.$s)());
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
        title: head === null || head === void 0 ? void 0 : head.title,
        description: head === null || head === void 0 ? void 0 : head.description,
        keywords: head === null || head === void 0 ? void 0 : head.keywords,
        children: status === 200 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    style: {
                        maxWidth: "calc(1740px)",
                        width: "calc(100%)",
                        padding: 20,
                        boxSizing: "border-box",
                        margin: "20px auto"
                    },
                    dangerouslySetInnerHTML: {
                        __html: `<div>${file[0]}</div>`
                    }
                }),
                hasSearchEngine ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    style: {
                        maxWidth: "1200px",
                        margin: "0 auto"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(OneWay/* default */.Z, {
                        fromArticle: true,
                        preSelectedPickupPoint: data.preSelectedPickupPoints,
                        preSelectedDropoffPoint: data.preSelectedDropoffPoints,
                        env: env
                    })
                }) : /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {}),
                typeof file[1] === "string" ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    style: {
                        maxWidth: "calc(1740px)",
                        width: "calc(100%)",
                        padding: 20,
                        boxSizing: "border-box",
                        margin: "20px auto"
                    },
                    dangerouslySetInnerHTML: {
                        __html: file[1]
                    }
                }) : /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {})
            ]
        }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: "404 Not Found"
        })
    });
}
async function getServerSideProps({ req , res , query  }) {
    const env = await (0,getEnvConfig/* fetchConfig */.Q)();
    let { article: filename  } = query || {};
    if (filename === "heathrowtogatwick.aspx") {
        return {
            redirect: {
                destination: `/about`,
                permanent: true
            }
        };
    }
    // console.log(filename);
    //codes for show article
    // if (filename.includes(".aspx")) {
    //   filename = filename.replace(".aspx", "");
    //   return {
    //     redirect: {
    //       destination: `/${filename}`,
    //       permanent: true,
    //     },
    //   };
    // }
    //  else
    //  {
    try {
        let requestArticle = await fetch(`${env.websiteDomain}/api/article?document=${filename}.html`);
        let responseArticle = await requestArticle.json();
        // console.log(responseArticle);
        let file = responseArticle.status === 200 ? responseArticle.doc : "";
        let hasSearchEngine = false;
        file = file.split("\n");
        let fileObject = file[0].replace("<!-- ", "").replace(" -->", "");
        fileObject = JSON.parse(fileObject);
        // console.log(fileObject);
        let { data ={} , head ={}  } = fileObject;
        file.shift();
        file = file.join("\n");
        if (file.includes("<!-- search_engine -->")) {
            hasSearchEngine = true;
            file = file.split("<!-- search_engine -->");
        } else {
            file = [
                file
            ];
        }
        return {
            props: {
                status: 200,
                file,
                hasSearchEngine,
                data,
                filename,
                head
            }
        };
    } catch (error) {
        return {
            props: {
                status: 403,
                hasSearchEngine: false,
                data: {}
            }
        };
    }
// }
}


/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

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

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

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

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6377,5675,5152,2246,5789,9858,3570,2747,5795,5494,7775], () => (__webpack_exec__(2564)));
module.exports = __webpack_exports__;

})();