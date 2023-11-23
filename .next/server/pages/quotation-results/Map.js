"use strict";
(() => {
var exports = {};
exports.id = 2895;
exports.ids = [2895,2197,9319,5026];
exports.modules = {

/***/ 4603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const isDevelopment = true; // localohst -> true || live -> false
const env = {
    websiteDomain: isDevelopment ? "http://localhost:3500" : "https://aplairtest.netlify.app",
    apiDomain: "https://api.london-tech.com",
    status: {
        success: 200,
        error: 403,
        success: 200,
        badRequest: 400,
        unauthorized: 401,
        forbidden: 403,
        methodNotAllowed: 405,
        notAcceptable: 406,
        internalServerError: 500
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (env);


/***/ }),

/***/ 7535:
/***/ ((module) => {

module.exports = require("@react-google-maps/api");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5900], () => (__webpack_exec__(5900)));
module.exports = __webpack_exports__;

})();