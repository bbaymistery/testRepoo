import React from 'react'
import styles from  "./ProgressContainer.module.scss"
const ProgressContainer = ({appData}) => {
  return (
        <div className={styles.progress_container}>
                    <div className={styles.step + " " + styles.completed}>
                        <span className={styles.step_icon}><i className="fa-solid fa-check"></i></span>
                        <span className={styles.mobile_hidden}>{appData.words["strJourneyPassengerDetails"]}</span>
                    </div>
                    <div className={styles.step_line + " " + styles.completed}></div>
                    <div className={styles.step + " " + styles.active}>
                        <span className={styles.step_icon}>2</span>
                        <span>{appData.words["strPayment"]}</span>
                    </div>
                    <div className={styles.step_line}></div>
                    <div className={styles.step + " " + styles.inactive}>
                        <span className={styles.step_icon}>3</span>
                        <span className={styles.mobile_hidden}>{appData.words["strConfirmation"]}</span>
                    </div>
                </div>
  )
}

export default ProgressContainer