import React from 'react';
import './Country.css'
const Country = (props) => {
    const {name,population,region,area,flags} = props.country
    return (
        <div className='country'>
            <h2>Country Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <h4>Population: { population}</h4>
            <p>Continent: { region}</p>
            <p>Area:<small>{ area}</small></p>
        </div>
    );
};

export default Country;