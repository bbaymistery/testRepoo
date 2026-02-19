import React from "react";
import { useSelector } from "react-redux";
import { ifHasUnwantedCharacters } from "../../../helpers/ifHasUnwantedCharacters";
import styles from "./styles.module.scss";
import TextAreaField from "../TeaxtAreaField";
const CheckingForPostcodes = (props) => {
  let { point, onChange = () => { }, error, isTaxiDeal = false } = props
  let state = useSelector((state) => state.pickUpDropOffActions)
  const { appData } = useSelector(state => state.initialReducer)

  let { params: { postCodeAdresses } } = state
  let postCodes = (postCodeAdresses.filter(pCode => point.postcode === pCode.postcode && pCode.addresses)[0] || {}).addresses || []

  const onchangeHandler = (e, params = {}) => {
    let { value, name } = e.target
    if (ifHasUnwantedCharacters(value)) return

    let extraState = {};
    if (name === 'id') extraState['postCodeAddress'] = ((Array.isArray(postCodes) ? postCodes : [])?.find(obj => obj.id === parseInt(value)) || {}).value || '';

    let newPostcodeDetails = { ...point.postCodeDetails, [name]: name === 'id' ? parseInt(value) : value, ...extraState }
    onChange(newPostcodeDetails)
  };

  let data = [{ id: "", value: `--${appData?.words["quSelectButton"]}--` }, { id: 0, value: `${appData?.words["strAddNewAddressIfNotListed"]}` }, ...postCodes?.length > 0 ? postCodes : []]
  let isError = point.postCodeDetails.id !== 0 && (error?.postCodeDetails?.postCodeAddress || error?.postCodeDetails?.id)
  return (
    <>
      {/* //!checking for postcode pickups transfer */}
      {point.pcatId === 5 ?
        (<div >

          <div className={`${styles.select_wrapper} ${styles.post_code_select_wrapper}`}>
            <label className={styles["label"]}>
              {appData?.words["strPostCodeAddress"]}
            </label>
            <select
              value={point.postCodeDetails.id}
              required
              className={`${styles["input-field"]} ${styles["select"]}`}
              style={{ borderColor: isError ? '#ff0000' : '' }}
              name="id"
              onChange={(e) => onchangeHandler(e)}
              defaultValue={point.postCodeDetails.id}
            >
              {data?.map((d, i) => { return <option key={i} value={d.id} > {d.value}</option> })}
            </select>
          </div>





          {point.postCodeDetails.id === 0 ?
            <TextAreaField
              name="postCodeAddress"
              label={appData?.words["strPostCodeAddress"]}
              placeholder={appData?.words["strPostCodeAddress"]}
              errorMessage={error?.postCodeDetails?.postCodeAddress}
              onChange={(e) => onchangeHandler(e)}
              value={point.postCodeDetails.postCodeAddress}
            />
            : <React.Fragment></React.Fragment>}


        </div>)
        : <React.Fragment></React.Fragment>}
    </>
  );
};

export default CheckingForPostcodes;
