import React from "react";
import { Popconfirm, Typography, Input, InputNumber, Form, Button } from "antd";

export const getColumns = (editingKey, isEditing, save, cancel, edit) => {
  return [
    {
      title: "ID",
      dataIndex: "id",
      width: "25%",
      editable: false,
    },
    {
      title: "Title",
      dataIndex: "title",
      width: "25%",
      editable: true,
    },
    {
      title: "Price",
      dataIndex: "price",
      width: "25%",
      editable: true,
    },
    {
      title: "Category",
      dataIndex: "category",
      width: "25%",
      editable: true,
    },
    {
      title: "Description",
      dataIndex: "description",
      width: "25%",
      editable: true,
    },
    {
      title: "Operation",
      dataIndex: "operation",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.id)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <>
            <Typography.Link
              disabled={editingKey !== ""}
              onClick={() => edit(record)}
            >
              Edit
            </Typography.Link>{" "}
            <Typography.Link disabled={editingKey !== ""}>
              Delete
            </Typography.Link>
          </>
        );
      },
    },
  ];
};

export const mergeColumns = (columns, isEditing) => {
  return columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === "price" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
};

export const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};
