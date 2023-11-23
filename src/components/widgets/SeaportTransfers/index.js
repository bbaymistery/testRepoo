import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import { seaport } from "../../../constants/seaportTransfers";
import Image from 'next/image'
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
const index = (props) => {
  const observerOptions = { root: null, rootMargin: "10px 0px", threshold: 0, once: true };


  let { bggray = false, } = props
  // // Use the custom hook for the title elements
  // useIntersectionObserver('.seaportTtile', (entries) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       entry.target.classList.add('zoom_out');
  //     }
  //   });
  // }, observerOptions);

  // // Use the custom hook for the list elements
  // useIntersectionObserver('.seaportt', (entries) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       entry.target.classList.add('bottom_to_top_animation2');
  //     }
  //   });
  // }, observerOptions);



  return (
    <div className={`${styles.seaport} page`} bggray={String(bggray)}>
      <div className={`${styles.seaport_section} page_section`}>
        <div className={`${styles.seaport_section_container} page_section_container`}>
          <h1 className={`${styles.transfer_title} seaportTtile`}>Cruises Transfers</h1>
          <div className={styles.container}>
            <div className={styles.content} >
              {seaport.map((item, i) => {
                const animationDelay = `${0.5 + i * 0.25}s`; // Calculate animation delay
                return (
                  <a key={i} href={item.linkUrl} style={{ display: "block", width: '100%', animationDelay: animationDelay, animationDuration: '1s' }} className="seaportt">
                    <div key={item.id} className={styles.card}>
                      <div className={styles.img_div}>
                        <Image src={item.imgUrl} className={styles.img_original} alt={item.title} fill sizes="(max-width: 768px) 100vw, 50vw" />
                      </div>
                      <div className={styles.card_desc}>
                        <h2 className={styles.card_desc_title}>{item.title}</h2>
                        <div className={styles.card_desc_subtitle}>
                          <div className={styles.card_detail_btn_box}>
                            <div className={styles.detail_btn}>See Details</div>
                            <p className={styles.detail_arrow_icon}>
                              <i className="fa-solid fa-angle-right"></i>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default index;
