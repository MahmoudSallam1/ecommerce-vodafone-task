import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.less";
import LoginPage from "./views/Login/LoginPage";
import ProductsPage from "./views/Products/ProductsPage/ProductsPage";
import ProductDetailsPage from "./views/Products/ProductDetailsPage/ProductDetailsPage";

import CartPage from "./views/Cart/CartPage";

import ProtectedRoutes from "./routes/ProtectedRoutes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/*"
          element={
            <ProtectedRoutes>
              <ProductsPage />
            </ProtectedRoutes>
          }
        />
        <Route
          path="products/:productID"
          element={
            <ProtectedRoutes>
              {" "}
              <ProductDetailsPage />
            </ProtectedRoutes>
          }
        />
        <Route
          path="cart"
          element={
            <ProtectedRoutes>
              <CartPage />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
