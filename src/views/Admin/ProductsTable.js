import React, { useState } from "react";
import { Table, Form, Button, Modal, Input } from "antd";
import { getColumns, EditableCell, mergeColumns } from "./helpers/helper";

export const EditableTable = ({ products, setProducts }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [form2] = Form.useForm();
  const [data, setData] = useState(products);
  const [editingKey, setEditingKey] = useState("");
  /* ===================
  ======functions======= */

  const showModal = () => {
    setIsModalVisible(true);
  };

  const onFinish = (product) => {
    console.log(product);
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

  const save = async (id) => {
    try {
      const row = await form.validateFields();
      console.log(row);
      const newData = [...data];

      const index = newData.findIndex((item) => id === item.id);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const columns = getColumns(editingKey, isEditing, save, cancel, edit);
  const mergedColumns = mergeColumns(columns, isEditing);

  return (
    <Form form={form} component={false}>
      <Button
        type="primary"
        style={{
          marginBottom: 16,
        }}
        onClick={showModal}
      >
        Add product
      </Button>
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
            label="Product name"
            name="productName"
            rules={[{ message: "Please input  product name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Product description"
            name="productDescription"
            rules={[{ message: "Please input  product description!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Product category"
            name="productCategory"
            rules={[{ message: "Please input  product category!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            type="number"
            label="Product price"
            name="productPrice"
            rules={[{ message: "Please input  product price!" }]}
          >
            <Input />
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
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};
