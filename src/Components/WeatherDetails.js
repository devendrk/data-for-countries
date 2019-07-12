import React from 'react'

export default function WeatherDetails({ countryCapital, temperature, wind }) {
  console.log('temp', temperature)
  console.log('wind', wind)
  console.log('cap', countryCapital)

  return (
    <table class="table table-sm">
      <thead>
        <tr>
          <th className="bg-info text-white" scope="col">Weather in {countryCapital}</th>
          <th className="bg-info text-white" scope="col"></th>

        </tr>
      </thead>
      <tbody >
        <tr className="p-5">
          <th scope="row">Temperature</th>
          <td>{temperature}</td>


        </tr>
        <tr>
          <th scope="row">Wind</th>
          <td>{wind}</td>

        </tr>

      </tbody>
    </table>


  )
}