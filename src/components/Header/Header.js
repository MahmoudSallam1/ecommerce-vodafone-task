import React, { useContext } from "react";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { GlobalState } from "../../context/GlobalState";

import "./header.css";

const { Title, Text } = Typography;

function Header() {
  const navigate = useNavigate();

  const state = useContext(GlobalState);
  const { logout, getToken } = state.userAPI;

  return (
    <header className="header">
      {" "}
      <nav className="menu">
        <Text strong>
          <Link to="/">Vodafone | Ecommerce</Link>
        </Text>

        <ul>
          {getToken()?.isAdmin ? (
            <li
              className="link"
              onClick={() => {
                navigate("/admin");
              }}
            >
              Admin
            </li>
          ) : null}

          {getToken()?.isAdmin ? null : (
            <li >
              <Link to="/cart">Cart</Link>
            </li>
          )}

          <li
            onClick={() => {
              logout();
              if (!getToken()) navigate("/login");
            }}
          >
            Logout
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
