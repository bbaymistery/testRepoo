import Image from "next/image.js";
import styles from "./styles.module.scss";
import Button from "../Button/Button";
import { BUTTON_TYPES } from "../Button/ButtonTypes";
//!tour slider
const Slider = (props) => {
  let { setshouldShowModal, insideModal = false, index = 0, gotoPreviousSlider = () => { }, gotoNextSlider = () => { }, sliderItems, appData } = props
  return (
    // eslint-disable-next-line react/no-unknown-property
    <div className={`${styles.slider_container}`} insidemodal={String(insideModal)}>
      <div className={styles.slider}>
        {sliderItems?.map((image, carIndex) => {
          let position = `${styles.nextSlide}`;
          if (carIndex === index) position = `${styles.activeSlide}`;
          if (carIndex === index - 1 || (index === 0 && carIndex === sliderItems.length - 1)) position = `${styles.lastSlide}`;
          return (
            <div className={styles.slide + " " + position} key={carIndex}>
              <Image src={image} fill style={{objectFit:"cover"}} alt="Logo" />
              {/* <img src={image.img} alt="Logo" /> */}
              <div className={styles.container_auto_center}>
                <div className={styles.intro}>
                  {!insideModal ?
                    <Button
                      style={{ padding: '8px 14px' }}
                      type={BUTTON_TYPES.PRIMARY}
                      onBtnClick={() => setshouldShowModal(true)}
                      btnText={appData?.words["strSeeAllPhotos"]}
                    />

                    : <></>}
                </div>
              </div>
            </div>
          );
        })}
        <div className={styles.navigation}>
          <span className={styles.prev_btn} onClick={gotoPreviousSlider}>
            <i className="fa-solid fa-chevron-left"></i>
          </span>
          <span className={styles.next_btn} onClick={gotoNextSlider}>
            <i className="fa-solid fa-chevron-right"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Slider;
/*
 !clickable navigations
<div className={styles.visibility_navigation}>
  <div className={styles.slide_icon + " " + `${index === 0 ? `${styles.activeNavigationSlider}` : ""}`} onClick={() => setIndex(0)}></div>
  <div className={styles.slide_icon + " " + `${index === 1 ? `${styles.activeNavigationSlider}` : ""}`} onClick={() => setIndex(1)}></div>
  <div className={styles.slide_icon + " " + `${index === 2 ? `${styles.activeNavigationSlider}` : ""}`} onClick={() => setIndex(2)}></div>
</div>
*/