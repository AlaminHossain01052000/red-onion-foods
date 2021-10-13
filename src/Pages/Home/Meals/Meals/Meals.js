import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./Meals.css";



const Meals = () => {
    return (
        <Container className="my-5 text-center">
            <div className="meals-container">
                <NavLink to="/breakfast">Breakfast</NavLink>
                <NavLink to="/lunch">Lunch</NavLink>
                <NavLink to="/dinner">Dinner</NavLink>

            </div>
        </Container>
    );
};

export default Meals;