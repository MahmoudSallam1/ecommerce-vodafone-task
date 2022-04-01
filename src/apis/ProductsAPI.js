import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/constants";

export default function ProductsAPI() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [query, setQuery] = useState("");

  // get products

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

  // get categories

  useEffect(() => {
    fetch(`${BASE_URL}/products/categories`)
      .then((res) => res.json())
      .then((category) => setCategories(category))
      .catch((err) => console.log(err));
  }, []);


  return {
    products,
    categories,
    setProducts,
    setQuery,
    query,
  };
}
