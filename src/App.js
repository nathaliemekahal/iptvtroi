import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Content from "./components/Content";
import CarouselComponent from "./components/CarouselComponent";
import CarouselNPM from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import banner from "./components/Banner";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner
        svgFile={
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-brush"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.213 1.018a.572.572 0 0 1 .756.05.57.57 0 0 1 .057.746C15.085 3.082 12.044 7.107 9.6 9.55c-.71.71-1.42 1.243-1.952 1.596-.508.339-1.167.234-1.599-.197-.416-.416-.53-1.047-.212-1.543.346-.542.887-1.273 1.642-1.977 2.521-2.35 6.476-5.44 7.734-6.411z" />
            <path d="M7 12a2 2 0 0 1-2 2c-1 0-2 0-3.5-.5s.5-1 1-1.5 1.395-2 2.5-2a2 2 0 0 1 2 2z" />
          </svg>
        }
        title={"Highlights"}
      />
      <CarouselComponent />
      <Banner
        svgFile={
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-display"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5.75 13.5c.167-.333.25-.833.25-1.5h4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75z" />
            <path
              fill-rule="evenodd"
              d="M13.991 3H2c-.325 0-.502.078-.602.145a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z"
            />
          </svg>
        }
        title={"Plans"}
      />
      <Content />
    </div>
  );
}

export default App;
