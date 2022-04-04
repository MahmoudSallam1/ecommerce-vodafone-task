import React from "react";
import { useNavigate } from "react-router-dom";

import { Result, Button } from "antd";
import "./not.authorized.styles.css";

function NotAuthorized() {
  let navigate = useNavigate();
  return (
    <div className="not-authorized-container">
      {" "}
      <Result
        style={{ background: "white" }}
        status="403"
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
        extra={
          <Button onClick={() => navigate("/")} type="primary">
            Back Home
          </Button>
        }
      />
    </div>
  );
}

export default NotAuthorized;
