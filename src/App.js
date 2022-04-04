import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.less";
import LoginPage from "./views/Login/LoginPage";
import ProductsPage from "./views/Products/ProductsPage/ProductsPage";
import ProductDetailsPage from "./views/Products/ProductDetailsPage/ProductDetailsPage";

import CartPage from "./views/Cart/CartPage";

import ProtectedRoutes from "./routes/ProtectedRoutes";
import AdminPage from "./views/Admin/AdminPage";

import { GlobalState } from "./context/GlobalState";
import NotAuthorized from "./components/NotAuthorized/NotAuthorized";
function App() {
  const state = useContext(GlobalState);
  const { getToken } = state.userAPI;
  const isAdmin = getToken()?.isAdmin;
  return (
    <Router>
      <Routes>
        <Route path="login" element={<LoginPage />} />
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
        <Route
          path="admin"
          element={
            <ProtectedRoutes>
              {isAdmin ? <AdminPage /> : <NotAuthorized />}
            </ProtectedRoutes>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
