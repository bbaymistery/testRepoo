import React, { useEffect, useState } from 'react'
import GlobalLayout from '../../components/layouts/GlobalLayout'
import styles from "./styles.module.scss"
import GeneralTerms from './GeneralTerms'
import PrivacyTerms from './PrivacyTerms'
import usePageContentHook from '../../hooks/usePageContentHook'
import { useSelector } from 'react-redux'

const leftLinks = [
    {
        id: 1,
        linkName: "General Terms of Use",
        pagePathname: 'Terms'
    },
    {
        id: 2,
        linkName: "Privacy policy",
        pagePathname: "Privacy_Policy"
    },

]
const Terms = (props) => {
    let { bggray = false } = props;
    const state = useSelector(state => state.pickUpDropOffActions);
    const { params: { language, direction } } = state;
    const [isActiveId, setIsActiveId] = useState(1);
    const [pagePathname, setPagePathname] = useState("Terms");

    const handleLinkNames = (link) => {
        setIsActiveId(link.id);
        setPagePathname(link.pagePathname);
    };


    const { metaTitle, keywords, description, pageContent, pageTitle, shortDescription } = usePageContentHook(pagePathname, language);


    return (
        <GlobalLayout keywords={keywords} title={metaTitle} description={description} footerbggray={true}>
            <div className={`${styles.terms} ${direction} page`} bggray={String(bggray === "true")}>
                <div className={`${styles.terms_section} page_section`}>
                    <div className={`${styles.terms_section_container} page_section_container`}>
                        <div className={styles.left}>
                            <div className={`${styles.link_content}`} style={{ padding: '1.5rem' }}>
                                {leftLinks.map((link, index) => {
                                    return <div key={index} className={`${styles.link_content_item} ${isActiveId === link.id ? styles.link_content_item_active : ""}`}>
                                        <button onClick={() => handleLinkNames(link)}>
                                            {link.linkName}
                                        </button>
                                    </div>
                                })}
                            </div>
                        </div>

                        {isActiveId === 1 ? <GeneralTerms pageContent={pageContent} /> : <></>}
                        {isActiveId === 2 ? <PrivacyTerms pageContent={pageContent} /> : <></>}
                    </div>
                </div>
            </div>
        </GlobalLayout>
    )
}

export default Terms
