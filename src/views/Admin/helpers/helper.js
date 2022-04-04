import React from "react";
import {
  Popconfirm,
  Typography,
  Input,
  InputNumber,
  Form,
  Button,
  Select,
} from "antd";

const { TextArea } = Input;


export const getColumns = (
  editingKey,
  isEditing,
  save,
  cancel,
  edit,
  deleteProduct
) => {
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
          <div>
            <Typography.Link
              onClick={() => save(record.id)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a href={{}}>Cancel</a>
            </Popconfirm>
          </div>
        ) : (
          <div style={{ display: "flex", gap: "0.6128em" }}>
            <Button
              type="success"
              disabled={editingKey !== ""}
              onClick={() => edit(record)}
            >
              Edit
            </Button>{" "}
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => deleteProduct(record.id)}
              okText="Yes"
              cancelText="No"
            >
              <Button type="primary" disabled={editingKey !== ""}>
                Delete
              </Button>{" "}
            </Popconfirm>
          </div>
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
  const inputNode = () => {
    if (inputType === "number") return <InputNumber />;
    else if (inputType === "select") return <Select />;
    else if(inputType==="textarea") return <TextArea/>
    else return <Input />;
  };
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
          {inputNode()}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};
