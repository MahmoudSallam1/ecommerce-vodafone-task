import React from "react";
import { Card as CardANT } from "antd";
const { Meta } = CardANT;

function Card({ product }) {
  return (
    <CardANT
      cover={
        <img
          alt={product.title}
          src={product.image}
          style={{ objectFit: "cover", width: "150px",
          margin:"0 auto",padding:"2em 0" }}
        />
      }
      actions={
        [
          // <SettingOutlined key="setting" />,
          // <EditOutlined key="edit" />,
          // <EllipsisOutlined key="ellipsis" />,
        ]
      }
    >
      <Meta title={product.title} description={product.description} />
    </CardANT>
  );
}

export default Card;
