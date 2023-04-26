import React from 'react'
import { useSelector } from 'react-redux'
import styles from "./styles.module.scss"
import GlobalLayout from '../../components/layouts/GlobalLayout'
import TextInput from '../../components/elements/TextInput'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import Textarea from '../../components/elements/Textarea'



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
    const state = useSelector(state => state.pickUpDropOffActions)
    let { params: { direction, language } } = state
    const { appData } = useSelector(state => state.initialReducer)
    let country = "gb"


    const onchangeHandler = (e) => {

    }

    const handleOnChangeNumberInput = (props) => {
        console.log(props);

    }
    const handleCountry = (par) => {

    }
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
                                            <TextInput label={appData?.words["strCompanyName"]} type="text" name="companyName" onChange={e => onchangeHandler(e)} value={"APL"} errorMessage={""} />
                                        </div>
                                        <div className={styles.input_div}>
                                            <TextInput label={appData?.words["strNatureOfBusiness"]} type="text" name="natureOfBusiness" onChange={e => onchangeHandler(e)} value={"Agent"} errorMessage={""} />
                                        </div>
                                        <div className={styles.input_div}>
                                            <TextInput label="Company Fax" type="text" name="companyFax" onChange={e => onchangeHandler(e)} value={"yesofcourse"} errorMessage={""} />
                                        </div>
                                        <div className={styles.input_div}>
                                            <TextInput label={appData?.words["strPostcode"]} type="text" name="postcode" onChange={e => onchangeHandler(e)} value={"ublala"} errorMessage={""} />
                                        </div>
                                        <div className={`${styles.input_div} ${direction === "rtl" ? "phone_input_direction" : ""}`}>
                                            <PhoneInput
                                                className={`phone_input ${direction === "rtl" ? "phone_input_direction" : ""}`}
                                                value={"123"}
                                                onChange={(value, selectedCountry) => handleOnChangeNumberInput(value, selectedCountry)}
                                                country={"gb"}
                                                inputProps={{
                                                    name: 'creditAccountNumber',
                                                    required: true,
                                                    style: { border: false ? '1px solid red' : ' 1px solid #ced4da' }
                                                }}
                                                onCountryChange={handleCountry}
                                            />
                                        </div>

                                        <div className={styles.input_div}>
                                            <TextInput label="strRegistrationNo" type="text" name="registrationNo" onChange={e => onchangeHandler(e)} value={"9***"} errorMessage={""} />
                                        </div>
                                        {/*  */}
                                        <div className={`${styles.input_div} ${styles.last_input_item}`} >
                                            <Textarea label={appData?.words["strAddress"]} name="address" value={" Airport Pickups London 2022  "} onChange={(e) => onchangeHandler(e)} />
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.details_div}>
                                    <h1>{appData.words["strContactDetails"]}</h1>
                                    <div className={`${styles.details} ${styles.second_column} `}>
                                        <div className={styles.input_div}>
                                            <TextInput label={appData?.words["panelAccountsContactName"]} type="text" name="contactName" onChange={e => onchangeHandler(e)} value={"Elgun Ezmmemmedov"} errorMessage={""} />
                                        </div>
                                        <div className={styles.input_div}>
                                            <TextInput label={appData?.words["panelAccountsJobTitle"]} type="text" name="jobTitle" onChange={e => onchangeHandler(e)} value={"Web Developer"} errorMessage={""} />
                                        </div>
                                        <div className={styles.input_div}>
                                            <TextInput label={appData?.words["panelAccountsDepartment"]} type="text" name="department" onChange={e => onchangeHandler(e)} value={"Science"} errorMessage={""} />
                                        </div>
                                        <div className={`${styles.input_div} ${direction === "rtl" ? "phone_input_direction" : ""}`}>
                                            <PhoneInput
                                                className={`phone_input ${direction === "rtl" ? "phone_input_direction" : ""}`}
                                                value={"994506330135"}
                                                onChange={(value, selectedCountry) => handleOnChangeNumberInput(value, selectedCountry,)}
                                                country={"gb"}
                                                inputProps={{
                                                    name: 'phone',
                                                    required: true,
                                                    style: { border: false ? '1px solid red' : ' 1px solid #ced4da' }
                                                }}
                                                onCountryChange={handleCountry}
                                            />
                                        </div>


                                        {/*  */}
                                        <div className={`${styles.input_div} ${styles.last_input_item}`} >
                                            <TextInput label={appData?.words["appContactUsEmailAddress"]} type="text" name="contactEmail" onChange={e => onchangeHandler(e)} value={"elgun.ezmemmedov@mail.ru"} errorMessage={""} />

                                        </div>
                                    </div>
                                </div>

                                <div className={styles.details_div}>
                                    <h1>{appData.words["strTheAmountOfMonthlyCreditYouRequire"]}</h1>
                                    <p className={styles.approximatle_div}>
                                        <span >{appData?.words["strApproximateSpend"]}</span>
                                        <input type="text" />
                                    </p>

                                    <p className='mb_1'>Provide an estimate of how much you anticipate spending with Airport Pickups London in any given month</p>
                                    <p dangerouslySetInnerHTML={{ __html: appData?.words["strAppNoteTwoAddAccountForm"].replace("_AMOUNT_", `<input type="text"  readonly style="border: 1px solid #ccc; border-radius:5px ; height:20px;outline: none;cursor: not-allowed;width: 40px;" />`) }}></p>
                                    <div className={styles.btn_div}>
                                        <button className='btn btn_primary '>Next</button>
                                    </div>
                                </div>

                            </div>
                            <div className={styles.accountRegister_content_registration_right}>
                                <div className={styles.image_div}>
                                    <img src="/images/aboutPage.jpg" alt="APL registration" />

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