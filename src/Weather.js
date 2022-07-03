import React, { useState } from "react";
import axios from "axios";
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
      <input type="search" onChange={updateCity} />
      <input type="submit" />
    </form>
  );

  return (
    <div className="Weather">
      {form}
      <h1>{city}</h1>
      <ul>
        <li>{weather.temperature}</li>
        <li>{weather.humidity}</li>
        <li>{weather.wind}</li>
        <li>{weather.description}</li>
        <li>
          <FormattedDate date={weather.date} />
        </li>
      </ul>
    </div>
  );
}
