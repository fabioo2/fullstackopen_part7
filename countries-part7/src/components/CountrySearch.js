import React from 'react';
import { useField } from '../hooks';

const CountrySearch = ({ setName }) => {
    const nameInput = useField('text');

    const fetch = (e) => {
        e.preventDefault();
        setName(nameInput.value);
    };

    return (
        <form onSubmit={fetch}>
            <input {...nameInput} />
            <button>find</button>
        </form>
    );
};

export default CountrySearch;
