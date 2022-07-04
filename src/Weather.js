import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather() {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = "31f529cdb0d991333ed2798a23f84dcc";
    const unit = "metric";
    const city = "sidney";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(displayWeather);
  }

  function displayWeather(response) {
    setWeather({
      temperature: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-6">
          <input
            type="search"
            className="searchForm"
            onChange={updateCity}
            autoFocus="on"
            placeholder="Search for City..."
          />
        </div>
        <div className="col-2">
          <input type="submit" className="submitSearch" />
        </div>
      </div>
    </form>
  );

  let searchedCity = (
    <div className="row">
      <div className="col">
        <h1>{city}</h1>
        <ul className="currentCitydescription">
          <li>
            <FormattedDate date={weather.date} />
          </li>
          <li>{weather.description}</li>
        </ul>
      </div>
    </div>
  );

  let currentTemperature = (
    <div className="row">
      <div className="col-6">
        <div className="d-flex weatherTemperature">
          <img src={weather.icon} alt="Weather_Icon" className="weatherIcon" />
          <div className="temperature">{weather.temperature}</div>
          <span className="unit">℃</span>
        </div>
      </div>
      <div className="col-6">
        <ul className="weather-conditions">
          <li>
            <strong>Humidity: {weather.humidity}</strong>
            <span></span>%
          </li>
          <li>
            <strong>Wind: {weather.wind}</strong>
            <span></span> mph
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <div className="Weather">
      {form}
      {searchedCity}
      {currentTemperature}
    </div>
  );
}
