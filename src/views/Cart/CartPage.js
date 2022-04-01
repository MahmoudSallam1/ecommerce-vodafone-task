import React, { useContext, useEffect, useState } from "react";
import { GlobalState } from "../../context/GlobalState";
import { Card, Typography } from "antd";

import {
  PlusCircleOutlined,
  MinusCircleOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

import Header from "../../components/Header/Header";
import EmptyData from "../../components/EmptyData/EmptyData";

import { showConfirm } from "../../utils";
import "./cart.styles.css";

const { Title, Text } = Typography;

function CartPage() {
  const state = useContext(GlobalState);
  const { cart, setCart } = state.cartAPI;
  const [total, setTotal] = useState(0);

  // get total price

  useEffect(() => {
    const totalCost = () => {
      let total = cart.reduce((prev, item) => {
        return prev + item.price * item.quantity;
      }, 0);
      setTotal(total);
    };
    totalCost();
  }, [cart]);

  // increment quantity

  const increment = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.quantity += 1;
      }
    });
    setCart([...cart]);
  };
  // decrement quantity

  const decrement = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.quantity === 1 ? (item.quantity = 1) : (item.quantity -= 1);
      }
    });
    setCart([...cart]);
  };

  // remove item

  const removeProduct = (id) => {
    const onConfirm = () => {
      cart.forEach((item, index) => {
        if (item.id === id) {
          cart.splice(index, 1);
        }
      });
      setCart([...cart]);
    };

    showConfirm(onConfirm);
  };

  if (cart.length === 0)
    return (
      <>
        {" "}
        <Header />
        <EmptyData description="No items found in your cart!" />
      </>
    );

  return (
    <>
      <Header />
      <div className="cart-container">
        {" "}
        {cart && cart.length > 0 ? (
          <div>
            {cart.map((item) => (
              <Card
                style={{ marginBottom: "1em" }}
                hoverable
                key={item.id}
                title={item.title}
              >
                <div className="cart-item">
                  <div className="cart-item-content">
                    {" "}
                    <img
                      style={{
                        height: "100px",
                        margin: "0 auto",
                        maxWidth: "100%",
                        maxHeight: "100%",
                        display: "block",
                      }}
                      src={item.image}
                      alt={item.title}
                    />
                    <div>
                      <Text
                        style={{ textTransform: "uppercase" }}
                        type="secondary"
                      >
                        {item.category}
                      </Text>
                      <Title style={{ margin: "0.6128em 0 " }} level={5}>
                        {item.price} L.E
                      </Title>
                      <Text
                        underline
                        type="danger"
                        onClick={() => removeProduct(item.id)}
                      >
                        Remove
                      </Text>
                    </div>
                  </div>

                  <div className="cart-item-amount">
                    <MinusCircleOutlined
                      style={{ fontSize: "1.5rem" }}
                      onClick={() => decrement(item.id)}
                    />

                    <Title type="danger" style={{ margin: 0 }} level={4}>
                      {item.quantity}
                    </Title>

                    <PlusCircleOutlined
                      style={{ fontSize: "1.5rem" }}
                      onClick={() => increment(item.id)}
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
}

export default CartPage;
