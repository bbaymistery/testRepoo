import React from "react";
import { useSelector } from "react-redux";
import { waitingMinutes } from "../../../constants/waitingMinutes";
import { selectPickUpDropOffReducer } from "../../../store/pickUpDropOffReducer/pickUpDropSelectors";
import Select from "../Select";
import TextInput from "../TextInput";
import styles from "./styles.module.scss";
//bura propslar selected listeden geir
const CheckForFlight = (props) => {
  const {
    item,
    index,
    journeyType,
    onchangeHandler,
    handleInputValue,
    whichSelectedItem,
  } = props;
  const { appData } = useSelector(selectPickUpDropOffReducer);

  const objectDetailStatuses = appData?.pointTypeCategories?.reduce(
    (obj, item) => ({
      ...obj,
      [item.id]: JSON.parse(item.detailsStatus),
    }),
    []
  );


  return (
    /**
     @propsOrderOnchangeHandler value,pickOrDrop,journeyType,,pcatId whichSelectedItem
     */
    <div>
      {/* //!checking for flight pickups transfer */}
      {/*//todo => zorunlu Transfer */}
      {item.pcatId === 1 && index === 0 && journeyType === 0 && (
        <div>
          {objectDetailStatuses[1]?.flightDetails.flightNumber.pickup === 1 && (
            <div className={styles.details_div}>
              <TextInput
                name="flightNumber"
                type="text"
                animationInput={true}
                title="Flight No"
                value={handleInputValue?.flightDetails.flightNumber}
                onChange={(e) => onchangeHandler(e, 0, 0, 1, whichSelectedItem)}
                errorMessage={
                  handleInputValue.errorMessage.length > 0
                    ? handleInputValue.errorMessage
                    : ""
                }
              />
            </div>
          )}

          {objectDetailStatuses[1]?.flightDetails?.waitingPickupTime.pickup ===
            1 && (
              <div className={`${styles.details_div}`}>
                <Select
                  animationSelect={true}
                  name="waitingPickupTime"
                  // value={handleInputValue?.flightDetails.waitingPickupTime}
                  data={waitingMinutes}
                  title="When should the driver pick you up?"
                  onChange={(e) => onchangeHandler(e, 0, 0, 1, whichSelectedItem)}
                  showModalInfo={true}
                  defaultValue={`${handleInputValue?.flightDetails.waitingPickupTime ? handleInputValue?.flightDetails?.waitingPickupTime : "--select--"}`}
                  // defaultValue={true}
                  placeholder={"--select--"}
                  value={
                    `
                      ${handleInputValue?.flightDetails.waitingPickupTime
                      ?
                      `${handleInputValue?.flightDetails.waitingPickupTime} minute${handleInputValue?.flightDetails.waitingPickupTime === 0 ? '' : 's'} after flight has landed`.trim()
                      : "--select--"}
                      `
                  }
                  forFlight={true}

                  errorMessage={
                    handleInputValue.waitingError.length > 0 ? "required" : ""
                  }
                />
                <div className={styles.select_description}>
                  after flight has landed
                  <i className="fa-solid fa-circle-question"></i>
                  <div className={styles.flight_hover_text}>
                    <div
                      className={styles.flight_hover_text_content}
                    >
                      <p>

                        Please allow sufficient time to clear immigration and baggage reclaim.
                        After your requested pickup time, there is a 30-minute free waiting period at the airport.

                      </p>
                      <p>
                        Your driver will be waiting for you in the arrivals hall, holding an “Airport Pickups” name board with your name displayed. They will then accompany you to your vehicle.

                        If you anticipate delays and will not be able
                        <span style={{ color: "#007ACC", fontWeight: "500" }}>
                          {" "}
                          to meet your driver within the 30-minute free waiting time, please contact us
                        </span>

                        as soon as possible.

                        In some cases, we may be able to extend the driver’s waiting time in the terminal.

                      </p>{" "}
                      <p>
                        If no contact is made and the passenger does not appear within the waiting period, the driver may be released, and the booking could be recorded as a no-show in accordance with our company’s Terms & Conditions.

                      </p>{" "}
                      <p>
                        For example, if your flight lands at 10:00 am and you request your pickup 60 minutes later (at 11:00 am), your driver will wait free of charge until 11:30 am. If you require additional waiting time, please notify us in advance so we can make arrangements.
                        <br />
                        Further details can be found in our Terms & Conditions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
        </div>
      )}

      {/* //!checking for flight dropOff  transfer */}
      {item.pcatId === 1 && index === 1 && journeyType === 0 && (
        <div>
          {objectDetailStatuses[1]?.flightDetails.flightNumber.dropoff ===
            2 && (
              <div className={styles.details_div}>
                <TextInput
                  name="flightNumber"
                  type="text"
                  animationInput={true}
                  value={handleInputValue?.flightDetails.flightNumber}
                  title="Flight No"
                  onChange={(e) => onchangeHandler(e, 1, 0, 1, whichSelectedItem)}
                />
              </div>
            )}
        </div>
      )}

      {/* //!checking for flight pickups return */}
      {/*//todo => zorunlu Return */}

      {item.pcatId === 1 && index === 0 && journeyType === 1 && (
        <div>
          {objectDetailStatuses[1]?.flightDetails.flightNumber.pickup === 1 && (
            <div className={`${styles.details_div}`}>
              <TextInput
                name="flightNumber"
                type="text"
                animationInput={true}
                value={handleInputValue?.flightDetails.flightNumber}
                title="Flight No"
                onChange={(e) => onchangeHandler(e, 0, 1, 1, whichSelectedItem)}
                errorMessage={
                  handleInputValue.errorMessage.length > 0
                    ? handleInputValue.errorMessage
                    : ""
                }
              />
            </div>
          )}
          {objectDetailStatuses[1]?.flightDetails?.waitingPickupTime.pickup ===
            1 && (
              <div className={`${styles.details_div}`}>
                <Select
                  animationSelect={true}
                  name="waitingPickupTime"
                  data={waitingMinutes}
                  // value={handleInputValue?.flightDetails.waitingPickupTime}
                  title="When should the driver pick you up?"
                  onChange={(e) => onchangeHandler(e, 0, 1, 1, whichSelectedItem)}
                  // defaultValue="--select--"
                  // placeholder="--select--"
                  defaultValue={`${handleInputValue?.flightDetails.waitingPickupTime ? handleInputValue?.flightDetails?.waitingPickupTime : "--select--"}`}
                  // defaultValue={true}
                  placeholder={"--select--"}
                  value={
                    `
                      ${handleInputValue?.flightDetails.waitingPickupTime
                      ? `${handleInputValue?.flightDetails.waitingPickupTime} minute${handleInputValue?.flightDetails.waitingPickupTime === 0 ? '' : 's'} after flight has landed`
                      : "--select--"}
                      `
                  }
                  forFlight={true}
                  errorMessage={
                    handleInputValue.waitingError.length > 0 ? "required" : ""
                  }
                />
              </div>
            )}
        </div>
      )}
      {/* //!checking for flight dropoff return */}
      {item.pcatId === 1 && index === 1 && journeyType === 1 && (
        <div>
          {objectDetailStatuses[1]?.flightDetails.flightNumber.dropoff ===
            2 && (
              <div className={`${styles.details_div}`}>
                <TextInput
                  name="flightNumber"
                  type="text"
                  animationInput={true}
                  title="Flight No"
                  value={handleInputValue?.flightDetails?.flightNumber}
                  onChange={(e) => onchangeHandler(e, 1, 1, 1, whichSelectedItem)}
                />
              </div>
            )}
        </div>
      )}
    </div>
  );
};

export default CheckForFlight;
