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

const NavbarLinkName = (props) => {

    let title = "", description = "", keywords = ""
    const dispatch = useDispatch()
    const router = useRouter();
    const { linkname } = router.query;

    // Check if the linkname is valid
    // if (linkname !== 'terms' && linkname !== 'about' && linkname !== 'contact') {
    //     return <Error404 />;
    // }

    useEffect(() => {
        /*
 !mesela biz gelib navbardan harwich ve ya heathrow-airport-transfer
 !tiklasak garsiliginda heathrow ve ya harwich olarak link name alariq

 !simdi manuel olarak elle yazib SET_NAVBNAR_TAXI_dEALS  seklinde linknamenen geleni hastaxidealsa atyrq
 !bunu yazmamin sebebi ise  http://localhost:3500/harwich  "e tikladigimda eger bunnan once http://localhost:3500/southampton" olubsa
 !gedib heathrownu gorsedir

 harwich
 [linkname].js:18 portsmouth //portsmouth
 [linkname].js:18 dovercruise //dovercruise
 [linkname].js:18 southampton //southampton
 harwich//harwich
 [linkname].js:18 heathrow-airport-transfer  //heathrow
 [linkname].js:18 gatwick-transfer //gatwick
 [linkname].js:18 luton-airport //luton
 [linkname].js:18 city-airport //city
 [linkname].js:18 stansted-airport //stansted
 */

        //normalda bunu appDatadan destructure edicez
        let lists = ["portsmouth", "dovercruise", "southampton", "harwich", "heathrow", "heathrow", "city", "gatwick", "luton", "stansted"]
        if (lists.includes(linkname)) dispatch({ type: "SET_NAVBAR_TAXI_DEALS", data: { hasTaxiDeals: linkname } })

    }, [])
    return (
        <GlobalLayout keywords={keywords} title={title} description={description} footerbggray={false}>
            <Hero islinknamecomponent={true} bggray={false} />
            <TaxiDeals showTabs={false} bggray={false} islinknamecomponent={true} />
            <CarsSlider bggray={true} />
            {/* <LinkNameDescription /> */}
        </GlobalLayout>
    )
}

export default NavbarLinkName

const makestore = () => store;
const wrapper = createWrapper(makestore);


