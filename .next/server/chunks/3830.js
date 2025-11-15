exports.id = 3830;
exports.ids = [3830,1599];
exports.modules = {

/***/ 9765:
/***/ ((module) => {

// Exports
module.exports = {
	"btn_box": "elgun_btn_box__fe9i2",
	"btn_primary": "elgun_btn_primary__qJ4ps",
	"contained": "elgun_contained__m_smP",
	"btn_primary_responsive": "elgun_btn_primary_responsive__60333"
};


/***/ }),

/***/ 1599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elgun_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9765);
/* harmony import */ var _elgun_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elgun_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const BlueBotton = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${(_elgun_module_scss__WEBPACK_IMPORTED_MODULE_2___default().btn_box)} `,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            className: `${(_elgun_module_scss__WEBPACK_IMPORTED_MODULE_2___default().btn_primary)}

         ${props.colorViceVerse && (_elgun_module_scss__WEBPACK_IMPORTED_MODULE_2___default().contained)}
         ${props.responsive && (_elgun_module_scss__WEBPACK_IMPORTED_MODULE_2___default().btn_primary_responsive)}
        `,
            type: props.type ? props.type : "",
            children: props.title
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlueBotton);


/***/ }),

/***/ 628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ useConfirm)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function useConfirm(params = {}) {
    let { previousUrl , nextUrl , messsage ="If you leave the page, all data will be deleted." ,  } = params;
    const { 0: confMessage , 1: setConfMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(messsage);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const beforeUnloadHandler = (e)=>{
            if (confMessage) {
                (e || window.event).returnValue = confMessage;
                return confMessage;
            }
        };
        //burasi bizim hangi sayfaya gecdigimizi soyler  (tiklayinca)
        const beforeRouteHandler = (url)=>{
            //eger resevation documente geldi ve geri paymente gitmek isterse onda direk uayri mesaji gelsin ve home page gitsin
            //this case is all about when we are in reservationDocument page   =>previousUrl === '/' && nextUrl === '/'
            if (previousUrl === "/" && nextUrl === "/") {
                router.reload();
            } else {
                //we can go back or step forward
                if (url === nextUrl || url === previousUrl) {
                    setConfMessage("");
                    return;
                } else {
                    setConfMessage(messsage);
                }
            }
            if (next_router__WEBPACK_IMPORTED_MODULE_0__.Router.pathname !== url && !confirm(confMessage)) {
                next_router__WEBPACK_IMPORTED_MODULE_0__.Router.events.emit("routeChangeError");
                throw `Route change to "${url}" was aborted (this error can be safely ignored). See https://github.com/zeit/next.js/issues/2476.`;
            }
        };
        window.addEventListener("beforeunload", beforeUnloadHandler);
        next_router__WEBPACK_IMPORTED_MODULE_0__.Router.events.on("routeChangeStart", beforeRouteHandler);
        return ()=>{
            window.removeEventListener("beforeunload", beforeUnloadHandler);
            next_router__WEBPACK_IMPORTED_MODULE_0__.Router.events.off("routeChangeStart", beforeRouteHandler);
        };
    }, []);
    return confMessage;
}


/***/ })

};
;