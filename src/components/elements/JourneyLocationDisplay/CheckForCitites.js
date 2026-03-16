import React from "react";
import { useSelector } from "react-redux";
import { ifHasUnwantedCharacters } from "../../../helpers/ifHasUnwantedCharacters";
import InputField from "../InputField";
const CheckForCitites = (props) => {
  let { point, onChange = () => { }, errorMessage } = props
  const { appData } = useSelector(state => state.initialReducer)

  const onchangeHandler = (e) => {
    let { value } = e.target
    if (ifHasUnwantedCharacters(value)) return
    onChange(value)
  };

  return (
    <>
      {point.pcatId === 8 ?
        (
          <InputField
            label={appData?.words["strCities"]}
            type="text"
            name="address-description"
            onChange={(e) => onchangeHandler(e)}
            value={point["address-description"]}
            errorMessage={errorMessage}
          />
        )
        : <React.Fragment></React.Fragment>}

    </>
  );
};

export default CheckForCitites;
