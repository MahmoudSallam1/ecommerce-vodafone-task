import React, { useContext, useEffect, useState } from "react";
import { GlobalState } from "../../context/GlobalState";
import { Card, Typography } from "antd";

import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";

import Header from "../../components/Header/Header";
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

  const removeProduct = (id) => {
    if (window.confirm("Do you want to delete this product?")) {
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1);
        }
      });
      setCart([...cart]);
    }
  };

  if (cart.length === 0)
    return (
      <h2 style={{ textAlign: "center", fontSize: "5rem" }}>Cart Empty</h2>
    );

  return (
    <>
      <Header />
      <div className="cart-container">
        {" "}
        {cart && cart.length > 0 ? (
          <div>
            {cart.map((item) => (
              <Card hoverable key={item.id} title={item.title}>
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
                    </div>
                  </div>

                  <div className="cart-item-amount">
                    <MinusCircleOutlined
                      style={{ fontSize: "1.5rem" }}
                      onClick={() => decrement(item.id)}
                    />

                    <Title type="danger" style={{margin:0}} level={4}>{item.quantity}</Title>

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
