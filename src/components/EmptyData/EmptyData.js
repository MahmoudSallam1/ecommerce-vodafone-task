import React from "react";
import { Empty, Card } from "antd";
import "./empty.data.styles.css";

function EmptyData({ description }) {
  return (
    <div className="empty-data-container">
      {" "}
      <Card style={{ margin: "0 auto" }}>
        <Empty description={description} />
      </Card>
    </div>
  );
}

export default EmptyData;
