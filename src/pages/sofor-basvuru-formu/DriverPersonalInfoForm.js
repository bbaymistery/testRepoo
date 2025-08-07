import TextInput from '../../components/elements/TextInput';
import styles from "./styles.module.scss"

const DriverPersonalInfoForm = ({ internalState, onChangeHandler, error }) => {
    return (
        <div className={styles.form_card}>
            <h2>KİŞİSEL BİLGİLER</h2>
            <div className={styles.form} boxtype={'personalinfo'}>
                <div className={styles.input_box}>
                    <div className={styles.input}>
                        <TextInput inputStyle={{ border: error.fullname ? "1px solid red" : "" }} label="Ad Soyad" name="fullname" value={internalState.fullname} onChange={onChangeHandler} />
                    </div>
                    <div className={styles.input}>
                        <TextInput inputStyle={{ border: error.email ? "1px solid red" : "" }} label="E-posta" name="email" value={internalState.email} onChange={onChangeHandler} />
                    </div>
                </div>
                <div className={styles.input_box}>
                    <div className={styles.input}>
                        <TextInput inputStyle={{ border: error.phone ? "1px solid red" : "" }} label="Telefon" name="phone" value={internalState.phone} onChange={onChangeHandler} />
                    </div>
                    <div className={styles.input}>
                        <TextInput inputStyle={{ border: error.birthdate ? "1px solid red" : "" }} label="Doğum Tarihi" name="birthdate" type="date" value={internalState.birthdate} onChange={onChangeHandler} />
                    </div>
                </div>
                <div className={styles.input_box}>
                    <TextInput inputStyle={{ border: error.address ? "1px solid red" : "" }} label="Adres" name="address" value={internalState.address} onChange={onChangeHandler} />
                </div>
            </div>
        </div>
    );
};

export default DriverPersonalInfoForm;
