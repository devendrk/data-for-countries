import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import modules
import RenderCountries from './RenderCountries'
import SearchField from './SearchField';
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

  const getWeather = (capitalCity) => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${capitalCity}&appid=${weatherAPIKey}&units=metric`)
      .then(response => {
        setWeather({ temp: response.data.main.temp, windSpeed: response.data.wind.speed })
      })
  }

  // filter the country that typed in search field
  const filterCountries = countries.filter(country => {
    return country.name.toLowerCase().includes(searchCountry.toLocaleLowerCase())
  })

  const handleSearchOnchange = (event) => {
    setcountrySearch(event.target.value)
  }

  // Show hide country details toggler
  const handleShowCountryInfo = (name) => {
    setcountrySearch(name)
  }

  // displays the countries list
  return (
    <div className="country-detail">
      <h1>Data for countries</h1>
      <SearchField
        handleSearchOnchange={handleSearchOnchange}
        searchCountry={searchCountry}
      />
      <RenderCountries
        filterCountries={filterCountries}
        handleShowCountryInfo={handleShowCountryInfo}
        searchCountry={searchCountry}
        getWeather={getWeather}
        weather={weather}
      />
    </div>)
}
export default App;
