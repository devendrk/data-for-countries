import React from 'react'

export default function WeatherDetails({ filterCountries, weather }) {
  console.log('filterCountries', filterCountries)
  let capitalCity = filterCountries[0].capital;

  return (
    <div>
      <h3>Weather in {capitalCity} </h3>
      <h5>Temperature: </h5>
      <h4>Wind .... </h4>
    </div>
  )
}