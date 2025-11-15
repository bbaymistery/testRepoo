"use strict";
(() => {
var exports = {};
exports.id = 6232;
exports.ids = [6232];
exports.modules = {

/***/ 8680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ article)
});

;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/api/article.js


// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
/* harmony default export */ const article = ((req, res)=>{
    try {
        let { query: { document  } ,  } = req;
        let filePath = external_path_default().resolve(process.cwd(), `./src/articles/${document}`);
        console.log(filePath);
        let isExist = external_fs_default().existsSync(filePath);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        if (isExist) {
            let imageBuffer = external_fs_default().readFileSync(`${filePath}`, "utf-8");
            res.json({
                status: 200,
                doc: imageBuffer
            });
        } else {
            res.json({
                status: 403
            });
        }
    } catch (error) {
        res.json({
            status: 403
        });
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8680));
module.exports = __webpack_exports__;

})();