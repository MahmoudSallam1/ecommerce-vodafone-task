import React, { useContext } from "react";
import { GlobalState } from "../../context/GlobalState";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import { Col, Row } from "antd";

function HomePage() {
  const state = useContext(GlobalState);
  const { products } = state.productsAPI;
  const { items, addItemToCart } = state.cartAPI;

  console.log(products);

  return (
    <div className="container">
    <Row justify="center" align="middle" style={{padding:"0 50px"}} gutter={[32, 32]}>
      {products && products.length > 0 ? (
        products.map((product) => (
          <Col xs={24} sm={24} md={12} lg={8}>
            <Card key={product.id} product={product} />
          </Col>
        ))
      ) : (
        <div>Loading...</div>
      )}

      <Link to="/cart">Go To Cart</Link>
    </Row>
    </div>
  );
}

export default HomePage;
