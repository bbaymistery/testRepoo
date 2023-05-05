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

    let { applicantForCreditAccount, contactDetails, approximateSpend } = accountRegisterDatas
    let { contactName, jobTitle, department, email, telephoneNo } = contactDetails
    let { companyName, natureOfBusiness, postCode, address, registrationNo, companyTel } = applicantForCreditAccount

    let [internalState, setInternalState] = React.useReducer((s, o) => ({ ...s, ...o }), {
        'errorHolder': [],
    })
    let { errorHolder } = internalState;

    //companyTel:creditAccountNumber   =>olarak destrctur et
    //telephoneNo:contactDetailsTelephone=>
    const onchangeHandler = (e) => {
        let { name, value } = e.target;

        if (['contactName', 'jobTitle', "department", "email"].includes(name))
            dispatch({ type: 'SET_CONTACT_DETAILS', data: { name, value } })

        if (['companyName', "natureOfBusiness", "postCode", "address", "registrationNo"].includes(name))
            dispatch({ type: 'SET_APPLICANT_FOR_CREADIT_DETAILS', data: { name, value } })
    }

    const handleOnChangeNumberInput = (params = {}) => {
        let { value, name, } = params
        if (["telephoneNo"].includes(name)) dispatch({ type: 'SET_CONTACT_DETAILS', data: { name, value } })
        if (["companyTel"].includes(name)) dispatch({ type: 'SET_APPLICANT_FOR_CREADIT_DETAILS', data: { name, value } })
    }


    const gotoNextPage = (e) => {
        let errorHolder = accountRegisterSchemaValidator({ accountRegisterDatas });
        setInternalState({ errorHolder })
        if (errorHolder.status === 200) router.push(`${language === 'en' ? "/AccountRegisterResults" : `${language}/AccountRegisterResults`}`)
    }

    //The Amount Of Monthly Credit You Require
    const onApproimateSpendChange = (e) => dispatch({ type: 'SET_APPROXIMATE_DATA', data: { value: e.target.value } })


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
                                <div className={styles.details_div}>
                                    <h1>{appData.words["strApplicationForCreditAccount"]}</h1>
                                    <div className={`${styles.details} ${styles.first_column} `}>
                                        <div className={`${styles.input_div} ${styles.last_input_item}`} >
                                            <TextInput
                                                type="text"
                                                value={companyName}
                                                name="companyName"
                                                onChange={e => onchangeHandler(e)}
                                                label={`${appData?.words["strCompanyName"]}/Sole Trader Name`}
                                                errorMessage={errorHolder?.accountRegisterDatas?.applicantForCreditAccount?.companyName} />
                                        </div>
                                        <div className={styles.input_div}>
                                            <TextInput
                                                type="text"
                                                value={natureOfBusiness}
                                                name="natureOfBusiness"
                                                onChange={e => onchangeHandler(e)}
                                                label={appData?.words["strNatureOfBusiness"]}
                                                errorMessage={errorHolder?.accountRegisterDatas?.applicantForCreditAccount?.natureOfBusiness} />
                                        </div>

                                        <div className={styles.input_div}>
                                            <TextInput
                                                type="text"
                                                name="postCode"
                                                value={postCode}
                                                onChange={e => onchangeHandler(e)}
                                                label={appData?.words["strPostcode"]}
                                                errorMessage={errorHolder?.accountRegisterDatas?.applicantForCreditAccount?.postCode} />
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
                                            />
                                        </div>
                                        {/*  */}
                                        <div className={`${styles.input_div} ${styles.last_input_item}`} >
                                            <Textarea
                                                name="address"
                                                value={address}
                                                label={appData?.words["strAddress"]}
                                                onChange={(e) => onchangeHandler(e)}
                                                errorMessage={errorHolder?.accountRegisterDatas?.applicantForCreditAccount?.address} />
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.details_div}>
                                    <h1>{appData.words["strContactDetails"]}</h1>
                                    <div className={`${styles.details} ${styles.second_column} `}>
                                        <div className={styles.input_div}>
                                            <TextInput
                                                type="text"
                                                name="contactName"
                                                value={contactName}
                                                onChange={e => onchangeHandler(e)}
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
                                                errorMessage={errorHolder?.accountRegisterDatas?.contactDetails?.jobTitle} />
                                        </div>
                                        <div className={styles.input_div}>
                                            <TextInput
                                                type="text"
                                                name="department"
                                                value={department}
                                                onChange={e => onchangeHandler(e)}
                                                label={appData?.words["panelAccountsDepartment"]}
                                                errorMessage={errorHolder?.accountRegisterDatas?.contactDetails?.department} />
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
                                        <div className={`${styles.input_div} ${styles.last_input_item}`} >
                                            <TextInput
                                                type="text"
                                                value={email}
                                                name="email"
                                                onChange={e => onchangeHandler(e)}
                                                label={appData?.words["appContactUsEmailAddress"]}
                                                errorMessage={errorHolder?.accountRegisterDatas?.contactDetails?.email} />

                                        </div>
                                    </div>
                                </div>

                                <div className={styles.details_div}>
                                    <h1>{appData.words["strTheAmountOfMonthlyCreditYouRequire"]}</h1>
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

                                </div>

                                <div className={styles.details_div}>
                                    <h1>Operation Notes</h1>
                                    <div className={`${styles.details} ${styles.operation_details}`}>

                                        <div className={`${styles.input_div} ${styles.emergency_div}`}>
                                            <p>Do you have any out-of-hours emergency number for urgent situations?</p>
                                            <input type="text" id="Passenger" value={companyName}
                                                name="companyName"
                                                onChange={e => onchangeHandler(e)} />
                                        </div>
                                        <div className={`${styles.input_div} ${styles.the_checkbox_div}`}>
                                            <p>In case of extra payment for airport transfers, who pays for the extras?</p>
                                            <div className={styles.radio_input_content}>
                                                <div>
                                                    <input checked type="radio" id="Account" name="AccountPassenger" value="Account" />
                                                    <label htmlFor="Account">Account</label><br />
                                                </div>
                                                <div>
                                                    <input type="radio" id="Passenger" name="AccountPassenger" value="60" />
                                                    <label htmlFor="Passenger">Passenger</label><br />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`${styles.input_div} ${styles.last_input_item}`} >
                                            <Textarea
                                                name="address"
                                                value={address}
                                                label={"Any Other Operation comments"}
                                                onChange={(e) => onchangeHandler(e)}
                                                errorMessage={""} />
                                        </div>
                                    </div>


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