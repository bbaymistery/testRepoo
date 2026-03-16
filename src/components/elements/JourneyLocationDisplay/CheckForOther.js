import React from "react";
import { useSelector } from "react-redux";
import { ifHasUnwantedCharacters } from "../../../helpers/ifHasUnwantedCharacters";

import InputField from "../InputField";
import styles from "./styles.module.scss";
//bura propslar selected listeden geir
const CheckForOther = (props) => {
  let { point, onChange = () => { }, errorMessage } = props
  const { appData } = useSelector(state => state.initialReducer)

  const onchangeHandler = (e) => {
    let { value } = e.target
    if (ifHasUnwantedCharacters(value)) return
    onChange(value)
  };
  return (
    <>
      {point.pcatId === 10 ? (
        <div className={styles.insideInputs}>
          <div className={styles.insideInputs_input}>


            <InputField
              label={appData?.words["strAddress"]}
              type="text"
              name="address-description"
              placeholder={appData?.words["strAddress"]}
              onChange={(e) => onchangeHandler(e)}
              value={point["address-description"]}
              errorMessage={errorMessage}
            />
          </div>
        </div>
      ) : <React.Fragment></React.Fragment>}
    </>
  );
};

export default CheckForOther;
