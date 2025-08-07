import React from 'react';
import { useSelector } from 'react-redux';
import GlobalLayout from '../../components/layouts/GlobalLayout';
import { titleStringOfHastaxiDeals } from '../../components/widgets/Hero/translations';
import airportTranslations from '../../constants/generalTranslataions';
import { tourDatasTranslated } from '../../constants/keywordsAndContents/toursKeywordsContentSchemas';
import { fetchConfig } from '../../resources/getEnvConfig';
import styles from "./styles.module.scss";
import { navigator, } from '../../constants/navigatior';
import { checkLanguageAttributeOntheUrl } from '../../helpers/checkLanguageAttributeOntheUrl';
import { adjustPathnameForLanguage } from '../../helpers/adjustedPageLanguage';
import { parse } from 'url';
import { parseCookies } from '../../helpers/cokieesFunc';

const keywords = "Sitemap";
const metaTitle = "APL Transfers | Turkey Transfers";
const metaDescription = "You can find your destination url from our Sitemap-apltransfers.com/";
const API_POINTS = ["IST", "SAW", "BJV", 'AYT', 'DLM',];
const mainPages = [
    { href1: '/about-us', title1: 'About-Us', href2: '/tours', title2: 'Tours' },
    { href1: '/contact-us', title1: 'Contact-us', href2: '/fleet', title2: 'Our Fleet' },
    { href1: '/manage-booking.html', title1: 'Manage Booking', href2: '/privacy-policy', title2: 'Privacy Policy' },
    { href1: '/tr/sofor-araniyor', title1: 'Drivers Wanted', href2:'/sofor-basvuru-formu', title2: 'Driver Application Form' },
    { href1: '/travel-agents', title1: 'Trivel Agents', },
];


const Table = ({ title, rows }) => (
    <table className={styles.sitemap} id="sitemap">
        <thead>
            <tr>
                <th style={{ textAlign: "center" }} colSpan="2">{title}</th>
            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
    </table>
);


const TableRow = ({ price, isPrice = true, pathname, pageTitle }) => (
    <tr>
        <td>
            <>
                <a href={pathname}>{pageTitle}</a>
                {isPrice ? <span>{price}</span> : <></>}
            </>
        </td>
        <td>
            <a href={pathname}>{pageTitle}</a>
            {isPrice ? <span>{price}</span> : <></>}
        </td>
    </tr>
);



const Sitemap = (props) => {
    let { taxiData } = props

    const state = useSelector(state => state.pickUpDropOffActions);
    const { params: { language, } } = state;


    return (
        <GlobalLayout keywords={keywords} title={metaTitle} description={metaDescription} footerbggray={true} mainCanonical={props.mainCanonical}>
            <div className={`${styles.sitemap} page`}>
                <div className={`${styles.sitemap_section} page_section`}>
                    <div className={`${styles.sitemap_section_container} page_section_container`}>

                        {/* Main Pages Table */}
                        <Table
                            title="Main Pages"
                            rows={mainPages.map((page, index) => (
                                <tr key={index}>
                                    <td>
                                        <a href={page.href1}>{page.title1}</a>
                                    </td>
                                    <td>
                                        <a href={page.href2}>{page.title2}</a>
                                    </td>
                                </tr>
                            ))}
                        />

                        <Table
                            title="Tours Deals Taxi Prices"
                            rows={tourDatasTranslated.reduce((acc, data, index) => {

                                if (index % 2 === 0) {
                                    // If index is even, create a new row with left data
                                    acc.push(
                                        <TableRow
                                            key={index}
                                            isPrice={false}
                                            pathname={tourDatasTranslated[index].pathname}
                                            pageTitle={tourDatasTranslated[index]["pageTitle"][language]}
                                        />
                                    );
                                }
                                return acc;
                            }, [])}
                        />
                        <Table
                            title="Airport Taxi"
                            rows={navigator[1].list.reduce((acc, data, index) => {
                                if (index % 2 === 0) {
                                    // If index is even, create a new row with left data
                                    acc.push(
                                        <TableRow
                                            key={index}
                                            isPrice={false}
                                            pathname={data.path}
                                            pageTitle={airportTranslations[language][data.title]}
                                        />
                                    );
                                }
                                return acc;
                            }, [])}
                        />

                        {API_POINTS.map((point) => {
                            return (
                                <Table
                                    key={point}
                                    title={airportTranslations[language][`${titleStringOfHastaxiDeals(point)}`]}
                                    rows={
                                        <>
                                            {taxiData[point] && taxiData[point]
                                                .reduce((acc, data, index) => {
                                                    if (index % 2 === 0) {
                                                        acc.push(
                                                            <TableRow
                                                                key={index}
                                                                isPrice={true}
                                                                price={taxiData[point][index].price}
                                                                pathname={taxiData[point][index].pathname}
                                                                pageTitle={taxiData[point][index].pageTitle}
                                                            />
                                                        );
                                                    }
                                                    return acc;
                                                }, [])
                                            }

                                        </>
                                    }
                                />
                            )
                        })}



                    </div>
                    <br />
                    <br />
                </div>
            </div>
        </GlobalLayout>
    );
}

export default Sitemap;

export async function getServerSideProps({ req, res, query, resolvedUrl }) {
    const env = await fetchConfig();
    let { pathname } = parse(req.url, true)
    let cookies = parseCookies(req.headers.cookie);

    // Fetch taxi deals data for each point
    async function fetchTaxiDealPaths(point) {
        if (point === "IST") {
            point = "istanbul airport"
        }
        else if (point === "SAW") {
            point = "sabiha gokcen airport"
        } else if (point === "AYT") {
            point = "antalya airport"
        } else if (point === "DLM") {
            point = "dalaman airport"
        } else if (point === "BJV") {
            point = "bodrum airport"
        }
        let encodedDealsNameProp = encodeURIComponent(point);
        let url = `${env.apiDomain}/api/v1/taxi-deals/list?points=${encodedDealsNameProp}&language=en&channelId=${12}&currencyId=${3}`;

        const response = await fetch(url);
        const data = await response.json();

        return data.data.destinations;
    }

    // Fetch data on the server side
    const taxiData = {};
    let pageStartLanguage = checkLanguageAttributeOntheUrl(req?.url)

    // Adjust pathname and language based on initial language
    const adjusted = adjustPathnameForLanguage(pathname, pageStartLanguage, cookies);
    pathname = adjusted.pathname;
    pageStartLanguage = adjusted.pageStartLanguage;
    for (const point of API_POINTS) {
        taxiData[point] = await fetchTaxiDealPaths(point);
    }
    const mainCanonical = `${env.websiteDomain}${pageStartLanguage === 'en' ? "/sitemap" : `/${pageStartLanguage}/sitemap`}`

    // Pass the fetched data to the client-side component
    return {
        props: {

            taxiData, mainCanonical
        }
    };
}
