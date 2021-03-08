import React from 'react';

const Country = (props) => {
    const {name, population, region, flag} = props.country;
    const handleAddCountry = props.handleAddCountry;
    const flagStyle = {
        height: '150px',
        borderRadius: '10px', 
        border: '1px solid lightgray'
    }

    const countryStyle = {
        border: '1px solid red',
        margin: '20px',
        padding: '10px',
        borderRadius: '10px',
        backgroundColor: 'lightgray'
    }
    
    return (
        <div style={countryStyle}>

            <img style={flagStyle} src={flag} alt=""/>
            <h3>{name}</h3>
            
            <p>Population: {population}</p>
            <p><small>Region: {region}</small></p>
            <button onClick={ () => handleAddCountry(props.country)}>Add Country</button>

        </div>
    );
};

export default Country;