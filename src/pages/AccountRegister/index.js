import React, { useReducer, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from "./styles.module.scss"
import GlobalLayout from '../../components/layouts/GlobalLayout'
import TextInput from '../../components/elements/TextInput'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import Textarea from '../../components/elements/Textarea'
import { accountRegisterSchemaValidator } from '../../helpers/accountRegisterSchemaValidator'
import AdressInformations from '../../components/elements/AdressInformations'
import { useRouter } from 'next/router'
import useRipple from '../../hooks/useRipple'



//
//
//
//
//
//
//strAppNoteOneForAddAccountForm
//strAppNoteTwoAddAccountForm
//strNext

let description = "Airport Pickups London agency registration form"
let title = "APPLICATION FOR CREDIT ACCOUNT"
let keywords = ""
//!FAX ELIMINATED
const AccountRegister = (props) => {
    let { bggray } = props
    const router = useRouter()
    const dispatch = useDispatch()

    const state = useSelector(state => state.pickUpDropOffActions)
    let { params: { direction, language } } = state

    const { appData } = useSelector(state => state.initialReducer)
    const { accountRegisterDatas } = useSelector(state => state.accountRegisterActions)

    let { applicantForCreditAccount, contactDetails, approximateSpend, operationNotes } = accountRegisterDatas
    let { contactName, jobTitle, email, telephoneNo } = contactDetails
    let { companyName, natureOfBusiness, address, registrationNo, companyTel } = applicantForCreditAccount
    let { urgentSituationStatus, accountPassengerStatus, anyOtherOperationComments, urgentSituationNumber } = operationNotes
    let [internalState, setInternalState] = React.useReducer((s, o) => ({ ...s, ...o }), {
        'errorHolder': [],
    })
    let { errorHolder } = internalState;

    //companyTel:creditAccountNumber   =>olarak destrctur et
    //telephoneNo:contactDetailsTelephone=>
    const onchangeHandler = (e) => {
        let { name, value, type, checked } = e.target;


        if (['contactName', 'jobTitle', "email"].includes(name))
            dispatch({ type: 'SET_CONTACT_DETAILS', data: { name, value } })

        if (['companyName', "natureOfBusiness", "address", "registrationNo"].includes(name))
            dispatch({ type: 'SET_APPLICANT_FOR_CREADIT_DETAILS', data: { name, value } })

        //in case if it is radio button

      
        if (['accountPassengerStatus', "urgentSituationStatus", "anyOtherOperationComments"].includes(name)) {
            dispatch({ type: 'SET_OPERATION_NOTES', data: { name, value } })
        }

    }

    const handleOnChangeNumberInput = (params = {}) => {
        let { value, name, } = params
        if (["telephoneNo"].includes(name)) dispatch({ type: 'SET_CONTACT_DETAILS', data: { name, value } })
        if (["companyTel"].includes(name)) dispatch({ type: 'SET_APPLICANT_FOR_CREADIT_DETAILS', data: { name, value } })
        if (["urgentSituationNumber"].includes(name)) dispatch({ type: 'SET_OPERATION_NOTES', data: { name: "urgentSituationNumber", value } })
    }



    const gotoNextPage = () => {
        let errorHolder = accountRegisterSchemaValidator({ accountRegisterDatas });
        setInternalState({ errorHolder })
        if (errorHolder.status === 200) router.push(`${language === 'en' ? "/AccountRegisterResults" : `${language}/AccountRegisterResults`}`)
    }
    console.log(errorHolder);

    //The Amount Of Monthly Credit You Require
    const onApproimateSpendChange = (e) => dispatch({ type: 'SET_APPROXIMATE_DATA', data: { value: e.target.value } })
    //!check schema and the next page*

    const btnRef = useRef(null);
    const ripples = useRipple(btnRef);
    
    return (
        <GlobalLayout keywords={keywords} title={title} description={description} footerbggray={true}>
            <div className={`${styles.accountRegister} ${direction} page`} bggray={String(bggray === "true")}>
                <div className={`${styles.accountRegister_section} page_section`}>
                    <div className={`${styles.accountRegister_section_container} page_section_container`}>

                        {/* <h1>{appData.words["strApplicationForCreditAccount"]}</h1> */}
                        <div className={styles.accountRegister_content}>
                            <div className={styles.accountRegister_content_left}>
                                {/* //!Applicant */}

                                <div className={styles.details_div}>
                                    <h1>{appData.words["strApplicationForCreditAccount"]}</h1>
                                    <div className={`${styles.details} ${styles.first_column} `}>
                                        <div className={`${styles.input_div} `} >
                                            {/* #535b6b94 */}
                                            <TextInput
                                                type="text"
                                                value={companyName}
                                                name="companyName"
                                                onChange={e => onchangeHandler(e)}
                                                label={`${appData?.words["strCompanyName"]}/Sole Trader Name`}
                                                labelStyle={{ color: "#00000094", "fontWeight": 500, letterSpacing: "1px" }}
                                                inputStyle={{ color: "#0b0b0cd6" }}
                                                errorMessage={errorHolder?.accountRegisterDatas?.applicantForCreditAccount?.companyName} />
                                        </div>
                                        <div className={`${styles.input_div} `} >
                                            <TextInput
                                                type="text"
                                                value={natureOfBusiness}
                                                name="natureOfBusiness"
                                                onChange={e => onchangeHandler(e)}
                                                label={appData?.words["strNatureOfBusiness"]}
                                                labelStyle={{ color: "#00000094", "fontWeight": 500, letterSpacing: "1px" }}
                                                inputStyle={{ color: "#0b0b0cd6" }}
                                                errorMessage={errorHolder?.accountRegisterDatas?.applicantForCreditAccount?.natureOfBusiness} />
                                        </div>


                                        <div className={`${styles.input_div} ${direction === "rtl" ? "phone_input_direction" : ""}`}>
                                            <PhoneInput
                                                className={`phone_input ${direction === "rtl" ? "phone_input_direction" : ""}`}
                                                value={companyTel}
                                                onChange={(value, selectedCountry) => handleOnChangeNumberInput({ value, selectedCountry, name: "companyTel" })}

                                                country={"gb"}
                                                inputProps={{
                                                    name: 'companyTel',
                                                    required: true,
                                                    style: { border: errorHolder?.accountRegisterDatas?.applicantForCreditAccount?.companyTel ? '1px solid red' : ' 1px solid #ced4da' }
                                                }}
                                            />
                                        </div>

                                        <div className={styles.input_div}>
                                            <TextInput
                                                type="text"
                                                name="registrationNo"
                                                value={registrationNo}
                                                onChange={e => onchangeHandler(e)}
                                                label={`Registration No (If Applicable)`}
                                                labelStyle={{ color: "#00000094", "fontWeight": 500, letterSpacing: "1px" }}
                                                inputStyle={{ color: "#0b0b0cd6" }}
                                            />
                                        </div>
                                        {/*  */}
                                        <div className={`${styles.input_div} ${styles.last_input_item}`} >
                                            <Textarea
                                                name="address"
                                                value={address}
                                                label={appData?.words["strAddress"]}
                                                onChange={(e) => onchangeHandler(e)}
                                                labelStyle={{ color: "#00000094", "fontWeight": 500, letterSpacing: "1px" }}
                                                inputStyle={{ color: "#0b0b0cd6" }}
                                                errorMessage={errorHolder?.accountRegisterDatas?.applicantForCreditAccount?.address} />
                                        </div>
                                    </div>
                                </div>
                                {/* //!contat details */}
                                <div className={styles.details_div}>
                                    <h1>{appData.words["strContactDetails"]}</h1>
                                    <div className={`${styles.details} ${styles.second_column} `}>
                                        <div className={styles.input_div}>
                                            <TextInput
                                                type="text"
                                                name="contactName"
                                                value={contactName}
                                                onChange={e => onchangeHandler(e)}
                                                labelStyle={{ color: "#00000094", "fontWeight": 500, letterSpacing: "1px" }}
                                                inputStyle={{ color: "#0b0b0cd6" }}
                                                label={appData?.words["panelAccountsContactName"]}
                                                errorMessage={errorHolder?.accountRegisterDatas?.contactDetails?.contactName} />
                                        </div>
                                        <div className={styles.input_div}>
                                            <TextInput
                                                type="text"
                                                name="jobTitle"
                                                value={jobTitle}
                                                onChange={e => onchangeHandler(e)}
                                                label={appData?.words["panelAccountsJobTitle"]}
                                                labelStyle={{ color: "#00000094", "fontWeight": 500, letterSpacing: "1px" }}
                                                inputStyle={{ color: "#0b0b0cd6" }}
                                                errorMessage={errorHolder?.accountRegisterDatas?.contactDetails?.jobTitle} />
                                        </div>
                                        <div className={`${styles.input_div} ${direction === "rtl" ? "phone_input_direction" : ""}`}>
                                            <PhoneInput
                                                className={`phone_input ${direction === "rtl" ? "phone_input_direction" : ""}`}
                                                value={telephoneNo}
                                                onChange={(value, selectedCountry) => handleOnChangeNumberInput({ value, selectedCountry, name: "telephoneNo" })}

                                                country={"gb"}
                                                inputProps={{
                                                    name: 'telephoneNo',
                                                    required: true,
                                                    style: { border: errorHolder?.accountRegisterDatas?.contactDetails?.telephoneNo ? '1px solid red' : ' 1px solid #ced4da' }
                                                }}
                                            />
                                        </div>


                                        {/*  */}
                                        <div className={`${styles.input_div}`} >
                                            <TextInput
                                                type="text"
                                                value={email}
                                                name="email"
                                                onChange={e => onchangeHandler(e)}
                                                label={appData?.words["appContactUsEmailAddress"]}
                                                labelStyle={{ color: "#00000094", "fontWeight": 500, letterSpacing: "1px" }}
                                                inputStyle={{ color: "#0b0b0cd6" }}
                                                errorMessage={errorHolder?.accountRegisterDatas?.contactDetails?.email} />

                                        </div>
                                    </div>
                                </div>

                                <div className={styles.details_div}>
                                    <h1>Operation Notes</h1>
                                    <div className={`${styles.details} ${styles.operation_details}`}>
                                        <div className={`${styles.input_div} ${styles.the_checkbox_div}`}>
                                            <p>Do you have any out-of-hours emergency number for urgent situations?</p>
                                            <div className={styles.radio_input_content}>
                                                <div>
                                                    <input onChange={(e) => onchangeHandler(e)} defaultChecked={urgentSituationStatus === 'Yes'} type="radio" id="UrgentSituationYes" name="urgentSituationStatus" value={"Yes"} />
                                                    <label htmlFor="UrgentSituationYes">Yes</label><br />
                                                </div>

                                                <div>
                                                    <input onChange={(e) => onchangeHandler(e)} defaultChecked={urgentSituationStatus === 'No'} type="radio" id="UrgentSituationNo" name="urgentSituationStatus" value={"No"} />
                                                    <label htmlFor="UrgentSituationNo">No</label><br />
                                                </div>
                                            </div>
                                            {urgentSituationStatus === 'Yes' ?
                                                <div className={`${styles.input_div} ${direction === "rtl" ? "phone_input_direction" : ""}`}>
                                                    <PhoneInput
                                                        className={`phone_input ${direction === "rtl" ? "phone_input_direction" : ""}`}
                                                        value={urgentSituationNumber}
                                                        onChange={(value, selectedCountry) => handleOnChangeNumberInput({ value, selectedCountry, name: "urgentSituationNumber" })}

                                                        country={"gb"}
                                                        inputProps={{
                                                            name: 'urgentSituationNumber',
                                                            required: true,
                                                            style: { border: errorHolder?.accountRegisterDatas?.operationNotes?.urgentSituationNumber ? '1px solid red' : ' 1px solid #ced4da' }
                                                        }}
                                                    />
                                                </div>
                                                : <></>}
                                        </div>
                                        <div className={`${styles.input_div} ${styles.the_checkbox_div}`}>
                                            <p>In case of extra payment for airport transfers, who pays for the extras?</p>
                                            <div className={styles.radio_input_content}>
                                                <div>
                                                    <input onChange={(e) => onchangeHandler(e)} defaultChecked={accountPassengerStatus === 'Account'} type="radio" id="Account" name="accountPassengerStatus" value={"Account"} />
                                                    <label htmlFor="Account">Account</label><br />
                                                </div>
                                                <div>
                                                    <input onChange={(e) => onchangeHandler(e)} defaultChecked={accountPassengerStatus === 'Passenger'} type="radio" id="Passenger" name="accountPassengerStatus" value={"Passenger"} />
                                                    <label htmlFor="Passenger">Passenger</label><br />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`${styles.input_div} ${styles.last_input_item}`} >
                                            <Textarea
                                                name="anyOtherOperationComments"
                                                value={anyOtherOperationComments}
                                                label={"Any Other Operation comments"}
                                                onChange={(e) => onchangeHandler(e)}
                                                labelStyle={{ color: "#00000094", "fontWeight": 500, letterSpacing: "1px" }}
                                                inputStyle={{ color: "#0b0b0cd6" }}
                                                errorMessage={errorHolder?.accountRegisterDatas?.operationNotes?.anyOtherOperationComments} />
                                        </div>
                                    </div>
                                </div>

                                {/*//! approximate */}
                                <div className={styles.details_div}>
                                    <p className={styles.amount_credit_title}>{appData.words["strTheAmountOfMonthlyCreditYouRequire"]}</p>
                                    <p className={styles.approximatle_div}>
                                        <span >{appData?.words["strApproximateSpend"]}</span>
                                        <input
                                            type="text"
                                            value={approximateSpend}
                                            onChange={onApproimateSpendChange}
                                            style={{ borderBottom: `${errorHolder?.accountRegisterDatas?.approximateSpend ? "1px solid red" : ' 1px solid #ced4da'}` }}
                                        />
                                    </p>
                                    <p className='mb_1'>Provide an estimate of how much you anticipate spending with Airport Pickups London in any given month</p>
                                    <p dangerouslySetInnerHTML={{ __html: appData?.words["strAppNoteTwoAddAccountForm"].replace("_AMOUNT_", `<input value="${approximateSpend}" type="text"  readonly style="border: 1px solid #ccc; border-radius:5px ; height:24px;outline: none;cursor: not-allowed;width: 46px; text-align:center;" />`) }}></p>
                                    <div className={styles.btn_div} onClick={gotoNextPage}>
                                        <button className='btn btn_primary ' ref={btnRef}>{ripples} {appData.words["strNext"]}</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.accountRegister_content_registration_right}>
                                <AdressInformations direction={direction} />
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </GlobalLayout>
    )
}

export default AccountRegister