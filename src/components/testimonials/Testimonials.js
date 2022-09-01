import React from "react";
import "./Testimonials.css";
import { Container, Row, Col } from "reactstrap";
import testimonialImg from "../../assets/images/review1.png";
import Slider from "react-slick";

const Testimonials = () => {
  const setting = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" sm="12" md="12" className="m-auto">
            <div className="slider__wrapper d-flex align-items-center gap-5 ">
              <div className="slider__content w-50">
                <h2 className="mb-4">What Our Customers Are Saying</h2>
                <Slider {...setting}>
                  <div>
                    <div className="single__testimonial">
                      <p className="review__content">
                        "There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable"
                      </p>
                      <h6>Jhon Doe</h6>
                      <p>Web Developer</p>
                    </div>
                  </div>
                  <div>
                    <div className="single__testimonial">
                      <p className="review__content">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable
                      </p>
                      <h6>Jhon Doe</h6>
                      <p>Web Developer</p>
                    </div>
                  </div>
                  <div>
                    <div className="single__testimonial">
                      <p className="review__content">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable
                      </p>
                      <h6>Jhon Doe</h6>
                      <p>Web Developer</p>
                    </div>
                  </div>
                </Slider>
              </div>
              <div className="slider__img w-50">
                <img
                  src={testimonialImg}
                  alt={testimonialImg}
                  className="w-100"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
