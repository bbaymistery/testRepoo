exports.id = 2837;
exports.ids = [2837];
exports.modules = {

/***/ 1469:
/***/ ((module) => {

// Exports
module.exports = {
	"quotation_section": "styles_quotation_section__O2YZM",
	"section": "styles_section__Ml6Zk",
	"quotation_container": "styles_quotation_container__3mOA5",
	"quotation_header": "styles_quotation_header__ZalXm",
	"quotation_panel": "styles_quotation_panel__vshT1",
	"google_map": "styles_google_map__qKSPU",
	"result_container": "styles_result_container__4_VJ1",
	"li_icon": "styles_li_icon__uYAFo",
	"strong": "styles_strong__GccJL",
	"quotation_items": "styles_quotation_items__KNcqq",
	"items_buttons": "styles_items_buttons__wQBvF",
	"google-maps-markerwithlabel": "styles_google-maps-markerwithlabel__OTbPf"
};


/***/ }),

/***/ 2837:
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
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1469);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_pickUpDropOffReducer_pickUpDropAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3570);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2433);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__);






const OverlayView = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__.OverlayView, {
        mapPaneName: _react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__.OverlayView.OVERLAY_MOUSE_TARGET,
        getPixelPositionOffset: (w, h)=>({
                x: -(w / 2),
                y: -(h / 2)
            }),
        position: props.position,
        children: props.children
    });
};
/**
 * @props { rightLabel = "left", label, index, color, position }
 */ const MarkerWithLabel = (props)=>{
    let { rightLabel =false , label , index , color , position , env  } = props; //
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(OverlayView, {
        position: position,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default()["google-maps-markerwithlabel"]),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    d: rightLabel ? "right" : "left",
                    children: label
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: index
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: `${env === null || env === void 0 ? void 0 : env.apiDomain}/media/i/google-map-marker/${color || "fff-287dfa"}`,
                    alt: "marker"
                })
            ]
        })
    });
};
const Map = ({ datas , selectedPickPoints , selectedDroppOfPoints , env  })=>{
    var ref, ref1;
    const { isLoaded , loadError  } = (0,_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__.useLoadScript)({
        googleMapsApiKey: "AIzaSyDulwIwncfuxBve8MKXPIIPmPLRve6ySw8"
    });
    const { 0: points , 1: setPoints  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const letters = [
        "A",
        "B",
        "C",
        "D",
        "E"
    ];
    const dispacth = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const onLoad = (infoWindow)=>{
    // console.log("infoWindow: ", infoWindow);
    };
    const containerStyle = {
        width: "100%",
        // minHeight: "100%",
        minHeight: `234px`,
        borderRadius: "5px"
    };
    let polyOptions = datas === null || datas === void 0 ? void 0 : (ref = datas.polylinePath) === null || ref === void 0 ? void 0 : ref.map((poly)=>{
        return {
            lat: poly[0],
            lng: poly[1]
        };
    });
    let pathOptions = datas === null || datas === void 0 ? void 0 : (ref1 = datas.markerPoints) === null || ref1 === void 0 ? void 0 : ref1.map((poly)=>{
        return {
            lat: poly[0],
            lng: poly[1]
        };
    });
    const options = {
        strokeColor: "red",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "black",
        fillOpacity: 0.35,
        clickable: false,
        draggable: true,
        editable: false,
        visible: true,
        radius: 30000,
        paths: polyOptions,
        zIndex: 1
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let points = [
            ...selectedPickPoints,
            ...selectedDroppOfPoints
        ];
        setPoints(points);
    }, [
        selectedPickPoints,
        selectedDroppOfPoints
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        dispacth((0,_store_pickUpDropOffReducer_pickUpDropAction__WEBPACK_IMPORTED_MODULE_5__/* .getAppData */ .$s)());
    }, []);
    return(//AIzaSyDj4vvK0JOc18G40y4QUrrVcaMJzkV1jH4
    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().google_map),
        children: !isLoaded ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: "..."
        }) : (datas === null || datas === void 0 ? void 0 : datas.markerPoints) && selectedPickPoints.length > 0 && selectedDroppOfPoints.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__.GoogleMap, {
            mapContainerStyle: containerStyle,
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().map_container),
            center: {
                lat: datas === null || datas === void 0 ? void 0 : datas.markerPoints[0][0],
                lng: datas === null || datas === void 0 ? void 0 : datas.markerPoints[0][1]
            },
            zoom: 7,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__.Polyline, {
                        onLoad: onLoad,
                        path: polyOptions,
                        options: options
                    }),
                    selectedDroppOfPoints.length > 0 && selectedPickPoints.length > 0 && (pathOptions === null || pathOptions === void 0 ? void 0 : pathOptions.map((coord, index)=>{
                        var ref, ref1;
                        /*#__PURE__*/ return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MarkerWithLabel, {
                            color: "fff-13357B",
                            position: coord,
                            env: env,
                            index: letters[index],
                            label: index % 2 === 0 ? (ref = points[index]) === null || ref === void 0 ? void 0 : ref.address : (ref1 = points[index]) === null || ref1 === void 0 ? void 0 : ref1.address
                        }, index);
                    }))
                ]
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Map);


/***/ })

};
;