(() => {
var exports = {};
exports.id = 8252;
exports.ids = [8252,2858,8817,150,1344];
exports.modules = {

/***/ 5136:
/***/ ((module) => {

// Exports
module.exports = {
	"payment_details": "styles_payment_details__GDSMJ",
	"header": "styles_header__F_hCB",
	"header_top_title": "styles_header_top_title__fxm3N",
	"header_top_subtitle": "styles_header_top_subtitle__RYrK9",
	"header_tot_price": "styles_header_tot_price__3kiYK",
	"header_tot_price_text": "styles_header_tot_price_text__yZZMW",
	"header_tot_price_price": "styles_header_tot_price_price__bX065",
	"payment_list": "styles_payment_list__8ZFal",
	"iframe": "styles_iframe__33ktR",
	"items_buttons": "styles_items_buttons__NMp_T",
	"item": "styles_item__CdBSz",
	"item_1": "styles_item_1__LSx8i",
	"item_2": "styles_item_2__gVK2Z",
	"item_3": "styles_item_3__Gwhet",
	"item_4": "styles_item_4__4dddm",
	"modal": "styles_modal__y1JSK",
	"zoomout": "styles_zoomout__i2hZ_",
	"modal_container": "styles_modal_container__LIkng",
	"button_div": "styles_button_div__KMlwT"
};


/***/ }),

/***/ 9732:
/***/ ((module) => {

// Exports
module.exports = {
	"payment_section": "styles_payment_section__9ClYt",
	"section": "styles_section__U3nf_",
	"payment_container": "styles_payment_container__Cs6l4",
	"passenger_details": "styles_passenger_details__uqXZb",
	"payment_details_header": "styles_payment_details_header__N_DGi"
};


/***/ }),

/***/ 7319:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ payment),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/components/layouts/Layout/index.js + 10 modules
var Layout = __webpack_require__(2246);
// EXTERNAL MODULE: ./src/pages/payment/styles.module.scss
var styles_module = __webpack_require__(9732);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
// EXTERNAL MODULE: ./src/store/pickUpDropOffReducer/pickUpDropSelectors.js
var pickUpDropSelectors = __webpack_require__(5789);
// EXTERNAL MODULE: ./src/pages/payment/ReservDetail/ReservDetail.js
var ReservDetail = __webpack_require__(9811);
// EXTERNAL MODULE: ./src/components/elements/PaymentDetails/styles.module.scss
var PaymentDetails_styles_module = __webpack_require__(5136);
var PaymentDetails_styles_module_default = /*#__PURE__*/__webpack_require__.n(PaymentDetails_styles_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/store/pickUpDropOffReducer/pickUpDropAction.js
var pickUpDropAction = __webpack_require__(3570);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./src/components/elements/PaymentDetails/index.js








const PaymentDetail = (props)=>{
    let { setConfirmation , env  } = props;
    const dispatch = (0,external_react_redux_.useDispatch)();
    const router = (0,router_.useRouter)();
    const trQuot = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectedTransferQuot */.uU);
    const trEmail = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* transferPassengerEmail */.dC);
    const trPhone = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* transferPassengerPhone */.wz);
    const selectedArchieveToken = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectArchieveToken */.jc);
    const returnQuot = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectedReturnQuot */.CS);
    const journeyType = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectedJourneyType */.D0);
    const { paymentTypes , reservations , cookies  } = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectPickUpDropOffReducer */.X7);
    const { 0: dataTokenForWebSocket , 1: setDataTokenForWebSocket  } = (0,external_react_.useState)("");
    const { 0: iframeStripe , 1: setIframeStripe  } = (0,external_react_.useState)("");
    const { 0: statusToken , 1: setStatusToken  } = (0,external_react_.useState)("");
    const { 0: popUpWindow , 1: setPopUpWindow  } = (0,external_react_.useState)("") //for paypal
    ;
    const popUpWindowRef = (0,external_react_.useRef)(null); // 👈 popup referansı için
    const fetchArchieveToken = async (params = {})=>{
        let { token , paymentType , stage  } = params;
        let reservationObj = [
            reservations[0]
        ];
        if (reservations[0].selectedPickupPoints.length === 1 && reservations[1].selectedDropoffPoints.length === 1) {
            reservationObj = reservations;
        }
        if (reservationObj.length > 1) {
            reservationObj = [
                {
                    ...reservationObj[0],
                    paymentDetails: {
                        ...reservationObj[0].paymentDetails,
                        token: token,
                        paymentType: paymentType
                    }
                },
                {
                    ...reservationObj[1],
                    paymentDetails: {
                        ...reservationObj[1].paymentDetails,
                        token: token,
                        paymentType: paymentType
                    }
                }
            ];
        } else {
            reservationObj = [
                {
                    ...reservationObj[0],
                    paymentDetails: {
                        ...reservationObj[0].paymentDetails,
                        token: token,
                        paymentType: paymentType
                    }
                }, 
            ];
        }
        let url = `${env.apiDomain}/api/v1/sessions/add`;
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                token: selectedArchieveToken,
                details: reservationObj,
                stage
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        console.log({
            data,
            reservationObj,
            stage
        });
    };
    //sadece paypal icin bunu saxladim
    const openPopUpWindow = (params = {})=>{
        let { statusOfWindowCloseOrOpen , url  } = params;
        // if (statusOfWindowCloseOrOpen === 'open') {
        //   let windowOptions = `menubar=no,location=yes,toolbar=no,left=${window.screen.width / 2 - 550 / 2},width=550,height=800`;
        //   let willPopUp
        //   willPopUp = window?.open(url, "_blank", windowOptions);
        //   setPopUpWindow(willPopUp)
        // }
        // if (statusOfWindowCloseOrOpen === 'close') {
        //   if (popUpWindow) {
        //     popUpWindow?.close();
        //   }
        //   setPopUpWindow("")
        // }
        if (statusOfWindowCloseOrOpen === "open") {
            let windowOptions = `menubar=no,location=yes,toolbar=no,left=${window.screen.width / 2 - 550 / 2},width=550,height=800`;
            let willPopUp = window === null || window === void 0 ? void 0 : window.open(url, "_blank", windowOptions);
            setPopUpWindow(willPopUp);
            popUpWindowRef.current = willPopUp; // 👈 ref de güncellensin
        }
        if (statusOfWindowCloseOrOpen === "close") {
            if (popUpWindowRef.current) {
                var ref;
                (ref = popUpWindowRef.current) === null || ref === void 0 ? void 0 : ref.close(); // 👈 garanti kapatma
                popUpWindowRef.current = null;
            }
            setPopUpWindow("");
        }
    };
    //*payment methods
    const cashMethod = (params = {})=>{
        let { token , paymentType  } = params;
        fetchArchieveToken({
            token: "",
            paymentType: "",
            stage: "CLICK_OVER_CASH_BUTTON"
        });
        setIframeStripe("");
        dispatch((0,pickUpDropAction/* setPayment */.tl)(1, "", router));
        openPopUpWindow({
            statusOfWindowCloseOrOpen: "close",
            url: ""
        });
        setPopUpWindow("");
    };
    const stripeMethod = (params = {})=>{
        let { id , quotations , passengerEmail , url  } = params;
        if (!iframeStripe) {
            // if it is card payment you have set payment type first of all then send archive then
            fetchArchieveToken({
                token: "",
                paymentType: 7,
                stage: "CLICK_OVER_CARD_BUTTON"
            });
            const method = "POST";
            const body = JSON.stringify({
                quotations,
                type: id,
                language: "en",
                passengerEmail,
                "session-id": cookies.sessionToken
            });
            const headers = {
                "Content-Type": "application/json"
            };
            const config = {
                method,
                headers,
                body
            };
            try {
                fetch(url, config).then((res)=>res.json()).then((data)=>{
                    setDataTokenForWebSocket(data); //we use inside interval in order to detect it is which payment
                    setStatusToken(data === null || data === void 0 ? void 0 : data.webSocketToken); //it will trigger interval and will make request
                    setIframeStripe(data === null || data === void 0 ? void 0 : data.href);
                    openPopUpWindow({
                        statusOfWindowCloseOrOpen: "close",
                        url: ""
                    });
                    setPopUpWindow("");
                }).catch((error)=>{
                    console.log(error);
                    window.handelErrorLogs(error, "HGT PaymentMethods Component - stripeMethod function fetching catch blog  ", {
                        config,
                        url
                    });
                });
            } catch (error) {
                console.log(error);
                window.handelErrorLogs(error, " HGT PaymentMethods Component - stripeMethod function try catch blog ", {
                    id,
                    quotations,
                    passengerEmail,
                    url
                });
            }
        }
    };
    const paypalMethod = (params = {})=>{
        let { id , quotations , passengerEmail , url  } = params;
        // if it is card payment you have set payment type first of all then send archive then
        fetchArchieveToken({
            token: "",
            paymentType: 5,
            stage: "CLICK_OVER_CARD_BUTTON"
        });
        const method = "POST";
        const headers = {
            "Content-Type": "application/json"
        };
        const body = JSON.stringify({
            quotations,
            type: id,
            language: "en",
            passengerEmail,
            "session-id": cookies.sessionToken,
            mode: "sandbox"
        });
        const config = {
            method,
            headers,
            body
        };
        try {
            if (!popUpWindow) {
                // 1️⃣ Açılır pencereyi hemen oluştur, ancak içeriği yükleme!
                let tempPopup = window.open("about:blank", "_blank", "width=550,height=800");
                // Eğer popup açılamadıysa hata mesajı ver
                if (!tempPopup) {
                    alert("Popup blocked! Please check your browser settings.");
                    return;
                }
                // 2️⃣ Popup içine bilgilendirici bir mesaj yaz
                tempPopup.document.write(`
        <html>
          <head><title>PayPal</title></head>
          <body style="text-align:center; padding:50px;">
            <h3>"Loading the payment page...</h3>
            <p>Please wait a few seconds.</p>
          </body>
        </html>
      `);
                tempPopup.document.close();
                fetch(url, config).then((res)=>res.json()).then((data)=>{
                    console.log({
                        data
                    });
                    setConfirmation(false);
                    setIframeStripe("") //CLOSE OFRAME INSIDE OF Page (in case of if it was opened )
                    ;
                    setDataTokenForWebSocket(data); //we use inside interval in order to detect it is which payment
                    setStatusToken(data.webSocketToken); //it will trigger interval and will make request
                    // 4️⃣ Fetch tamamlandığında, popup'ı asıl URL'ye yönlendir
                    tempPopup.location.href = data.href;
                    setPopUpWindow(tempPopup);
                }).catch((error)=>{
                    tempPopup.close(); // Hata olursa popup'ı kapat
                    window.handelErrorLogs(error, "HGT PaymentMethods Component - paypalMethod function fetching catch blog  ", {
                        config,
                        url
                    });
                });
            }
        } catch (error) {
            window.handelErrorLogs(error, " HGT PaymentMethods Component - paypalMethod function try catch blog ", {
                id,
                quotations,
                passengerEmail,
                url
            });
        }
    };
    //this function includes all the methods of payments
    const startPayment = (id)=>{
        setConfirmation(false);
        try {
            //general settings FOR PAYMENTS
            const paymentPagePath = JSON.parse(paymentTypes.filter((payment)=>payment.id === id)[0].pagePath).path;
            const url = `${env.apiDomain}${paymentPagePath}`;
            let quotations = parseInt(journeyType) === 0 ? [
                reservations[0].quotation
            ] : [
                reservations[0].quotation,
                reservations[1].quotation
            ];
            let passengerEmail = reservations[0].passengerDetails.email;
            console.log({
                passengerEmail
            });
            //Payment methods
            if (id === 1) cashMethod({
                token: "",
                paymentType: id
            });
            if (id === 5) paypalMethod({
                id,
                quotations,
                passengerEmail,
                url
            });
            if (id === 7) stripeMethod({
                id,
                quotations,
                passengerEmail,
                url
            });
        } catch (error) {
            window.handelErrorLogs(error, "HGT PaymentMethods Component -startPayment function trys catch blog", {
                id
            });
        }
    };
    //this is checking up interval for each second (payment suces or not)
    (0,external_react_.useEffect)(()=>{
        let interVal;
        if (statusToken) {
            interVal = setInterval(async ()=>{
                const method = "POST";
                const headers = {
                    "Content-Type": "application/json"
                };
                const body = JSON.stringify({
                    token: statusToken
                });
                const url = `${env.apiDomain}/api/v1/payment/status`;
                let config = {
                    method,
                    headers,
                    body
                };
                try {
                    let requ = await fetch(url, config);
                    let resp = await requ.json();
                    // console.log(resp);
                    // console.log({ popUpWindow ,dataTokenForWebSocket});
                    if ((resp === null || resp === void 0 ? void 0 : resp.status) === 200) {
                        var ref, ref1;
                        //after you get a success payment status and after set a token into paymentDEtails object then send archive
                        window.scroll({
                            top: 0,
                            left: 0,
                            behavior: "smooth"
                        });
                        openPopUpWindow({
                            statusOfWindowCloseOrOpen: "close",
                            url: ""
                        });
                        setStatusToken("");
                        if (popUpWindow) {
                            popUpWindow === null || popUpWindow === void 0 ? void 0 : popUpWindow.close();
                        }
                        if (dataTokenForWebSocket === null || dataTokenForWebSocket === void 0 ? void 0 : (ref = dataTokenForWebSocket.href) === null || ref === void 0 ? void 0 : ref.includes("stripe")) {
                            fetchArchieveToken({
                                token: resp.data.token,
                                paymentType: 7,
                                stage: "GET_SUCCESS_CARD_PAYMENT"
                            });
                            setIframeStripe("");
                            setStatusToken("");
                            dispatch((0,pickUpDropAction/* setPayment */.tl)(7, resp.data.token, router));
                        }
                        if (dataTokenForWebSocket === null || dataTokenForWebSocket === void 0 ? void 0 : (ref1 = dataTokenForWebSocket.href) === null || ref1 === void 0 ? void 0 : ref1.includes("paypal")) {
                            fetchArchieveToken({
                                token: resp.data.token,
                                paymentType: 5,
                                stage: "GET_SUCCESS_CARD_PAYMENT"
                            });
                            dispatch((0,pickUpDropAction/* setPayment */.tl)(5, resp.data.token, router));
                        }
                        clearInterval(interVal);
                    }
                } catch (error) {
                    let message = "hgt  PaymentMethods Component - useEffect statusToken catch blog  ";
                    window.handelErrorLogs(error, message, {
                        config
                    });
                }
            }, 2000);
        }
        return ()=>clearInterval(interVal);
    }, [
        statusToken,
        popUpWindow
    ]);
    (0,external_react_.useEffect)(()=>{
        const interval = setInterval(()=>{
            // 👇 ref ile çalış, state değil
            if (popUpWindowRef.current && popUpWindowRef.current.closed) {
                console.log("\uD83E\uDE9F PayPal window closed");
                setStatusToken("");
                setPopUpWindow("");
                popUpWindowRef.current = null;
                clearInterval(interval);
            }
        }, 1000);
        return ()=>clearInterval(interval);
    }, []); // 👈 dependency kaldırıldı, tek sefer kurulsun
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `${(PaymentDetails_styles_module_default()).payment_details}`,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (PaymentDetails_styles_module_default()).header,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (PaymentDetails_styles_module_default()).header_top,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: (PaymentDetails_styles_module_default()).header_top_title,
                                    children: "How would you like to pay ?"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/terms",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        target: "_blank",
                                        className: (PaymentDetails_styles_module_default()).header_top_subtitle,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fa-solid fa-check"
                                            }),
                                            "By proceeding, you agree to our",
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "terms and conditions"
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (PaymentDetails_styles_module_default()).header_tot_price,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: (PaymentDetails_styles_module_default()).header_tot_price_text,
                                    children: "Total Price"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    className: (PaymentDetails_styles_module_default()).header_tot_price_price,
                                    children: [
                                        "\xa3",
                                        (trQuot === null || trQuot === void 0 ? void 0 : trQuot.price) && (returnQuot === null || returnQuot === void 0 ? void 0 : returnQuot.price) ? Number(trQuot === null || trQuot === void 0 ? void 0 : trQuot.price) + Number(returnQuot === null || returnQuot === void 0 ? void 0 : returnQuot.price) : Number(trQuot === null || trQuot === void 0 ? void 0 : trQuot.price) || 100
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (PaymentDetails_styles_module_default()).payment_list,
                    children: [
                        (iframeStripe === null || iframeStripe === void 0 ? void 0 : iframeStripe.length) > 0 ? /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                            src: iframeStripe,
                            className: (PaymentDetails_styles_module_default()).iframe,
                            frameBorder: "0",
                            allow: "payment"
                        }) : /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {}),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: `${(PaymentDetails_styles_module_default()).items_buttons}`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    title: "Pay with Cash to Driver",
                                    className: ` ${(PaymentDetails_styles_module_default()).item} ${(PaymentDetails_styles_module_default()).item_1}`,
                                    onClick: ()=>startPayment(1),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Pay With Cash  To The Driver "
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/images/pp.jpg",
                                            alt: ""
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: `${(PaymentDetails_styles_module_default()).item} ${(PaymentDetails_styles_module_default()).item_2} `,
                                    onClick: ()=>startPayment(5),
                                    title: "Pay with Paypal",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Pay by Paypal"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/images/paypal.png",
                                            alt: ""
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    title: "Pay with Stripe",
                                    className: `${(PaymentDetails_styles_module_default()).item} ${(PaymentDetails_styles_module_default()).item_4}`,
                                    onClick: ()=>startPayment(7),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Pay by Card "
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/images/vsMaster.jpg",
                                            alt: ""
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const PaymentDetails = (PaymentDetail);

