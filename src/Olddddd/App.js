import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import modules
import SearchField from './SearchField';
import CountryDetails from './CountryDetails';
import WeatherDetails from './WeatherDetails';
import './app.css'

function App() {
  const [countries, setCountries] = useState([])
  const [searchCountry, setcountrySearch] = useState('')
  const [weather, setWeather] = useState({ temp: '', windSpeed: '' });

  // fetch api using axios
  // handle component updates by useEffect
  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])


  const weatherAPIKey = "5370cf795f231fbe3cc9897272919d2b"

  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${filterCountries[0].capital}&appid=${weatherAPIKey}&units=metric`)
    .then(response => {
      setWeather({ temp: response.data.main.temp, windSpeed: response.data.wind.speed })

    })

  const handleSearchOnchange = (event) => {
    setcountrySearch(event.target.value)
  }

  // Show hide country details toggler
  const handleShowCountryInfo = (name) => {
    setcountrySearch(name)
  }

  // filter the country that typed in search field
  const filterCountries = countries.filter(country => {
    return country.name.toLowerCase().includes(searchCountry.toLocaleLowerCase())
  })
  if (filterCountries.length === 1) {
    return (
      <div>
        <h1>Data for countries</h1>
        <SearchField
          handleSearchOnchange={handleSearchOnchange}
          searchCountry={searchCountry}
        />
        <CountryDetails filterCountries={filterCountries} />
        < WeatherDetails
          filterCountries={filterCountries}
          weather={weather}
        />
      </div>
    )

  } else if (filterCountries.length > 1 && filterCountries.length < 10) {

    // Renders countries in paragraph one by one
    return (
      <div>
        <h1>Data for countries</h1>
        <SearchField
          handleSearchOnchange={handleSearchOnchange}
          searchCountry={searchCountry}
        />
        {filterCountries.map(country => {
          return (
            <p key={country.name} >{country.name}
              <span>
                <button onClick={() => handleShowCountryInfo(country.name)}>show</button>
              </span>
            </p>
          )
        })}
      </div>
    )

  } else if (searchCountry.length === 0) {
    return (
      <div>
        <h1>Data for countries</h1>
        <SearchField
          handleSearchOnchange={handleSearchOnchange}
          searchCountry={searchCountry}
        />
      </div>
    )
  } else {
    const styleDiv = {
      color: 'blue'
    }
    return (
      <div>
        <h1>Data for countries</h1>
        <SearchField
          handleSearchOnchange={handleSearchOnchange}
          searchCountry={searchCountry}
        />
        <h4 style={styleDiv}>Too many matches, try more letter</h4>
      </div>
    )
  }



}
export default App;
