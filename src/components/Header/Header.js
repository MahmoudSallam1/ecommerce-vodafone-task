import React from "react";
import {Typography } from "antd";
import { Link } from "react-router-dom";

import "./header.css";

const { Title, Text } = Typography;

function Header() {
  return (
    <header className="header">
      {" "}
      <nav className="menu">
        <Text strong>
          <Link to="/products">Vodafone | Ecommerce</Link>
        </Text>

        <ul>
          <li>User</li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
