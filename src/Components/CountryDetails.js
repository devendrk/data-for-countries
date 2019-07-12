import React from 'react'

export default function CountryDetails({ filterWhenSearch }) {// loop over each country and renders basic data of single country
  const RenderCountryDetails = filterWhenSearch.map(country => {

    //  Render languages  speaks in a country
    const countryLang = country.languages.map(languages => {
      return <li key={languages.name}>{languages.name}</li>
    })
    const divStyle = {
      width: '18rem'
    }
    return (
      <div key={country.name} class="card" style={divStyle}>
        <img className="card-img-top img-thumbnail" src={country.flag} alt="country flag" width="100" />
        <h4 className="card-title text-center py-2 font-weight-bolder bg-dark text-white">{country.name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><strong>Popuation: </strong><small>{country.population}</small></li>
          <li className="list-group-item"><strong>Capital: </strong><small>{country.capital}</small></li>
          <li className="list-group-item">
            <h4>Languages</h4>
            <ul>{countryLang}</ul>
          </li>
        </ul>

      </div>

    )
  })
  return (
    <div>
      {RenderCountryDetails}
    </div>
  )
}
