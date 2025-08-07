import GlobalLayout from '../../components/layouts/GlobalLayout';
import { checkLanguageAttributeOntheUrl } from '../../helpers/checkLanguageAttributeOntheUrl';
import { isUrlLoverCase } from '../../helpers/isUrlLoverCase';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { parse } from 'url';
import { driversWantedKeywords, getMetaTagsDriversWanted, getSingleDriverWantedSchema } from '../../constants/keywordsAndContents/sofor-araniyor/keywordsAndContent';
import { adjustPathnameForLanguage } from '../../helpers/adjustedPageLanguage';
import { parseCookies } from '../../helpers/cokieesFunc';
import { createMetaTagElementsClientSide, renderSchemaScriptsClientSide } from '../../helpers/schemaMetaTagHelper';
import { setNoCacheHeader } from '../../helpers/setNoCacheHeader';
import { fetchConfig } from '../../resources/getEnvConfig';
import styles from "./styles.module.scss";
import BreadCrumb from './breadCrubm';
import Alert from '../../components/elements/alert/Alert';
import AdressInformations from '../../components/elements/AdressInformations';
import { currentDate } from '../../helpers/getDates';
import React from 'react';
import DriverPersonalInfoForm from './DriverPersonalInfoForm';
import DriverVehicleInfoForm from './DriverVehicleInfoForm';
import Button from '../../components/elements/Button/Button';
import { BUTTON_TYPES } from '../../components/elements/Button/ButtonTypes';
import DriverPreferredLocationForm from './DriverPreferredLocationForm';
const validateForm = (formState) => {
  const errors = {};

  // Driver Personal Info
  if (!formState.fullname.trim()) {
    errors.fullname = "Lütfen ad soyad girin.";
  }

  if (!formState.birthdate) {
    errors.birthdate = "Doğum tarihi boş bırakılamaz.";
  }

  if (!formState.phone.trim()) {
    errors.phone = "Telefon numarası gerekli.";
  }

  if (!formState.email.trim()) {
    errors.email = "E-posta adresi gerekli.";
  } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
    errors.email = "Geçerli bir e-posta girin.";
  }

  if (!formState.address.trim()) {
    errors.address = "Adres gerekli.";
  }

  // Driver Vehicle Info
  if (!formState.isOwner || (formState.isOwner !== 'yes' && formState.isOwner !== 'no')) {
    errors.isOwner = "Araç sahibi olup olmadığınızı seçin.";
  }

  if (!formState.vehicleMakeModel.trim()) {
    errors.vehicleMakeModel = "Araç marka ve model bilgisi gerekli.";
  }

  if (!formState.vehicleYear.trim()) {
    errors.vehicleYear = "Model yılı gerekli.";
  } else if (!/^\d{4}$/.test(formState.vehicleYear)) {
    errors.vehicleYear = "Model yılı 4 haneli bir sayı olmalıdır.";
  }

  if (!formState.licensePlate.trim()) {
    errors.licensePlate = "Plaka numarası gerekli.";
  }

  if (!formState.passengerCapacity.trim()) {
    errors.passengerCapacity = "Yolcu kapasitesi gerekli.";
  }

  return errors;
};


