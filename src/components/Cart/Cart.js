import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { carts } = props;
    const totalPeople = carts.reduce((total, cart) => total + cart.population, 0);
    return (
        <div className="cart">
            <h2>Country Added: {carts.length}</h2>
            <h3>Total Population: {totalPeople}</h3>
        </div>
    );
};

export default Cart;