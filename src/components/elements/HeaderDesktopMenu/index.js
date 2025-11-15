import { headerLinkNames, heathrowTransferDealsLinkNames } from '../../../constants/headerLinkNames';
import styles from "./styles.module.scss"
const HeaderDesktopMenu = ({ openOrCloseDropDown, router, activeLinkSelected }) => {
    return (
        <div className={`${styles.desktop_menu}`}>
            <ul id="nav" className={`${styles.ul} `} >
                {headerLinkNames?.map((item, i) => {
                    return (
                        <li key={item.id} className={`${styles.li_item} ${item.linkUrl === router.pathname && styles.active} ${i === 1 ? styles.hoverlayItem : ""}`} >
                            <a href={item.linkUrl} id={`linkUrl_${i}`} className={`${item.id === 6 ? styles.manageBookingItem : ""} ${styles.item}`}   >
                                {item.linkName}
                            </a>
                            {i === 1 &&
                                <i onClick={openOrCloseDropDown} className={` fa-solid fa-angle-down  ${styles.fa_icon_for_desktop} ${activeLinkSelected === "heathrow transfer deals" ? "text_white" : ""} `}></i>
                            }
                            {i === 1 && (
                                <ul className={styles.hoverUl}>
                                    {heathrowTransferDealsLinkNames?.map((item) => {
                                        return (
                                            <li className={`   ${item.linkName === activeLinkSelected && styles.active}`} key={item.id}    >
                                                <a href={item.linkUrl}>  {` ${item.linkName.split(" ")[0]}  ${item.linkName.split(" ")[1]} `}  <br />  {`${item.linkName.split(" ")[2]}`}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default HeaderDesktopMenu