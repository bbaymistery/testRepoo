(() => {
var exports = {};
exports.id = 3527;
exports.ids = [3527,2197,9319,4557,5026,5126,6103];
exports.modules = {

/***/ 9259:
/***/ ((module) => {

// Exports
module.exports = {
	"accountRegister": "styles_accountRegister__xa2vT",
	"accountRegister_section_container": "styles_accountRegister_section_container__VLds5",
	"accountRegister_content": "styles_accountRegister_content__69xLo",
	"accountRegister_content_left": "styles_accountRegister_content_left__2QRTc",
	"details_div": "styles_details_div__lnSfS",
	"recaptcha": "styles_recaptcha__EsTof",
	"amount_credit_title": "styles_amount_credit_title__0m7On",
	"input_note": "styles_input_note___fWSj",
	"details": "styles_details__JxaWE",
	"input_div": "styles_input_div__06oj2",
	"last_input_item": "styles_last_input_item__FLW4M",
	"operation_details": "styles_operation_details__yAysW",
	"the_checkbox_div": "styles_the_checkbox_div__WrYsj",
	"radio_input_content": "styles_radio_input_content__jnrkK",
	"emergency_div": "styles_emergency_div__ZBqaO",
	"btn_div": "styles_btn_div__YSXNY",
	"accountRegister_content_registration_right": "styles_accountRegister_content_registration_right__udGfB",
	"image_div": "styles_image_div__tP31U"
};


/***/ }),

/***/ 777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_AccountRegister)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/pages/AccountRegister/styles.module.scss
var styles_module = __webpack_require__(9259);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
// EXTERNAL MODULE: ./src/components/layouts/GlobalLayout/index.js + 12 modules
var GlobalLayout = __webpack_require__(5277);
// EXTERNAL MODULE: ./src/components/elements/TextInput/index.js
var TextInput = __webpack_require__(6);
// EXTERNAL MODULE: external "react-phone-input-2"
var external_react_phone_input_2_ = __webpack_require__(5452);
var external_react_phone_input_2_default = /*#__PURE__*/__webpack_require__.n(external_react_phone_input_2_);
// EXTERNAL MODULE: ./node_modules/react-phone-input-2/lib/style.css
var style = __webpack_require__(4463);
// EXTERNAL MODULE: ./src/components/elements/Textarea/index.js
var Textarea = __webpack_require__(8307);
;// CONCATENATED MODULE: ./src/helpers/accountRegisterSchemaValidator.js
/**
 * Validates the account registration schema and returns an error holder with error messages, if any.
 *
 * @param {Object} params - The parameters to be validated.
 * @param {Object} [options] - Optional settings for the validation.
 * @returns {Object} An error holder with error messages, if any.
 */ function accountRegisterSchemaValidator(params = {}, options = {}) {
    let { accountRegisterDatas  } = params;
    // Define an error holder object with initial status 200 and empty error messages
    let errorHolder = {
        status: 200,
        accountRegisterDatas: {
            applicantForCreditAccount: {
                companyName: "",
                natureOfBusiness: "",
                address: "",
                registrationNo: ""
            },
            contactDetails: {
                contactName: "",
                jobTitle: "",
                email: "",
                telephoneNo: ""
            },
            operationNotes: {
                urgentSituationStatus: "",
                accountPassengerStatus: "",
                anyOtherOperationComments: "",
                urgentSituationNumber: ""
            }
        }
    };
    // Loop through each key in the accountRegisterDatas object
    for(let key in accountRegisterDatas){
        // Check if the key is "contactDetails"
        // else
        if (key === "contactDetails") {
            // If yes, loop through each key in the contactDetails object
            for(let contactKey in accountRegisterDatas.contactDetails){
                // Check if the key is "email"
                if (contactKey === "email") {
                    // If yes, check if the email value is empty or invalid
                    if (!accountRegisterDatas.contactDetails.email) {
                        // If empty, set the error status to 400 and add a "required" message to the error holder
                        errorHolder.status = 400;
                        errorHolder.accountRegisterDatas.contactDetails.email = "required";
                    } else if (!validateEmail(accountRegisterDatas.contactDetails.email)) {
                        // If invalid, set the error status to 400 and add an "invalid email address" message to the error holder
                        errorHolder.status = 400;
                        errorHolder.accountRegisterDatas.contactDetails.email = "required";
                    }
                } else {
                    // For all other keys in the contactDetails object, check if the value is empty
                    if (!accountRegisterDatas.contactDetails[contactKey]) {
                        // If empty, set the error status to 400 and add a "required" message to the error holder
                        errorHolder.status = 400;
                        errorHolder.accountRegisterDatas.contactDetails[contactKey] = "required";
                    }
                }
            }
        } else if (key === "operationNotes") {
            for(let operationNoteKey in accountRegisterDatas.operationNotes){
                if (operationNoteKey === "urgentSituationStatus" && accountRegisterDatas.operationNotes.urgentSituationStatus === "Yes" && !accountRegisterDatas.operationNotes["urgentSituationNumber"]) {
                    errorHolder.status = 400;
                    errorHolder.accountRegisterDatas.operationNotes["urgentSituationNumber"] = "required";
                } else if (operationNoteKey === "urgentSituationStatus" && accountRegisterDatas.operationNotes.urgentSituationStatus === "No") {
                    errorHolder.accountRegisterDatas.operationNotes["urgentSituationNumber"] = "";
                }
                if (operationNoteKey !== "urgentSituationNumber") {
                    if (!accountRegisterDatas.operationNotes[operationNoteKey]) {
                        errorHolder.status = 400;
                        errorHolder.accountRegisterDatas.operationNotes[operationNoteKey] = "required";
                    }
                }
            }
        } else {
            // For all other keys in the accountRegisterDatas object (i.e. applicantForCreditAccount), loop through each key
            for(let applicantKey in accountRegisterDatas.applicantForCreditAccount){
                // Check if the key is not "registrationNo"
                if (applicantKey !== "registrationNo") {
                    // If yes, check if the value is empty
                    if (!accountRegisterDatas.applicantForCreditAccount[applicantKey]) {
                        // If empty, set the error status to 400 and add a "required" message to the error holder
                        errorHolder.status = 400;
                        errorHolder.accountRegisterDatas.applicantForCreditAccount[applicantKey] = "required";
                    }
                }
            }
        }
    }
    return errorHolder;
}
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
} // export const validRegister = (userRegister) => {
 //     const { name, account, password, cf_password } = userRegister;
 //     const errors = [];
 //     if (!name) {
 //         errors.push("Please add your name.")
 //     } else if (name.length > 20) {
 //         errors.push("Your name is up to 20 chars long.")
 //     }
 //     if (!account) {
 //         errors.push("Please add your email or phone number.")
 //     } else if (!validPhone(account) && !validateEmail(account)) {
 //         errors.push("Email or phone number format is incorrect.")
 //     }
 //     if (password.length < 6) {
 //         errors.push("Password must be at least 6 chars.")
 //     } else if (password !== cf_password) {
 //         errors.push("Confirm password did not match.")
 //     }
 //     return {
 //         errMsg: errors,
 //         errLength: errors.length
 //     }
 // }
 // export function validPhone(phone) {
 //     const re = /^[+]/g
 //     return re.test(phone)
 // }

// EXTERNAL MODULE: ./src/components/elements/AdressInformations/index.js
var AdressInformations = __webpack_require__(1684);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/hooks/useRipple.js + 1 modules
var useRipple = __webpack_require__(2733);
;// CONCATENATED MODULE: ./src/components/elements/Recaptcha/index.js


class Recaptcha extends (external_react_default()).PureComponent {
    constructor(props){
        super(props);
        this.state = {
            token: "",
            "id": this.props.id || "reCaptchaReactElement"
        };
    }
    componentDidMount() {
        let isNotExist = Array.from(document.querySelectorAll('script[src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"]')).length === 0;
        if (isNotExist) {
            let script = document.createElement("script");
            script.src = "https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit";
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
            console.log("recaptcha is added");
        } else {
            console.log("recaptcha is aleady exist");
        }
        //
        window.onloadCallback = this.onRecaptchaLoaded.bind(this);
    }
    onRecaptchaLoaded() {
        console.log("recaptcha loaded");
        if (window.grecaptcha) {
            window.grecaptcha.render(this.state.id, {
                "sitekey": "6LeyyN0nAAAAAAQXdwzodg-616QyLDHYIBwlHeCI",
                "callback": (token)=>this.verifyCallback(token) //this.verifyCallback.bind(this),
            });
        }
    }
    reset() {
        console.log("reset");
        window.grecaptcha.reset();
    }
    verifyCallback(token) {
        console.log({
            token
        });
        if (typeof this.props.onVerify === "function") {
            this.props.onVerify(token);
        }
    }
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            id: this.state.id
        });
    }
}
/* harmony default export */ const elements_Recaptcha = (Recaptcha);

