import axios from "axios";
import { useState, useEffect } from "react";

export default function Weather(props) {
  let [temperature, setTemperature] = useState(null);

  useEffect(() => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=bb0df6985c2eab6a171d64a6bacbb4e1&units=metric`;

    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setTemperature(response.data.main.temp);
      } catch (error) {
        console.log("error");
      }
    };

    if (props.city) {
      fetchData();
    }
  }, [props.city]);

  return (
    <div>
      {temperature !== null ? (
        <h1>
          The temperature in {props.city} is {Math.round(temperature)}°C
        </h1>
      ) : (
        <p>Fetching...</p>
      )}
    </div>
  );
}
