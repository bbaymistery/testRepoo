import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useDispatch } from "react-redux";
import { SET_SELECT_ACTIVE_LINK } from "../../store/pickUpDropOffReducer/pickUpDropTypes";
import Layout from "../../components/layouts/Layout";
import TextInput from "../../components/elements/TextInput";
import TextArea from "../../components/elements/TextArea";
import ContentLeft from "./ContentLeft";
import Alert from "../../components/elements/Alert";
import LoadingInput from "../../components/elements/LoadingInput";
import BreadCrumb from "../../components/elements/breadCrubm";
import LinkBreadCumb from "../../components/elements/LinkBreadcumb";
const title = "Contact London Heathrow Taxi | 24/7 Heathrow Taxi Support & Bookings"
const description = "Contact London Heathrow Taxi Ltd. 24/7 support for Heathrow Airport transfers. Phone +44 20 3887 3844, WhatsApp +44 73 8790 1028, email info@london-heathrow.taxi. Office: Orega Offices, 4 Longwalk Road, Uxbridge, UB11 1FE"
const Contact = (props) => {
  const { env } = props;

  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState({ email: "", phone: "", subject: "", message: "", fullname: "", });
  const [error, setError] = useState({ email: "", phone: "", subject: "", message: "", fullname: "", });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ alert: false, message: "", close: false, });
  const [crumbs, setCrumbs] = useState([{ linkName: "/", name: "home" }, { linkName: "/contact", name: "Contact" }]);

  const onchangeHandler = (e) => {
    setFormValue((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const handleSuccess = (res) => {
    dispatch({ type: "ALERT", payload: { loading: false } });
    if (res.ok) {
      setAlert({ alert: true, close: true, message: "Email successfully sent", });
      // Clear form
      setFormValue({ email: "", phone: "", subject: "", message: "", fullname: "", });
      // Clear errors
      setError({});
    } else {
      setAlert({ alert: true, close: true, error: true, message: "Something went wrong", });
    }
  };

  const handleCatchError = (e) => {
    console.log("ERROR:", e);
    dispatch({ type: "ALERT", payload: { loading: false } });

    setAlert({ alert: true, close: true, error: true, message: "Something went wrong", });
  };

  const handleSend = async () => {
    let newErrors = {};
    let isValid = true;

    // Required validation
    Object.keys(formValue).forEach((key) => {
      if (!formValue[key]) {
        newErrors[key] = "Required";
        isValid = false;
      }
    });

    if (!isValid) {
      setError((error) => ({ ...error, ...newErrors }));
      return;
    }

    // Start loading
    dispatch({ type: "ALERT", payload: { loading: true } });

    try {
      const method = "POST";
      const headers = {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      };

      const body = JSON.stringify({
        senderId: 2,
        reciverMails: ["info@aplcars.com"],
        subject: formValue.subject,
        mailContent: `<div>
  <p><strong>Phone:</strong> ${formValue.phone}</p>
  <p><strong>Email:</strong> ${formValue.email}</p>
  <p><strong>Message:</strong><br/>${formValue.message}</p>
</div>`,
      });

      const reqOptions = { method, headers, body };

      const res = await fetch(`${env.apiDomain}/tools/mailer`, reqOptions);
      console.log(res);

      handleSuccess(res);
    } catch (e) {
      handleCatchError(e);
    }
  };

  useEffect(() => {
    dispatch({ type: SET_SELECT_ACTIVE_LINK, payload: "contact", });
  }, []);

  return (
    <Layout title={title} keywords="" description={description} noFooter={false} noTopbar={true} >
      <div className={`page ${styles.contact_page}`}>
        <BreadCrumb title="" />
        <div className={`page_section ${styles.contact_page_section}`}>
          <div className={` ${styles.contact_page_section_container}`}>
            {alert.alert ? (<Alert setAlert={setAlert} alert={alert} message={alert.message} close={alert.close} error={alert.error} warning={alert.warning} />) : ("")}
               <div className={styles.div_breadcrumb}>
              <LinkBreadCumb crumbs={crumbs} />
            </div>
            <h1>Contact London Heathrow Taxi</h1>
            <p className={styles.pdesc}>
              We’re here <strong>24 hours a day, 7 days a week</strong> to help with bookings, price quotes, amendments, or general enquiries about your Heathrow Airport transfer.
              <br />
              Whether you need to confirm a pickup, arrange a last-minute transfer,
              or get assistance with your reservation, our team is ready to help by <strong>phone, WhatsApp, or email</strong>
            </p>
            <div className={styles.form_content}>
              <ContentLeft />
              <div className={styles.form_content_right}>
                <div className={styles.form_content_right_title}>
                  Send a Message
                </div>

                <div className={styles.form}>
                  <div className={styles.form_left}>
                    <div className={styles.inp_div}>
                      <TextInput
                        name="fullname"
                        type="text"
                        animationInput={true}
                        contactUs={true}
                        title="Full Name"
                        value={formValue.fullname}
                        onChange={(e) => onchangeHandler(e)}
                        errorMessage={
                          !formValue.fullname && error.fullname
                            ? error.fullname
                            : ""
                        }
                      />
                    </div>
                    <div className={styles.inp_div}>
                      <TextInput
                        name="email"
                        type="text"
                        contactUs={true}
                        animationInput={true}
                        title="Email Address"
                        value={formValue.email}
                        onChange={(e) => onchangeHandler(e)}
                        errorMessage={
                          !formValue.email && error.email ? error.email : ""
                        }
                      />
                    </div>
                  </div>

                  <div className={styles.form_right}>
                    <div className={styles.inp_div}>
                      <TextInput
                        name="phone"
                        type="text"
                        contactUs={true}
                        animationInput={true}
                        title="Phone"
                        onChange={(e) => onchangeHandler(e)}
                        value={formValue.phone}
                        errorMessage={
                          !formValue.phone && error.phone ? error.phone : ""
                        }
                      />
                    </div>
                    <div className={styles.inp_div}>
                      <TextInput
                        name="subject"
                        type="text"
                        animationInput={true}
                        contactUs={true}
                        title="Subject"
                        onChange={(e) => onchangeHandler(e)}
                        value={formValue.subject}
                        errorMessage={
                          !formValue.subject && error.subject
                            ? error.subject
                            : ""
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.special_div}>
                  <TextArea
                    name="message"
                    animationTextarea={true}
                    title="Write Your Message Here"
                    onChange={(e) => onchangeHandler(e)}
                    value={formValue.message}
                    errorMessage={
                      !formValue.message && error.message ? error.message : ""
                    }
                  />
                </div>

                <div className={styles.btn_div}>
                  <button type="button" onClick={handleSend}>
                    {loading ? <LoadingInput /> : "SEND"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
