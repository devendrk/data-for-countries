import React from 'react';

const CountryList = ({ tenCountries, handleShowCountryInfo }) => {
  return tenCountries.map(country => {
    return (
      <p key={country.name} >{country.name}
        <span>
          <button onClick={() => handleShowCountryInfo(country.name)}>show</button>
        </span>
      </p>
    )
  })

}

export default CountryList;
