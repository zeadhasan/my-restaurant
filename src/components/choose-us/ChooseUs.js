import React from "react";
import "./ChooseUs.css";
import { Container, Row, Col } from "reactstrap";
import pastaImg from "../../assets/images/pasta.png";

const ChooseUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6">
            <img src={pastaImg} alt={pastaImg} className="w-100" />
          </Col>

          <Col lg="6">
            <div className="choose__content">
              <h4>Who We Are?</h4>
              <h2>take a chance on what we are offering you</h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout
              </p>
            </div>
            <div className="features">
              <div className="features__one">
                <div className="single__feature">
                  <span>
                    <i class="ri-truck-line"></i>
                  </span>
                  <h6>Free Home Delivery</h6>
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
