"use strict";
(() => {
var exports = {};
exports.id = 5378;
exports.ids = [5378,2858,8817];
exports.modules = {

/***/ 6148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/test.js




function HomePage(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("pre", {
        children: JSON.stringify(props)
    });
}
async function getServerSideProps({ req , res , query  }) {
    try {
        let dirs = external_fs_default().readdirSync(external_path_default().resolve(__dirname, "../../../src/articles"));
        return {
            props: {
                status: 200,
                dir: process.cwd(),
                __dirname: __dirname,
                dirs
            }
        };
    } catch (error) {
        console.log(error.message);
        return {
            props: {}
        };
    }
}


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
var __webpack_exports__ = (__webpack_exec__(6148));
module.exports = __webpack_exports__;

})();