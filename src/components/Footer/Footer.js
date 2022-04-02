import React from "react";
import { Typography } from "antd";

import "./footer.css";

const { Text } = Typography;

function Footer() {
  return (
    <footer className="footer">
      {" "}
      <Text style={{ color: "white" }}>Developed by Mahmoud Sallam.</Text>
    </footer>
  );
}

export default Footer;
