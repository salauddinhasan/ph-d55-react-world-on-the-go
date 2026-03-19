import React, { use, useState } from 'react';
import Country from './Country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {
 
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);


     const handleVisitedCountries = (country) => { 
        if(!visitedCountries.some(c => c.cca3 === country.cca3)) {
            setVisitedCountries([...visitedCountries, country]);
        }
     };

    // const handleVisitedFlag = (flag) => { 
    //      const newVisitedFlags = [...visitedFlags, flag]
    //      setVisitedFlags(newVisitedFlags)
    // }
     

    const handleVisitedFlag = (flag) => { 
        if(!visitedFlags.includes(flag)) {
            setVisitedFlags([...visitedFlags, flag])
        }
    }

    const countriesData = use(countriesPromise)
    const countries = countriesData.countries
     
    // console.log(countries)
    return (
        <div>
            <h1 className='title'>In The Country: {countries.length} </h1>
            <h3 className='title'>Total Country Visited: {visitedCountries.length}</h3>
            <h3 className='title'>Total Flags Visited : {visitedFlags.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li
                    key={country.cca3.cca3}
                    >{country.name.common}</li>)
                }
            </ol>

            <div className='visited-flags-container'>
                {
                    visitedFlags.map((flag, index) => <img
                        key={index}
                        src={flag}></img>)
                }
            </div>

            <div  className='countries'>
                {
                countries.map(country => {
                    return (
                        <Country 
                            key={country.cca3.cca3}
                            country={country}
                            handleVisitedCountries={handleVisitedCountries}
                            handleVisitedFlag = {handleVisitedFlag}
                             
                        />
                    )
                    })
             }
            </div>
        </div>
    );
};

export default Countries;


 