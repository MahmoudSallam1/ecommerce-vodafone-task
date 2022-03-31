import { Form, Input, Button, Card } from "antd";
import { Row, Col } from "antd";

function Login({ setToken }) {
  const onFinish = async (values) => {
    console.log("Success:", values);
    setToken("sallam");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Col xs={18} sm={12} md={6} xl={6}>
        <Card title="Login to Vodafone" bordered={false}>
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
