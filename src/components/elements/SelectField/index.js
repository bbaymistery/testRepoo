import styles from "./styles.module.scss"
const SelectField = ({ data, dataIsNumber = false, value, name, label, onChange }) => {
    return (
        <div className={styles.select_wrapper}>
            <label className={styles["label"]}>{label}</label>
            {
                dataIsNumber &&
                <select onChange={onChange} defaultValue={value} name={name} className={`${styles["input-field"]} ${styles["select"]}`}>
                    {Array(data).fill().map((x, i) => <option key={i} id={i + 1} value={i + 1} >{i + 1}</option>)}
                </select>
            }
        </div>
    )
}

export default SelectField