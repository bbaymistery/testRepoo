import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ifHasUnwantedCharacters } from "../../../helpers/ifHasUnwantedCharacters";
import InputField from "../InputField";
import styles from "./styles.module.scss"
//bura propslar selected listeden geir
const CheckForFlight = (props) => {
  //index it is a destination if 0 it means pick up
  //flightSelectOption = false, isTaxiDeal = false, flightInfoIcon = false
  let { point, onChange = () => { }, objectDetailStatuses, type, error = {},  } = props
  const { appData } = useSelector(state => state.initialReducer)
  const dispatch = useDispatch()

  const onchangeHandler = (e, params = {}) => {
    let { value, name } = e.target
    if (ifHasUnwantedCharacters(value)) return

    //150 minutes after flight has landed     = >150
    let splitedNumberOfWaitingTime = ""
    if (name === "waitingPickupTime") {
      splitedNumberOfWaitingTime = e?.target?.options[e?.target?.selectedIndex].innerText?.trim().split(" ")[0]

      if (parseInt(splitedNumberOfWaitingTime) >= 0) {
        splitedNumberOfWaitingTime = parseInt(splitedNumberOfWaitingTime)
      } else {
        splitedNumberOfWaitingTime = ""
      }

    }

    let newFlightDetails = { ...point.flightDetails, [name]: name === 'waitingPickupTime' ? splitedNumberOfWaitingTime : value }
    onChange(newFlightDetails)
  };
  const setModalInfo = () => dispatch({ type: "SET_MODAL_INFO", data: { trueOrFalse: true } })

  const waitingMinutes = [0, 15, 30, 45, 50, 60, 70, 80, 90, 100, 120, 150].map((min, i) => ({ id: min.toString(), value: `${min} minute${min === 0 ? '' : 's'} ${appData?.words["seBookingNote"]}` }))
  let data = [{ id: "", value: `--${appData?.words["quSelectButton"]}--` }, ...waitingMinutes?.length > 0 ? waitingMinutes : []]
  return (
    <>
      {/* //!checking for flight pickups transfer */}
      {point.pcatId === 1 ?
        (
          <div>
            <InputField
              label={appData?.words["strFlightNumberTitle"]}
              type="text"
              name="flightNumber"
              value={point.flightDetails.flightNumber}
              errorMessage={error?.flightDetails?.flightNumber}
              onChange={(e) => onchangeHandler(e)} />
              
            {objectDetailStatuses[1]?.flightDetails?.waitingPickupTime[type] === 1 &&
              <div className={`${styles.select_wrapper} ${styles.flight_select_wrapper}`}>
                <label className={styles["label"]}>
                  {appData?.words["strDriverMeetingTime"]}
                  <i className={`fa-solid fa-circle-info ${styles.info_icon}`} onClick={setModalInfo}></i>
                </label>
                <select
                  value={point.flightDetails.waitingPickupTime}
                  required
                  className={`${styles["input-field"]} ${styles["select"]}`}
                  style={{ borderColor: error?.flightDetails?.waitingPickupTime ? '#ff0000' : '' }}
                  name={"waitingPickupTime"}
                  onChange={(e) => onchangeHandler(e)}
                  defaultValue={point.flightDetails.waitingPickupTime}
                >
                  {data?.map((d, i) => { return <option key={i} value={d.id}>{d.value}</option> })}
                </select>
              </div>
            }
          </div>
        )
        : <React.Fragment></React.Fragment>}
    </>
  );
};

export default CheckForFlight;
