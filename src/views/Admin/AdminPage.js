import React, { useContext, useEffect } from "react";
import Header from "../../components/Header/Header";
import LoadingSkeleton from "../../components/LoadingSkeleton/LoadingSkeleton";
import { GlobalState } from "../../context/GlobalState";

import NotAuthorized from "../../components/NotAuthorized/NotAuthorized";

import EditableTable from "./ProductsTable";
import "./admin.styles.css";

function AdminPage() {
  const state = useContext(GlobalState);
  const { isLoading, categories, adminProducts, setAdminProducts } =
    state.productsAPI;
  const { getToken } = state.userAPI;

  const isAdmin = getToken()?.isAdmin;

  if (!isAdmin) return <NotAuthorized />;

  return (
    <>
      <Header />
      <div className="admin-container">
        {" "}
        {!isLoading ? (
          <EditableTable
            adminProducts={adminProducts}
            setAdminProducts={setAdminProducts}
            categories={categories}
          />
        ) : (
          <LoadingSkeleton />
        )}
      </div>
    </>
  );
}

export default AdminPage;
