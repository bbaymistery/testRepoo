import { ar_bookingAndReservations, ar_pickdropoff, ar_pricePayments, ar_vehicles, ar_waitingTimeCharges, bookingAndReservations, es_bookingAndReservations, es_pickdropoff, es_pricePayments, es_vehicles, es_waitingTimeCharges, it_bookingAndReservations, it_pickdropoff, it_pricePayments, it_vehicles, it_waitingTimeCharges, pickdropoff, pricePayments, ru_bookingAndReservations, ru_pickdropoff, ru_pricePayments, ru_vehicles, ru_waitingTimeCharges, tr_bookingAndReservations, tr_pickdropoff, tr_pricePayments, tr_vehicles, tr_waitingTimeCharges, vehicles, waitingTimeCharges, zh_bookingAndReservations, zh_pickdropoff, zh_pricePayments, zh_vehicles, zh_waitingTimeCharges } from '../../constants/faqs'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from "./styles.module.scss"
import GlobalLayout from '../../components/layouts/GlobalLayout'
import { useState } from 'react'
import Accordion from '../../components/elements/Accordion/Accordion'
import Textarea from '../../components/elements/Textarea'
import TextInput from '../../components/elements/TextInput'
import AdressInformations from '../../components/elements/AdressInformations'
import Alert from '../../components/elements/alert/Alert'
import { checkLanguageAttributeOntheUrl } from '../../helpers/checkLanguageAttributeOntheUrl'
import { parse } from 'url';
import { fetchContent } from '../../helpers/fetchContent'
import { useWindowSize } from '../../hooks/useWindowSize'



const INITIAL_FORM_VALUE = { email: "", phone: "", subject: "", message: "", fullname: "", }


//!Inline component
const ContactUsForm = ({ appData, formValue, onChangeHandler, error, handleSend }) => (
    <div className={styles.form_content}>
        <div className={styles.contact_form_action}>
            <form className={styles.form}>
                <div className={styles.input_box}>
                    <div className={styles.input}>
                        <TextInput label={appData?.words["appContactUsFormFullname"]} type="text" name="fullname" onChange={onChangeHandler} value={formValue.fullname} errorMessage={error.fullname} />
                    </div>
                    <div className={styles.input}>
                        <TextInput label={appData?.words["appContactUsFormSubject"]} type="text" name="subject" onChange={onChangeHandler} value={formValue.subject} errorMessage={error.subject} />
                    </div>
                </div>
                <div className={styles.input_box}>
                    <div className={styles.input}>
                        <TextInput label={appData?.words["appContactUsEmailAddress"]} type="text" name="email" onChange={onChangeHandler} value={formValue.email} errorMessage={error.email} />
                    </div>
                    <div className={styles.input}>
                        <TextInput label={appData?.words["appContactUsFormPhone"]} type="text" name="phone" onChange={onChangeHandler} value={formValue.phone} errorMessage={error.phone} />
                    </div>
                </div>
            </form>
            <div className={`${styles.input} ${styles.inp_textarea}`}>
                <Textarea label={appData?.words["appContactUsFormMessage"]} name="message" value={formValue.message} onChange={onChangeHandler} errorMessage={error.message} />
            </div>
            <div className={styles.lodbtn}>
                <button onClick={handleSend} className='btn '>{appData?.words["appContactUsFormButton"]}</button>
            </div>
        </div>
    </div>
);


