import { useState, useEffect } from 'react';
import countryService from '../services/countries';

export const useField = (type) => {
    const [value, setValue] = useState('');

    const onChange = (event) => {
        setValue(event.target.value);
    };

    return {
        type,
        value,
        onChange,
    };
};

export const useCountry = (name) => {
    const [country, setCountry] = useState(null);

    useEffect(() => {
        const fetchCountry = async () => {
            const country = await countryService.getCountry(name);
            country ? setCountry({ data: country, found: true }) : setCountry({ found: false });
        };

        if (name) {
            fetchCountry();
        }
    }, [name]);

    return country;
};
