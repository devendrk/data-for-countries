import React from 'react'

import CountryDetails from './CountryDetails'
import WeatherDetails from './WeatherDetails';

export default function RenderCountries({ getWeather, searchCountry, filterCountries, handleShowCountryInfo, weather }) {
    console.log('filtercountries', filterCountries)
    const weatherFunctionInvoke = () => getWeather(filterCountries[0].capital)

    if (filterCountries.length === 1) {
        weatherFunctionInvoke()
        return (
            <div>
                <CountryDetails filterCountries={filterCountries} />
                < WeatherDetails
                    filterCountries={filterCountries}
                    weather={weather}
                />
            </div>
        )

    } else if (filterCountries.length > 1 && filterCountries.length < 10) {

        // Renders countries in paragraph one by one
        return filterCountries.map(country => {
            return (
                <p key={country.name} >{country.name}
                    <span>
                        <button onClick={() => handleShowCountryInfo(country.name)}>show</button>
                    </span>
                </p>
            )
        })

    } else if (searchCountry.length === 0) {
        return null
    } else {
        const styleDiv = {
            color: 'blue'
        }
        return (
            <div>
                <h4 style={styleDiv}>Too many matches, try more letter</h4>
            </div>
        )
    }
}
