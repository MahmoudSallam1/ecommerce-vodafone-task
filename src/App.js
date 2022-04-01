import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginPage from "./views/Login/LoginPage";
import ProductsPage from "./views/Products/ProductsPage/ProductsPage";
import ProductDetailsPage from "./views/Products/ProductDetailsPage/ProductDetailsPage";

import CartPage from "./views/Cart/CartPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/:productID" element={<ProductDetailsPage />} />
        <Route path="cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
