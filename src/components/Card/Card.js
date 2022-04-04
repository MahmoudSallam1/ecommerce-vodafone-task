import React from "react";
import {
  Card as CardANT,
  Button,
  Typography,
  Divider,
  Rate,
  Image,
} from "antd";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

function Card({ product, addCart, isAdmin }) {
  let navigate = useNavigate();

  return (
    <CardANT hoverable>
      <img
        alt={product.title}
        src={product.image}
        style={{
          display: "block",
          objectFit: "cover",
          height: "150px",
          maxWidth: "100%",
          maxHeight: "100%",
          margin: "0 auto",
          textAlign: "center",
        }}
      />
      <Divider />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Text style={{ textTransform: "uppercase" }} type="secondary">
          {product.category}
        </Text>
        <Text type="danger" style={{ display: "block" }} strong>
          {product.price} EGP
        </Text>
      </div>

      <Title style={{ margin: "0", marginTop: "1em" }} level={5}>
        {product.title}
      </Title>
      <Rate
        style={{ display: "block", marginTop: "0.6128em" }}
        allowHalf
        disabled
        value={product.rating.rate}
      />

      {!isAdmin ? (
        <Button
          onClick={() => addCart(product)}
          style={{ marginTop: "2em" }}
          type="primary"
          block
        >
          Add to cart
        </Button>
      ) : null}

      <Button
        onClick={() => navigate(`/products/${product.id}`)}
        style={{ marginTop: "0.8128em" }}
        type={!isAdmin ? "default" : "primary"}
        block
      >
        Details
      </Button>
    </CardANT>
  );
}

export default Card;
