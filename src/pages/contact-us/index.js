
import { useDispatch, useSelector } from 'react-redux'
import styles from "./styles.module.scss"
import GlobalLayout from '../../components/layouts/GlobalLayout'
import { useCallback, useState } from 'react'
import Alert from '../../components/elements/alert/Alert'
import { checkLanguageAttributeOntheUrl } from '../../helpers/checkLanguageAttributeOntheUrl'
import { parse } from 'url';
import { fetchContent } from '../../helpers/fetchContent'



const INITIAL_FORM_VALUE = { email: "", phone: "", subject: "", message: "", fullname: "", }



const ContactUs = (props) => {
    let { bggray, env, mainCanonicalUrl } = props;
    const dispatch = useDispatch();

    const state = useSelector(state => state.pickUpDropOffActions);
    let { params: { direction, language } } = state;
    const { appData } = useSelector(state => state.initialReducer);

    const [formValue, setFormValue] = useState(INITIAL_FORM_VALUE);
    const [error, setError] = useState({});
    const [isChatOpen, setIsChatOpen] = useState(false);

    // --- ZENDESK LOGIC ---
    const loadZendeskScript = (callback) => {
        if (document.getElementById("zendesk-widget-script")) {
            callback && callback();
            return;
        }
        const script = document.createElement("script");
        script.id = "zendesk-widget-script";
        script.src = `https://static.zdassets.com/ekr/snippet.js?key=${process.env.zendeskKey || env?.zendeskKey}`;
        script.async = true;
        script.onload = () => { callback && callback(); };
        document.body.appendChild(script);
    };

    const toggleZendeskWidget = useCallback((e) => {
        e.preventDefault();
        const openChat = () => {
            window.zE("webWidget", "show");
            window.zE("webWidget", "open");
            setIsChatOpen(true);
        };
        const closeChat = () => {
            window.zE("webWidget", "close");
            setIsChatOpen(false);
        };

        if (typeof window !== "undefined" && typeof window.zE !== "undefined") {
            isChatOpen ? closeChat() : openChat();
        } else {
            loadZendeskScript(() => {
                if (typeof window.zE !== "undefined") openChat();
            });
        }
    }, [isChatOpen]);

    // --- FORM LOGIC ---
    const onChangeHandler = (e) => {
        setFormValue((values) => ({ ...values, [e.target.name]: e.target.value }));
        if (error[e.target.name]) {
            setError((prev) => ({ ...prev, [e.target.name]: "" }));
        }
    };

    const handleSend = (e) => {
        e.preventDefault();
        let newErrors = {};
        let isValid = true;

        // Tüm alanları kontrol et
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
            const mailBodyContent = `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 10px; padding: 20px; color: #333;">
    <h2 style="color: #007bff; border-bottom: 2px solid #007bff; padding-bottom: 10px;">New Contact Form Submission</h2>
    
    <div style="margin-bottom: 15px;">
      <strong style="color: #555;">Full Name:</strong> 
      <span style="display: block; padding: 5px 0; font-size: 16px;">${formValue.fullname}</span>
    </div>

    <div style="margin-bottom: 15px; background: #f9f9f9; padding: 10px; border-radius: 5px;">
      <div style="margin-bottom: 5px;">
        <strong style="color: #555;">Email:</strong> <br/>
        <a href="mailto:${formValue.email}" style="color: #007bff; text-decoration: none;">${formValue.email}</a>
      </div>
      <div>
        <strong style="color: #555;">Phone:</strong> <br/>
        <span>${formValue.phone}</span>
      </div>
    </div>

    <div style="margin-bottom: 20px;">
      <strong style="color: #555;">Subject:</strong>
      <p style="margin: 5px 0; font-style: italic;">${formValue.subject}</p>
    </div>

    <div style="margin-bottom: 20px;">
      <strong style="color: #555;">Message:</strong>
      <div style="background: #fff; border-left: 4px solid #007bff; padding: 10px 15px; margin-top: 5px; line-height: 1.6; white-space: pre-wrap;">
        ${formValue.message}
      </div>
    </div>

    <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
    
    <p style="font-size: 12px; color: #888; text-align: center;">
      This email was sent via the website contact form APL.
    </p>
  </div>
`;

            const body = JSON.stringify({
                senderId: 1,
                reciverMails: ["info@aplcars.com"],
                subject: `Contact Form: ${formValue.subject}`,
                mailContent: mailBodyContent
            });
            let reqOptions = { method, body, headers, };

            fetch(`${env.apiDomain}/tools/mailer`, reqOptions)
                .then((res) => handleSuccess(res))
                .catch(handleCatchError);
        } else {
            setError((error) => ({ ...error, ...newErrors }));
        }
    };

    const handleSuccess = (res) => {
        dispatch({ type: "ALERT", payload: { loading: false } });
        if (res.status === 200) {
            dispatch({ type: "ALERT", payload: { success: "Email successfully sent" } });
            resetForm();
        } else {
            dispatch({ type: "ALERT", payload: { errors: "Failed to send email" } });
        }
    };

    const handleCatchError = () => {
        dispatch({ type: "ALERT", payload: { errors: "Something went wrong" } });
        resetForm();
    };

    const resetForm = () => {
        setError({});
        setFormValue(INITIAL_FORM_VALUE);
    };

    return (
        <GlobalLayout mainCanonicalUrl={mainCanonicalUrl} title="Contact Us" keywords="Contact Us" description="Contact Us" footerbggray={true}>
            <div className={`${styles.contact_us} ${direction} page`} bggray={String(bggray === "true")}>
                <div className={`${styles.contact_us_section} page_section`}>
                    <Alert />
                    <div className={`${styles.contact_us_section_container} page_section_container`}>
                        <div className={styles.contact_area}>
                            <div className={styles.contact_container}>
                                <div className={styles.wrapper}>
                                    <div className={styles.container}>

                                        {/* HEADER */}
                                        <header className={styles.header}>
                                            {/* <h1>Let’s get you moving.</h1> */}
                                            <h1>{appData.words["strWeLoveToHearFromYou"]}</h1>
                                            {/* <p>Need a quick answer? We typically reply within <span className={styles.highlightBadge}>15 minutes</span>.</p> */}
                                            <p>{appData.words["strSendUsAMessageAnd"]}</p>
                                        </header>

                                        {/* ACTION BAR */}
                                        <div className={styles.actionBar}>
                                            <a href="#" onClick={toggleZendeskWidget} className={styles.actionCard}>
                                                <div className={`${styles.acIcon} ${styles.zen}`}><i className="fa-solid fa-comments"></i></div>
                                                <div className={styles.acText}>
                                                    <h3>{appData.words["strLiveChat"]}</h3>
                                                    <span>{appData.words["strWebSupport"]}</span>
                                                </div>
                                            </a>

                                            <a href={`https://wa.me/${appData.config.configAPLWhatsappNumber}`} target="_blank" rel="noreferrer" className={styles.actionCard}>
                                                <div className={`${styles.acIcon} ${styles.wa}`}><i className="fa-brands fa-whatsapp"></i></div>
                                                <div className={styles.acText}>
                                                    <h3>{appData.words["strWhatsAppUs"]}</h3>
                                                    <span>{appData.words["strDirectMessage"]}</span>
                                                </div>
                                            </a>

                                            <a href="tel:+442086887744" className={styles.actionCard}>
                                                <div className={`${styles.acIcon} ${styles.ph}`}><i className="fa-solid fa-phone"></i></div>
                                                <div className={styles.acText}>
                                                    <h3>+44 208 6887744</h3>
                                                    <span>{appData.words["appContactUsHotLine"]}</span>
                                                </div>
                                            </a>
                                        </div>


                                        {/* SOL TARAF: FORM */}
                                        <div className={styles.mainGrid}>

                                            {/* SOL TARAF: FORM */}
                                            <div className={styles.tile}>
                                                <form onSubmit={handleSend}>

                                                    {/* 1. SATIR: İSİM ve EMAIL */}
                                                    <div className={styles.row}>
                                                        <div className={styles.formGroup}>
                                                            <input
                                                                type="text"
                                                                name="fullname"
                                                                style={error.fullname ? { borderColor: '#ef4444' } : {}}
                                                                className={`${styles.inputControl} ${formValue.fullname ? styles.activeInput : ''}`}
                                                                onChange={onChangeHandler}
                                                                value={formValue.fullname}
                                                            />
                                                            <label className={styles.floatingLabel}>
                                                                {appData?.words["appContactUsFormFullname"] || "Full Name"}
                                                            </label>
                                                        </div>
                                                        <div className={styles.formGroup}>
                                                            <input
                                                                type="email"
                                                                name="email"
                                                                style={error.email ? { borderColor: '#ef4444' } : {}}
                                                                className={`${styles.inputControl} ${formValue.email ? styles.activeInput : ''}`}
                                                                onChange={onChangeHandler}
                                                                value={formValue.email}
                                                            />
                                                            <label className={styles.floatingLabel}>
                                                                {appData?.words["appContactUsEmailAddress"] || "Email Address"}
                                                            </label>
                                                        </div>
                                                    </div>

                                                    {/* 2. SATIR: TELEFON ve KONU (YENİ EKLENDİ) */}
                                                    <div className={styles.row}>
                                                        <div className={styles.formGroup}>
                                                            <input
                                                                type="tel"
                                                                name="phone"
                                                                style={error.phone ? { borderColor: '#ef4444' } : {}}
                                                                className={`${styles.inputControl} ${formValue.phone ? styles.activeInput : ''}`}
                                                                onChange={onChangeHandler}
                                                                value={formValue.phone}
                                                            />
                                                            <label className={styles.floatingLabel}>
                                                                {appData?.words["appContactUsFormPhone"] || "Phone Number"}
                                                            </label>
                                                        </div>
                                                        <div className={styles.formGroup}>
                                                            <input
                                                                type="text"
                                                                name="subject"
                                                                style={error.subject ? { borderColor: '#ef4444' } : {}}
                                                                className={`${styles.inputControl} ${formValue.subject ? styles.activeInput : ''}`}
                                                                onChange={onChangeHandler}
                                                                value={formValue.subject}
                                                            />
                                                            <label className={styles.floatingLabel}>
                                                                {appData?.words["appContactUsFormSubject"] || "Subject"}
                                                            </label>
                                                        </div>
                                                    </div>

                                                    {/* MESAJ ALANI */}
                                                    <div className={styles.formGroup}>
                                                        <textarea
                                                            rows="6"
                                                            name="message"
                                                            style={error.message ? { borderColor: '#ef4444' } : {}}
                                                            className={`${styles.inputControl} ${formValue.message ? styles.activeInput : ''}`}
                                                            onChange={onChangeHandler}
                                                            value={formValue.message}
                                                        ></textarea>
                                                        <label className={styles.floatingLabel}>
                                                            {appData?.words["appContactUsFormMessage"] || "How can we help?"}
                                                        </label>
                                                    </div>

                                                    <button type="submit" className={styles.submitBtn}>
                                                        {appData?.words["appContactUsFormButton"] || "Send Message"} <i className="fa-solid fa-paper-plane"></i>
                                                    </button>
                                                </form>

                                                <div className={styles.faqBox}>
                                                    <div className={styles.faqContent}>
                                                        <div className={styles.faqLinkWrapper} style={{ marginBottom: '10px', display: 'flex' }}>
                                                            <i className={`fa-solid fa-circle-question ${styles.faqIcon}`}></i>
                                                            <a href="https://www.airport-pickups-london.com/faq" className={styles.faqLink} style={{ marginLeft: '8px' }}>
                                                                {appData?.words["strNeedhelp"] || "Need Help?"}
                                                            </a>
                                                        </div>
                                                        <p style={{ display: 'flex', gap: '8px', fontSize: '0.9rem', color: '#64748b' }}>
                                                            <i className={`fa-solid fa-location-dot ${styles.faqIcon}`}></i>
                                                            Airport Pickups London, APL Office, Novotel Heathrow, Cherry Lane, West Drayton, London, UB7 9HJ
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* SAĞ TARAF: BİLGİ & QR */}
                                            <div className={styles.stack}>

                                                <div className={`${styles.tile} ${styles.paddingSmall}`}>
                                                    <div className={styles.infoCard}>
                                                        <div className={styles.infoIcon}><i className="fa-solid fa-envelope"></i></div>
                                                        <div>
                                                            <h4>{appData.words["strEmail"]}</h4>
                                                            <a href="mailto:info@aplcars.com">info@aplcars.com</a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={`${styles.tile} ${styles.paddingSmall}`}>
                                                    <div className={styles.infoCard}>
                                                        <div className={styles.infoIcon} style={{ background: '#e0eaff', color: '#0B3A82' }}><i className="fa-solid fa-briefcase"></i></div>
                                                        <div>
                                                            <h4>{appData.words["strCorporateAccounts"]}</h4>
                                                            <p>{appData.words["strBusinessSupport"]}</p>
                                                        </div>
                                                    </div>

                                                    <div className={styles.corpSection}>
                                                        <div className={styles.corpLabel}>{appData.words["strAccountDepartment"]}</div>
                                                        <div className={styles.corpCard}>
                                                            <a href="mailto:accounts@aplcars.com" className={styles.corpLink}>
                                                                <div>
                                                                    <span className={styles.corpName}>{appData.words["strAccountsTeam"]}</span>
                                                                    <span className={styles.corpEmail}>accounts@aplcars.com</span>
                                                                </div>
                                                                <i className="fa-solid fa-chevron-right" style={{ color: '#cbd5e1', fontSize: '12px' }}></i>
                                                            </a>
                                                        </div>

                                                        <div className={styles.corpLabel}>{appData.words["strCorporateAccountManager"]}</div>
                                                        <div className={styles.corpCard}>
                                                            <a href="mailto:oliver@aplcars.com" className={styles.corpLink}>
                                                                <div>
                                                                    <span className={styles.corpName}>Mr. Oliver Derek</span>
                                                                    <span className={styles.corpEmail}>oliver@aplcars.com</span>
                                                                </div>
                                                                <i className="fa-solid fa-chevron-right" style={{ color: '#cbd5e1', fontSize: '12px' }}></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* QR GÖRSELİ */}
                                                <div className={`${styles.tile} ${styles.qrCodes}`} style={{ padding: 0, overflow: 'hidden', justifyContent: 'center' }}>
                                                    <img
                                                        src="/images/others/contactUsQr.png"
                                                        alt="Contact QR Code"
                                                        className={styles.qrImage}
                                                    />
                                                </div>

                                            </div>
                                        </div>

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