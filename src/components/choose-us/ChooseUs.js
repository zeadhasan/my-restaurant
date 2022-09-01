import React from "react";
import "./ChooseUs.css";
import { Container, Row, Col } from "reactstrap";
import pastaImg from "../../assets/images/pasta.png";

const ChooseUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <img src={pastaImg} alt={pastaImg} className="w-100" />
          </Col>

          <Col lg="6" md="6">
            <div className="choose__content">
              <h5>Who We Are?</h5>
              <h2>take a chance on what we are offering you</h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout
              </p>
            </div>
            <div className="features mt-4">
              <div className="features__one d-flex align-items-center gap-5">
                <div className="single__feature">
                  <span>
                    <i class="ri-truck-line"></i>
                  </span>
                  <h6>Free Home Delivery</h6>
                  <p>the readable content page when looking</p>
                </div>

                <div className="single__feature">
                  <span className="feature__icon-two">
                    <i class="ri-money-dollar-circle-line"></i>
                  </span>
                  <h6>Return & Refund </h6>
                  <p>the readable content page when looking</p>
                </div>
              </div>
              <div className="features__one mt-3 d-flex align-items-center gap-5">
                <div className="single__feature">
                  <span className="feature__icon-three">
                    <i class="ri-secure-payment-line"></i>
                  </span>
                  <h6>Secure Payment</h6>
                  <p>the readable content page when looking</p>
                </div>

                <div className="single__feature">
                  <span className="feature__icon-four">
                    <i class="ri-24-hours-line"></i>
                  </span>
                  <h6>24 Hours Service</h6>
                  <p>the readable content page when looking</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
