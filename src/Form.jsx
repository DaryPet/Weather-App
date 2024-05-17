// import { useState } from "react";
import "./Form.css";
import { useState } from "react";

export default function Form({ onCityChange }) {
  const [inputCity, setInputCity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onCityChange(inputCity);
  }

  function handleChange(e) {
    setInputCity(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="">
        <input
          className="input"
          type="search"
          onChange={handleChange}
          placeholder="Please enter a city..."
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
}
