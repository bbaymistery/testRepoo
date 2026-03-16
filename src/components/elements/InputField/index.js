import styles from "./styles.module.scss";

const InputField = ({ name, label, value, placeholder = "", type = "text", onChange, errorMessage, }) => {
    return (
        <div className={styles.input_wrapper}>
            <label className={styles["label"]}>
                {label}
                {errorMessage && <p className={styles.error_message}>{errorMessage}</p>}
            </label>
            <input
                name={name}
                onChange={onChange}
                type={type}
                placeholder={placeholder}
                className={`${styles["input-field"]} ${errorMessage ? styles.input_error : ''}`}
                value={value}
            />
        </div>
    );
};

export default InputField;