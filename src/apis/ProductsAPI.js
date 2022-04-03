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

  // seed the app
  useEffect(() => {
    getProducts();
  }, [query]);

  useEffect(() => {
    getCategories();
  }, []);

  /*================
  ======CRUD========
  1. Add Product
  2. Update Product
  3. Delete Product
  */

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

  // update product

  const updateProudct = async (product) => {
    try {
      const response = await fetch(`${BASE_URL}/products/${product.id}`, {
        method: "PATCH",
        body: JSON.stringify(product),
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  // delete product

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/products/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    products,
    categories,
    setProducts,
    addProduct,
    updateProudct,
    deleteProduct,
    setQuery,
    query,
    isLoading,
  };
}
