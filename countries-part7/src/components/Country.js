import React from 'react';

const Country = ({ country }) => {
    console.log(country);
    if (!country) {
        return null;
    }

    if (!country.found) {
        return <div>not found...</div>;
    }

    return (
        <div>
            <h3>{country.data.name} </h3>
            <div>
                <strong>capital</strong>: {country.data.capital}{' '}
            </div>
            <div>
                <strong>population</strong>: {country.data.population}
            </div>
            <img src={country.data.flag} height="100" alt={`flag of ${country.data.name}`} />
        </div>
    );
};

export default Country;
