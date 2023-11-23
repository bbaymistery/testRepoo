exports.id = 5900;
exports.ids = [5900];
exports.modules = {

/***/ 1991:
/***/ ((module) => {

// Exports
module.exports = {
	"quotation": "styles_quotation__U0aor",
	"quotation_section": "styles_quotation_section__Et8zh",
	"quotation_section_container": "styles_quotation_section_container__W4cX7",
	"title": "styles_title__zKvrE",
	"title_center": "styles_title_center__lo9oW",
	"stars": "styles_stars__gVWOy",
	"main_container": "styles_main_container__FwnUG",
	"rtl": "styles_rtl__9OU34",
	"quotation_panel": "styles_quotation_panel__ZyyCK",
	"form_div": "styles_form_div__LABHS",
	"errorBookedMessage": "styles_errorBookedMessage__Qtf70",
	"search_menu": "styles_search_menu__R3Ryl",
	"error_input": "styles_error_input__3HGe5",
	"input_div": "styles_input_div__GLcDz",
	"loading_div": "styles_loading_div__ksEKR",
	"input_delete_field_icon": "styles_input_delete_field_icon__oxPSi",
	"error_icon": "styles_error_icon__tpqw8",
	"addrtl": "styles_addrtl__BUre_",
	"add_point_div": "styles_add_point_div__eeFNC",
	"add_point_icon": "styles_add_point_icon__GpGVm",
	"book_input_date": "styles_book_input_date__BWIYH",
	"date_div_rtl": "styles_date_div_rtl__HHdhw",
	"date_div": "styles_date_div__y5IeF",
	"date_picker_icon": "styles_date_picker_icon__XYFKG",
	"date_picker_icon_left": "styles_date_picker_icon_left__8UuTg",
	"select_time_div": "styles_select_time_div__nhvhS",
	"booking_form_hour_minute_wrapper": "styles_booking_form_hour_minute_wrapper__yCZXH",
	"button": "styles_button__9dJQC",
	"map_direction": "styles_map_direction__DmM5B",
	"items_buttons": "styles_items_buttons__zXHyT",
	"quotation_panel_istaxideal": "styles_quotation_panel_istaxideal__wL5Xj",
	"modal_map": "styles_modal_map__tS1RB",
	"modal_map_container": "styles_modal_map_container___bUcC",
	"close_div": "styles_close_div__axLXC",
	"google_map": "styles_google_map__miHyZ",
	"left_info": "styles_left_info__mpYP3",
	"left_info_title": "styles_left_info_title__pRuI7",
	"checkbox": "styles_checkbox__too1c",
	"badge__content": "styles_badge__content__Ein3E",
	"badge_stars": "styles_badge_stars__9DUWi",
	"badge_stats": "styles_badge_stats__LbgCj",
	"stats_wrpa": "styles_stats_wrpa__SLr_X",
	"stats__score": "styles_stats__score__957Na",
	"ruk_rating": "styles_ruk_rating__yEiAC",
	"stats__count": "styles_stats__count__CuSpE",
	"ruk_count": "styles_ruk_count__F8Nvx",
	"heathrow_image_video_a": "styles_heathrow_image_video_a__pUjJE",
	"heathrow_image_video_img": "styles_heathrow_image_video_img__GWTHw",
	"whichterminal_a": "styles_whichterminal_a__Z9Qkr",
	"approve_a": "styles_approve_a__4psyA",
	"tripad_left_info": "styles_tripad_left_info___bBix",
	"tripad_a": "styles_tripad_a__VkTXs",
	"tripad_img": "styles_tripad_img__Okn9p",
	"acceptedcards": "styles_acceptedcards__8ee_C",
	"tfl": "styles_tfl__JwfKN",
	"left_support": "styles_left_support__lBvIm",
	"mail": "styles_mail__t_MPw",
	"wp": "styles_wp__8j_5K",
	"phone": "styles_phone__zAdlB",
	"services": "styles_services__dmJmB",
	"radio_button_div": "styles_radio_button_div__PGTM3",
	"main_container_taxideal": "styles_main_container_taxideal__440qt",
	"google-maps-markerwithlabel": "styles_google-maps-markerwithlabel__ETUre"
};


/***/ }),

/***/ 5900:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1991);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7535);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _resources_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4603);





