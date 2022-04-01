import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../../components/Header/Header";

import useFetch from "../../../hooks/useFetch";
import "./product.details.css";

function ProductDetailsPage() {
  let { productID } = useParams();
  let  [product]  = useFetch(`/products/${productID}`);
  console.log(product);

  return (
    <>
      <Header />
      <div className="product-details-container">
        {" "}
        <div>ProductDetailsPage {productID}</div>
      </div>
    </>
  );
}

export default ProductDetailsPage;
