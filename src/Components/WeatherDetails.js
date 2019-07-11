import React from 'react'

export default function WeatherDetails({ filterCountries, weather }) {
  // console.log('weather', weather)
  let capitalCity = filterCountries[0].capital;
  // console.log('gw', getWeather(capitalCity))
  // console.log('bla bal', weather)
  // getWeather(filterCountries.country.capital)

  return (
    <div>
      <h3>Weather in {capitalCity} </h3>
      <h5>Temperature: {weather.temp}</h5>
      <h4>Wind .... </h4>
    </div>
  )
}