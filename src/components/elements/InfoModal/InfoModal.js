import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useOutsideClick } from "../../../hooks/useOutsideClick";
import styles from "./styles.module.scss";

const InfoModal = ({ content, appData }) => {
  const wrapperRef = useRef();
  const dispatch = useDispatch();

  let clickedOutside = useOutsideClick(wrapperRef);

  useEffect(() => {
    if (clickedOutside) dispatch({ type: "SET_MODAL_INFO", data: { trueOrFalse: false } });
  }, [clickedOutside]);

  const setToFalse = () => {
    dispatch({ type: "SET_MODAL_INFO", data: { trueOrFalse: false } });
    document.body.style.overflow = "unset";
  };

  // İçeriği düzenleyen fonksiyon
  const renderContent = (text) => {
    if (!text) return null;
    if (typeof text === "object") return <div>{text}</div>;

    // 1. AYIRICI KELİMELER LİSTESİ (Senin verdiğin liste)
    const keywords = [
      "Example", 
      "Örnek", 
      "Esempio", 
      "Ejemplo", 
      "Пример", 
      "示例", 
      "مثال"
    ];

    // 2. REGEX OLUŞTURMA
    // Bu yapı şuna benzer bir arama yapar: (Example|Örnek|Пример...)\s*:?
    // \s* -> Kelimeden sonra boşluk varsa da kabul et
    // :?  -> İki nokta üst üste opsiyonel (olsa da olur olmasa da)
    // "i" -> Büyük/küçük harf duyarlılığını kaldır (example yazsa da bulur)
    const regex = new RegExp(`(${keywords.join("|")})\\s*:?`, "i");

    // 3. EŞLEŞME KONTROLÜ
    const match = text.match(regex);

    if (match) {
      // match.index -> Kelimenin başladığı yer
      // match[0]    -> Bulunan kelimenin kendisi (örn: "Пример:")
      
      const splitIndex = match.index;
      const foundKeyword = match[0]; // Metinde geçen haliyle başlığı alıyoruz (örn: "Пример:")

      const mainText = text.substring(0, splitIndex); // Baştan kelimeye kadar olan kısım
      const exampleText = text.substring(splitIndex + foundKeyword.length); // Kelimeden sonrası

      return (
        <div className={styles.text_wrapper}>
          <p className={styles.main_text}>
            {mainText}
          </p>
          <div className={styles.example_box}>
            {/* Bulunan kelimeyi başlık yapıyoruz (Otomatik dil uyumlu olur) */}
            <strong>{foundKeyword}</strong> {exampleText}
          </div>
        </div>
      );
    }

    // Hiçbir kelime bulunamazsa düz metni bas
    return <p className={styles.main_text}>{text}</p>;
  };

  return (
    <div className={styles.modal}>
      <div className={`${styles.modal_container}`} ref={wrapperRef} id="infoModal">
        
        <div className={styles.modal_header}>
           <h3>{appData?.words["strMoreInformation"] || "Information"}</h3>
        </div>

        <div className={styles.modal_body}>
             {content?.length ? renderContent(content) : null}
        </div>

        <div className={styles.button_div}>
          <button onClick={setToFalse} className="btn btn_primary">{appData?.words["strClose"] || "Close"}</button>
        </div>
        
        <i onClick={setToFalse} className={`fa-solid fa-x ${styles.close_icon}`}></i>
      </div>
    </div>
  );
};

export default InfoModal;