import React from "react";
import { Container } from "reactstrap";
import Slider from "react-slick";
import {sliderData} from "../../assets/fake-data/slider";
import "./slider.css";

const HeroSlider = () => {
  return (
    <section>
      <Container>
        <Slider>
          {sliderData.map((item) => (
            <div>
              <div className="slider__wrapper d-flex align-items-center justify-content-between pt-5">
                <div className="slider__content w-50 p-2">
                  <h2 className="mb-3">{item.title}</h2>
                  <p>{item.desc}</p>
                  <button className="btn">Explore Food</button>
                </div>
                <div className="slider__img w-50">
                  <img src={item.imgUrl} alt={item.imgUrl} className="w-100" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default HeroSlider;