// EXTERNAL MODULE: ./src/store/pickUpDropOffReducer/pickUpDropTypes.js
var pickUpDropTypes = __webpack_require__(8348);
;// CONCATENATED MODULE: ./src/pages/payment/index.js










const Payment = (props)=>{
    let { env  } = props;
    const { reservations  } = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectPickUpDropOffReducer */.X7);
    const selectedPickUpPointsTr = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* PickUpPointsOneWayCopy */.l3);
    const selectedDropPointsTr = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* DroopOffPointsOneWayCopy */.eI);
    const selectedQuotTransfer = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectedTransferQuot */.uU);
    const trDateTime = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* transferDateTimeString */.Vo);
    const { 0: confirmation , 1: setConfirmation  } = (0,external_react_.useState)(true);
    //*inputs 0
    const fullnameTransfer = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* transferPassengerFullName */.bp);
    const emailTransfer = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* transferPassengerEmail */.dC);
    const phoneTranfer = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* transferPassengerPhone */.wz);
    const selectPaxTransfer = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* paxTransfer */.Dp);
    const specialRequestTransfer = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* commentTransfer */.NF);
    const dispatch = (0,external_react_redux_.useDispatch)();
    //*inputs1
    const fullNameReturn = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* returnPassengerFullName */.Kt);
    const emailReturn = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* returnPassengerEmail */.ZW);
    const phoneReturn = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* returnPassengerPhone */.o2);
    //error flight ucun sadece ikiterefdede pcikup'i ilgilendirir
    const slectPickUpPointsReturn = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* PickUpPointsReturnCopy */.h_);
    const selectDropOffPointsReturn = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* DropOffPointsReturnCopy */.z8);
    const selectSelectedReturnQuot = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectedReturnQuot */.CS);
    const returnDate = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* returnDateTimeString */.Cg);
    const selectPaxReturn = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* paxReturn */.UE);
    const specialRequestReturn = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* commentReturn */.K6);
    const checked = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectCHheckedInput */.On);
    const selectedArchieveToken = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectArchieveToken */.jc);
    const journeyTypee = (0,external_react_redux_.useSelector)(pickUpDropSelectors/* selectedJourneyType */.D0);
    //1 passenger landing payment page We need archieveToken
    const fetchArchieveToken = async (params = {})=>{
        let { stage ,  } = params;
        let reservationObj = [
            reservations[0]
        ];
        if (reservations[0].selectedPickupPoints.length === 1 && reservations[1].selectedDropoffPoints.length === 1) {
            reservationObj = reservations;
        }
        let url = `${env.apiDomain}/api/v1/sessions/add`;
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                token: selectedArchieveToken,
                details: reservationObj,
                stage
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        console.log({
            data,
            reservationObj,
            stage
        });
    };
    const getmettingPoint = (par)=>{
        const url = `${env.apiDomain}/api/v1/drivers/meet-point`;
        let reqOptions = {
            method: "POST",
            body: JSON.stringify({
                point: reservations[0].selectedPickupPoints[0]
            }),
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        };
        fetch(url, reqOptions).then((res)=>res.json()).then((data)=>{
            dispatch({
                type: pickUpDropTypes/* GET_MEET_POINT */.DR,
                payload: data.data["meet-point"]
            });
        }).catch((error)=>{
            console.log(error);
        });
    };
    (0,external_react_.useEffect)(()=>{
        //passenger landing payment page We need archieveToken
        fetchArchieveToken({
            stage: "LANDED_INTO_PAYMENT_PAGE"
        });
        getmettingPoint();
        window.scroll({
            top: 48,
            left: 0,
            behavior: "smooth"
        });
        dispatch({
            type: "CHECK_JOURNEY_TYPE",
            payload: selectedDropPointsTr.length >= 1 && slectPickUpPointsReturn.length >= 1 ? 1 : 0
        });
    }, []);
    // prompt the user if they try and leave with unsaved changes
    (0,external_react_.useEffect)(()=>{
        let previousUrl = "/transfer-details";
        let nextUrl = "/reservations-document";
        const confirmationMessage = "If you leave the page, all data will be deleted.";
        const beforeUnloadHandler = async (e)=>{
            //when we click to close browser
            setTimeout(()=>{
                fetchArchieveToken({
                    stage: "PLAN_TO_CLOSE_PAYMENT_PAGE"
                });
            }, 10);
            // /in case if it is cancelled
            if (window.event.cancelable) {
                setTimeout(()=>{
                    fetchArchieveToken({
                        stage: "PAYMENT_PAGE_NOT_CLOSED"
                    });
                }, 450);
            }
            if (confirmation) {
                (e || window.event).returnValue = confirmationMessage;
                return confirmationMessage;
            }
        };
        // burasi bizim hangi sayfaya gecdigimizi soyler  (tiklayinca)
        const beforeRouteHandler = (url)=>{
            if (confirmation) {
                if (url === nextUrl || url === previousUrl) {
                    setConfirmation(false);
                    return;
                } else {
                    setConfirmation(true);
                }
                if ((router_default()).pathname !== url && !confirm(confirmationMessage)) {
                    router_default().events.emit("routeChangeError");
                    throw `Route change to "${url}" was aborted (this error can be safely ignored). See https://github.com/zeit/next.js/issues/2476.`;
                }
            }
        };
        const handleEndConcert = async ()=>{
            const headers = new Headers();
            headers.append("Content-Type", "application/json");
            const method = "POST";
            const reservationObj = reservations;
            const url = `${env.apiDomain}/api/v1/sessions/add`;
            const body = JSON.stringify({
                token: selectedArchieveToken,
                details: reservationObj,
                stage: "PAYMENT_PAGE_IS_CLOSED"
            });
            const response = await fetch(url, {
                method,
                body,
                headers,
                keepalive: true
            });
            const data = await response.json();
            console.log({
                data
            });
        };
        window.addEventListener("beforeunload", beforeUnloadHandler);
        window.addEventListener("unload", handleEndConcert);
        router_default().events.on("routeChangeStart", beforeRouteHandler);
        return ()=>{
            window.removeEventListener("beforeunload", beforeUnloadHandler);
            window.removeEventListener("unload", handleEndConcert);
            router_default().events.off("routeChangeStart", beforeRouteHandler);
        };
    }, [
        confirmation
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
        title: "Step 3 | Payment",
        keywords: "Step 3 | Payment",
        description: "Step 3 | Payment",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (styles_module_default()).payment_section,
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (styles_module_default()).section,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (styles_module_default()).payment_container,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (styles_module_default()).passenger_details,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (styles_module_default()).payment_details_header,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        children: " Journey Details"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(ReservDetail["default"], {
                                    date: trDateTime,
                                    quot: selectedQuotTransfer,
                                    pickUps: selectedPickUpPointsTr,
                                    drops: selectedDropPointsTr,
                                    fullName: fullnameTransfer,
                                    email: emailTransfer,
                                    phone: phoneTranfer,
                                    passengers: selectPaxTransfer,
                                    specialRequest: specialRequestTransfer,
                                    env: env
                                })
                            ]
                        }),
                        selectSelectedReturnQuot && slectPickUpPointsReturn.length > 0 && selectDropOffPointsReturn.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (styles_module_default()).passenger_details,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (styles_module_default()).payment_details_header,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        children: "Return Details"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(ReservDetail["default"], {
                                    date: returnDate,
                                    quot: selectSelectedReturnQuot,
                                    pickUps: slectPickUpPointsReturn,
                                    drops: selectDropOffPointsReturn,
                                    fullName: checked ? fullnameTransfer : fullNameReturn,
                                    email: checked ? emailTransfer : emailReturn,
                                    phone: checked ? phoneTranfer : phoneReturn,
                                    passengers: checked ? selectPaxTransfer : selectPaxReturn,
                                    specialRequest: specialRequestReturn,
                                    env: env
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(PaymentDetails, {
                            setConfirmation: setConfirmation,
                            env: env
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const payment = (Payment);
async function getServerSideProps({ req , res  }) {
    if (req.url === "/payment") {
        return {
            redirect: {
                destination: `/`,
                permanent: false
            }
        };
    }
    return {
        props: {
            data: ""
        }
    };
} // const getmettingPoint = (par) => {
 //   const url = "https://api.london-tech.com/api/v1/drivers/meet-point";
 //   let reqOptions = {
 //     method: "POST",
 //     body: JSON.stringify({
 //       point: reservations[0].selectedPickupPoints[0],
 //     }),
 //   headers: {
 //     Accept: "application/json, text/plain, */*",
 //     "Content-Type": "application/json",
 //   },
 // };
 // fetch(url, reqOptions)
 //   .then((res) => res.json())
 //   .then((data) => {
 // console.log(data.data["meet-point"]);
 //       dispatch({ type: GET_MEET_POINT, payload: data.data["meet-point"] });
 //     })
 //     .catch((error) => {
 //       console.log(error);
 //     });
 // };


/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9646:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6377,5675,699,676,1664,2246,5789,9858,3570,7165,8333,5736,9811], () => (__webpack_exec__(7319)));
module.exports = __webpack_exports__;

})();