import React, { useState } from 'react';
import { useCountry } from './hooks';
import Country from './components/Country';
import CountrySearch from './components/CountrySearch';

const App = () => {
    const [name, setName] = useState('');
    const country = useCountry(name);

    return (
        <div>
            <CountrySearch setName={setName} />
            <Country country={country} />
        </div>
    );
};

export default App;
