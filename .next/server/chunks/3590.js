"use strict";
exports.id = 3590;
exports.ids = [3590];
exports.modules = {

/***/ 3590:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ useConfirm)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function useConfirm(params = {}) {
    let { previousUrl , nextUrl , currentUrls , messsage ="If you leave the page, all data will be deleted."  } = params;
    const [confMessage, setConfMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(messsage);
    const [isConfirmationShown, setConfirmationShown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const beforeUnloadHandler = (e)=>{
            if (confMessage && !isConfirmationShown) {
                e.preventDefault();
                e.returnValue = confMessage;
                setConfirmationShown(true);
                return confMessage;
            }
        };
        //burasi bizim hangi sayfaya gecdigimizi soyler  (tiklayinca)
        const beforeRouteHandler = (url)=>{
            //it is array like ["tr/transferdetails","es/tradetail"...]
            //so i hcekc if url is included inside next url then do not give confirmation alert
            if (Array.isArray(nextUrl) && Array.isArray(previousUrl)) {
                //we can go back or step forward
                if (nextUrl.includes(url) || previousUrl.includes(url) || currentUrls.includes(url)) {
                    setConfMessage("");
                    setConfirmationShown(false);
                    return;
                } else {
                    setConfMessage(messsage);
                    setConfirmationShown(false);
                }
            }
            if (next_router__WEBPACK_IMPORTED_MODULE_0__.Router.pathname !== url && !confirm(confMessage) && !isConfirmationShown) {
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
} // export function useConfirm(params = {}) {
 //     let { previousUrl, nextUrl, currentUrls, messsage = "If you leave the page, all data will be deleted.", } = params
 //     const [confMessage, setConfMessage] = useState(messsage);
 //     const router = useRouter()
 //     useEffect(() => {
 //         const beforeUnloadHandler = (e) => {
 //             if (confMessage) {
 //                 (e || window.event).returnValue = confMessage;
 //                 return confMessage;
 //             }
 //         };
 //         //burasi bizim hangi sayfaya gecdigimizi soyler  (tiklayinca)
 //         const beforeRouteHandler = (url) => {
 //             //it is array like ["tr/transferdetails","es/tradetail"...]
 //             //so i hcekc if url is included inside next url then do not give confirmation alert
 //             if (Array.isArray(nextUrl) && Array.isArray(previousUrl)) {
 //                 //we can go back or step forward
 //                 if (nextUrl.includes(url) || previousUrl.includes(url) || currentUrls.includes(url)) {
 //                     setConfMessage("")
 //                     return
 //                 } else {
 //                     setConfMessage(messsage)
 //                 }
 //             } 
 //             if (Router.pathname !== url && !confirm(confMessage)) {
 //                 Router.events.emit("routeChangeError");
 //                 throw `Route change to "${url}" was aborted (this error can be safely ignored). See https://github.com/zeit/next.js/issues/2476.`;
 //             }
 //         };
 //         window.addEventListener("beforeunload", beforeUnloadHandler);
 //         Router.events.on("routeChangeStart", beforeRouteHandler);
 //         return () => {
 //             window.removeEventListener("beforeunload", beforeUnloadHandler);
 //             Router.events.off("routeChangeStart", beforeRouteHandler);
 //         };
 //     }, []);
 //     return confMessage
 // }


/***/ })

};
;