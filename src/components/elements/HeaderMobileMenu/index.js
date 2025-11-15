
import { headerLinkNames, heathrowTransferDealsLinkNames } from "../../../constants/headerLinkNames";
import styles from "./styles.module.scss"
const HeaderMobileMenu = ({ activeClass, animationDrop, openOrCloseDropDown, navRef, router, activeLinkSelected }) => {
    return (
        <div className={`${styles.ulDiv_mobile}`}>
            <ul id="nav" className={`${styles.ul} ${activeClass ? styles.ulActive : "false"}`} style={{ borderBottom: `${activeClass ? "2px solid #ed8323" : "none"}`, }} ref={navRef}   >
                {/* position absolute olan sagda bakground oran olan icon */}
                {activeClass ? <i onClick={openOrCloseDropDown} className={`fa-solid fa-angle-down ${styles.fa_icon} ${animationDrop && styles.rotatedIcon} `}   ></i> : <></>}
                {
                    activeClass ?
                        headerLinkNames?.map((item, i) => {
                            return (
                                <li key={item.id} className={`${styles.li_item} ${item.linkUrl === router.pathname && styles.active} ${i === 1 ? styles.hoverlayItem : ""}`} >
                                    <a href={item.linkUrl} id={`linkUrl_${i}`} className={`${styles.firstItem} ${styles.item}`}   >
                                        {item.linkName}
                                    </a>

                                    {i === 1 && (
                                        <ul style={{ height: `${animationDrop ? "140px" : "0px"}`, visibility: `${animationDrop ? "visible" : "hidden"}`, opacity: `${animationDrop ? 1 : 0}`, display: `${!animationDrop ? "none" : "block"}`, }} className={` ${styles.forMobileHover}`}   >
                                            {heathrowTransferDealsLinkNames.map((item) => {
                                                return (
                                                    <li className={` ${item.linkName === activeLinkSelected && styles.active}`} key={item.id}   >
                                                        <a href={item.linkUrl}>{item.linkName}</a>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    )}
                                </li>
                            );
                        })
                        : <></>
                }
            </ul>
        </div>

    )
}

export default HeaderMobileMenu