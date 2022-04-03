import React, { useState } from "react";
import { Table, Form, Button, Modal, Input, InputNumber, Select } from "antd";
import { getColumns, EditableCell, mergeColumns } from "./helpers/helper";

export const EditableTable = ({ adminProducts, setAdminProducts }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [form2] = Form.useForm();
  const [editingKey, setEditingKey] = useState("");
  /* ===================
  ======functions======= */

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
    form2.resetFields();
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
        setAdminProducts(...filteredProudcts);
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
            form={form2}
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
              <Input />
            </Form.Item>

            <Form.Item
              label="Description"
              name="description"
              rules={[{ message: "Please input  product description!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item name="category" label="Category">
              <Select>
                <Select.Option value="electronics">Electronics</Select.Option>
                <Select.Option value="jewelery">Jewelery</Select.Option>
                <Select.Option value="men's clothing">
                  Men's clothing
                </Select.Option>
                <Select.Option value="women's clothing">
                  Women's clothing
                </Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Price"
              name="price"
              rules={[
                { type: "number", message: "Please input  product price!" },
              ]}
            >
              <InputNumber />
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
};