const ContactUs = (props) => {
    let { bggray, env, mainCanonicalUrl } = props
    const dispatch = useDispatch()
    const state = useSelector(state => state.pickUpDropOffActions)
    let { params: { direction, language } } = state
    const { appData } = useSelector(state => state.initialReducer)

    const [formValue, setFormValue] = useState(INITIAL_FORM_VALUE);
    const [error, setError] = useState(INITIAL_FORM_VALUE);

    const onChangeHandler = (e) => setFormValue((values) => ({ ...values, [e.target.name]: e.target.value }));

    const handleSend = () => {
        let newErrors = {};
        let isValid = true;
        // Check for required fields
        Object.keys(formValue).forEach((key) => {
            if (!formValue[key]) {
                newErrors[key] = "Required";
                isValid = false;
            }
        });
        if (isValid) {
            dispatch({ type: "ALERT", payload: { loading: true } })
            const method = "POST"
            const headers = { Accept: "application/json, text/plain, */*", "Content-Type": "application/json", }
            const body = JSON.stringify({ senderId: 1, reciverMails: [formValue.email], subject: formValue.subject, mailContent: formValue.message })
            let reqOptions = { method, body, headers, };

            fetch(`${env.apiDomain}/tools/mailer`, reqOptions)
                .then((res) => handleSuccess(res))
                .catch(handleCatchError);
        } else {
            setError((error) => ({ ...error, ...newErrors }));
        }

    }
    const handleSuccess = (res) => {
        dispatch({ type: "ALERT", payload: { loading: false } })
        if (res.status === 200) {
            dispatch({ type: "ALERT", payload: { success: "Email successfully sended" } })
            resetForm()
        }
    }
    const handleCatchError = () => {
        dispatch({ type: "ALERT", payload: { errors: "Something went wrong" } })
        resetForm()
    }
    //we reset form if have sth goes wrong on handle  catch error or get success by handleSuccess
    const resetForm = () => {
        setError(INITIAL_FORM_VALUE);
        setFormValue(INITIAL_FORM_VALUE);
    }



    let size = useWindowSize();
    let { width } = size

    return (
        <GlobalLayout mainCanonicalUrl={mainCanonicalUrl} title="Contact Us" keywords="Contact Us" description="Contact Us" footerbggray={true}>
            <div className={`${styles.contact_us} ${direction} page`} bggray={String(bggray === "true")}>
                <div className={`${styles.contact_us_section} page_section`}>
                    <Alert />
                    <div className={`${styles.contact_us_section_container} page_section_container`}>
                        <div className={styles.contact_area}>
                            <div className={styles.contact_container}>
                                <div className={styles.left}>
                                    <div className={styles.form_box}>
                                        <div className={styles.form_title_wrap}>
                                            <h3 className={styles.title}>{appData?.words["strWeLoveToHearFromYou"]}</h3>
                                            <p className={styles.desc}>{appData?.words["strSendUsAMessageAnd"]}</p>
                                        </div>
                                        {width > 1100 && <ContactUsForm appData={appData} formValue={formValue} onChangeHandler={onChangeHandler} error={error} handleSend={handleSend} />}
                                        {width <= 1100 && <br />}
                                        {width <= 1100 && <AdressInformations direction={direction} appData={appData} />}
                                    </div>

                                    {/* Buraya ekler */}
                                    <div className={styles.needhelp_section}>
                                        <p >
                                            <a href={`${language === 'en' ? `/faq` : `/${language}/faq`}`}  >
                                                {appData?.words["strNeedhelp"]}
                                            </a>
                                        </p>
                                        <p>
                                            Airport Pickups London, APL Office, Novotel Heathrow, Cherry Lane, West Drayton, London, UB7 9HJ
                                        </p>
                                    </div>
                                </div>

                                {/* <AdressInformation direction={direction} /> */}
                                <div className={styles.right}>
                                    {width > 1100 && <AdressInformations direction={direction} appData={appData} />}
                                    <div className={styles.form_box}>
                                        {width <= 1100 && <ContactUsForm appData={appData} formValue={formValue} onChangeHandler={onChangeHandler} error={error} handleSend={handleSend} />}
                                    </div>

                                    <div className={styles.qr_image_div}>
                                        <img src="/images/others/contactUsQr.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </GlobalLayout>
    )
}

export default ContactUs
export async function getServerSideProps({ req, res }) {
    let firstLoadLangauge = checkLanguageAttributeOntheUrl(req?.url)
    const { cookie } = req.headers;
    let { pathname } = parse(req?.url, true)
    let pathnameUrlWHenChangeByTopbar = pathname
    let pathNameUrlCanonical = "/contact-us"
    let { canonicalUrl: mainCanonicalUrl } = await fetchContent("/", cookie, firstLoadLangauge, pathnameUrlWHenChangeByTopbar, pathNameUrlCanonical)

    return {
        props: { mainCanonicalUrl }
    }
}