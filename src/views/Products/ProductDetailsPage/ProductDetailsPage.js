import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { Row, Button, Col, Image, Rate, Typography } from "antd";
import LoadingSkeleton from "../../../components/LoadingSkeleton/LoadingSkeleton";
import { GlobalState } from "../../../context/GlobalState";
import useFetch from "../../../hooks/useFetch";
import "./product.details.css";

const { Title, Text, Paragraph } = Typography;

function ProductDetailsPage() {
  const state = useContext(GlobalState);
  const { addCart } = state.cartAPI;

  let { productID } = useParams();
  let [product, loading] = useFetch(`/products/${productID}`);
  return (
    <>
      <Header />
      <div className="product-details-container">
        {" "}
        {!loading ? (
          <Row justify="space-between" gutter={[16, 16]}>
            <Col xs={24} sm={24} md={12} lg={12}>
              <Image
                style={{
                  display: "block",
                  objectFit: "contain",
                  height: "300px",
                  width: "300px",
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
                src={product && product.image}
              />
            </Col>
            <Col xs={24} sm={24} md={12} lg={12}>
              <Text style={{ textTransform: "uppercase" }} type="secondary">
                {product && product.category}
              </Text>{" "}
              <Title style={{ margin: "0", marginTop: "0.6128em" }} level={5}>
                {product && product.title}
              </Title>
              <Paragraph style={{ marginTop: "0.6128em" }}>
                {product && product.description}
              </Paragraph>
              <Rate
                style={{ display: "block", marginTop: "0.428em" }}
                allowHalf
                disabled
                value={product && product.rating.rate}
              />
              <Title type="danger" style={{ margin: "0.6128em 0 " }} level={4}>
                {product && product.price} EGP
              </Title>
              <Button
                onClick={() => addCart(product)}
                style={{ marginTop: "1.5em" }}
                type="primary"
                block
              >
                Add to cart
              </Button>
            </Col>
          </Row>
        ) : (
          <LoadingSkeleton />
        )}
      </div>
    </>
  );
}

export default ProductDetailsPage;
