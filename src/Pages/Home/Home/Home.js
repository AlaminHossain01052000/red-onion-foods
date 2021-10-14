import React from 'react';

import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import ConfirmOrder from '../ConfirmOrder/ConfirmOrder';

import Meals from '../Meals/Meals/Meals';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Meals></Meals>
            <ConfirmOrder></ConfirmOrder>
            <ChooseUs></ChooseUs>

        </div>
    );
};

export default Home;