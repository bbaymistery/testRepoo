import React, { useRef } from 'react'
import styles from "./styles.module.scss"
import GlobalLayout from '../../components/layouts/GlobalLayout'
import { useSelector } from 'react-redux'
import AdressInformations from '../../components/elements/AdressInformations'
import useRipple from '../../hooks/useRipple'
import { useRouter } from 'next/router'
import store from '../../store/store'
import { createWrapper } from 'next-redux-wrapper'
let title = "APPLICATION FOR CREDIT ACCOUNT"
let keywords = ""
let description = "Airport Pickups London agency registration form"
const AccountRegisterResults = (props) => {
    let { bggray } = props

    const router = useRouter()

    const state = useSelector(state => state.pickUpDropOffActions)
    let { params: { direction } } = state

    const { appData } = useSelector(state => state.initialReducer)

    const { accountRegisterDatas } = useSelector(state => state.accountRegisterActions)

    let { applicantForCreditAccount, contactDetails, approximateSpend } = accountRegisterDatas
    let { contactName, jobTitle, department, email, telephoneNo } = contactDetails
    let { companyName, natureOfBusiness, companyFax, postCode, address, registrationNo, companyTel } = applicantForCreditAccount
    const prevRef = useRef(null);
    const prevRipples = useRipple(prevRef);


    const nextRef = useRef(null)
    const nextRipples = useRipple(nextRef);

    return (
        <GlobalLayout keywords={keywords} title={title} description={description} footerbggray={true}>
            <div className={`${styles.account_results_details} page`} bggray={String(bggray === "true")}>
                <div className={`${styles.account_results_details_section} page_section`}>
                    <div className={`${styles.account_results_details_section_container} page_section_container`}>

                        <div className={styles.content}>
                            <div className={styles.left_content}>
                                <div className={styles.info_section}>
                                    <h1>{appData.words["strApplicationForCreditAccount"]}</h1>
                                    <div className={`${styles.info} ${direction}`}>
                                        <div className={styles.left}>{appData?.words["strCompanyName"]}</div>
                                        <div className={styles.right}>{companyName} </div>
                                    </div>
                                    <div className={`${styles.info} ${direction}`}>
                                        <div className={styles.left}>{appData?.words["strNatureOfBusiness"]} </div>
                                        <div className={styles.right}>{natureOfBusiness}</div>
                                    </div>
                                    <div className={`${styles.info} ${direction}`}>
                                        <div className={styles.left}>Company Fax</div>
                                        <div className={styles.right}>{companyFax}</div>
                                    </div>
                                    <div className={`${styles.info} ${direction}`}>
                                        <div className={styles.left}>{appData?.words["strPostcode"]}</div>
                                        <div className={styles.right}>{postCode}</div>
                                    </div>
                                    <div className={`${styles.info} ${direction}`}>
                                        <div className={styles.left}>Company Tel</div>
                                        <div className={styles.right}>{companyTel}</div>
                                    </div>
                                    <div className={`${styles.info} ${direction}`}>
                                        <div className={styles.left}>{appData.words["strRegistrationNo"]}</div>
                                        <div className={styles.right}>{registrationNo}</div>
                                    </div>
                                    <div className={`${styles.info} ${direction}`}>
                                        <div className={styles.left}>{appData?.words["strAddress"]}</div>
                                        <div className={styles.right}>{address}</div>
                                    </div>

                                    <h1 className='mt_2'>{appData.words["strContactDetails"]}</h1>
                                    <div className={`${styles.info} ${direction}`}>
                                        <div className={styles.left}>{appData?.words["panelAccountsContactName"]} </div>
                                        <div className={styles.right}>{contactName}</div>
                                    </div>

                                    <div className={`${styles.info} ${direction}`}>
                                        <div className={styles.left}>{appData?.words["panelAccountsJobTitle"]}</div>
                                        <div className={styles.right}>{jobTitle}</div>
                                    </div>
                                    <div className={`${styles.info} ${direction}`}>
                                        <div className={styles.left}>{appData?.words["panelAccountsDepartment"]}</div>
                                        <div className={styles.right}>{department}</div>
                                    </div>
                                    <div className={`${styles.info} ${direction}`}>
                                        <div className={styles.left}>{appData.words["strRegistrationNo"]}</div>
                                        <div className={styles.right}>{registrationNo}</div>
                                    </div>
                                    <div className={`${styles.info} ${direction}`}>
                                        <div className={styles.left}>{appData.words["panelAccountsTelephone"]}</div>
                                        <div className={styles.right}>{telephoneNo}</div>
                                    </div>
                                    <div className={`${styles.info} ${direction}`}>
                                        <div className={styles.left}>{appData?.words["appContactUsEmailAddress"]}</div>
                                        <div className={styles.right}>{email}</div>
                                    </div>
                                    <div className={`${styles.info} ${direction}`}>
                                        <div className={styles.left}>{appData?.words["strApproximateSpend"]} (£)</div>
                                        <div className={styles.right}>{approximateSpend}</div>
                                    </div>
                                    <div className={styles.buttons}>
                                        <button ref={prevRef} className='btn btn-primary' onClick={() => { router.back() }}>{prevRipples} {appData?.words["strGoBack"]}</button>
                                        <button ref={nextRef} className='btn btn-primary'>{nextRipples}  Confirm</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.contact_section}>
                                <AdressInformations />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </GlobalLayout>
    )
}

export default AccountRegisterResults
const makestore = () => store;
const wrapper = createWrapper(makestore);

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, res, ...etc }) => {

    const initialLanguages = store.getState().initialReducer?.appData?.languages
    const langs = initialLanguages.map((lang) => lang.value)

    for (let i = 0; i < langs.length; i++) {
        const lang = langs[i]
        const langUrl = lang === 'en' ? '/AccountRegisterResults' : `/${lang}/AccountRegisterResults`
        if (req.url === langUrl) {
            return {
                redirect: {
                    destination: lang === 'en' ? "/" : `/${lang}`,
                    permanent: false
                }
            }
        }
    }


    return {
        props: {
            data: ''
        }
    }
});