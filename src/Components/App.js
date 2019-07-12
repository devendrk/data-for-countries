import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Search from './Search'
import NavBar from './NavBar'
import WeatherDetails from './WeatherDetails';
import CountryList from './CountryList'
import CountryDetails from './CountryDetails';


const App = () => {

  const [countries, setCountries] = useState([])
  const [searchVal, setSearchVal] = useState('')
  const [temperature, setTemperature] = useState('')
  const [wind, setWind] = useState('')
  const [countryCapital, setCountryCapital] = useState('')
  const [tenCountries, setTenCountries] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleOnchange = (e) => {
    setSearchVal(e.target.value)
  }

  // Show hide country details toggler
  const handleShowCountryInfo = (name) => {
    setSearchVal(name)
  }

  const filterWhenSearch = countries.filter(country => {
    return country.name.toLowerCase().includes(searchVal.toLocaleLowerCase())
  })

  useEffect(() => {
    const weatherAPIKey = "5370cf795f231fbe3cc9897272919d2b"
    if (filterWhenSearch.length === 1) {
      let countryCapital = filterWhenSearch[0].capital
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${countryCapital}&appid=${weatherAPIKey}&units=metric`)
        .then(response => {
          setTemperature(response.data.main.temp)
          setWind(response.data.wind.speed)
          setCountryCapital(countryCapital)



        })
    }
  })

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        const filterCountry = response.data.filter(country => {
          return country.name.toLowerCase().includes(searchVal.toLocaleLowerCase())
        })
        if (filterCountry.length > 1 && filterCountry.length < 10) {
          setTenCountries(filterCountry)
        }
      })
  }, [searchVal])

  const renderCountryDetail = () => {
    if (filterWhenSearch.length === 1) {

      return (
        <div className="container mt-5 ">
          <div className="row d-flex flex-wrap justify-content-around ">
            <div className="md-col-6 mb-5">
              < CountryDetails
                filterWhenSearch={filterWhenSearch}
              />
            </div>
            <div className="md-col-4 mb-5">
              < WeatherDetails
                countryCapital={countryCapital}
                temperature={temperature}
                wind={wind}
              />

            </div>
          </div>

        </div>
        // ---

        // ---

      )
    } else if (filterWhenSearch.length > 1 && filterWhenSearch.length < 10) {
      return (
        < CountryList
          tenCountries={tenCountries}
          handleShowCountryInfo={handleShowCountryInfo}
        />
      )
    } else if (searchVal.length === 0) {
      return null
    } else {
      const styleDiv = {
        color: 'blue'
      }
      return (
        <p className="text-center" style={styleDiv}><small>Too many matches, try more letter</small></p>
      )
    }
  }
  return (
    <div>
      <NavBar />
      <Search
        handleOnchange={handleOnchange}
      />
      {renderCountryDetail()}


    </div>
  );
}

export default App;

