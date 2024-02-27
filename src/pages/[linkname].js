import { createWrapper } from 'next-redux-wrapper';
import React from 'react'
import GlobalLayout from '../components/layouts/GlobalLayout';
import CarsSlider from '../components/widgets/CarsSlider';
import Hero from '../components/widgets/Hero';
import TaxiDeals from '../components/widgets/TaxiDeals';
import store from '../store/store';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import LinkNameDescription from '../components/elements/LinkNameDescription';
import { fetchContent } from '../helpers/fetchContent';
import { parse } from 'url'
import Error404 from './404/index'
import { checkLanguageAttributeOntheUrl } from '../helpers/checkLanguageAttributeOntheUrl';
import { Airports, CruisePorts } from '../constants/navigatior';
import { generateCanonicalAlternates } from '../helpers/canolicalAlternates';
import env from '../resources/env';

const NavbarLinkName = (props) => {
    let { metaTitle, keywords, metaDescription, pageContent, data = "", canonicalAlternates, mainCanonical, } = props

    if (data === "not found") return <Error404 />
    const dispatch = useDispatch()
    const router = useRouter();
    const { linkname } = router.query;
    useEffect(() => {
        // Combine both Airports and CruisePorts into a single array
        const lists = [...Airports, ...CruisePorts];
        // Find the object that matches the current linkname based on the path
        const matchingItem = lists.find(item => item.path.includes(linkname));
        // If a matching item is found, dispatch the appropriate action
        if (matchingItem) {
            // Use the 'hasTaxiDeals' property of the matching item for dispatch
            dispatch({ type: "SET_NAVBAR_TAXI_DEALS", data: { hasTaxiDeals: matchingItem.hasTaxiDeals } });
        }
    }, [linkname, dispatch]); // Add linkname and dispatch to the dependency array



    return (
        <GlobalLayout keywords={keywords} title={metaTitle} description={metaDescription} footerbggray={false}>
            <Hero islinknamecomponent={true} bggray={false} />
            <TaxiDeals showTabs={false} bggray={false} islinknamecomponent={true} />
            {pageContent ? <LinkNameDescription pageContent={pageContent} /> : <></>}
            <CarsSlider bggray={true} />
        </GlobalLayout>
    )
}

export default NavbarLinkName

const makestore = () => store;
const wrapper = createWrapper(makestore);
//?biz burada metatile metaDescriptionlari fethcContente gore alib gonderirirk Her sayfa icin ayri bi sekilde gider
export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, res, ...etc }) => {
    //language congiguration based on the url (http://localhost:3500/it/gatwick-taxi-prices  if he pres enter we get lang)
    let pageStartLanguage = checkLanguageAttributeOntheUrl(req?.url)
    res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');
    const { cookie } = req.headers;
    let { pathname } = parse(req.url, true)
    let pathnameUrlWHenChangeByTopbar = pathname

    //baslangucda it/gatwic-taxi yazb enter basarsa ona gore yoxluyuruq Eger en ise deymirik yox localhost3500:/it/gatwick-taxi-prices ise split edirik
    //cunki direk adres yazb enteride basa biler  => http://localhost:3500/it/gatwick-taxi-prices
    if (pageStartLanguage === 'en') {
        pathname = pathname.replace(/^\/_next\/data\/[^/]+\//, '/').replace(/\.[^/.]+$/, '').replace(/\.json$/, '')
    } else {
        pathname = `/${pathname.split("/")[2]}`
    }
    let { metaTitle, keywords, pageContent, metaDescription, status, lang } = await fetchContent(pathname, cookie, pageStartLanguage, pathnameUrlWHenChangeByTopbar)
    let exceptions = pathname === "/dover-cruise-taxi" || pathname === "/portsmouth-taxi-prices" || pathname === "/harwich-taxi-prices"
    if (exceptions) status = 200
    let mainCanonical = lang === 'en' ? `${env.websiteDomain}${pathname}` : `${env.websiteDomain}/${lang}${pathname}`
    let canonicalAlternates = generateCanonicalAlternates(pathname);
    if (status === 200) {
        return { props: { metaTitle, keywords, pageContent, metaDescription, canonicalAlternates, mainCanonical } }
    } else {
        return { props: { data: "not found", } }
    }
});
