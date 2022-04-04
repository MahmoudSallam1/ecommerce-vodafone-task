import React, { useState } from "react";
import { Table, Form, Button, Modal, Input, InputNumber, Select } from "antd";
import { getColumns, EditableCell, mergeColumns } from "./helpers/helper";

const { TextArea } = Input;

function ProductsTable({ adminProducts, setAdminProducts, categories }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [productForm] = Form.useForm();
  const [editingKey, setEditingKey] = useState("");


  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleAddProduct = (product) => {
    let id;
    if (adminProducts.length > 0) {
      id = adminProducts.length + 1;
    } else {
      id = 1;
    }
    setAdminProducts([...adminProducts, { ...product, id }]);
  };

  const onFinish = (product) => {
    handleAddProduct(product);
    onReset();
    setIsModalVisible(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onReset = () => {
    productForm.resetFields();
  };

  const isEditing = (record) => record.id === editingKey;

  // edit cell

  const edit = (record) => {
    form.setFieldsValue({
      title: "",
      price: "",
      category: "",
      description: "",
      ...record,
    });
    setEditingKey(record.id);
  };

  // cancel editing
  const cancel = () => {
    setEditingKey("");
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  // save editing

  const handleUpdateProduct = async (id) => {
    try {
      const row = await form.validateFields();
      const newData = [...adminProducts];

      const index = newData.findIndex((item) => id === item.id);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setAdminProducts(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setAdminProducts(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const handleDeletProduct = (id) => {
    try {
      const filteredProudcts = adminProducts.filter(
        (product) => product.id !== id
      );
      console.log(filteredProudcts);

      if (filteredProudcts.length > 0) {
        setAdminProducts(filteredProudcts);
      } else {
        setAdminProducts([]);
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const columns = getColumns(
    editingKey,
    isEditing,
    handleUpdateProduct,
    cancel,
    edit,
    handleDeletProduct
  );
  const mergedColumns = mergeColumns(columns, isEditing);

  return (
    <>
      <Button
        type="primary"
        style={{
          marginBottom: 16,
        }}
        onClick={showModal}
      >
        Add product
      </Button>

      <Form form={form} component={false}>
        <Modal
          onCancel={handleCancel}
          maskClosable={false}
          title="Add new product"
          footer={null}
          visible={isModalVisible}
        >
          <Form
            form={productForm}
            name="basic"
            wrapperCol={{ span: 24 }}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Title"
              name="title"
              rules={[{ message: "Please input  product name!" }]}
            >
              <Input placeholder="Product title" />
            </Form.Item>

            <Form.Item
              label="Description"
              name="description"
              rules={[{ message: "Please input  product description!" }]}
            >
              <TextArea rows={4} placeholder="Product description" />
            </Form.Item>

            <Form.Item name="category" label="Category">
              <Select placeholder="Product category">
                {categories.map((category) => (
                  <Select.Option key={category} value={category}>
                    {category.toUpperCase()}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              label="Price"
              name="price"
              rules={[
                { type: "number", message: "Please input  product price!" },
              ]}
            >
              <InputNumber
                min={1}
                style={{ width: "100%" }}
                placeholder="Product price"
              />
            </Form.Item>

            <Form.Item wrapperCol={{ span: 24 }}>
              <Button block type="primary" htmlType="submit">
                Add
              </Button>
            </Form.Item>
          </Form>
        </Modal>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          dataSource={adminProducts}
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={{
            onChange: cancel,
          }}
        />
      </Form>
    </>
  );
}

export default ProductsTable;
