import { useEffect, useState } from "react";
import { showSuccess, showInfo } from "../utils";

export default function ProductsAPI() {
  const [cart, setCart] = useState([]);

  // adding cart item to localstroage

  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart) setCart(dataCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("dataCart", JSON.stringify(cart));
  }, [cart]);

  const addCart = (product) => {
    const check = cart.every((item) => {
      return item.id !== product.id;
    });
    if (check) {
      setCart([...cart, { ...product, quantity: 1 }]);
      showSuccess();
    } else {
      showInfo();
    }
  };

  return {
    cart,
    addCart,
    setCart,
  };
}
