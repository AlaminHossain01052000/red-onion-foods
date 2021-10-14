import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import Breakfast from '../Breakfast/Breakfast';
import Dinner from '../Dinner/Dinner';
import Lunch from '../Lunch/Lunch';

import "./Meals.css";





const Meals = () => {

    const [breakfast, setBreakfast] = useState(false);
    const [lunch, setLunch] = useState(true);
    const [dinner, setDinner] = useState(false);
    const showBreakfast = () => {
        setBreakfast(true);
        setLunch(false);
        setDinner(false);
    }
    const showLunch = () => {
        setLunch(true);
        setBreakfast(false)
        setDinner(false)
    }
    const showDinner = () => {
        setLunch(false);
        setBreakfast(false)
        setDinner(true)
    }

    return (
        <Container className="my-5 text-center">
            <div className="meals-container">
                <button className="a" onClick={showBreakfast} >Breakfast</ button>
                <button className="a" onClick={showLunch}>Lunch</ button>
                <button className="a" onClick={showDinner}>Dinner</ button>
            </div>

            <div className="mt-5">

                {breakfast && <Breakfast></Breakfast>}

                {lunch && <Lunch></Lunch>}
                {dinner && <Dinner></Dinner>}


            </div>
        </Container>
    );
};

export default Meals;