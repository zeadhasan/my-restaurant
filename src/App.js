import "./app.css";
import Header from "./components/header/Header";
import { Fragment } from "react";
import HeroSlider from "./components/hero-slider/HeroSlider";
import PopularMenu from "./components/popular-menu/PopularMenu";
import ChooseUs from "./components/choose-us/ChooseUs";
import MenuPack from "./components/menu-pack/MenuPack";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <Fragment>
      <Header />
      <HeroSlider />
      <PopularMenu />
      <ChooseUs />
      <MenuPack />
      <Testimonials />
    </Fragment>
  );
}

export default App;
