import React from "react";
import { Card as CardANT, Button, Typography, Divider } from "antd";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

function Card({ product, addCart }) {
  let navigate = useNavigate();

  return (
    <CardANT
      cover={
        <img
          alt={product.title}
          src={product.image}
          style={{
            objectFit: "cover",
            width: "250px",
            height: "250px",
            margin: "0 auto",
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        />
      }
    >
      <Divider />

      <Text style={{ textTransform: "uppercase" }} type="secondary">
        {product.category}
      </Text>

      <Title style={{ margin: "0.6128em 0 " }} level={5}>
        {product.title}
      </Title>
      <Text strong>{product.price} L.E</Text>
      <Button
        onClick={() => addCart(product)}
        style={{ marginTop: "2em" }}
        type="primary"
        block
      >
        Add to cart
      </Button>

      <Button
        onClick={() => navigate(`/products/${product.id}`)}
        style={{ marginTop: "1.3em" }}
        type="default"
        block
      >
        Details
      </Button>
    </CardANT>
  );
}

export default Card;
