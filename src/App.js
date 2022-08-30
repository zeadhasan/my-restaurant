import "./app.css";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import { Fragment } from "react";
import HeroSlider from "./components/hero-slider/HeroSlider";

function App() {
  return (
    <Fragment>
      <Header />
      <HeroSlider />
    </Fragment>
  );
}

export default App;
