import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css';

const Country = (props) => {
    const { name, capital, population, flag } = props.country;
    return (
        <div className="card">
            <Link to={"country/" + name}>
                <img src={flag} alt={name} style={{ width: "100%" }} />
            </Link>
            <div className="container">
                <Link to={"country/" + name} style={{ textDecoration: 'none' }}>
                    <h2 className="name">{name.substring(0, 18)}</h2>
                </Link>
                <p>Capital: {capital}</p>
                <p>Population: {population}</p>
                <button className="addBtn" onClick={(e) => {
                    e.target.innerHTML = 'Added✔';
                    props.handleAddClick(props.country)
                }}>Add</button>
            </div>
        </div>
    );
};

export default Country;