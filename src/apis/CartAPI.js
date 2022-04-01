import { useEffect, useState } from "react";

export default function ProductsAPI() {
  const [cart, setCart] = useState([]);

  // get cart

  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart) setCart(dataCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("dataCart", JSON.stringify(cart));
  }, [cart]);

  const addCart = (product) => {
    const check = cart.every((item) => {
      return item._id !== product.id;
    });
    if (check) {
      setCart([...cart, { ...product }]);
    } else {
      alert("The product has been added to cart.");
    }
  };

  return {
    cart,
    addCart,
  };
}
