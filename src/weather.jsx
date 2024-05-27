import "./Weather.css";
import Form from "./Form";
import axios from "axios";
import { useEffect, useState } from "react";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";

export default function Weather({ defaultCity }) {
  const [data, setData] = useState({});
  const [ready, setReady] = useState(false);
  const [city, setCity] = useState(defaultCity);
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const apiKey = "be295ff8223f6e514d3fb6ob37t0a7a4";
    const baseUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    const forecastUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;

    axios
      .get(baseUrl)
      .then((response) => {
        handleResponse(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(forecastUrl)
      .then((response) => {
        setForecast(response.data.daily);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [city]);

  function handleResponse(data) {
    setData({
      temperature: data.temperature.current,
      humidity: data.temperature.humidity,
      date: new Date(data.time * 1000),
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
    const dateString = data.date
      ? data.date.toLocaleString("en-US", {
          weekday: "long",
          hour: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        })
      : "";
    return (
      <div className="weather">
        <Form onCityChange={handleCityChange} />
        <h2 className="title">{data.city}</h2>
        <ul className="list">
          <li className="item">{dateString}</li>
          <li className="item text-capitalize">{data.description}</li>
        </ul>
        <div className="row">
          <div className="col-7">
            <img className="img" src={data.iconUrl} alt="icon" />
            <WeatherTemperature celsius={data.temperature} />
          </div>
          <div className="col-5">
            <ul className="list">
              <li className="item">
                Humidity: <span className="data">{data.humidity}%</span>
              </li>
              <li className="item">
                Wind: <span className="data">{data.wind}km/h</span>
              </li>
            </ul>
          </div>
        </div>
        <WeatherForecast forecast={forecast} />
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
}
