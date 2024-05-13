import { useState } from "react";

export default function Form({ onSubmit }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(city);
  };
  const handleChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="Search"
          placeholder="Please eneter the city"
          onChange={handleChange}
        />
        <input type="submit" value="Search"></input>
      </form>
    </div>
  );
}