const OverlayView = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.OverlayView, {
        mapPaneName: _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.OverlayView.OVERLAY_MOUSE_TARGET,
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
    let { rightLabel =false , label , index , color , position , isTaxiDeal  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(OverlayView, {
            position: position,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default()["google-maps-markerwithlabel"]),
                children: [
                    !isTaxiDeal ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        d: rightLabel ? "right" : "left",
                        children: label
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: index
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: `${_resources_env__WEBPACK_IMPORTED_MODULE_3__/* ["default"].apiDomain */ .Z.apiDomain}/media/i/google-map-marker/${color || "fff-287dfa"}`,
                        style: {
                            fontSize: "10px",
                            width: "60px"
                        },
                        alt: "marker"
                    })
                ]
            })
        })
    });
};
const Map = ({ datas , selectedPickPoints , selectedDroppOfPoints , isTaxiDeal =false  })=>{
    const { isLoaded , loadError  } = (0,_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.useLoadScript)({
        googleMapsApiKey: "AIzaSyDulwIwncfuxBve8MKXPIIPmPLRve6ySw8"
    });
    const [points, setPoints] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const letters = [
        "A",
        "B",
        "C",
        "D",
        "E"
    ];
    const containerStyle = {
        width: "100%",
        minHeight: `230px`,
        borderRadius: "5px"
    };
    const containerStyle2 = {
        minWidth: "100%",
        minHeight: `100%`,
        borderRadius: "5px"
    };
    let polyOptions = datas?.polylinePath?.map((poly)=>{
        return {
            lat: poly[0],
            lng: poly[1]
        };
    });
    let pathOptions = datas?.markerPoints?.map((poly)=>{
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
        fullscreenControl: false,
        zIndex: 1
    };
    const googleMapOptions = {
        fullscreenControl: false
    };
    const onLoad = (infoWindow)=>{};
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!isTaxiDeal) {
            setPoints([
                ...selectedPickPoints,
                ...selectedDroppOfPoints
            ]);
        } else {
        // setPoints[]
        }
    }, [
        selectedPickPoints,
        selectedDroppOfPoints
    ]);
    return(//AIzaSyDj4vvK0JOc18G40y4QUrrVcaMJzkV1jH4
    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().google_map),
        children: !isLoaded ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: "..."
        }) : !isTaxiDeal ? datas?.markerPoints && selectedPickPoints.length > 0 && selectedDroppOfPoints.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.GoogleMap, {
            mapContainerStyle: containerStyle,
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().map_container),
            center: {
                lat: datas?.markerPoints[0][0],
                lng: datas?.markerPoints[0][1]
            },
            zoom: 7,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.Polyline, {
                        onLoad: onLoad,
                        path: polyOptions,
                        options: options
                    }),
                    selectedDroppOfPoints.length > 0 && selectedPickPoints.length > 0 && pathOptions?.map((coord, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MarkerWithLabel, {
                            color: "fff-13357B",
                            position: coord,
                            index: letters[index],
                            label: index % 2 === 0 ? points[index]?.address : points[index]?.address
                        }, index))
                ]
            })
        }) : datas?.markerPoints && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.GoogleMap, {
            options: options,
            mapContainerStyle: containerStyle2,
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().map_container),
            center: {
                lat: datas?.markerPoints[0][0],
                lng: datas?.markerPoints[0][1]
            },
            zoom: 6,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.Polyline, {
                    onLoad: onLoad,
                    path: polyOptions,
                    options: options
                }),
                pathOptions?.map((coord, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MarkerWithLabel, {
                        color: "fff-13357B",
                        position: coord,
                        isTaxiDeal: isTaxiDeal,
                        index: letters[index]
                    }, index))
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Map);


/***/ })

};
;