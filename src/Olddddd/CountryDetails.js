import React from 'react'

export default function CountryDetails({ filterCountries }) {// loop over each country and renders basic data of single country
    const RenderCountryDetails = filterCountries.map(country => {

        //  Render languages  speaks in a country
        const countryLang = country.languages.map(languages => {
            return <li key={languages.name}>{languages.name}</li>
        })

        return (<div key={country.name}>
            <h1> {country.name}</h1>
            <p>
                <strong>Popuation: </strong><small>{country.population}</small>
            </p>
            <p>
                <strong>Capital: </strong><small>{country.capital}</small>
            </p>
            <h4>Languages</h4>
            <ul>{countryLang}</ul>
            <img src={country.flag} alt="country flag" width="100" />
        </div>)
    })
    return (
        <div>
            {RenderCountryDetails}
        </div>
    )
}
