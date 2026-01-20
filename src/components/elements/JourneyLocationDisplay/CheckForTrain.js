import React from "react";
import { useSelector } from "react-redux";
import { ifHasUnwantedCharacters } from "../../../helpers/ifHasUnwantedCharacters";
import InputField from "../InputField";
const CheckForTrain = (props) => {
  let { point, onChange = () => { }, errorMessage } = props
  const { appData } = useSelector(state => state.initialReducer)
  const onchangeHandler = (e, params = {}) => {
    let { value } = e.target
    if (ifHasUnwantedCharacters(value)) return
    let newTrainNumber = value
    onChange(newTrainNumber)
  };
  // trainnumber universiti
  return (
    <>
      {point.pcatId === 3 ?
        (
          <InputField
            label={appData?.words["strTrainNumber"]}
            type="text"
            placeholder={appData?.words["strTrainNumber"]}
            name="trainNumber"
            value={point.trainNumber}
            onChange={(e) => onchangeHandler(e)}
            errorMessage={errorMessage}
          />

        ) : <React.Fragment></React.Fragment>}
    </>
  );
};

export default CheckForTrain;
