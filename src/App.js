import "./app.css";
// import Home from "./pages/Home";
import Header from "./components/header/Header";
import { Fragment } from "react";
import HeroSlider from "./components/hero-slider/HeroSlider";
import PopularMenu from "./components/popular-menu/PopularMenu";

function App() {
  return (
    <Fragment>
      <Header />
      <HeroSlider />
      <PopularMenu />
    </Fragment>
  );
}

export default App;
