import React from "react";
import { carsItems } from "../../../constants/carss";
import styles from "./styles.module.scss";
import Image from 'next/image'
import { useSelector } from "react-redux";

const CarItem = ({ sliderRef }) => {
  const state = useSelector(state => state.pickUpDropOffActions)
  let { params: { direction } } = state
  return (
    <div className={styles.owl_stage} ref={sliderRef}>
      {carsItems.map((car, i) => {
        return (
          <div className={styles.car_item} key={car.id}>
            <div className={styles.card_img_div}>
              <div className={styles.card_image_link}>
                <Image src={car.carImage} className={styles.img} fill alt={car.carName} sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </div>
            <div className={styles.card_body}>
              <h2 className={`${direction} ${styles.card_body_title}`}>{car.carName}</h2>
              <br />
              <div className={styles.card_body_attributes}>

                <ul className={styles.card_atr_ul} direction={String(direction === 'rtl')}>
                  <li className={styles.card_atr_li}>
                    <i className={`fa-solid fa-suitcase ${styles.li_icon}`}></i>
                    <span className={styles.li_desc}>
                      No of Suitcases {car.suitcase}
                    </span>
                  </li>
                </ul>
                <ul className={styles.card_atr_ul} direction={String(direction === 'rtl')}>
                  <li className={styles.card_atr_li}>
                    <i className={`fa-solid fa-users ${styles.li_icon}`}></i>
                    <span className={styles.li_desc}>
                      No of Passengers {car.passenger}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CarItem;
