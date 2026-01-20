import styles from "./styles.module.scss"
const TextAreaField = ({ label, placeholder, name, onChange, value, errorMessage }) => {
    return (
        <div className={styles["textarea-wrapper"]}>
            <label className={styles["form-label"]}>{label}
                {errorMessage && <p className={styles.error_message}>{errorMessage}</p>}
            </label>
            <textarea
                value={value}
                name={name}
                rows="2"
                className={`${styles["input-field"]} ${errorMessage ? styles.input_error : ''}`}
                placeholder={placeholder}
                onChange={onChange}
            ></textarea>
        </div>
    )
}

export default TextAreaField