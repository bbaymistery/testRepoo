import { useRef, useEffect } from "react";
import styles from "./styles.module.scss"
const QuestionsAccordion = ({ questions }) => {
    const itemsRef = useRef([]); // Her bir <article> elementine referans tutulur

    /**
     * ✅ İlk render sonrasında DOM tamamen hazır olduğunda
     *    ilk FAQ item’ı açık başlatır.
     * 
     * - `useLayoutEffect` kullanılır çünkü bu hook,
     *   DOM çizildikten hemen sonra ama ekrana yansımadan önce çalışır.
     * - Böylece panel yüksekliği doğru şekilde ölçülür.
     */
    // ✅ İlk renderda 1. item açık başlat (animasyonsuz)
    useEffect(() => {
        const firstItem = itemsRef.current[0];
        if (firstItem) {
            const panel = firstItem.querySelector(`.${styles.panel}`);
            firstItem.classList.add(styles.active);

            // Transition geçici olarak devre dışı
            panel.style.transition = "none";
            panel.style.maxHeight = panel.scrollHeight + "px";
            panel.style.padding = "0 18px 18px";

            // Tarayıcıya frame atlat, transition geri gelsin
            requestAnimationFrame(() => {
                panel.style.transition = "";
            });
        }
    }, []);

    /**
     * 🔹 Tüm açık panelleri kapatır, yalnızca belirtilen index hariç.
     */
    const closeAll = (exceptIndex) => {
        itemsRef.current.forEach((item, index) => {
            if (item && index !== exceptIndex) {
                item.classList.remove(styles.active);
                const panel = item.querySelector(`.${styles.panel}`);
                panel.style.maxHeight = "0px";
                panel.style.padding = "0 18px 0";
            }
        });
    };

    /**
     * 🔸 Seçilen paneli açar veya kapatır.
     * - Eğer açık değilse, diğerlerini kapatır ve seçileni açar.
     * - Eğer zaten açıksa, kapatır.
     */
    const toggleItem = (index) => {
        const item = itemsRef.current[index];
        const panel = item.querySelector(`.${styles.panel}`);
        const isActive = item.classList.contains(styles.active);

        if (!isActive) {
            // Açılacak panel → önce diğerlerini kapat
            closeAll(index);
            item.classList.add(styles.active);

            // Panelin iç yüksekliğini hesapla ve animasyonla aç
            const fullHeight = panel.scrollHeight + "px";
            panel.style.maxHeight = fullHeight;
            panel.style.padding = "0 18px 18px";
        } else {
            // Kapatılacak panel
            item.classList.remove(styles.active);
            panel.style.maxHeight = "0px";
            panel.style.padding = "0 18px 0";
        }
    };
    return (
        <div className={styles.list}>
            {questions.map((faq, i) => (
                <article key={i} className={styles.item} ref={(el) => (itemsRef.current[i] = el)}  >
                    {/* 🔘 Soru başlığı */}
                    <button className={styles.trigger} onClick={() => toggleItem(i)} aria-expanded="false"  >
                        <h3 className={styles.q}>{faq.q}</h3>
                        <span  className={styles.chev} aria-hidden="true"></span>
                    </button>

                    {/* 💬 Cevap paneli */}
                    <div className={styles.panel}>
                        <p>{faq.a}</p>
                    </div>
                </article>
            ))}
        </div>
    )
}

export default QuestionsAccordion