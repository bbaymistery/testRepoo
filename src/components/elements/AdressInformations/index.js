import React from 'react'
import styles from "./styles.module.scss"
const AdressInformations = ({ direction, appData }) => {
    return (
        <div className={styles.right}>
            <div className={styles.form_box}>
                <div className={styles.form_title_wrap}>
                    <div className={styles.form_title_wrap}>
                        <h3 className={styles.title}>  {appData.words["appContactUsHeader"]}</h3>
                    </div>

                    <div className={styles.form_content}>
                        <div className={styles.address_book}>
                            <ul tabIndex="-1">
                                <li tabIndex="-1">
                                    <i className="fa-solid fa-phone"></i>
                                    <h5 className="title font-size-16 pb-1">{appData?.words["appContactUsHotLine"]}</h5>
                                    {direction === 'rtl' ?
                                        <a style={{ flexDirection: "row-reverse", justifyContent: "flex-end", display: 'flex' }} href="tel:+442086887744" >
                                            <span>  + </span> 4402086830884
                                        </a>
                                        :
                                        <a href="tel:+442086887744" >+44 208 6887744</a>
                                    }
                                </li>
                                <li tabIndex="-1">
                                    <i className="fa-solid fa-globe"></i>
                                    <h5 className="title font-size-16 pb-1">{appData?.words["strFromAbroad"]}</h5>
                                    {direction === 'rtl' ?
                                        <a style={{ flexDirection: "row-reverse", justifyContent: "flex-end", display: 'flex' }} href="tel:+442086887744" >
                                            <span>  + </span> 4402086830884
                                        </a>
                                        :
                                        <a href="tel:+442086887744" >+44 208 6887744</a>
                                    }
                                </li>
                                
                                <li tabIndex="-1">
                                    <i className="fa-brands fa-whatsapp"></i>
                                    <h5 className="title font-size-16 pb-1">{appData?.words["strWhatsAppUs"]}</h5>
                                    {direction === 'rtl' ?
                                        <a style={{ flexDirection: "row-reverse", justifyContent: "flex-end", display: 'flex' }} target="_blank" href="https://api.whatsapp.com/send/?phone=447387901028&text&type=phone_number&app_absent=0">
                                            <span>  + </span>
                                            44 73 8790 1028
                                        </a>
                                        : <a target="_blank" href="https://api.whatsapp.com/send/?phone=447387901028&text&type=phone_number&app_absent=0">
                                            +44 73 8790 1028
                                        </a>


                                    }
                                </li>


                                <li tabIndex="-1">
                                    <i className="fa-solid fa-envelope"></i>
                                    <h5 className="title font-size-16 pb-1">{appData?.words["appContactUsEmailAddress"]}</h5>
                                    <a href="mailto: info@aplcars.com"> info@aplcars.com</a>
                                </li>


                                <li>
                                    <i className="fa-solid fa-briefcase"></i>
                                    <h5 className="title font-size-16 pb-1">{appData?.words["strAccountDepartment"]}</h5>
                                    <a href="mailto: accounts@aplcars.com"> accounts@aplcars.com</a>
                                </li>

                                <li>
                                    <i className="fa-solid fa-building-user"></i>
                                    <h5 className="title font-size-16 pb-1"> {appData?.words["strCorporateAccountManager"]}</h5>
                                    <p>
                                        <span>  Mr. Oliver Derek</span>
                                        <br />
                                        <a href="mailto: oliver@aplcars.com"> oliver@aplcars.com</a>
                                    </p>
                                </li>
                                <li>
                                    <i className="fa-solid fa-users"></i>
                                    <h5 className="title font-size-16 pb-1">{appData?.words["appContactUsWebmasterAddress"]}</h5>
                                    <a href="mailto: web@aplcars.com"> web@apalcars.com</a>
                                </li>


                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdressInformations