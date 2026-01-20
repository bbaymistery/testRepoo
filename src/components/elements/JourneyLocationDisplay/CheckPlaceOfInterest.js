import React from "react";
import { ifHasUnwantedCharacters } from "../../../helpers/ifHasUnwantedCharacters";
import InputField from "../InputField";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
const CheckPlaceOfInterest = (props) => {
  let { point, onChange = () => { }, errorMessage } = props
  const onchangeHandler = (e) => {
    let { value } = e.target
    if (ifHasUnwantedCharacters(value)) return
    onChange(value)
  };
  const { appData } = useSelector(state => state.initialReducer)

  return (
    <>
      {point.pcatId === 7 ?
        (<div className={styles.insideInputs}>
          <div className={styles.insideInputs_input}>
            {/* check language_words */}
            <InputField
              label={appData?.words["strPlacesofInterest"]}
              type="text"
              placeholder={appData?.words["strPlacesofInterest"]}
              name="address-description"
              onChange={(e) => onchangeHandler(e)}
              value={point["address-description"]}
              errorMessage={errorMessage} />
          </div>
        </div>)
        : <React.Fragment></React.Fragment>}
    </>
  );
};

export default CheckPlaceOfInterest;
//Lexington House, 35 Park Lodge Avenue, West Drayton, UK