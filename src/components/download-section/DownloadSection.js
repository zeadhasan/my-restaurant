import React from "react";
import "./DownloadSection.css";
import appImg from "../../assets/images/app.png";
import { Container, Row, Col } from "reactstrap";

const DownloadSection = () => {
  return (
    <section>
      <Container className="app__container">
        <Row>
          <Col lg="6" md="6">
            <div className="app__img">
              <img src={appImg} alt={appImg} />
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="app__content">
              <h5>Download Our App</h5>
              <h2 className="mb-4">
                Never Feel Hungry! Download Our Mobile App Order Delicious Food
              </h2>
              <p>
                I must explain to you how all this mistaken idea of denouncing
                pleasure and praising pain was born and I will give you a
                complete account of the system
              </p>
              <div className="app__btns d-flex align-items-center gap-5 mt-4">
                <button className="btn__apple d-flex align-items-center gap-3">
                  <i class="btn__apple__icon ri-apple-line"></i> <a href="">Apple Store</a>
                </button>
                <button className="btn__google d-flex align-items-center gap-3">
                  <i class="ri-google-play-line"></i> <a href="">Google Play</a>
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DownloadSection;
