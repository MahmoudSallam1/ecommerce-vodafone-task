import React, { useContext } from "react";
import { GlobalState } from "../../../context/GlobalState";
import { Link } from "react-router-dom";
import Card from "../../../components/Card/Card";
import { Col, Row } from "antd";
import Header from "../../../components/Header/Header";

import Categories from "../../../components/Categories/Categories";
import "./products.styles.css";



import { Layout } from "antd";
const { Content } = Layout;

function HomePage() {
  const state = useContext(GlobalState);
  const { products } = state.productsAPI;
  const { items, addItemToCart } = state.cartAPI;

  console.log(products);

  return (
    <>
    <Header/>

    <Categories/>
    <div className="products-container">
      <Content style={{ padding: "0 3em" }}>
        <Row
          justify="center"
          align="middle"
          style={{ padding: "0 50px" }}
          gutter={[32, 32]}
        >
          {products && products.length > 0 ? (
            products.map((product) => (
              <Col key={product.id} xs={24} sm={24} md={12} lg={8}>
                <Card addItemToCart={addItemToCart} product={product} />
              </Col>
            ))
          ) : (
            <div>Loading...</div>
          )}

        </Row>
      </Content>
    </div>
    </>
  );
}

export default HomePage;
