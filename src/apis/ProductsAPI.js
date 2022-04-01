import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/constants";

export default function ProductsAPI() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(
      query === ""
        ? `${BASE_URL}/products`
        : `${BASE_URL}/products/category/${query}`
    )
      .then((res) => res.json())
      .then((products) => setProducts(products))
      .catch((err) => console.log(err));
  }, [query]);
  return {
    products,
    setProducts,
    setQuery,
    query
  };
}
