import React from 'react';
import "./Cart.css";

const Cart = () => {
    return (
        <div className="cart-container">
            <h1 className="mb-2">Edit Delivery Address</h1>
            <hr className="mb-5" />
            <div>
                <form>
                    <input type="text" style={{ backgroundColor: "#eee" }} className="form-control mb-4" placeholder="Name" value="Deliver To Door" />

                    <input type="text" style={{ backgroundColor: "#eee" }} className="form-control mb-4" placeholder="Address" />

                    <input type="text" style={{ backgroundColor: "#eee" }} className="form-control mb-4" placeholder="Flat No." />

                    <input type="text" style={{ backgroundColor: "#eee" }} className="form-control mb-4" placeholder="Businessman" />

                    <input type="text" style={{ backgroundColor: "#eee" }} className="form-control mb-4 pb-5" placeholder="Add Delivery Instructor" />

                    <input type="submit" className="form-control bg-danger text-white fw-bold" placeholder="Name" />
                </form>
            </div>
        </div>
    );
};

export default Cart;