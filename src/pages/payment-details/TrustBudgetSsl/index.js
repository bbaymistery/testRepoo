import React from 'react'
import styles from './styles.module.scss'
const TrustBudgetSsl = ({appData}) => {
  return (
      <div className={styles.trust_badge_card}>
      
      {/* Başlık ve İkon */}
      <div className={styles.secure_header}>
        <i className="fa-solid fa-shield-halved"></i>
        <span>{appData.words["str100SecurePayment"]}</span>
      </div>

      {/* Açıklama Metni */}
      <p className={styles.description}>
        {appData?.words["strSecure256"]}
      </p>

      {/* Kartlar Görseli */}
      <img 
        src="/images/others/accepted-cards.png"
        alt="Accepted Cards" 
        className={styles.cards_img}
      />
      
    </div>
  )
}

export default TrustBudgetSsl