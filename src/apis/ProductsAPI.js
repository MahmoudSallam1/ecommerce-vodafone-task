import { useEffect, useState } from "react";
import {BASE_URL} from '../constants/constants'

export default function ProductsAPI() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/products`)
      .then((res) => res.json())
      .then((products) => setProducts(products))
      .catch((err) => console.log(err));
  }, []);
  return {
    products,
    setProducts,
  };
}
