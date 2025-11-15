"use strict";
(() => {
var exports = {};
exports.id = 9545;
exports.ids = [9545];
exports.modules = {

/***/ 5184:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 8112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
let nodemailer = __webpack_require__(5184);
async function handler(req, res) {
    if (req.method === "POST") {
        var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7;
        // console.log(allPickUpss);
        let template = `<div>
    <p>Type is :  ${req === null || req === void 0 ? void 0 : (ref = req.body) === null || ref === void 0 ? void 0 : (ref1 = ref.response) === null || ref1 === void 0 ? void 0 : ref1.type} </p>
    <p>Msg is :  ${req === null || req === void 0 ? void 0 : (ref2 = req.body) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.response) === null || ref3 === void 0 ? void 0 : ref3.msg} </p>
    <p>Name is :  ${req === null || req === void 0 ? void 0 : (ref4 = req.body) === null || ref4 === void 0 ? void 0 : (ref5 = ref4.response) === null || ref5 === void 0 ? void 0 : ref5.name} </p>
    <p>Note is :  ${req === null || req === void 0 ? void 0 : (ref6 = req.body) === null || ref6 === void 0 ? void 0 : (ref7 = ref6.response) === null || ref7 === void 0 ? void 0 : ref7.note} </p>

    </div>`;
        const transporter = nodemailer.createTransport({
            name: "mail.aplcars.com",
            host: "mail.aplcars.com",
            port: 465,
            secure: true,
            auth: {
                user: "laith@aplcars.com",
                pass: "Istanbul2021!-"
            },
            tls: {
                rejectUnauthorized: false
            }
        });
        const mailData = {
            from: "info@heathrow-gatwick-transfers.com",
            to: "elgun.ezmemmedov@mai.ru",
            html: template,
            subject: "errorrr from hgt website mail"
        };
        transporter.sendMail(mailData, function(err, info) {
            if (err) {
                res.status(403).json({
                    status: "ERROR",
                    err
                });
                console.log(err);
            } else {
                res.status(200).json({
                    status: "OK",
                    info
                });
                // resolve(info);
                console.log(info);
            }
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8112));
module.exports = __webpack_exports__;

})();