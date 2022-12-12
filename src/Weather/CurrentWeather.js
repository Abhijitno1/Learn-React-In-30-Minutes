import React, { useState } from 'react';
import axios from 'axios';

export default function CurrentWeather() {
    const [weatherParams, setWeatherParams] = useState();

    function getCurrentWeather(long, lati) {
        const options = {
            method: 'GET',
            url: 'https://weatherbit-v1-mashape.p.rapidapi.com/current',
            params: {lon: long.toString(), lat: lati.toString()},
            //params: {lon: "35.82", lat: "-78.82"},
            headers: {
              'X-RapidAPI-Key': '6f244ebf0fmshc7bd8c36a7d4a8dp1bfa45jsne7e627d56d5e',
              'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
            }
          };
    
          axios.request(options).then(function (response) {
              let data = response.data.data[0];
              console.log('long lati is ', long, lati);
              console.log('response.data.data[0] is ', response.data.data[0]);
              setWeatherParams({
                city: data.city_name,
                long: data.lon,
                lati: data.lat,
                cloudsCoverPct: data.clouds,
                tempC: data.temp,
                sunrise: data.sunrise,
                sunset: data.sunset,
                timezone: data.timezone,
                pres: data.pres,
                precip: data.precip,
                dewpt: data.dewpt,
                rh: data.rh,
                uv: data.uv,
                weatherDesc: data.weather.description,
                windSpeed: data.wind_spd,
                windDir: data.wind_cdir_full
              });
          }).catch(function (error) {
              console.error(error);
          });
    }

    function getCurrentWeatherDummy(long, lati) {
        setWeatherParams({
            city: 'San Diego',
            long: -117.16,
            lati: 32.71,
            cloudsCoverPct: 90,
            tempC: 13.3,
            sunrise: '14:41',
            sunset: '00:43',
            timezone: 'America/Los_Angeles',
            pres: 1007,
            precip:0,
            dewpt: 9.9,
            rh: 81,
            uv: 0,
            weatherDesc: 'Broken clouds',
            windSpeed: 2.2197685,
            windDir: 'north-northwest'
          });
    }

    function onCitySelected(e) {
        if (e.target.value) {
            var [long, lati] = e.target.value.split("|");
            getCurrentWeather(long, lati);
        }
    }

    return (
        <>
            <div class="card">
                <div class="card-body">
                    <label for="citySelector" style={{marginRight: '1rem'}}>Select City</label> 
                    <select name="citySelector" onChange={onCitySelected}>
                        <option></option>
                        <option value="-78.82|35.82">Morrisville NC USA</option>
                        <option value="-117.16|32.71">San Diego CA USA</option>
                        <option value="-74.00|40.71">New York NY USA</option>
                        <option value="-0.12|51.50">London - UK</option>
                        <option value="73.85|18.50">Pune MH IND</option>
                        <option value="74.24|16.69">Kolhapur MH IND</option>
                    </select> 
                </div>
            </div>
            <div class="alert alert-info">
            Current Weather
            </div>
            { weatherParams && weatherParams.city && 
            <table className="table table-bordered">
                <tr><td>City Name</td><td>{weatherParams.city}</td></tr>
                <tr><td>Longitude</td><td>{weatherParams.long}</td></tr>
                <tr><td>Latitude</td><td>{weatherParams.lati}</td></tr>
                <tr><td>Clouds Cover Percentage</td><td>{weatherParams.cloudsCoverPct}</td></tr>
                <tr><td>Temperature</td><td>{weatherParams.tempC}</td></tr>
                <tr><td>Sunrise</td><td>{weatherParams.sunrise} GMT</td></tr>
                <tr><td>Sunset</td><td>{weatherParams.sunset} GMT</td></tr>
                <tr><td>Timezone</td><td>{weatherParams.timezone}</td></tr>
                <tr><td>Barometric Pressure</td><td>{weatherParams.pres}</td></tr>
                <tr><td>Precipitation</td><td>{weatherParams.precip}</td></tr>
                <tr><td>Dew Point</td><td>{weatherParams.dewpt}</td></tr>
                <tr><td>Reltive Humidity</td><td>{weatherParams.rh}</td></tr>
                <tr><td>Ultraviolet Index</td><td>{weatherParams.uv}</td></tr>
                <tr><td>Weather Description</td><td>{weatherParams.weatherDesc}</td></tr>
                <tr><td>Wind Speed</td><td>{weatherParams.windSpeed}</td></tr>
                <tr><td>Wind Direction</td><td>{weatherParams.windDir}</td></tr>
            </table>
            }
        </>
    )
}