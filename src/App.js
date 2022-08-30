import "./app.css";
import Header from "./components/header/Header";
import { Fragment } from "react";
import HeroSlider from "./components/hero-slider/HeroSlider";
import PopularMenu from "./components/popular-menu/PopularMenu";
import ChooseUs from "./components/choose-us/ChooseUs";
import MenuPack from "./components/menu-pack/MenuPack";

function App() {
  return (
    <Fragment>
      <Header />
      <HeroSlider />
      <PopularMenu />
      <ChooseUs />
      <MenuPack />
    </Fragment>
  );
}

export default App;
