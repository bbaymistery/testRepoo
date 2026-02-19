import React from "react";
import { useSelector } from "react-redux";
import { ifHasUnwantedCharacters } from "../../../helpers/ifHasUnwantedCharacters";
import InputField from "../InputField";
//bura propslar selected listeden geir
const CheckForCruises = (props) => {
  let { point, error, onChange = () => { }, } = props
  const { appData } = useSelector(state => state.initialReducer)

  const onchangeHandler = (e, params = {}) => {
    let { value } = e.target
    if (ifHasUnwantedCharacters(value)) return
    let newCruisenumber = value
    onChange(newCruisenumber)
  };

  return (
    <>
      {point.pcatId === 2 ?
        (
          <InputField
            label={appData?.words["strCruiseNameTitle"]}
            type="text"
            name="cruiseNumber"
            value={point.cruiseNumber}
            errorMessage={error.cruiseNumber}
            onChange={(e) => onchangeHandler(e)}
          />
        )
        : <React.Fragment></React.Fragment>}
    </>
  );
};

export default CheckForCruises;
