import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import { Row, Button, Col, Image, Rate, Typography } from "antd";
import LoadingSkeleton from "../../components/LoadingSkeleton/LoadingSkeleton";
import { GlobalState } from "../../context/GlobalState";

import { EditableTable } from "./ProductsTable";
import "./admin.styles.css";

const { Title, Text, Paragraph } = Typography;

function AdminPage() {
  const state = useContext(GlobalState);
  const { isLoading, products, adminProducts, setAdminProducts } =
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
          />
        ) : (
          <LoadingSkeleton />
        )}
      </div>
    </>
  );
}

export default AdminPage;
