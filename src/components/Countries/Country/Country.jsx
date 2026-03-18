 import React, { useState } from 'react';
 import './Country.css';
 
 
 const Country = ({country}) => {
     
    const [visited, setVisited] = useState(false);
    // console.log(country  )

    const handleClick = () => {
        //  if(visited) {
        //     setVisited(false);
        //  } else {
        //     setVisited(true);
        //  }

        // option 2
        // setVisited(visited ? false : true)
        
        // Option 3
        setVisited(!visited)

    }
 

    return (
        <div className='country'> 
            <img src = {country.flags.flags.png} alt={country.flags.flags.alt} />
            <h1>Name: {country.name.common}</h1>
            <h1>Region: {country.region.region}</h1>
            <h2>population: {country.population.population}</h2>
            <h3>Area: {country.area.area}
                {country.area.area > 300000 ? ' Big country' : ' small country'}
            </h3> 
             <button onClick={handleClick}> {visited ? '  Visited' : 'Not  Visited'}</button>

        </div>
    );
 };
 
 export default Country;