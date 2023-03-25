import React from 'react'

export default function WeatherTile(props) {
  return (
    <div className='container my-4'>
      <div className="card">
  <div className="card-body">
    <h5>City: {props.city}</h5>
    <h5>Country: {props.country}</h5>  
    <h5>Weather: {props.weather}</h5>  
  </div>
</div>
    </div>
  )
}
