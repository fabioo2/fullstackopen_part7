import axios from 'axios';

const getCountry = async (name) => {
    try {
        if (name !== '') {
            const response = await axios.get(`https://restcountries.com/v2/name/${name}?fullText=true`);
            const country = await response.data[0];
            return country;
        }
    } catch (error) {
        console.error('error retrieving country', error);
        return null;
    }
};

const countryServicesObject = { getCountry };

export default countryServicesObject;
