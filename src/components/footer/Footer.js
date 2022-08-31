import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <Container>
          <Row>
            <Col lg="4" md="4" sm="6">
              <div className="logo">
                <h2 className="d-flex align-items-center gap-1 mb-4">
                  <span>
                    <i class="ri-restaurant-2-line"></i>
                  </span>
                  Chef food
                </h2>
                <p>
                  I will give you a complete account of the system and expound
                  the actual teachings of the great explorer of the truth
                </p>
              </div>
            </Col>

            <Col lg="2" md="4" sm="6">
              <div className="footer__link-title"></div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
