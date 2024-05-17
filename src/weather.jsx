// import axios from "axios";
// import { useState, useEffect } from "react";
import "./Weather.css";
import Form from "./Form";

export default function Weather() {
  return (
    <div className="weather">
      <Form />
      <h2 className="title">Barcelona</h2>
      <ul className="list">
        <li className="item">Wednesday, 17:00</li>
        <li className="item">Mostly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-7">
          <img
            className="img"
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="icon"
          />
          <span className="temperature">18</span>{" "}
          <span className="unit">°C</span>
        </div>
        <div className="col-5">
          <ul className="list">
            <li className="item">Precipitation: 7%</li>
            <li className="item">Humidity: 73%</li>
            <li className="item">Wind: 16 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
