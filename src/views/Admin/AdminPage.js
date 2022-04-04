import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import LoadingSkeleton from "../../components/LoadingSkeleton/LoadingSkeleton";
import { GlobalState } from "../../context/GlobalState";

import EditableTable from "./ProductsTable";
import "./admin.styles.css";

function AdminPage() {
  const state = useContext(GlobalState);
  const { isLoading, categories, adminProducts, setAdminProducts } =
    state.productsAPI;

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
