import React from "react";
import styles from "./styles.module.scss";
const RadioButton = ({ jouryName, hadnleInputRadioChange }) => {
  return (
    <span className={styles.radio_button_div}>
      <input
        type="radio"
        id="check1"
        name="tripType"
        value="Oneway"
        onChange={hadnleInputRadioChange}
        checked={jouryName === "Oneway" ? true : false}
      />
      <label htmlFor="check1" id="check1">
        One way
      </label>
      &nbsp;&nbsp;
      <input
        type="radio"
        name="tripType"
        value="Return"
        id="check2"
        onChange={hadnleInputRadioChange}
        checked={jouryName === "Return" ? true : false}
      />
      <label htmlFor="check2">Return</label>
    </span>
  );
};

export default RadioButton;
