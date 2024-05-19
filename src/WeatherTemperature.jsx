import { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function converToFahrenheit(e) {
    e.preventDefault();
    setUnit("fahrenheit");
  }
  function converToCelsius(e) {
    e.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <span className="temperature">
        {Math.round(props.celsius)}
        <span className="unit">
          °C |{" "}
          <a href="" onClick={converToFahrenheit}>
            °F
          </a>{" "}
        </span>
      </span>
    );
  } else {
    return (
      <span className="temperature">
        {Math.round(fahrenheit())}
        <span className="unit">
          <a href="" onClick={converToCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </span>
    );
  }
}
