import { useEffect, useState } from "react";

export default function CartAPI() {
  const [items, setItems] = useState([]);

  function addItemToCart(newItem) {
    setItems((prevItem) => [...prevItem, newItem]);
  }

  return {
    items,
    setItems,
    addItemToCart,
  };
}
