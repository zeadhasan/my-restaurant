import React, { useEffect, useState } from "react";
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
  const [filter, setFilter] = useState("RICE-MENU");
  const [products, setProducts] = useState(riceMenuProducts);

  useEffect(() => {
    if (filter === "RICE-MENU") {
      setProducts(riceMenuProducts);
    }
    if (filter === "FAST-FOOD") {
      setProducts(fastFoodProducts);
    }
    if (filter === "PIZZA") {
      setProducts(pizzaProducts);
    }
    if (filter === "DESSERTS") {
      setProducts(dessertProducts);
    }
    if (filter === "COFFEE") {
      setProducts(coffeeProducts);
    }
  }, [filter]);

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-4">
            <h3 className="menu__title">Our Popular Menu</h3>
          </Col>
          <Col lg="12" className="text-center mb-5">
            <button
              className={`filter-btn  ${
                filter === "FAST-FOOD" ? " active__btn" : ""
              }`}
              onClick={() => setFilter("FAST-FOOD")}
            >
              Fast Food
            </button>
            <button
              onClick={() => setFilter("RICE-MENU")}
              className={`filter-btn  ${
                filter === "RICE-MENU" ? " active__btn" : ""
              }`}
            >
              Rice Menu
            </button>
            <button
              onClick={() => setFilter("PIZZA")}
              className={`filter-btn  ${
                filter === "PIZZA" ? " active__btn" : ""
              }`}
            >
              Pizza
            </button>
            <button
              onClick={() => setFilter("DESSERTS")}
              className={`filter-btn  ${
                filter === "DESSERTS" ? " active__btn" : ""
              }`}
            >
              Desserts
            </button>
            <button
              onClick={() => setFilter("COFFEE")}
              className={`filter-btn  ${
                filter === "COFFEE" ? " active__btn" : ""
              }`}
            >
              Coffee
            </button>
          </Col>

          {products.map((item) => (
            <Col lg="3" key={item.id} className="mb-4">
              <ProductCart item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default MenuPack;
