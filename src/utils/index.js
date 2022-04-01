import { message } from "antd";

export const showSuccess = () => {
  message.success("Thank you! This product has been added to cart!", 5);
};

export const showInfo = () => {
  message.info("Thank you! This product is already in your cart!", 5);
};
