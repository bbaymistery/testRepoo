import React from "react";
import styles from "./styles.module.scss";
import Image from 'next/image'
import googleImaeReview from '../../../../public/webpImages/review1.webp'
const TestimonialLabel = () => {
  return (
    <>
      <div className={styles.testimonial}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.left}>
              <div className={styles.heading}>  <h1 className={styles.heading_title}> What our customers are saying ?  </h1>
              </div>
            </div>
            <div className={styles.right}>
              <a target="_blank" href="https://g.co/kgs/Rg7vb8" className={styles.img_div}>
                <Image src={googleImaeReview} alt="Heathrow Gatwick Transfers Review " width={270} height={183} sizes={"100vw"} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialLabel;
