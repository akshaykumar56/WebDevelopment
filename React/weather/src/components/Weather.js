import React, { useState,useEffect } from 'react';
import WeatherTile from './WeatherTile'

export default function Weather(props) {
    const [weather, setWeather] = useState({
        "request": {
          "type": "City",
          "query": "Mumbai, India",
          "language": "en",
          "unit": "m"
        },
        "location": {
          "name": "Mumbai",
          "country": "India",
          "region": "Maharashtra",
          "lat": "18.975",
          "lon": "72.826",
          "timezone_id": "Asia/Kolkata",
          "localtime": "2023-01-25 20:28",
          "localtime_epoch": 1674678480,
          "utc_offset": "5.50"
        },
        "current": {
          "observation_time": "02:58 PM",
          "temperature": 23,
          "weather_code": 122,
          "weather_icons": [
            "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
          ],
          "weather_descriptions": [
            "Smoke"
          ],
          "wind_speed": 15,
          "wind_degree": 330,
          "wind_dir": "NNW",
          "pressure": 1013,
          "precip": 0,
          "humidity": 57,
          "cloudcover": 0,
          "feelslike": 25,
          "uv_index": 1,
          "visibility": 2,
          "is_day": "no"
        }
      });

      useEffect(() => {
            async function fetchData() {
        let url = `http://api.weatherstack.com/current?access_key=7e69cf7139107f8ec80d0b8ce414d369&query=${props.location}`;
        let data = await fetch(url);
        let parsedData=  await data.json();
        console.log(parsedData.articles);
        setWeather(parsedData)
            }
        fetchData()
      });
  return (
    <div>
      <WeatherTile city={weather.location.name} country={weather.location.country} weather={weather.current.weather_descriptions}/>
    </div>
  )
}
