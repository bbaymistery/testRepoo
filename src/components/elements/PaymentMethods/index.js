import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment-timezone";
import { useRouter } from "next/router";
import { getPriceDetailsFromQuotation } from "../../../helpers/getPriceDetailsFromQuotation";
import { collectQuotationsAsync } from "../../../helpers/getQuotations";
import { postDataAPI } from "../../../helpers/fetchDatas";
const PaymentMethods = (props) => {
  let { env } = props

  const router = useRouter()
  const dispatch = useDispatch()
  let state = useSelector((state) => state.pickUpDropOffActions)
  let { params: { journeyType, tokenForArchieve, sessionToken, direction, language }, reservations } = state
  const { appData, paymentTypes } = useSelector(state => state.initialReducer)
  const updatedReservationsRef = useRef(reservations); // ilk değeri mevcut reservations

  const [iframeStripe, setIframeStripe] = useState("");
  const [dataTokenForWebSocket, setDataTokenForWebSocket] = useState("");
  const [statusToken, setStatusToken] = useState("");
  const [popUpWindow, setPopUpWindow] = useState("")//for paypal

  const [cashPaymentModal, setCashPaymentModal] = useState(false)
  const fetchArchieveToken = async (params = {}) => {
    let { token, paymentType, stage, updatedReservations } = params

    let reservationObj = updatedReservations

    if (parseInt(journeyType) === 1) {
      reservationObj = [
        {
          ...reservationObj[0],
          paymentDetails:
          {
            ...reservationObj[0].paymentDetails,
            token: token,
            paymentType: paymentType,
          },
        },
        {
          ...reservationObj[1],
          paymentDetails:
          {
            ...reservationObj[1].paymentDetails,
            token: token, paymentType: paymentType,
          },
        }
      ]
    } else {
      reservationObj = [{ ...reservationObj[0], paymentDetails: { ...reservationObj[0].paymentDetails, token: token, paymentType: paymentType, }, },]
    }
    const method = "POST"
    const url = `${env.apiDomain}/api/v1/sessions/add`;
    const body = JSON.stringify({ token: tokenForArchieve, details: reservationObj, stage })
    const headers = { "Content-Type": "application/json" }
    const response = await fetch(url, { method, body, headers });
    const data = await response.json();
    console.log({ data, stage });

  };
  //sadece paypal icin bunu saxladim
  const openPopUpWindow = (params = {}) => {
    let { statusOfWindowCloseOrOpen, url } = params
    if (statusOfWindowCloseOrOpen === 'open') {
      let windowOptions = `menubar=no,location=yes,toolbar=no,left=${window.screen.width / 2 - 550 / 2},width=550,height=800`;
      let willPopUp
      willPopUp = window?.open(url, "_blank", windowOptions);
      setPopUpWindow(willPopUp)

    }
    if (statusOfWindowCloseOrOpen === 'close') {
      if (popUpWindow) {
        popUpWindow?.close();
      }
      setPopUpWindow("")
    }
  };
  //*payment methods
  const cashMethod = (params = {}) => {
    let { token, paymentType, updatedReservations } = params

    // if it is cash payment you have set payment type first of all then send archive
    fetchArchieveToken({ token: "", paymentType: "", stage: "CLICK_OVER_CASH_BUTTON", updatedReservations })
    dispatch({ type: "SET_PAYMENT_TYPE_AND_TOKEN", data: { token, paymentType } })

    router.push(`${language === 'en' ? "/reservations-document" : `${language}/reservations-document`}`)

  };
  const stripeMethod = (params = {}) => {
    let { id, quotations, passengerEmail, url, updatedReservations } = params
    if (!iframeStripe) {
      // if it is card payment you have set payment type first of all then send archive then
      fetchArchieveToken({ token: "", paymentType: 7, stage: "CLICK_OVER_CARD_BUTTON", updatedReservations })
      const method = "POST"
      const body = JSON.stringify({
        quotations,
        type: id,
        language: "en",
        passengerEmail,
        "session-id": sessionToken,

      })
      const headers = { "Content-Type": "application/json" }
      const config = { method, headers, body, };
      try {
        fetch(url, config)
          .then((res) => res.json())
          .then((data) => {

            setDataTokenForWebSocket(data); //we use inside interval in order to detect it is which payment
            setStatusToken(data?.webSocketToken); //it will trigger interval and will make request
            setIframeStripe(data?.href);
            openPopUpWindow({ statusOfWindowCloseOrOpen: "close", url: "" })
            setPopUpWindow("")

          })
          .catch((error) => {

            window.handelErrorLogs(error, 'APL PaymentMethods Component - stripeMethod function fetching catch blog  ', { config, url })
          });
      } catch (error) {
        window.handelErrorLogs(error, ' APL PaymentMethods Component - stripeMethod function try catch blog ', { id, quotations, passengerEmail, url })
      }
    }
  };
  const paypalMethod = ({ id, quotations, passengerEmail, url, popupRef, updatedReservations }) => {
    fetchArchieveToken({ token: "", paymentType: 5, stage: "CLICK_OVER_CARD_BUTTON", updatedReservations });

    const method = "POST";
    const headers = { "Content-Type": "application/json" };
    const body = JSON.stringify({
      quotations,
      type: id,
      language: "en",
      passengerEmail,
      "session-id": sessionToken,
    });

    const config = { method, headers, body };

    fetch(url, config)
      .then(res => res.json())
      .then(data => {
        setIframeStripe("");
        setDataTokenForWebSocket(data);
        setStatusToken(data.webSocketToken);
        popupRef.location.href = data.href;
        setPopUpWindow(popupRef);
      })
      .catch(error => {
        popupRef.close();
        window.handelErrorLogs(error, 'APL PaymentMethods Component - paypalMethod', { config, url });
      });
  };

  const checkQuotationPriceUpdatedOrNot = async (statusToken) => {
    const now = moment().tz("Europe/London");
    let updatedReservations = [...reservations];

    for (let index in updatedReservations) {
      const obj = updatedReservations[index];
      const { transferDetails, quotation: previousQuotation } = obj;
      const { transferDateTimeString } = transferDetails;

      const transferTime = moment.tz(transferDateTimeString, "YYYY-MM-DD HH:mm", "Europe/London");

      if (transferTime.isBefore(now)) {
        alert("Transfer time for reservation is in the past. Redirecting to home page.");
        router.push("/");
        return null;
      }
      let newQuotationsResponse = { status: 400 }
      let newQuotations = {}
      let newQuotationOptions = []
      //normal quotation api request again
      if (+previousQuotation.qtype === 1 || previousQuotation.qtype === 2) {
        newQuotationsResponse = await collectQuotationsAsync({ reservations, journeyType, env, message: "APL Payment methods checkQuotationPriceUpdatedOrNot() message" });
        if (newQuotationsResponse.status === 200) {

          newQuotations = newQuotationsResponse.data[index] || {}
          newQuotationOptions = (newQuotations || {}).quotationOptions || []
        }
      }

      //send taxiDeal request again
      if (+previousQuotation.qtype === 3) {
        const taxiDealApiUrl = `${env.apiDomain}/api/v1/taxi-deals/details`
        const body = {
          "taxiDealPathname": localStorage.getItem("path"),
          "language": language,
          "withoutExprectedPoints": true,
          "checkRedirect": false,
          "channelId": 2,
          transferDateTimeString,

        }
        const response = await postDataAPI({ url: taxiDealApiUrl, body, errorMessage: "+previousQuotation.qtype === 3 Try catch blog checkQuotationPriceUpdatedOrNot" });
        newQuotationsResponse = { data: [response.data], status: response.status }
        if (newQuotationsResponse.status === 200) {
          newQuotations = newQuotationsResponse.data[0] || {}
          newQuotationOptions = (newQuotations || {}).quotationOptions || []
        }
      }

      //send tour request again
      if (+previousQuotation.qtype === 4) {
        const tourApi = `${env.apiDomain}/api/v1/tour`

        const body = { "pathname": localStorage.getItem("path"), "language": language, transferDateTimeString, }
        const response = await postDataAPI({ url: tourApi, body, errorMessage: "+previousQuotation.qtype ===  4 Try catch blog checkQuotationPriceUpdatedOrNot" });
        newQuotationsResponse = { data: [response.data], status: response.status }

        if (newQuotationsResponse.status === 200) {
          newQuotations = newQuotationsResponse.data[0] || {}
          newQuotationOptions = (newQuotations || {}).quotationOptions || []
        }

      }

      if (newQuotationsResponse.status === 200) {
        const newQuotation = newQuotationOptions.find(item => item.carId === previousQuotation.carId);
        if (newQuotation && typeof newQuotation.normalPrice === 'number' && !isNaN(newQuotation.normalPrice)) {

          let prevQuotationDetails = getPriceDetailsFromQuotation({ 'quotation': previousQuotation, qtype: previousQuotation.qtype }).data || {};
          let newQuotationDetails = getPriceDetailsFromQuotation({ 'quotation': newQuotation, qtype: newQuotation.qtype }).data || {};
          //status tken is wether he started (clicked)to card payment or not
          if (newQuotationDetails.price !== prevQuotationDetails.price && !statusToken) {
            dispatch({ type: "GET_QUOTATION", data: { results: newQuotationsResponse, journeyType } });
            dispatch({ type: "SET_QUOTATION_ON_SPECIAL_CASE", data: { quotation: newQuotation, journeyType: index } });
          }

        }
        updatedReservations[index] = {
          ...updatedReservations[index],
          quotation: newQuotation,
        };
      }
    }
    return updatedReservations
  }

  //this function includes all the methods of payments
  const startPayment = async (id, popupRef = null) => {
    const updatedReservations = await checkQuotationPriceUpdatedOrNot(statusToken); // güncel hali getir
    updatedReservationsRef.current = updatedReservations; // ⬅️ ref’e ata

    const paymentPagePath = JSON.parse(paymentTypes.find(p => p.id === id)?.pagePath).path;
    const url = `${env.apiDomain}${paymentPagePath}`;
    const quotations = parseInt(journeyType) === 0
      ? [updatedReservations[0].quotation]
      : [updatedReservations[0].quotation, updatedReservations[1].quotation];

    const passengerEmail = updatedReservations[0].passengerDetails.email;

    if (id === 1) cashMethod({ token: "", paymentType: id, updatedReservations });
    if (id === 5) paypalMethod({ id, quotations, passengerEmail, url, popupRef, updatedReservations });
    if (id === 7) stripeMethod({ id, quotations, passengerEmail, url, updatedReservations });
  };



  //this function triggering modal status of cash payment
  const setCashModal = (par) => {
    setCashPaymentModal(true)
    setIframeStripe("")
    openPopUpWindow({ statusOfWindowCloseOrOpen: "close", url: "" })
    setPopUpWindow("")
    setStatusToken("");
    setDataTokenForWebSocket("")
  }
  //this is checking up interval for each second (payment suces or not)
  useEffect(() => {
    let interVal;

    if (statusToken) {

      interVal = setInterval(async () => {
        const method = "POST"
        const headers = { "Content-Type": "application/json", }
        const body = JSON.stringify({ token: statusToken })
        const url = `${env.apiDomain}/api/v1/payment/status`;
        let config = { method, headers, body };

        try {
          let requ = await fetch(url, config);
          let resp = await requ.json();

          if (resp?.status === 200) {
            //after you get a success payment status and after set a token into paymentDEtails object then send archive
            window.scroll({ top: 0, left: 0, behavior: "smooth", });

            if (dataTokenForWebSocket?.href?.includes("stripe")) {
              fetchArchieveToken({ token: resp.data.token, paymentType: 7, stage: "GET_SUCCESS_CARD_PAYMENT", updatedReservations: updatedReservationsRef.current })
              dispatch({ type: "SET_PAYMENT_TYPE_AND_TOKEN", data: { token: resp.data.token, paymentType: 7, } })
              setIframeStripe("");
              setStatusToken("");
              router.push(`${language === 'en' ? "/reservations-document" : `${language}/reservations-document`}`)

            }

            if (dataTokenForWebSocket?.href?.includes("paypal")) {
              fetchArchieveToken({ token: resp.data.token, paymentType: 5, stage: "GET_SUCCESS_CARD_PAYMENT", updatedReservations: updatedReservationsRef.current })
              dispatch({ type: "SET_PAYMENT_TYPE_AND_TOKEN", data: { token: resp.data.token, paymentType: 5, } })
              openPopUpWindow({ statusOfWindowCloseOrOpen: "close", url: "" })
              setStatusToken("");
              router.push(`${language === 'en' ? "/reservations-document" : `${language}/reservations-document`}`)
            }
            clearInterval(interVal);
          }
        } catch (error) {
          let message = "APL  PaymentMethods Component - useEffect statusToken catch blog  "
          window.handelErrorLogs(error, message, { config })
        }
      }, 2000);
    }
    return () => clearInterval(interVal);
  }, [statusToken]);

  useEffect(() => {
    //make interval to check if pop  up windiw closed or not
    //if yes then initialize status token
    const interval = setInterval(() => {
      if (popUpWindow.closed) {
        clearInterval(interval);
        setStatusToken("")
        setPopUpWindow("")
        setDataTokenForWebSocket("")
      }
    }, 500);
    return () => clearInterval(interval);
  }, [popUpWindow])




  return (
    <>
      <div className={`${styles.payment_details}`}>
        <div className={styles.header} direction={String(direction === 'rtl')}>
          <div className={styles.header_top}>
            <h2 className={`${styles.header_top_title} ${direction}`} > {appData?.words["strHowWouldYouLikeToPay"]}</h2>
            <Link href={"/terms"} target="_blank" >
              <p className={styles.header_top_subtitle} direction={String(direction === 'rtl')}>
                <i className="fa-solid fa-check"></i>
                <span dangerouslySetInnerHTML={{ __html: (appData?.words["strByProceedingNote"].replace("_link_", "/terms")) }} />
              </p>
            </Link>
          </div>
          <div className={styles.header_tot_price} direction={String(direction === 'rtl')}>
            <p className={styles.header_tot_price_text}>{appData?.words["strTotalPrice"]}</p>
            <span className={styles.header_tot_price_price}>
              £ {parseInt(journeyType) === 0 ? reservations[0].quotation.price : parseInt(reservations[0].quotation.price) + parseInt(reservations[1].quotation.price)}
            </span>
          </div>
        </div>

        <div className={styles.payment_list}>
          {iframeStripe?.length > 0 ? <iframe src={iframeStripe} className={styles.iframe} frameBorder="0" allow="payment" ></iframe> : <React.Fragment></React.Fragment>}
          {/* */}

          <div className={`${styles.items_buttons}`}>
            <div title={appData?.words["strToDriverCashTitle"]} onClick={setCashModal} className={` ${styles.item} ${styles.item_1}`}   >
              <p>{appData?.words["strToDriverCashTitle"]}</p>
              <img src="/images/others/pp.jpg" alt="" />
            </div>
            {/* {<div title={appData?.words["Pay with PayPal"]} onClick={() => startPayment(5)} className={` ${styles.item} ${styles.item_2}`}   >
              <p>{appData?.words["strPaywithPayPal"]} </p>
              <img src="/images/others/paypal.png" alt="" />
            </div>
            } */}
            <div
              title={appData?.words["Pay with PayPal"]}
              onClick={() => {
                // ✅ Zaten açık bir popup varsa tekrar açma
                if (popUpWindow && !popUpWindow.closed) {
                  popUpWindow.focus(); // mevcut popup'a odaklan
                  return;
                }

                const popup = window.open("about:blank", "_blank", "width=550,height=800");

                if (!popup) {
                  alert("Popup blocked! Please enable popups for this website.");
                  return;
                }

                popup.document.write(`
      <html>
        <head><title>PayPal</title></head>
        <body style="text-align:center; padding:50px;">
          <h3>Loading PayPal...</h3>
          <p>Please wait.</p>
        </body>
      </html>
    `);
                popup.document.close();

                setPopUpWindow(popup); // popup state'ine yazıyoruz
                startPayment(5, popup); // popup'ı gönderiyoruz
              }}
              className={` ${styles.item} ${styles.item_2}`}
            >
              <p>{appData?.words["strPaywithPayPal"]}</p>
              <img src="/images/others/paypal.png" alt="" />
            </div>

            {<div onClick={() => startPayment(7)} title={appData?.words["strPaybycard"]} className={`${styles.item} ${styles.item_4}`}   >
              <p>{appData?.words["strPaybycard"]} </p>
              <img src="/images/others/vsMaster.jpg" alt="" />
            </div>}
          </div>

          {cashPaymentModal ?
            <div className={`${styles.content_modal} ${styles.appear}`}>
              <div className={`${styles.confirmation_box} `}>
                <div className={styles.header}>
                  <p>{appData?.words["strConfirmation"]}</p>
                  <i onClick={() => setCashPaymentModal(false)} className="fa-solid fa-xmark"></i>
                </div>
                <div className={styles.body}>
                  <p>{appData?.words["strYouHaveChosenToPayByCash"]}.</p>
                </div>
                <div className={styles.footer}>
                  <button onClick={() => startPayment(1)} className="btn btn_primary"> {appData?.words["strBookNow"]}</button>
                </div>
              </div>
            </div>
            : <></>}
        </div>
      </div>
    </>
  );
};

export default PaymentMethods;
