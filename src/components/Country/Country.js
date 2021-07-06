import React from 'react';
import './Country.css';

const Country = (props) => {
    const { name, capital, population, flag } = props.country;
    return (
        <div className="card">
            <img src={flag} alt={name} style={{ width: "100%" }} />
            <div className="container">
                <h2>{name.substring(0, 18)}</h2>
                <p>Capital: {capital}</p>
                <p>Population: {population}</p>
                <button onClick={() => props.handleAddClick(props.country)}>Add</button>
            </div>
        </div>
    );
};

export default Country;