import React, { useContext, useEffect } from "react";
import { GlobalState } from "../../../context/GlobalState";
import Card from "../../../components/Card/Card";
import { Col, Row } from "antd";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import EmptyData from "../../../components/EmptyData/EmptyData";

import LoadingSkeleton from "../../../components/LoadingSkeleton/LoadingSkeleton";

import Categories from "../../../components/Categories/Categories";
import "./products.styles.css";

import { Layout } from "antd";
const { Content } = Layout;

function HomePage() {
  const state = useContext(GlobalState);
  const { products, isLoading } = state.productsAPI;
  const { addCart } = state.cartAPI;
  const { getToken } = state.userAPI;
  const isAdmin = getToken()?.isAdmin;

  return (
    <>
      <Header />
      <div className="products-container">
        <Categories />
        <Content>
          <Row
            justify="center"
            align="middle"
            // style={{ padding: "0 50px" }}
            gutter={[32, 32]}
          >
            {!isLoading ? (
              products && products.length > 0 ? (
                products.map((product) => (
                  <Col key={product.id} xs={24} sm={24} md={12} lg={8}>
                    <Card
                      isAdmin={isAdmin}
                      addCart={addCart}
                      product={product}
                    />
                  </Col>
                ))
              ) : (
                <EmptyData description="Sorry, no products found!" />
              )
            ) : (
              <LoadingSkeleton />
            )}
          </Row>
        </Content>
      </div>
      {!isLoading ? <Footer /> : null}
    </>
  );
}

export default HomePage;