// EXTERNAL MODULE: ./src/components/elements/alert/Loading.js
var Loading = __webpack_require__(7317);
// EXTERNAL MODULE: ./src/resources/env.js
var env = __webpack_require__(4603);
;// CONCATENATED MODULE: ./src/pages/AccountRegister/index.js
















let description = "Airport Pickups London agency registration form";
let title = "APPLICATION FOR CREDIT ACCOUNT";
let keywords = "";
const AccountRegister = (props)=>{
    let { bggray  } = props;
    const router = (0,router_.useRouter)();
    const dispatch = (0,external_react_redux_.useDispatch)();
    const [recaptchaToken, setRecapthcaToken] = (0,external_react_.useState)(null);
    const [showRecapthaComponent, setshowRecapthaComponent] = (0,external_react_.useState)(false);
    const [loadingFetch, setLoadingFetch] = (0,external_react_.useState)(false);
    const state = (0,external_react_redux_.useSelector)((state)=>state.pickUpDropOffActions);
    let { params: { direction , language  }  } = state;
    const { appData  } = (0,external_react_redux_.useSelector)((state)=>state.initialReducer);
    const { accountRegisterDatas  } = (0,external_react_redux_.useSelector)((state)=>state.accountRegisterActions);
    let { applicantForCreditAccount , contactDetails , operationNotes  } = accountRegisterDatas;
    let { contactName , jobTitle , email , telephoneNo  } = contactDetails;
    let { companyName , natureOfBusiness , address , registrationNo  } = applicantForCreditAccount;
    let { urgentSituationStatus , accountPassengerStatus , anyOtherOperationComments , urgentSituationNumber  } = operationNotes;
    let [internalState, setInternalState] = external_react_default().useReducer((s, o)=>({
            ...s,
            ...o
        }), {
        "errorHolder": []
    });
    let { errorHolder  } = internalState;
    //companyTel:creditAccountNumber   =>olarak destrctur et
    //telephoneNo:contactDetailsTelephone=>
    const onchangeHandler = (e)=>{
        let { name , value , type , checked  } = e.target;
        if ([
            "contactName",
            "jobTitle",
            "email"
        ].includes(name)) dispatch({
            type: "SET_CONTACT_DETAILS",
            data: {
                name,
                value
            }
        });
        if ([
            "companyName",
            "natureOfBusiness",
            "address",
            "registrationNo"
        ].includes(name)) dispatch({
            type: "SET_APPLICANT_FOR_CREADIT_DETAILS",
            data: {
                name,
                value
            }
        });
        //in case if it is radio button
        if ([
            "accountPassengerStatus",
            "urgentSituationStatus",
            "anyOtherOperationComments"
        ].includes(name)) dispatch({
            type: "SET_OPERATION_NOTES",
            data: {
                name,
                value
            }
        });
    };
    const handleOnChangeNumberInput = (params = {})=>{
        let { value , name  } = params;
        if ([
            "telephoneNo"
        ].includes(name)) dispatch({
            type: "SET_CONTACT_DETAILS",
            data: {
                name,
                value
            }
        });
        if ([
            "companyTel"
        ].includes(name)) dispatch({
            type: "SET_APPLICANT_FOR_CREADIT_DETAILS",
            data: {
                name,
                value
            }
        });
        if ([
            "urgentSituationNumber"
        ].includes(name)) dispatch({
            type: "SET_OPERATION_NOTES",
            data: {
                name: "urgentSituationNumber",
                value
            }
        });
    };
    const gotoNextPage = ()=>{
        let errorHolder = accountRegisterSchemaValidator({
            accountRegisterDatas
        });
        setInternalState({
            errorHolder
        });
        if (errorHolder.status === 200) setshowRecapthaComponent(true);
    };
    // Update the token state when the verification is successful
    const handleRecaptchaVerify = (newToken)=>setRecapthcaToken(newToken);
    const btnRef = (0,external_react_.useRef)(null);
    const ripples = (0,useRipple/* default */.Z)(btnRef);
    (0,external_react_.useEffect)(()=>{
        if (recaptchaToken) {
            const method = "POST";
            const headers = {
                "Content-Type": "application/json"
            };
            // const removedUrl = 'https://api.london-tech.com/api/v1/corporate-account/add?passRecaptcha=true';
            const url = `${env/* default.apiDomain */.Z.apiDomain}/api/v1/corporate-account/add?passRecaptcha=true&mode=sandbox`;
            const body = {
                "name": companyName,
                "address": address,
                "registrationNumber": registrationNo,
                "natureOfBusiness": natureOfBusiness,
                "contactName": contactName,
                "jobTitle": jobTitle,
                "contactEmail": email,
                "telephone": telephoneNo,
                "extraPaymentShouldPaidBy": accountPassengerStatus === "Account" ? 1 : 2,
                "emergencyPhoneNumber": urgentSituationNumber,
                "rules": anyOtherOperationComments,
                "recaptchaToken": recaptchaToken
            };
            const config = {
                method,
                headers,
                body: JSON.stringify(body)
            };
            setLoadingFetch(true);
            fetch(url, config).then((response)=>response.json()).then((jsonResponse)=>{
                console.log(jsonResponse); // Handle the response data as needed
                setLoadingFetch(false);
                if (jsonResponse.status === 100 || jsonResponse.status === 200) {
                    router.push(`${language === "en" ? "/AccountRegisterResults" : `${language}/AccountRegisterResults`}`);
                } else {
                    alert("Something went wrong please try again");
                }
            }).catch((error)=>{
                console.error("Error:", error);
            });
        //localStorage.setItem("recaptchaToken", JSON.stringify(recaptchaToken));
        //
        }
    }, [
        recaptchaToken
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(GlobalLayout/* default */.Z, {
        keywords: keywords,
        title: title,
        description: description,
        footerbggray: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: `${(styles_module_default()).accountRegister} ${direction} page`,
            bggray: String(bggray === "true"),
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${(styles_module_default()).accountRegister_section} page_section`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `${(styles_module_default()).accountRegister_section_container} page_section_container`,
                    children: [
                        loadingFetch ? /*#__PURE__*/ jsx_runtime_.jsx(Loading/* default */.Z, {}) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (styles_module_default()).accountRegister_content,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (styles_module_default()).accountRegister_content_left,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (styles_module_default()).details_div,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                    children: appData?.words["strApplicationForCreditAccount"]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: `${(styles_module_default()).details} ${(styles_module_default()).first_column} `,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: `${(styles_module_default()).input_div} `,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                                                type: "text",
                                                                value: companyName,
                                                                name: "companyName",
                                                                onChange: (e)=>onchangeHandler(e),
                                                                label: `${appData?.words["strCompanyName"]}/Sole Trader Name`,
                                                                labelStyle: {
                                                                    color: "#00000094",
                                                                    "fontWeight": 500,
                                                                    letterSpacing: "1px"
                                                                },
                                                                inputStyle: {
                                                                    color: "#0b0b0cd6"
                                                                },
                                                                errorMessage: errorHolder?.accountRegisterDatas?.applicantForCreditAccount?.companyName
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: `${(styles_module_default()).input_div} `,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                                                type: "text",
                                                                value: natureOfBusiness,
                                                                name: "natureOfBusiness",
                                                                onChange: (e)=>onchangeHandler(e),
                                                                label: appData?.words["strNatureOfBusiness"],
                                                                labelStyle: {
                                                                    color: "#00000094",
                                                                    "fontWeight": 500,
                                                                    letterSpacing: "1px"
                                                                },
                                                                inputStyle: {
                                                                    color: "#0b0b0cd6"
                                                                },
                                                                errorMessage: errorHolder?.accountRegisterDatas?.applicantForCreditAccount?.natureOfBusiness
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: (styles_module_default()).input_div,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                                                type: "text",
                                                                name: "address",
                                                                value: address,
                                                                onChange: (e)=>onchangeHandler(e),
                                                                label: appData?.words["strAddress"],
                                                                labelStyle: {
                                                                    color: "#00000094",
                                                                    "fontWeight": 500,
                                                                    letterSpacing: "1px"
                                                                },
                                                                inputStyle: {
                                                                    color: "#0b0b0cd6"
                                                                },
                                                                errorMessage: errorHolder?.accountRegisterDatas?.applicantForCreditAccount?.address
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: (styles_module_default()).input_div,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                                                type: "text",
                                                                name: "registrationNo",
                                                                value: registrationNo,
                                                                onChange: (e)=>onchangeHandler(e),
                                                                label: `Registration No (If Applicable)`,
                                                                labelStyle: {
                                                                    color: "#00000094",
                                                                    "fontWeight": 500,
                                                                    letterSpacing: "1px"
                                                                },
                                                                inputStyle: {
                                                                    color: "#0b0b0cd6"
                                                                }
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (styles_module_default()).details_div,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                    children: appData.words["strContactDetails"]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: `${(styles_module_default()).details} ${(styles_module_default()).second_column} `,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: (styles_module_default()).input_div,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                                                type: "text",
                                                                name: "contactName",
                                                                value: contactName,
                                                                onChange: (e)=>onchangeHandler(e),
                                                                labelStyle: {
                                                                    color: "#00000094",
                                                                    "fontWeight": 500,
                                                                    letterSpacing: "1px"
                                                                },
                                                                inputStyle: {
                                                                    color: "#0b0b0cd6"
                                                                },
                                                                label: appData?.words["panelAccountsContactName"],
                                                                errorMessage: errorHolder?.accountRegisterDatas?.contactDetails?.contactName
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: (styles_module_default()).input_div,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                                                type: "text",
                                                                name: "jobTitle",
                                                                value: jobTitle,
                                                                onChange: (e)=>onchangeHandler(e),
                                                                label: appData?.words["panelAccountsJobTitle"],
                                                                labelStyle: {
                                                                    color: "#00000094",
                                                                    "fontWeight": 500,
                                                                    letterSpacing: "1px"
                                                                },
                                                                inputStyle: {
                                                                    color: "#0b0b0cd6"
                                                                },
                                                                errorMessage: errorHolder?.accountRegisterDatas?.contactDetails?.jobTitle
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: `${(styles_module_default()).input_div} ${direction === "rtl" ? "phone_input_direction" : ""}`,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_phone_input_2_default()), {
                                                                className: `phone_input ${direction === "rtl" ? "phone_input_direction" : ""}`,
                                                                value: telephoneNo,
                                                                onChange: (value, selectedCountry)=>handleOnChangeNumberInput({
                                                                        value,
                                                                        selectedCountry,
                                                                        name: "telephoneNo"
                                                                    }),
                                                                country: "gb",
                                                                inputProps: {
                                                                    name: "telephoneNo",
                                                                    required: true,
                                                                    style: {
                                                                        border: errorHolder?.accountRegisterDatas?.contactDetails?.telephoneNo ? "1px solid red" : " 1px solid #ced4da"
                                                                    }
                                                                }
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: `${(styles_module_default()).input_div}`,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                                                type: "text",
                                                                value: email,
                                                                name: "email",
                                                                onChange: (e)=>onchangeHandler(e),
                                                                label: appData?.words["appContactUsEmailAddress"],
                                                                labelStyle: {
                                                                    color: "#00000094",
                                                                    "fontWeight": 500,
                                                                    letterSpacing: "1px"
                                                                },
                                                                inputStyle: {
                                                                    color: "#0b0b0cd6"
                                                                },
                                                                errorMessage: errorHolder?.accountRegisterDatas?.contactDetails?.email
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (styles_module_default()).details_div,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                    children: "Operation Notes"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: `${(styles_module_default()).details} ${(styles_module_default()).operation_details}`,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: `${(styles_module_default()).input_div} ${(styles_module_default()).the_checkbox_div}`,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    children: "Do you have any out-of-hours emergency number for urgent situations?"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: (styles_module_default()).radio_input_content,
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                                    onChange: (e)=>onchangeHandler(e),
                                                                                    defaultChecked: urgentSituationStatus === "Yes",
                                                                                    type: "radio",
                                                                                    id: "UrgentSituationYes",
                                                                                    name: "urgentSituationStatus",
                                                                                    value: "Yes"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                                    htmlFor: "UrgentSituationYes",
                                                                                    children: "Yes"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                                    onChange: (e)=>onchangeHandler(e),
                                                                                    defaultChecked: urgentSituationStatus === "No",
                                                                                    type: "radio",
                                                                                    id: "UrgentSituationNo",
                                                                                    name: "urgentSituationStatus",
                                                                                    value: "No"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                                    htmlFor: "UrgentSituationNo",
                                                                                    children: "No"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                urgentSituationStatus === "Yes" ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: `${(styles_module_default()).input_div} ${direction === "rtl" ? "phone_input_direction" : ""}`,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_phone_input_2_default()), {
                                                                        className: `phone_input ${direction === "rtl" ? "phone_input_direction" : ""}`,
                                                                        value: urgentSituationNumber,
                                                                        onChange: (value, selectedCountry)=>handleOnChangeNumberInput({
                                                                                value,
                                                                                selectedCountry,
                                                                                name: "urgentSituationNumber"
                                                                            }),
                                                                        country: "gb",
                                                                        inputProps: {
                                                                            name: "urgentSituationNumber",
                                                                            required: true,
                                                                            style: {
                                                                                border: errorHolder?.accountRegisterDatas?.operationNotes?.urgentSituationNumber ? "1px solid red" : " 1px solid #ced4da"
                                                                            }
                                                                        }
                                                                    })
                                                                }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: `${(styles_module_default()).input_div} ${(styles_module_default()).the_checkbox_div}`,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    children: "In case of extra payment for airport transfers, who pays for the extras?"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: (styles_module_default()).radio_input_content,
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                                    onChange: (e)=>onchangeHandler(e),
                                                                                    defaultChecked: accountPassengerStatus === "Account",
                                                                                    type: "radio",
                                                                                    id: "Account",
                                                                                    name: "accountPassengerStatus",
                                                                                    value: "Account"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                                    htmlFor: "Account",
                                                                                    children: "Account"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                                    onChange: (e)=>onchangeHandler(e),
                                                                                    defaultChecked: accountPassengerStatus === "Passenger",
                                                                                    type: "radio",
                                                                                    id: "Passenger",
                                                                                    name: "accountPassengerStatus",
                                                                                    value: "Passenger"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                                    htmlFor: "Passenger",
                                                                                    children: "Passenger"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: `${(styles_module_default()).input_div} ${(styles_module_default()).last_input_item}`,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Textarea/* default */.Z, {
                                                                name: "anyOtherOperationComments",
                                                                value: anyOtherOperationComments,
                                                                label: "Any Other Operation comments",
                                                                onChange: (e)=>onchangeHandler(e),
                                                                labelStyle: {
                                                                    color: "#00000094",
                                                                    "fontWeight": 500,
                                                                    letterSpacing: "1px"
                                                                },
                                                                inputStyle: {
                                                                    color: "#0b0b0cd6"
                                                                },
                                                                errorMessage: errorHolder?.accountRegisterDatas?.operationNotes?.anyOtherOperationComments
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (styles_module_default()).details_div,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: (styles_module_default()).amount_credit_title,
                                                    children: "Declaration  "
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    className: (styles_module_default()).declaration,
                                                    children: [
                                                        "I, ",
                                                        `[ ${contactName} ]`,
                                                        ", in my capacity as ",
                                                        `[ ${jobTitle} ]`,
                                                        " of ",
                                                        `[ ${companyName} ]`,
                                                        ", hereby authorize Airport Pickups London (Airport Transportation Limited) to obtain references as and when appropriate. I agree to abide by the terms and conditions as set out by Airport Pickups London  (Airport Transportation Limited). These include the requirement that all invoices are to be paid within 7 days from the date of invoice and that a purchase order must be issued for services rendered. I declare that I have the authority to apply to open an account on behalf of the aforementioned company."
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: (styles_module_default()).btn_div,
                                                    onClick: gotoNextPage,
                                                    children: !recaptchaToken && !showRecapthaComponent ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                        className: "btn btn_primary ",
                                                        ref: btnRef,
                                                        children: [
                                                            ripples,
                                                            " ",
                                                            appData.words["strNext"]
                                                        ]
                                                    }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
                                                }),
                                                showRecapthaComponent ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: (styles_module_default()).recaptcha,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(elements_Recaptcha, {
                                                        onVerify: handleRecaptchaVerify
                                                    })
                                                }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (styles_module_default()).accountRegister_content_registration_right,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(AdressInformations/* default */.Z, {
                                        appData: appData,
                                        direction: direction
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const pages_AccountRegister = (AccountRegister);


/***/ }),

/***/ 4463:
/***/ (() => {



/***/ }),

/***/ 5648:
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

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

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

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

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

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

/***/ 5789:
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

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

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

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 5452:
/***/ ((module) => {

"use strict";
module.exports = require("react-phone-input-2");

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

/***/ }),

/***/ 6695:
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ 173:
/***/ ((module) => {

"use strict";
module.exports = require("redux-devtools-extension");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9210,9505,3121,3061,4650,5277,4140,1684,8307], () => (__webpack_exec__(777)));
module.exports = __webpack_exports__;

})();