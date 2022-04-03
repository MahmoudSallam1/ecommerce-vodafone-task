import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/constants";

export default function ProductsAPI() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [query, setQuery] = useState("");

  // get products

  const getProducts = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        query === ""
          ? `${BASE_URL}/products`
          : `${BASE_URL}/products/category/${query}`
      );
      const data = await response.json();
      setProducts(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  // get categories

  const getCategories = async () => {
    try {
      const response = await fetch(`${BASE_URL}/products/categories`);
      const data = await response.json();
      setCategories(data);
    } catch (err) {
      console.log(err);
    }
  };

  // add product

  const addProduct = async (product) => {
    try {
      const response = await fetch(`${BASE_URL}/products`, {
        method: "POST",
        body: JSON.stringify(product),
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  // get categories

  useEffect(() => {
    getCategories();
  }, []);

  return {
    products,
    categories,
    setProducts,
    addProduct,
    setQuery,
    query,
    isLoading,
  };
}
