import React from 'react';

const CountryList = ({ tenCountries, handleShowCountryInfo }) => {
  const renderCuntryList = tenCountries.map(country => {
    return (
      <div className="row">
        <div className="col-8">
          <li key={country.name} className="font-wight-bold">{country.name}
            <span className="ml-5">
              <button className="btn btn-info" onClick={() => handleShowCountryInfo(country.name)}>show details</button>
            </span>
          </li>
          <hr />
        </div>
      </div>
    )
  })

  return (
    <div className="container">
      {renderCuntryList}
    </div>
  )

}

export default CountryList;
