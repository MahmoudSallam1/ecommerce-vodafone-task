import { message } from "antd";
import { Modal, Button, Space } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const { confirm } = Modal;

export const showSuccess = () => {
  message.success("Thank you! This product has been added to cart!", 5);
};

export const showInfo = () => {
  message.info("Thank you! This product is already in your cart!", 5);
};

export const showConfirm = (onConfirm) => {
  confirm({
    title: "Do you Want to delete these items?",
    icon: <ExclamationCircleOutlined />,
    content: "Some descriptions",
    onOk() {
      onConfirm();
    },
    onCancel() {
      console.log("Cancel");
    },
  });
};
