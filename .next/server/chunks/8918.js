exports.id = 8918;
exports.ids = [8918];
exports.modules = {

/***/ 1161:
/***/ ((module) => {

// Exports
module.exports = {
	"tr_details_section": "styles_tr_details_section__y8V6w",
	"tr_details_section_container": "styles_tr_details_section_container__5NTfQ",
	"taxideals_subcontainer": "styles_taxideals_subcontainer__zrQlJ",
	"taxideals_subcontainer_content": "styles_taxideals_subcontainer_content__TW_Zk",
	"taxideals_subcontainer_content_points_and_passengerdetails": "styles_taxideals_subcontainer_content_points_and_passengerdetails__1k8cF",
	"points": "styles_points__Q3fzT",
	"first_column": "styles_first_column__TwzRk",
	"second_column": "styles_second_column__QCub3",
	"third_column": "styles_third_column__FcF_E",
	"fourth_column": "styles_fourth_column__mp0ap",
	"search_menu": "styles_search_menu__ERkLp",
	"taxideals_select_div": "styles_taxideals_select_div__VLXdm",
	"taxideals_select": "styles_taxideals_select__g_kVi",
	"input_div": "styles_input_div___Wcr6",
	"popup_header": "styles_popup_header__PTjgI",
	"input_delete_field_icon": "styles_input_delete_field_icon__jT2LJ",
	"error_icon": "styles_error_icon__5HX9j",
	"loading_div": "styles_loading_div__bFIn6",
	"error_input": "styles_error_input__L6u8h",
	"date_time_together": "styles_date_time_together__2X9fh",
	"book_input_date": "styles_book_input_date__Knh5r",
	"date_div": "styles_date_div__JP8Qn",
	"rtl": "styles_rtl__z_IFu",
	"date_picker_icon": "styles_date_picker_icon__eKlp7",
	"hours_minutes": "styles_hours_minutes__r6OP_",
	"select_time_div": "styles_select_time_div__jVDVq",
	"booking_form_hour_minute_wrapper": "styles_booking_form_hour_minute_wrapper__K6GTU",
	"left": "styles_left__K6VGx",
	"passenger_details_div": "styles_passenger_details_div__AWvLA",
	"taxideal_buttons": "styles_taxideal_buttons___yVHB",
	"buttons": "styles_buttons__b8Haj",
	"transferdetails_subcontainer": "styles_transferdetails_subcontainer__HnE5w",
	"transferdetails_subcontainer_content": "styles_transferdetails_subcontainer_content__GtTGT",
	"transferdetails_subcontainer_content_points_and_passengerdetails": "styles_transferdetails_subcontainer_content_points_and_passengerdetails__f66nL",
	"selected_points_details": "styles_selected_points_details__WZ_f7",
	"selecteditems": "styles_selecteditems__zwj3a",
	"points_header": "styles_points_header__KB2jc",
	"selectedlist_points_left": "styles_selectedlist_points_left__Sj7SV",
	"selectedlist_points_right": "styles_selectedlist_points_right__C2B9N",
	"textarea_div": "styles_textarea_div__0828V",
	"form_checkbox": "styles_form_checkbox__vEm2Y",
	"checkbox": "styles_checkbox__eOhJ7",
	"primary_text": "styles_primary_text__gktow",
	"red_text": "styles_red_text__W1dpY",
	"buttons_for_gap": "styles_buttons_for_gap__CEMOR",
	"right": "styles_right__7Hmi0",
	"content": "styles_content__eHtqd",
	"acceptedcards": "styles_acceptedcards__9eF_0",
	"directionbuttons_for_gap": "styles_directionbuttons_for_gap__tBCdt",
	"search-input-container": "styles_search-input-container__L_Xc4",
	"return_pas_details_header": "styles_return_pas_details_header__kAIzS",
	"passenger_details": "styles_passenger_details__O8jU7"
};


/***/ }),

/***/ 8918:
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1161);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);




const CheckBox = ({ textSame , textNotSame , direction  })=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    let state = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.pickUpDropOffActions);
    let { params: { passengerDetailsStatus  }  } = state;
    const onchangeHandler = (e)=>dispatch({
            type: "SET_SAME_PASSENGER_DETAILS_STATUS",
            data: {
                status: !e.currentTarget.previousSibling.checked
            }
        });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().form_checkbox),
        direction: String(direction === "rtl"),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().checkbox),
                type: "checkbox",
                id: "checkbox-2",
                defaultChecked: passengerDetailsStatus
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                htmlFor: "checkbox-2",
                className: `${!passengerDetailsStatus ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().primary_text) : (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().red_text)}`,
                onClick: (e)=>onchangeHandler(e),
                children: passengerDetailsStatus ? `${textSame}` : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        "the passenger details ",
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().textMiddle),
                            children: [
                                " are not same",
                                "  "
                            ]
                        }),
                        " for both journey"
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckBox);


/***/ })

};
;