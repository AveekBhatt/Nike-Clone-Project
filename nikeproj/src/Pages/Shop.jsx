import React from 'react';
import Hero from '../Components/Hero/Hero';
import NewArrivals from '../Components/NewArrivals/NewArrivals';
import Spotlights from '../Components/Spotlights/Spotlights';
import Featured from '../Components/Featured/Featured';
import ShopBySport from '../Components/ShopbySport/ShopbySport';
import MemberBenefits from '../Components/MemberBenefits/MemberBenefits';
import Experience from '../Components/experience/experience';

const Shop = () => {

        return (
            <div>
                <Hero />
                <NewArrivals />
                <Spotlights />
                <Featured />
                <ShopBySport />
                <MemberBenefits />
                <Experience />
            </div>
        );
    
}
 
export default Shop;