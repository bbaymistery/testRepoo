import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from "./styles.module.scss"
import GlobalLayout from '../../components/layouts/GlobalLayout'
import { bookingAndReservations, pickdropoff, pricePayments, vehicles, waitingTimeCharges } from '../../constants/faqs'
import { useState } from 'react'
import Accordion from '../../components/elements/Accordion/Accordion'
import Textarea from '../../components/elements/Textarea'
import TextInput from '../../components/elements/TextInput'
import env from '../../resources/env'
import AdressInformations from '../../components/elements/AdressInformations'
import Alert from '../../components/elements/alert/Alert'
const initialFormValue = { email: "", phone: "", subject: "", message: "", fullname: "", }
const ContactUs = (props) => {
    let { bggray } = props
    //appContactUsHeader
    const state = useSelector(state => state.pickUpDropOffActions)
    let { params: { direction } } = state
    const { appData } = useSelector(state => state.initialReducer)

    const dispatch = useDispatch()
    const [formValue, setFormValue] = useState(initialFormValue);
    const [error, setError] = useState(initialFormValue);
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
            const body = JSON.stringify({
                senderId: 1,
                reciverMails: [formValue.email],
                subject: formValue.subject,
                mailContent: formValue.message
            })
            let reqOptions = { method, body, headers, };
            fetch(`${env.apiDomain}/tools/mailer`, reqOptions)
                .then((res) => {
                    console.log(res);
                    dispatch({ type: "ALERT", payload: { loading: false } })
                    if (res.status === 200) {
                        dispatch({ type: "ALERT", payload: { success: "Email successfully sended" } })
                        setError({ email: "", phone: "", subject: "", message: "", fullname: "", });
                        setFormValue({ email: "", phone: "", subject: "", message: "", fullname: "", });
                    }
                })
                .catch((e) => {
                    dispatch({ type: "ALERT", payload: { errors: "Something went wrong" } })
                    setError({ email: "", phone: "", subject: "", message: "", fullname: "", });
                    setFormValue({ email: "", phone: "", subject: "", message: "", fullname: "", });
                });
        } else {
            setError((error) => ({ ...error, ...newErrors }));
        }

    }


    const [active, setActive] = useState(null);

    const toggleState = (e) => {
        //togglus yazsak biri otomatik acg galar
        if (e === active) return setActive(null);
        setActive(e);
    };

    return (
        <GlobalLayout title="Contact Us" keywords="Contact Us" description="Contact Us" footerbggray={true}>
            <div className={`${styles.contact_us} ${direction} page`} bggray={String(bggray === "true")}>
                <div className={`${styles.contact_us_section} page_section`}>
                    <Alert />
                    <div className={`${styles.contact_us_section_container} page_section_container`}>
                        <div className={styles.contact_area}>
                            <div className={styles.contact_container}>
                                <div className={styles.left}>
                                    <div className={styles.form_box}>
                                        <div className={styles.form_title_wrap}>
                                            <h3 className={styles.title}>We'd love to hear from you</h3>
                                            <p className={styles.desc}>
                                                Send us a message and we'll respond as soon as possible
                                            </p>
                                        </div>
                                        <div className={styles.form_content}>
                                            <div className={styles.contact_form_action}>
                                                <form className={styles.form}>
                                                    <div className={styles.input_box}>
                                                        <div className={styles.input}>
                                                            <TextInput label="Full Name" type="text" name="fullname" onChange={onChangeHandler} value={formValue.fullname} errorMessage={error.fullname} />
                                                        </div>
                                                        <div className={styles.input}>
                                                            <TextInput label="Subject" name="subject" type="text" onChange={onChangeHandler} value={formValue.subject} errorMessage={error.subject} />
                                                        </div>
                                                    </div>
                                                    <div className={styles.input_box}>
                                                        <div className={styles.input}>
                                                            <TextInput label="Email" name="email" type="text" onChange={onChangeHandler} value={formValue.email} errorMessage={error.email} />
                                                        </div>
                                                        <div className={styles.input}>
                                                            <TextInput label="Phone" name="phone" type="text" onChange={onChangeHandler} value={formValue.phone} errorMessage={error.phone} />
                                                        </div>
                                                    </div>
                                                </form>
                                                <div className={`${styles.input} ${styles.inp_textarea}`}>
                                                    <Textarea label="Message" name="message" value={formValue.message} onChange={onChangeHandler} errorMessage={error.message} />
                                                </div>
                                                <div className={styles.lodbtn}>
                                                    <button onClick={handleSend} className='btn '>Send Message</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className={styles.popular_topics_title}>Booking and Reservations </p>
                                    {bookingAndReservations.map((ac, i) => {
                                        return (
                                            <Accordion key={i} title={ac.title} active={active} setActive={setActive} toggleState={toggleState} content={ac.content} key={i} />
                                        );
                                    })}
                                    <p className={styles.popular_topics_title}>Pricing and Payment </p>
                                    {pricePayments.map((ac, i) => {
                                        return (
                                            <Accordion key={i} title={ac.title} active={active} setActive={setActive} toggleState={toggleState} content={ac.content} key={i} />
                                        );
                                    })}
                                    <p className={styles.popular_topics_title}>Waiting Time Charges </p>
                                    {waitingTimeCharges.map((ac, i) => {
                                        return (
                                            <Accordion key={i} dangerouslyHtml={true} title={ac.title} active={active} setActive={setActive} toggleState={toggleState} content={ac.content} key={i} />
                                        );
                                    })}
                                    <p className={styles.popular_topics_title}>Vehicles and Services</p>
                                    {vehicles.map((ac, i) => {
                                        return (
                                            <Accordion key={i} dangerouslyHtml={false} title={ac.title} active={active} setActive={setActive} toggleState={toggleState} content={ac.content} key={i} />
                                        );
                                    })}
                                    <p className={styles.popular_topics_title}>Pickup and Drop-off</p>
                                    {pickdropoff.map((ac, i) => {
                                        return (
                                            <Accordion key={i} dangerouslyHtml={true} title={ac.title} active={active} setActive={setActive} toggleState={toggleState} content={ac.content} key={i} />
                                        );
                                    })}


                                </div>

                                {/* <AdressInformation direction={direction} /> */}
                                <div className={styles.right}>
                                    <AdressInformations direction={direction} appData={appData} />
                                    <div className={styles.qr_image_div}>
                                        <img src="/images/contactUsQr.jpeg" alt="" />
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