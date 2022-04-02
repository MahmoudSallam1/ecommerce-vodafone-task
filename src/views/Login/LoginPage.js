import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Form, Input, Button, Card } from "antd";
import { Row, Col } from "antd";
import { GlobalState } from "../../context/GlobalState";

function Login() {
  const navigate = useNavigate();

  const state = useContext(GlobalState);
  const { loginUser, getToken } = state.userAPI;

  const onFinish = (user) => {
    loginUser(user);
    if (getToken()) navigate("/");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  if (getToken()) navigate("/");

  return (
    <Row
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Col>
        <Card
          style={{ width: "22rem" }}
          title="Login to Vodafone"
          bordered={false}
        >
          <Form
            name="basic"
            wrapperCol={{ span: 24 }}
            initialValues={{ remember: true }}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ span: 24 }}>
              <Button block type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
}
export default Login;
