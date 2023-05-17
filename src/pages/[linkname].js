import { createWrapper } from 'next-redux-wrapper';
import React from 'react'
import GlobalLayout from '../components/layouts/GlobalLayout';
import CarsSlider from '../components/widgets/CarsSlider';
import Hero from '../components/widgets/Hero';
import TaxiDeals from '../components/widgets/TaxiDeals';
import store from '../store/store';
import LinkNameDescription from '../components/elements/LinkNameDescription';
const NavbarLinkName = (props) => {
 
    let title = "", description = "", keywords = ""
    

    return (
        <GlobalLayout keywords={keywords} title={title} description={description} footerbggray={false}>
            <Hero islinknamecomponent={true} bggray={false} />
            <TaxiDeals showTabs={false} bggray={false} islinknamecomponent={true} />
            <CarsSlider bggray={false} />
            {/* <LinkNameDescription /> */}
        </GlobalLayout>
    )
}

export default NavbarLinkName

const makestore = () => store;
const wrapper = createWrapper(makestore);


