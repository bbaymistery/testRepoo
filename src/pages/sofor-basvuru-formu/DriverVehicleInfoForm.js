import TextInput from '../../components/elements/TextInput';
import styles from './styles.module.scss'; // kendi styles modülüne göre yolu kontrol et

const DriverVehicleInfoForm = ({ internalState, onChangeHandler, error }) => {
    return (
        <div className={styles.form_card}>
            <h2>ARAÇ BİLGİLERİ</h2>
            <div className={styles.form} boxtype={'vehicleinfo'}>
                {/* Araç Sahibi misiniz? */}
                <div className={styles.input_box}>
                    <label className={styles.radio_group_label}>Aracın Sahibi misiniz?</label>
                    <div className={styles.radio_group}>
                        <label>
                            <input type="radio" name="isOwner" value="yes" checked={internalState.isOwner === 'yes'} onChange={onChangeHandler} /> Evet
                        </label>
                        <label>
                            <input type="radio" name="isOwner" value="no" checked={internalState.isOwner === 'no'} onChange={onChangeHandler} /> Hayır
                        </label>
                    </div>
                </div>

                {/* Marka / Model & Model Yılı */}
                <div className={styles.input_box}>
                    <div className={styles.input}>
                        <TextInput label="Araç Markası ve Modeli" name="vehicleMakeModel" value={internalState.vehicleMakeModel} onChange={onChangeHandler} inputStyle={{ border: error.vehicleMakeModel ? "1px solid red" : "" }}  />
                    </div>
                    <div className={styles.input}>
                        <TextInput label="Model Yılı" name="vehicleYear" value={internalState.vehicleYear} onChange={onChangeHandler} inputStyle={{ border: error.vehicleYear ? "1px solid red" : "" }} />
                    </div>
                </div>

                {/* Plaka ve Yolcu Kapasitesi */}
                <div className={styles.input_box}>
                    <div className={styles.input}>
                        <TextInput label="Plaka Numarası" name="licensePlate" value={internalState.licensePlate} onChange={onChangeHandler}  inputStyle={{ border: error.licensePlate ? "1px solid red" : "" }} />
                    </div>
                    <div className={styles.input}>
                        <TextInput label="Yolcu Kapasitesi" name="passengerCapacity" value={internalState.passengerCapacity} onChange={onChangeHandler} inputStyle={{ border: error.passengerCapacity ? "1px solid red" : "" }}  />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DriverVehicleInfoForm;
