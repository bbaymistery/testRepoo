import { useLayoutEffect, useRef, useEffect } from "react";
import styles from "./Faq.module.scss";

// ✅ Sıkça Sorulan Sorular listesi (statik içerik)
const faqs = [
  { q: "Do you offer free cancellation?", a: "Yes. You can cancel your booking free of charge up to 12 hours before pickup. Simply contact our customer service team or use the cancellation link in your confirmation email." },
  { q: "How much does a taxi from Heathrow to Central London cost?", a: "Our Heathrow taxi fares start from £65 for transfers to Central London. All prices are fixed and include meet & greet, 30 minutes free waiting time, parking, and tolls — with no hidden fees." },
  { q: "What happens if my flight is delayed?", a: "We provide free flight tracking for all Heathrow pickups. Your driver will monitor your flight and adjust your collection time automatically, with no extra charge for delays." },
  { q: "Are child seats available?", a: "Yes. We offer complimentary baby and child seats for all Heathrow taxi bookings. Please mention your child’s age at the time of booking so we can provide the correct seat type." },
  { q: "How will I find my driver at Heathrow Airport?", a: "Your driver will be waiting inside the arrivals hall, holding a name board with your booking name. This is part of our free meet and greet service at every Heathrow terminal." },
  { q: "Are your prices per vehicle or per person?", a: "All Heathrow transfer prices are per vehicle, not per passenger. The total fare covers your entire group including luggage and airport fees." },
  { q: "Do you provide Business Class vehicles?", a: "Yes. Our Business Class service features Mercedes E-Class, S-Class, and V-Class vehicles for a luxurious Heathrow transfer." },
  { q: "Are you licensed?", a: "London Heathrow Taxi Ltd is a fully licensed private hire operator regulated by Transport for London (TFL). All vehicles and drivers are fully insured and compliant." },
  { q: "How far is Heathrow Airport from Central London?", a: "Heathrow Airport is approximately 16–20 miles from Central London. Journey time typically takes 40–70 minutes depending on traffic." },
  { q: "Do you offer transfers to other airports?", a: "Yes. We also provide transfers to and from Gatwick, Stansted, Luton, and London City Airport, as well as cruise ports such as Southampton and Dover." },
  { q: "How can I contact my driver?", a: "You can contact your driver or our operations team 24/7 by phone on 020 3887 3844 or via WhatsApp on +44 73 8790 1028. Our team can connect you with your driver or assist with updates at any time." },
  { q: "Do you provide taxi service to Heathrow Airport hotels?", a: "Yes. We provide reliable taxi transfers between all Heathrow Airport terminals and nearby hotels, including Sofitel Heathrow, Hilton Heathrow, Radisson Blu, and Sheraton Skyline. Our drivers can meet you at arrivals or hotel reception for a smooth pickup or drop-off." },
  { q: "Do you offer transfers between Heathrow terminals?", a: "Yes. We offer quick and affordable transfers between Heathrow terminals, such as from Terminal 2 to Terminal 5. Our inter-terminal taxi service operates 24/7, with prices starting from £29 including meet & greet and parking." },
];


/**
 * 💡 FAQ Component
 * - Accordion yapısı ile SSS (Sıkça Sorulan Sorular) bölümü.
 * - İlk soru otomatik açık başlar.
 * - Aç/kapat işlemleri yumuşak animasyonla yapılır.
 * - İlk render sırasında animasyon devre dışı bırakılarak yükseklik hataları önlenir.
 */
const Faq = () => {
  // SSR uyumlu useLayoutEffect
  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;
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
  useIsomorphicLayoutEffect(() => {
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
    <div className={`page ${styles.faq_page}`}>
      <div className={`page_section ${styles.faq_page_section}`}>
        <div className={`${styles.faq_page_section_container}`}>
          <section className={styles.faq}>
            {/* 🏷️ Başlık */}
            <h2 className={styles.title}>Frequently Asked Questions</h2>
            <p className={styles.sub}>
              Answers about Heathrow taxis, transfers to hotels, inter-terminal rides, payments, child seats, and more.
            </p>

            {/* 📜 Soru listesi */}
            <div className={styles.list}>
              {faqs.map((faq, i) => (
                <article key={i} className={styles.item} ref={(el) => (itemsRef.current[i] = el)}  >
                  {/* 🔘 Soru başlığı */}
                  <button className={styles.trigger} onClick={() => toggleItem(i)} aria-expanded="false"  >
                    <h3 className={styles.q}>{faq.q}</h3>
                    <span className={styles.chev} aria-hidden="true"></span>
                  </button>

                  {/* 💬 Cevap paneli */}
                  <div className={styles.panel}>
                    <p>{faq.a}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Faq;
