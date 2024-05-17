// import axios from "axios";
// import { useState, useEffect } from "react";
import "./Weather.css";
import Form from "./Form";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Weather({ defaultCity }) {
  const [data, setData] = useState({});
  const [ready, setReady] = useState(false);
  const [city, setCity] = useState(defaultCity);

  useEffect(() => {
    const apiKey = "be295ff8223f6e514d3fb6ob37t0a7a4";
    const baseUrl = `https://api.shecodes.io/weather/v1/current?query=${defaultCity}&key=${apiKey}`;

    axios
      .get(baseUrl)
      .then((response) => {
        handleResponse(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [defaultCity]);

  function handleResponse(data) {
    // setTemperature(response.data);
    // const currentWeather = response.daily[0];
    // const currentTemperature = currentWeather.temperature;(data.temperature.current);
    setData({
      temperature: data.temperature.current,
      humidity: data.temperature.humidity,
      wind: data.wind.speed,
      description: data.condition.description,
      iconUrl: data.condition.icon_url,
      city: data.city,
      country: data.country,
    });
    setReady(true);
  }

  function handleCityChange(newCity) {
    setCity(newCity);
    setReady(false);
  }

  if (ready) {
    return (
      <div className="weather">
        <Form onCityChange={handleCityChange} />
        <h2 className="title">{data.city}</h2>
        <ul className="list">
          <li className="item">Wednesday, 17:00</li>
          <li className="item text-capitalize">{data.description}</li>
        </ul>
        <div className="row">
          <div className="col-7">
            <img
              className="img"
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="icon"
            />
            <span className="temperature">{Math.round(data.temperature)}</span>{" "}
            <span className="unit">°C</span>
          </div>
          <div className="col-5">
            <ul className="list">
              <li className="item">Precipitation: 7%</li>
              <li className="item">Humidity: {data.humidity}%</li>
              <li className="item">Wind: {data.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
}
