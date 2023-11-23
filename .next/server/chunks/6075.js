"use strict";
exports.id = 6075;
exports.ids = [6075];
exports.modules = {

/***/ 547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ postDataAPI)
/* harmony export */ });
/* unused harmony export getDataApi */
const postDataAPI = async (params = {})=>{
    let { url , body  } = params;
    const method = "POST";
    const headers = {
        "Content-Type": "application/json"
    };
    const reqOpt = {
        body: JSON.stringify(body),
        method,
        headers
    };
    const response = await fetch(url, reqOpt);
    const datas = await response.json();
    return datas;
};
const getDataApi = async (params = {})=>{
    let { url  } = params;
    const response = await fetch(url);
    const datas = await response.json();
    return datas;
};


/***/ }),

/***/ 6075:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_fetchDatas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(547);
/* harmony import */ var _resources_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4603);



const usePageContentHook = (pagePathname, language)=>{
    // Set up state variables
    const [metaTitle, setmetaTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [keywords, setKeywords] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [pageContent, setPageContent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [pageTitle, setPageTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [shortDescription, setShortDescription] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        // Define async function to fetch data from API
        async function fetchData() {
            // Construct URL and request body
            let url = `${_resources_env__WEBPACK_IMPORTED_MODULE_1__/* ["default"].apiDomain */ .Z.apiDomain}/api/v1/pages/details`;
            let body = {
                pagePathname: `/${pagePathname}`,
                language
            };
            // Make API request with postDataAPI function from helpers
            let datas = await (0,_helpers_fetchDatas__WEBPACK_IMPORTED_MODULE_2__/* .postDataAPI */ .S)({
                url,
                body
            });
            // Handle response data based on status code
            if (datas.status === 200) {
                let { data: { metaTitle , keywords , metaDescription , pageContent , pageTitle , shortDescription  }  } = datas;
                setmetaTitle(metaTitle);
                setKeywords(keywords);
                setDescription(metaDescription);
                setPageContent(pageContent);
                setPageTitle(pageTitle);
                setShortDescription(shortDescription);
            } else {
                setmetaTitle("");
                setKeywords("");
                setDescription("");
                setPageContent("");
                setPageTitle("");
                setShortDescription("");
            }
        }
        fetchData();
    }, [
        language,
        pagePathname
    ]);
    // Return state variables as an object
    return {
        metaTitle,
        keywords,
        description,
        pageContent,
        pageTitle,
        shortDescription
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usePageContentHook);


/***/ })

};
;