import React from 'react';
import { useHistory } from 'react-router';

const ConfirmOrder = () => {
    const history = useHistory();
    const goToCart = () => {
        history.push("/cart");
    }
    return (
        <div className="text-center">
            <button className="btn btn-info" onClick={goToCart}>Checkout Your Food</button>
        </div>
    );
};

export default ConfirmOrder;