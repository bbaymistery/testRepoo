import React from 'react'
import styles from "./styles.module.scss"
import GlobalLayout from '../../layouts/GlobalLayout'
import { useSelector } from 'react-redux'
import CardQuotationItemTaxiDeal from '../CardQuotationItemTaxiDeal'
import dynamic from 'next/dynamic'
import { useWindowSize } from '../../../hooks/useWindowSize'
const QuotationResultsTaxiDealLeftPart = dynamic(() => import('../QuotationResultsTaxiDealLeftPart'));
const QuotationResultsTaxiDeal = (props) => {
    //these props comes from ...pathname
    let {
        previousUrl,
        keywords: keywordsTaxiDeal,
        pageTitle,
        headTitle,
        description: descriptionTaxiDeal,
        returnPathname,
        pageContent,
        returnHeadTitle,
        returnPageTitle
    } = props//those props comes from ...pathname

    const state = useSelector(state => state.pickUpDropOffActions)
    let { reservations, params } = state
    let { direction, quotations, } = params

    const { appData } = useSelector(state => state.initialReducer)
    const objectDetailss = appData?.pointTypeCategories?.reduce((obj, item) => ({ ...obj, [item.id]: JSON.parse(item.objectDetails), }), {});
    const size = useWindowSize();
    const { width } = size;
    return (
        <GlobalLayout keywords={keywordsTaxiDeal} title={headTitle} description={descriptionTaxiDeal} footerbggray={true}  >
            <div className={`${styles.quotation} page`}>
                <div className={`${styles.quotation_section} page_section`}>
                    <div className={`${styles.quotation_section_container} page_section_container`}>
                        {reservations.map((obj, index) => {
                            return (
                                <div key={index} style={{ marginBottom: `${index === 0 ? "4rem" : ""}` }}>
                                    <div className={`${direction} ${styles.main_container_taxideal}`}>
                                        {width > 1280 ? <QuotationResultsTaxiDealLeftPart /> : <></>}
                                        {/* //*Card item of results */}
                                        <CardQuotationItemTaxiDeal
                                            index={index}
                                            distance={quotations[index].distance}
                                            duration={quotations[index].duration}
                                            selectedQuotation={reservations[index]?.quotation}
                                            quotationOptions={quotations[index].quotationOptions}//
                                            headTitle={headTitle}
                                            previousUrl={previousUrl}
                                            returnPathname={returnPathname}
                                            pageTitle={pageTitle}
                                            pageContent={pageContent}
                                            returnHeadTitle={returnHeadTitle}
                                            returnPageTitle={returnPageTitle}
                                            objectDetailss={objectDetailss}
                                        />

                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        </GlobalLayout>
    )
}

export default QuotationResultsTaxiDeal