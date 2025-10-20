import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  selectArchieveToken,
  selectedJourneyType,
  selectedReturnQuot,
  selectedTransferQuot,
  selectPickUpDropOffReducer,
  transferPassengerEmail,
  transferPassengerPhone,
} from "../../../store/pickUpDropOffReducer/pickUpDropSelectors.js";
import { setPayment } from "../../../store/pickUpDropOffReducer/pickUpDropAction";

import { useRouter } from "next/router";


const PaymentDetail = (props) => {
  let { setConfirmation, env } = props
  const dispatch = useDispatch();
  const router = useRouter();
  const trQuot = useSelector(selectedTransferQuot);
  const trEmail = useSelector(transferPassengerEmail);
  const trPhone = useSelector(transferPassengerPhone);
  const selectedArchieveToken = useSelector(selectArchieveToken);

  const returnQuot = useSelector(selectedReturnQuot);
  const journeyType = useSelector(selectedJourneyType);
  const { paymentTypes, reservations, cookies } = useSelector(
    selectPickUpDropOffReducer
  );

  const [dataTokenForWebSocket, setDataTokenForWebSocket] = useState("");

  const [iframeStripe, setIframeStripe] = useState("");
  const [statusToken, setStatusToken] = useState("");
  const [popUpWindow, setPopUpWindow] = useState("")//for paypal
  const popUpWindowRef = useRef(null); // 👈 popup referansı için
  const fetchArchieveToken = async (params = {}) => {
    let { token, paymentType, stage } = params

    let reservationObj = [reservations[0]];

    if (reservations[0].selectedPickupPoints.length === 1 && reservations[1].selectedDropoffPoints.length === 1) {
      reservationObj = reservations
    }

    if (reservationObj.length > 1) {
      reservationObj = [
        {
          ...reservationObj[0],
          paymentDetails: {
            ...reservationObj[0].paymentDetails,
            token: token,
            paymentType: paymentType,
          },
        },
        {
          ...reservationObj[1],
          paymentDetails: {
            ...reservationObj[1].paymentDetails,
            token: token,
            paymentType: paymentType,
          },
        }
      ]
    } else {
      reservationObj = [
        {
          ...reservationObj[0],
          paymentDetails: {
            ...reservationObj[0].paymentDetails,
            token: token,
            paymentType: paymentType,
          },
        },
      ]
    }
    let url = `${env.apiDomain}/api/v1/sessions/add`;

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        token: selectedArchieveToken,
        details: reservationObj,
        stage,

      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log({ data, reservationObj, stage });

  };

  //sadece paypal icin bunu saxladim
  const openPopUpWindow = (params = {}) => {
    let { statusOfWindowCloseOrOpen, url } = params

    // if (statusOfWindowCloseOrOpen === 'open') {
    //   let windowOptions = `menubar=no,location=yes,toolbar=no,left=${window.screen.width / 2 - 550 / 2},width=550,height=800`;
    //   let willPopUp
    //   willPopUp = window?.open(url, "_blank", windowOptions);


    //   setPopUpWindow(willPopUp)

    // }
    // if (statusOfWindowCloseOrOpen === 'close') {
    //   if (popUpWindow) {
    //     popUpWindow?.close();
    //   }
    //   setPopUpWindow("")
    // }

    if (statusOfWindowCloseOrOpen === 'open') {
      let windowOptions = `menubar=no,location=yes,toolbar=no,left=${window.screen.width / 2 - 550 / 2},width=550,height=800`;
      let willPopUp = window?.open(url, "_blank", windowOptions);
      setPopUpWindow(willPopUp);
      popUpWindowRef.current = willPopUp; // 👈 ref de güncellensin
    }
    if (statusOfWindowCloseOrOpen === 'close') {

      if (popUpWindowRef.current) {
        popUpWindowRef.current?.close(); // 👈 garanti kapatma
        popUpWindowRef.current = null;
      }
      setPopUpWindow("");
    }
  };
  //*payment methods
  const cashMethod = (params = {}) => {
    let { token, paymentType } = params

    fetchArchieveToken({ token: "", paymentType: "", stage: "CLICK_OVER_CASH_BUTTON" })
    setIframeStripe("")
    dispatch(setPayment(1, "", router));
    openPopUpWindow({ statusOfWindowCloseOrOpen: "close", url: "" })
    setPopUpWindow("")
  };
  const stripeMethod = (params = {}) => {
    let { id, quotations, passengerEmail, url } = params
    if (!iframeStripe) {
      // if it is card payment you have set payment type first of all then send archive then
      fetchArchieveToken({ token: "", paymentType: 7, stage: "CLICK_OVER_CARD_BUTTON" })
      const method = "POST"
      const body = JSON.stringify({
        quotations,
        type: id,
        language: "en",
        passengerEmail,
        "session-id": cookies.sessionToken,
        // mode: "sandbox",

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
            console.log(error);

            window.handelErrorLogs(error, 'HGT PaymentMethods Component - stripeMethod function fetching catch blog  ', { config, url })
          });
      } catch (error) {
        console.log(error);

        window.handelErrorLogs(error, ' HGT PaymentMethods Component - stripeMethod function try catch blog ', { id, quotations, passengerEmail, url })
      }
    }
  };
  const paypalMethod = (params = {}) => {

    let { id, quotations, passengerEmail, url } = params

    // if it is card payment you have set payment type first of all then send archive then
    fetchArchieveToken({ token: "", paymentType: 5, stage: "CLICK_OVER_CARD_BUTTON" })
    const method = "POST"
    const headers = { "Content-Type": "application/json" }
    const body = JSON.stringify({
      quotations,
      type: id,
      language: "en",
      passengerEmail,
      "session-id": cookies.sessionToken,
      mode: "sandbox",
    })
    const config = { method, headers, body, };


    try {
      if (!popUpWindow) {
        // 1️⃣ Açılır pencereyi hemen oluştur, ancak içeriği yükleme!
        let tempPopup = window.open(
          "about:blank", // Boş sayfa yerine bilgilendirici bir sayfa yükleyelim
          "_blank",
          "width=550,height=800"
        );

        // Eğer popup açılamadıysa hata mesajı ver
        if (!tempPopup) {
          alert("Popup blocked! Please check your browser settings.");
          return;
        }

        // 2️⃣ Popup içine bilgilendirici bir mesaj yaz
        tempPopup.document.write(`
        <html>
          <head><title>PayPal</title></head>
          <body style="text-align:center; padding:50px;">
            <h3>"Loading the payment page...</h3>
            <p>Please wait a few seconds.</p>
          </body>
        </html>
      `);
        tempPopup.document.close();

        fetch(url, config)
          .then((res) => res.json())
          .then((data) => {
            console.log({ data });

            setConfirmation(false);
            setIframeStripe("")//CLOSE OFRAME INSIDE OF Page (in case of if it was opened )
            setDataTokenForWebSocket(data);//we use inside interval in order to detect it is which payment
            setStatusToken(data.webSocketToken);//it will trigger interval and will make request
            // 4️⃣ Fetch tamamlandığında, popup'ı asıl URL'ye yönlendir
            tempPopup.location.href = data.href;
            setPopUpWindow(tempPopup);
          })
          .catch((error) => {
            tempPopup.close(); // Hata olursa popup'ı kapat
            window.handelErrorLogs(error, 'HGT PaymentMethods Component - paypalMethod function fetching catch blog  ', { config, url })
          });
      }
    } catch (error) {
      window.handelErrorLogs(error, ' HGT PaymentMethods Component - paypalMethod function try catch blog ', { id, quotations, passengerEmail, url })
    }
  };

  //this function includes all the methods of payments
  const startPayment = (id) => {

    setConfirmation(false)
    try {
      //general settings FOR PAYMENTS
      const paymentPagePath = JSON.parse(paymentTypes.filter((payment) => payment.id === id)[0].pagePath).path;


      const url = `${env.apiDomain}${paymentPagePath}`;

      let quotations = parseInt(journeyType) === 0 ? [reservations[0].quotation] : [reservations[0].quotation, reservations[1].quotation];

      let passengerEmail = reservations[0].passengerDetails.email;
      console.log({ passengerEmail });

      //Payment methods
      if (id === 1) cashMethod({ token: "", paymentType: id })
      if (id === 5) paypalMethod({ id, quotations, passengerEmail, url });
      if (id === 7) stripeMethod({ id, quotations, passengerEmail, url });
    } catch (error) {
      window.handelErrorLogs(error, 'HGT PaymentMethods Component -startPayment function trys catch blog', { id })

    }
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
          // console.log(resp);
          // console.log({ popUpWindow ,dataTokenForWebSocket});

          if (resp?.status === 200) {
            //after you get a success payment status and after set a token into paymentDEtails object then send archive
            window.scroll({ top: 0, left: 0, behavior: "smooth", });
            openPopUpWindow({ statusOfWindowCloseOrOpen: "close", url: "" })
            setStatusToken("");

            if (popUpWindow) {
              popUpWindow?.close();
            }
            if (dataTokenForWebSocket?.href?.includes("stripe")) {
              fetchArchieveToken({ token: resp.data.token, paymentType: 7, stage: "GET_SUCCESS_CARD_PAYMENT" })
              setIframeStripe("");
              setStatusToken("");
              dispatch(setPayment(7, resp.data.token, router));
            }

            if (dataTokenForWebSocket?.href?.includes("paypal")) {
              fetchArchieveToken({ token: resp.data.token, paymentType: 5, stage: "GET_SUCCESS_CARD_PAYMENT" })

              dispatch(setPayment(5, resp.data.token, router));

            }
            clearInterval(interVal);
          }
        } catch (error) {
          let message = "hgt  PaymentMethods Component - useEffect statusToken catch blog  "
          window.handelErrorLogs(error, message, { config })
        }
      }, 2000);
    }
    return () => clearInterval(interVal);
  }, [statusToken, popUpWindow]);

  useEffect(() => {
    const interval = setInterval(() => {
      // 👇 ref ile çalış, state değil
      if (popUpWindowRef.current && popUpWindowRef.current.closed) {
        console.log("🪟 PayPal window closed");
        setStatusToken("");
        setPopUpWindow("");
        popUpWindowRef.current = null;
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []); // 👈 dependency kaldırıldı, tek sefer kurulsun



  return (
    <>
      <div className={`${styles.payment_details}`}>
        <div className={styles.header}>
          <div className={styles.header_top}>
            {
              <h2 className={styles.header_top_title}>
                How would you like to pay ?
              </h2>
            }
            <Link href={"/terms"}>
              <a target="_blank" className={styles.header_top_subtitle}>
                <i className="fa-solid fa-check"></i>
                By proceeding, you agree to our{" "}
                <span>terms and conditions</span>
              </a>
            </Link>
          </div>
          <div className={styles.header_tot_price}>
            <p className={styles.header_tot_price_text}>Total Price</p>
            <span className={styles.header_tot_price_price}>
              £
              {trQuot?.price && returnQuot?.price
                ? Number(trQuot?.price) + Number(returnQuot?.price)
                : Number(trQuot?.price) || 100}
            </span>
          </div>
        </div>

        <div className={styles.payment_list}>

          {iframeStripe?.length > 0 ? <iframe src={iframeStripe} className={styles.iframe} frameBorder="0" allow="payment" ></iframe> : <React.Fragment></React.Fragment>}

          <div className={`${styles.items_buttons}`}>
            <div
              title="Pay with Cash to Driver"
              className={` ${styles.item} ${styles.item_1}`}
              onClick={() => startPayment(1)}
            >
              <p>Pay With Cash  To The Driver </p>
              <img src="/images/pp.jpg" alt="" />
            </div>
            {/* <div
              title="Pay with American Exspress"
              className={`${styles.item} ${styles.item_3}`}
              onClick={() => startPayment(6)}
            >
              Amex
            </div> */}
            {/*
            <p>Pay by Amex </p>
            <img src="/images/amex.png" alt="" />
          </div> */}
            <div
              className={`${styles.item} ${styles.item_2} `}
              onClick={() => startPayment(5)}
              title="Pay with Paypal"
            >
              <p>Pay by Paypal</p>
              <img src="/images/paypal.png" alt="" />
            </div>

            <div
              title="Pay with Stripe"
              className={`${styles.item} ${styles.item_4}`}
              onClick={() => startPayment(7)}
            >
              <p>Pay by Card </p>
              <img src="/images/vsMaster.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentDetail;
