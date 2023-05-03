import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from "./styles.module.scss"
import GlobalLayout from '../../components/layouts/GlobalLayout'
import TextInput from '../../components/elements/TextInput'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import Textarea from '../../components/elements/Textarea'
import { accountRegisterSchemaValidator } from '../../helpers/accountRegisterSchemaValidator'



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

const AccountRegister = (props) => {
    let { bggray } = props

    const dispatch = useDispatch()

    const state = useSelector(state => state.pickUpDropOffActions)
    let { params: { direction, language } } = state

    const { appData } = useSelector(state => state.initialReducer)
    const { accountRegisterDatas } = useSelector(state => state.accountRegisterActions)

    let { applicantForCreditAccount, contactDetails, approximateSpend } = accountRegisterDatas
    let { contactName, jobTitle, department, email, telephoneNo } = contactDetails
    let { companyName, natureOfBusiness, companyFax, postCode, address, registrationNo, companyTel } = applicantForCreditAccount

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

        if (['companyName', "natureOfBusiness", "companyFax", "postCode", "address", "registrationNo"].includes(name))
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
        // setInternalState({ errorHolder })
        // if (errorHolder.status === 200) router.push(`${language === 'en' ? "/success" : `${language}/error`}`)
    }

    //The Amount Of Monthly Credit You Require
    const onApproimateSpendChange = (e) => dispatch({ type: 'SET_APPROXIMATE_DATA', data: { value: e.target.value } })



    return (
        <GlobalLayout keywords={keywords} title={title} description={description}>
            <div className={`${styles.accountRegister} ${direction} page`} bggray={String(bggray === "true")}>
                <div className={`${styles.accountRegister_section} page_section`}>
                    <div className={`${styles.accountRegister_section_container} page_section_container`}>

                        {/* <h1>{appData.words["strApplicationForCreditAccount"]}</h1> */}
                        <div className={styles.accountRegister_content}>
                            <div className={styles.accountRegister_content_left}>
                                <div className={styles.details_div}>
                                    <h1>{appData.words["strApplicationForCreditAccount"]}</h1>
                                    <div className={`${styles.details} ${styles.first_column} `}>
                                        <div className={styles.input_div}>
                                            <TextInput
                                                type="text"
                                                value={companyName}
                                                name="companyName"
                                                onChange={e => onchangeHandler(e)}
                                                label={appData?.words["strCompanyName"]}
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
                                                name="companyFax"
                                                label="Company Fax"
                                                value={companyFax}
                                                onChange={e => onchangeHandler(e)}
                                                errorMessage={errorHolder?.accountRegisterDatas?.applicantForCreditAccount?.companyFax} />
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
                                                label={appData.words["strRegistrationNo"]}
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
                                    <p dangerouslySetInnerHTML={{ __html: appData?.words["strAppNoteTwoAddAccountForm"].replace("_AMOUNT_", `<input type="text"  readonly style="border: 1px solid #ccc; border-radius:5px ; height:20px;outline: none;cursor: not-allowed;width: 40px;" />`) }}></p>
                                    <div className={styles.btn_div} onClick={gotoNextPage}>
                                        <button className='btn btn_primary '>Next</button>
                                    </div>
                                </div>

                            </div>
                            <div className={styles.accountRegister_content_registration_right}>
                                <div className={styles.image_div}>
                                    {/* <img src="/images/aboutPage.jpg" alt="APL registration" /> */}
                                    <img src="/images/aplAirport.jpg" alt="APL registration" />
                                    {/*  */}
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </GlobalLayout>
    )
}

export default AccountRegister