const SoforBasvuruFormu = (props) => {
  let { metaDescription, keywords, headTitle } = props

  const state = useSelector(state => state.pickUpDropOffActions)
  let { params: { direction } } = state

  const { appData } = useSelector(state => state.initialReducer)
  const initialState = {
    fullname: "",
    birthdate: currentDate(),
    phone: "",
    email: "",
    address: "",
    isOwner: "yes",
    vehicleMakeModel: "",
    vehicleYear: "",
    licensePlate: "",
    passengerCapacity: "",
    preferredLocation: "istanbul",
  };
  const [internalState, setInternalState] = React.useReducer((s, o) => ({ ...s, ...o }), initialState);


  const [error, setError] = React.useState({});
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    const { name, value, files } = e.target;
    const newValue = files ? files[0] : value;
    setInternalState({ [name]: newValue });

    if (error[name]) {
      setError({ ...error, [name]: "" });
    }
  };


  const initializeState = (par) => {
    setTimeout(() => {
      setInternalState(initialState);
    }, 2500);
  }

  const handleSend = async () => {
    const validationErrors = validateForm(internalState);
    console.log(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      return;
    }

    const htmlTemplate = `
    <h2 style="color:#333;">Şoför Başvuru Formu</h2>

    <h3>Kişisel Bilgiler</h3>
    <ul>
      <li><strong>Ad Soyad:</strong> ${internalState.fullname}</li>
      <li><strong>Doğum Tarihi:</strong> ${internalState.birthdate}</li>
      <li><strong>Telefon:</strong> ${internalState.phone}</li>
      <li><strong>Email:</strong> ${internalState.email}</li>
      <li><strong>Adres:</strong> ${internalState.address}</li>
    </ul>

    <h3>Araç Bilgileri</h3>
    <ul>
      <li><strong>Araç Sahibi mi?:</strong> ${internalState.isOwner === 'yes' ? 'Evet' : 'Hayır'}</li>
      <li><strong>Marka / Model:</strong> ${internalState.vehicleMakeModel}</li>
      <li><strong>Model Yılı:</strong> ${internalState.vehicleYear}</li>
      <li><strong>Plaka:</strong> ${internalState.licensePlate}</li>
      <li><strong>Yolcu Kapasitesi:</strong> ${internalState.passengerCapacity}</li>
      <li><strong>Tercih Edilen Lokasyon:</strong> ${internalState.preferredLocation}</li>
    </ul>
    <hr />
    <p style="font-size: 12px; color: #888;">Gönderim tarihi: ${new Date().toLocaleString("tr-TR")}</p>
  `;

    sendDriverForm(htmlTemplate); // ayrı fonksiyon
  };
  const sendDriverForm = async (htmlTemplate) => {
    const env = await fetchConfig(); // eğer async değilse doğrudan çağır

    try {
      dispatch({ type: "ALERT", payload: { loading: true } })

      const reqOptions = {
        method: "POST",
        headers: { "Accept": "application/json, text/plain, */*", "Content-Type": "application/json" },
        body: JSON.stringify({
          senderId: 7,
          reciverMails: ["info@apltransfers.com"],
          subject: "Yeni Şoför Başvurusu",
          mailContent: htmlTemplate
        })
      };

      fetch(`${env.apiDomain}/tools/mailer`, reqOptions)
        .then((res) => {
          console.log(res);
          dispatch({ type: "ALERT", payload: { loading: false } })
          if (res.status === 200) {
            dispatch({ type: "ALERT", payload: { success: "Başvurunuz başarıyla alındı. En kısa sürede sizinle iletişime geçeceğiz." } })
          }
          initializeState()
        })
        .catch((e) => {
          console.log(e);
          dispatch({ type: "ALERT", payload: { loading: false } })
          initializeState()
          dispatch({ type: "ALERT", payload: { errors: "Something went wrong Please try to contact with us " } })
        });

    } catch (error) {
          dispatch({ type: "ALERT", payload: { loading: false } })
          dispatch({ type: "ALERT", payload: { errors: "Something went wrong Please try to contact with us " } })

    }
  };
  

  return (
    <GlobalLayout title={headTitle} keywords={keywords} description={metaDescription} >
      <Head >
        <link rel="canonical" href={props.mainCanonical} />
        {createMetaTagElementsClientSide(props.metaTags)}
        {renderSchemaScriptsClientSide(props.schemas)}
      </Head>
      <div className={`${styles.sofor_basvuru_formu} ${direction} page`} >
        <BreadCrumb title="" />
        <div className={`${styles.sofor_basvuru_formu_section} page_section`}>
          <Alert />
          <div className={`${styles.sofor_basvuru_formu_section_container} page_section_container`}>
            <div className={styles.contact_area}>
              <div className={styles.forms}>
                <DriverPersonalInfoForm internalState={internalState} onChangeHandler={onChangeHandler} error={error} />
                <DriverVehicleInfoForm internalState={internalState} onChangeHandler={onChangeHandler} error={error} />
                <DriverPreferredLocationForm selectedLocation={internalState.preferredLocation} onChangeHandler={onChangeHandler} />
                <div >
                  <Button onBtnClick={handleSend} type={BUTTON_TYPES.PRIMARY} style={{ padding: "10px 28.5px", width: '100%' }} btnText={`Gönder`} />
                </div>
              </div>
            </div>
            <div className={styles.address_area}>
              <AdressInformations direction={direction} appData={appData} />
            </div>
          </div>
        </div>
      </div>
    </GlobalLayout>
  );
}
export async function getServerSideProps({ req, res, query, resolvedUrl }) {

  setNoCacheHeader(res, true);

  isUrlLoverCase(resolvedUrl, res)

  //get cookie and pathnames
  let cookies = parseCookies(req.headers.cookie);
  let { pathname } = parse(req.url, true)
  let pageStartLanguage = checkLanguageAttributeOntheUrl(req?.url)

  // Adjust pathname and language based on initial language
  const adjusted = adjustPathnameForLanguage(pathname, pageStartLanguage, cookies);
  pathname = adjusted.pathname;
  pageStartLanguage = adjusted.pageStartLanguage;

  if (pageStartLanguage !== 'tr') {
    return {
      redirect: {
        destination: '/tr/sofor-basvuru-formu',
        permanent: true, // SEO için
      },
    };
  }

  let metaDescription = driversWantedKeywords.metaDescription[pageStartLanguage]
  let keywords = driversWantedKeywords.keywords[pageStartLanguage];
  let headTitle = driversWantedKeywords.headTitle[pageStartLanguage];
  const env = await fetchConfig();
  const mainCanonical = `${env.websiteDomain}/tr/sofor-basvuru-formu`
  const schemas = [getSingleDriverWantedSchema(pathname, pageStartLanguage)]
  const metaTags = getMetaTagsDriversWanted(pathname, pageStartLanguage, env);
  return {
    //we pass tourdetails fot adding inside redux generally all together
    props: {
      metaDescription, keywords, headTitle, mainCanonical, schemas, metaTags
    }
  };


}
export default SoforBasvuruFormu