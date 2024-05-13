import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Weather from "./weather";
import Form from "./Form";

import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const handleFormSubmit = (city) => {
  root.render(
    <StrictMode>
      <div className="App">
        <Form onSubmit={handleFormSubmit} />
        <Weather city={city} />
      </div>
    </StrictMode>
  );
};
root.render(
  <StrictMode>
    <div className="App">
      <Form onSubmit={handleFormSubmit} />
    </div>
  </StrictMode>
);
