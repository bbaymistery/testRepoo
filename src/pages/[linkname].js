import { createWrapper } from 'next-redux-wrapper';
import React from 'react'
import GlobalLayout from '../components/layouts/GlobalLayout';
import CarsSlider from '../components/widgets/CarsSlider';
import Hero from '../components/widgets/Hero';
import TaxiDeals from '../components/widgets/TaxiDeals';
import store from '../store/store';
import LinkNameDescription from '../components/elements/LinkNameDescription';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import CustomError from './404';
const NavbarLinkName = (props) => {
    // const router=useRouter()
    // const state = useSelector(state => state.initialReducer)
    // let { appData } = state
    let title = "", description = "", keywords = ""
    // const paths = [];
    // function extractPaths(navigator) {
    //     navigator.forEach((item) => {
    //         if (item.path) {
    //             paths.push(item.path);
    //         }
    //         if (item.list) {
    //             extractPaths(item.list);
    //         }
    //     });
    // }
    // extractPaths(appData.navigator);

    // console.log(paths);
    // console.log(router);
    // console.log(router.route);
    // console.log(router.pathname);


    // if (router.query.linkname) {
    //     if (!paths.includes(`/${router.query.linkname}`)){
    //        return <CustomError/>
    //     }
    // } else if (!paths.includes(`${router.query.linkname}`)){
    //     return <CustomError />
    // }
    // if (!paths.includes(router.pathname)) return <CustomError />
    // let { hasLangauge } = props

    // const state = useSelector(state => state.pickUpDropOffActions)
    // let { reservations, params: { journeyType, quotations } } = state

    // const dispatch = useDispatch()
    // const { appData } = useSelector(state => state.initialReducer)

    // const getDataBasedLanguage = async (language) => {
    //     try {
    //         //payment hydation error ucun
    //         let response = await fetch(`${env.apiDomain}/app/${language}`)
    //         let data = await response.json()
    //         //passing inital state in order make update in store js when language changing
    //         if (data.status === 200) dispatch({ type: "SET_NEW_APPDATA", data, initialStateReducer: store.getState().initialReducer })
    //     } catch (error) {
    //     }
    // }


    // const setLanguage = (params = {}) => {
    //     let { language } = params
    //     if (language) {
    //         let index
    //         let direction
    //         direction = language === 'ar' ? "rtl" : "ltr"
    //         appData?.languages.map((item, idx) => {
    //             let { value: key, } = item
    //             if (language === key) index = idx
    //         })
    //         dispatch({ type: "SET_NEW_LANGUAGE", data: { languageKey: language, direction, langIndex: index } })
    //         //set language and dicertion  to localstorage
    //         localStorage.setItem("language", JSON.stringify(language));
    //         localStorage.setItem("direction", JSON.stringify(direction));
    //         localStorage.setItem("langIndex", JSON.stringify(index));
    //         getDataBasedLanguage(language)
    //     }
    // }
    // useEffect(() => {
    //     //set language and bring appDAtas
    //     if (hasLangauge?.length === 2) {
    //         setLanguage({ language: hasLangauge })
    //     } else {
    //         setLanguage({ language: JSON.parse(localStorage.getItem("language")) })
    //     }
    // }, [])

    return (
        <GlobalLayout keywords={keywords} title={title} description={description} footerbggray={false}>
            <Hero islinknamecomponent={true} bggray={false} />
            <TaxiDeals showTabs={false} bggray={false} islinknamecomponent={true} />
            <CarsSlider bggray={false} />
            <LinkNameDescription />
        </GlobalLayout>
    )
}

export default NavbarLinkName

const makestore = () => store;
const wrapper = createWrapper(makestore);


export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, res, ...etc }) => {
    let dealUrl = `${req.url}`

    //ornek olsun diye bu sekilde yazdik Pekcandan yolaca cikarak /kullar direk /aboutu gorseder
    // {
    //     source: '/tr/şartlar',
    //         destination: '/terms',
    //             locale: false,
    //   },
    // {
    //     source: '/taşartlar',
    //         destination: '/terms',
    //             locale: false,
    // },


    //     let hasLangauge = dealUrl.split('/').filter(s => s.length > 0)[0];
    //     const match = url.match(/^\/([a-z]{2})\//);
    //    const lang = match ? match[1] : 'en';

    //    check if tr ar exist in url



    //     if ((hasLangauge || '').length === 2) {
    //         dealUrl = `${hasLangauge}${dealUrl.slice(3)}`

    //     }


    //     return { props: {hasLangauge="",dealUrl=}}


});