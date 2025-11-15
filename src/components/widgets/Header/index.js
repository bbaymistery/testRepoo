import dynamic from "next/dynamic";
import { useRouter } from "next/router.js";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { selectActiveLink } from "../../../store/pickUpDropOffReducer/pickUpDropSelectors.js";
import styles from "./styles.module.scss";

const HeaderDesktopMenu = dynamic(() => import("../../elements/HeaderDesktopMenu"));
const HeaderMobileMenu = dynamic(() => import("../../elements/HeaderMobileMenu"));

const Header = () => {
  const navRef = useRef(null);
  const activeLinkSelected = useSelector(selectActiveLink);
  const router = useRouter()

  const menuRef = useRef(null);
  const [activeClass, setActiveClass] = useState(false);
  const [animationDrop, setAnimationDrop] = useState(false);


  const openOrCloseDropDown = (e) => {
    setAnimationDrop((prev) => !prev);
  };


  const { width } = useWindowSize();

  // ✅ Menü toggle
  const toggleMenu = () => {
    setActiveClass((prev) => !prev);

    // güvenli erişim
    if (menuRef.current) {
      menuRef.current.classList.toggle(styles.menuActive);
    }

    // güvenli style set (DOM hazırsa)
    requestAnimationFrame(() => {
      if (navRef.current) {
        const count = navRef.current.children.length;
        navRef.current.style.setProperty("--childenNumber", count);
      }
    });
  };

  useEffect(() => {
    if (window.width < 990) {
      navRef.current.style.setProperty(
        "--childenNumber",
        `${animationDrop
          ? navRef.current.children.length + 3.6
          : navRef.current.children.length
        }`
      );
    }
  }, [animationDrop]);

  return (
    <div className={styles.nav_container} id="navbar_container">
      <nav className={styles.nav}>
        {/* 🔹 Logo */}
        <div className={styles.logoDiv}>
          <a href="/">
            <p className={styles.logo}>Menu</p>
          </a>
        </div>

        {/* 🔹 Desktop */}
        {width > 990 && (<HeaderDesktopMenu router={router} activeLinkSelected={activeLinkSelected} />)}

        {/* 🔹 Mobile */}
        {activeClass && (<HeaderMobileMenu activeClass={activeClass} navRef={navRef} router={router} activeLinkSelected={activeLinkSelected} animationDrop={animationDrop} openOrCloseDropDown={openOrCloseDropDown} />)}

        {/* 🔹 Hamburger Button */}
        <div onClick={toggleMenu} ref={menuRef} className={styles.menu}>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </div>
      </nav>
    </div>
  );
};

export default Header;
