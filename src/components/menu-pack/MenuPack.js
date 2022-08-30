import React from "react";
import "./MenuPack.css";
import { Container, Row, Col } from "reactstrap";
import ProductCart from "../product-cart/ProductCart";
import {
  fastFoodProducts,
  riceMenuProducts,
  dessertProducts,
  pizzaProducts,
  coffeeProducts,
} from "../../assets/fake-data/products";

const MenuPack = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-4">
            <h3 className="menu__title">Our Popular Menu</h3>
          </Col>
          <Col lg="12" className="text-center mb-5">
            <button className="filter-btn">Fast Food</button>
            <button className="filter-btn">Rice Menu</button>
            <button className="filter-btn">Pizza</button>
            <button className="filter-btn">Desserts</button>
            <button className="filter-btn">Coffee</button>
          </Col>

          {fastFoodProducts.map((item) => (
            <Col lg="3" key={item.id}>
              <ProductCart item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default MenuPack;
