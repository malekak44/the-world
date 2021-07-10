import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CountryDetail.css';

const CountryDetail = () => {
    const { name } = useParams();
    const [country, setCountry] = useState([]);
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${name}?fullText=true`
        fetch(url)
            .then(res => res.json())
            .then(data => setCountry(data[0]))
    }, [])
    const { flag, capital, region, area, timezones, population } = country;
    return (
        <div className="single">
            <h1>{country.name}</h1>
            <img src={flag} alt={country.name} />
            <ul>
                <li>Capital: {capital}</li>
                <li>Region: {region}</li>
                <li>Area: {area}sqkm</li>
                <li>Timezone: {timezones}</li>
                <li>Population: {population}</li>
            </ul>
        </div>
    );
};

export default CountryDetail;