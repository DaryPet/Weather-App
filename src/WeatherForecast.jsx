export default function WeatherForecast({ forecast }) {
  return (
    <div className="dailyForecast">
      <div className="row">
        {forecast.slice(0, 6).map((day, index) => (
          <div className="col-2" key={index}>
            <div className="day">
              {new Date(day.time * 1000).toLocaleDateString("en-EN", {
                weekday: "short",
              })}
            </div>
            <img className="img" src={day.condition.icon_url} alt="icon" />
            <div className="temp">
              <span className="tempMax">
                {Math.round(day.temperature.maximum)}°
              </span>
              <span className="tempMin">
                {Math.round(day.temperature.minimum)}°
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
