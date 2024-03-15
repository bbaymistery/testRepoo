import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import styles from "./styles.module.scss"
import DropOffPoints from './DropOffPoints'
import PickUpPoints from './PickUpPoints'
const PaymentPageSummary = (props) => {
  let { index, selectedPickupPoints, selectedDropoffPoints, firstname, email, phone, passengersNumber, specialRequests, tourDetailsStatus = false, tourPickupPointAddress, selectedTour } = props
  let state = useSelector((state) => state.pickUpDropOffActions)
  let { params: { direction, language } } = state

  const { appData } = useSelector(state => state.initialReducer)

  return (
    <div className={styles.journey_summary_panel}>
      <div className={styles.content}>
        <div className={styles.journey_card} direction={String(direction === 'rtl')}>
          <div className={styles.passsenger_details_div}>
            <h5 className={`${direction}`}>{appData?.words["strPassengerName"]}</h5>
            <li direction={String(direction === 'rtl')}><span>{firstname}</span></li>
            <div className={styles.space}> </div>

            <h5 className={`${direction}`}>{appData?.words["appContactUsFormPhone"]} </h5>
            <li direction={String(direction === 'rtl')}><span>{phone}</span></li>
            <div className={styles.space}> </div>

            <h5 className={`${direction}`}>{appData?.words["appContactUsEmailAddress"]}</h5>
            <li direction={String(direction === 'rtl')}><span>{email}</span></li>
            <div className={styles.space}> </div>

            <h5 className={`${direction}`}>{appData?.words["strNoofPassengers"]}</h5>
            <li direction={String(direction === 'rtl')}><span>{passengersNumber}</span></li>
          </div>


          <div className={styles.details_div}>
            <h5 className={`${direction}`}>{appData?.words["strFrom2"]}</h5>
            {tourDetailsStatus ? <p>{tourPickupPointAddress.address}:</p> : <PickUpPoints selectedPickupPoints={selectedPickupPoints} direction={direction} language={language} />}
            {tourDetailsStatus ? <p className={styles.tour_pickup_adres}>{tourPickupPointAddress.pickupadress}</p> : <></>}


            {tourDetailsStatus ? <></> : <div className={styles.space}> </div>}
            {tourDetailsStatus ? <></> : <h5 className={`${direction}`}>{appData?.words["strTo"]}</h5>}
            {tourDetailsStatus ? <></> : <DropOffPoints selectedDropoffPoints={selectedDropoffPoints} direction={direction} language={language} />}
            <div className={styles.space}> </div>
            <h5 className={`${direction}`}>{appData?.words["strNotes"]}:</h5>
            <li direction={String(direction === 'rtl')}><span>{specialRequests} </span></li>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PaymentPageSummary