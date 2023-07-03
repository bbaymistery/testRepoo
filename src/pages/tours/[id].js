import { useRouter } from "next/router";
import styles from  "./styles.module.scss"
import React, { useEffect, useState } from 'react'
import GlobalLayout from "../../components/layouts/GlobalLayout";
const TourContentDetails = ({ data }) => {
    const router = useRouter();
    const id = router.query.id;
    let description = ""
    let title = ""
    let keywords = ""
    return (
        <GlobalLayout keywords={keywords} title={title} description={description} footerbggray={true}>
            <div className={`page ${styles.page} `}>
                <div className={`page_section ${styles.page_section} `}  >
                    <div className={`page_section_container ${styles.page_section_container} `} >
                        <div className={styles.title_div}>
                            <h1>Tour Content Details </h1>
                            {id}
                        </div>
                    </div>
                </div>
            </div>
        </GlobalLayout>

    )
}

export default TourContentDetails;
