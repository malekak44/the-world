import React from 'react';
import Cart from '../Cart/Cart';
import Country from '../Country/Country';
import { useEffect, useState } from "react";


const Home = () => {
    const [countries, setCountries] = useState([]);
    const [carts, setCarts] = useState([]);
    const handleAddClick = (country) => {
        const newCart = [...carts, country];
        setCarts(newCart);
    }
    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all")
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);
    return (
        <div>
            <Cart carts={carts}></Cart>
            <div className="countries-container">
                {
                    countries.map(country => <Country country={country} key={country.alpha3Code} handleAddClick={handleAddClick}></Country>)
                }
            </div>
        </div>
    );
};

export default Home;