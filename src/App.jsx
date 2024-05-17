// import { Suspense, lazy, useEffect } from "react";
// import Layout from "../Layout/Layout";
// import { useDispatch, useSelector } from "react-redux";
import Form from "./Form";
import Weather from "./weather";

export default function App() {
  //   const dispatch = useDispatch();
  //   const isRefreshing = useSelector(selectIsRefreshing);

  //   useEffect(() => {
  //     dispatch(refreshUser());
  //   }, [dispatch]);

  return (
    <div>
      <h1>Wehater App</h1>
      <Form />
      <Weather />
      <footer>
        This project is created by{" "}
        <a href="https://www.linkedin.com/in/darya-petrenko/" target="_blanc">
          Darya Petrenko
        </a>
        and is{" "}
        <a href="https://github.com/DaryPet/Weather-App" target="_blanc">
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
