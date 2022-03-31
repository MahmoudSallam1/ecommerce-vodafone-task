import { useEffect, useState } from "react";

export default function ProductsAPI() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => setProducts(products))
      .catch((err) => console.log(err));
  }, []);
  return {
    products,
    setProducts,
  };
}
