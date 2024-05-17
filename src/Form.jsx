// import { useState } from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className="">
      <div className="">
        <input
          className="input"
          type="search"
          placeholder="Please enter a city..."
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </div>
    </div>
  );
}
