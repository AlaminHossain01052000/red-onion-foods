import React from 'react';
import useAuth from '../../../hooks/useAuth';

import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import ConfirmOrder from '../ConfirmOrder/ConfirmOrder';
import ContactUs from '../ContactUs/ContactUs';

import Meals from '../Meals/Meals/Meals';

const Home = () => {


    return (
        <div>
            <Banner></Banner>
            <Meals></Meals>
            <ConfirmOrder></ConfirmOrder>
            <ChooseUs></ChooseUs>
            <ContactUs></ContactUs>

        </div>
    );
};

export default Home;