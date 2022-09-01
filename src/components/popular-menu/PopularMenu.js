import React from "react";
import { Container, Row, Col } from "reactstrap";
import { popularMenuFood } from "../../assets/fake-data/products";
import ProductCart from "../product-cart/ProductCart";

const PopularMenu = () => {
  return (
    <section className="pt-0">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2 className="popular__menu-title">Popular Food Menu</h2>
          </Col>

          {popularMenuFood.map((item) => (
            <Col lg="3" md="4" m="6" xs="6" className="mb-4" key={item.id}>
              <ProductCart item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PopularMenu;
