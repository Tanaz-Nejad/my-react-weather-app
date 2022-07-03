import React from "react";
import axios from "axios";

export default function Weather() {
  function displayWeather(response) {
    console.log(response.data);
  }

  const apiKey = "31f529cdb0d991333ed2798a23f84dcc";
  const unit = "metric";
  let city = "New York";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(displayWeather);

  let form = (
    <form>
      <input type="search" />
      <input type="submit" />
    </form>
  );

  return <div className="Weather">{form}</div>;
}
