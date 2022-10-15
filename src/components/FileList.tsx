import React, { useState } from "react";
import {
  EditOutlined,
  FileMarkdownFilled,
  DeleteOutlined,
} from "@ant-design/icons";
import { List, ListProps } from "antd";

const mockList = [
  { id: "1", name: 123 },
  { id: "2", name: 434 },
];

const FileList = ({
  onFileClick,
  onFileDelete,
}: {
  onFileClick?: (id: string) => void;
  onFileDelete: (id: string) => void;
}) => {
  return (
    <List
      style={{ flex: 1 }}
      bordered
      dataSource={mockList}
      renderItem={({ id, name }) => (
        <List.Item>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
            }}
          >
            <FileMarkdownFilled style={{ color: "blue", marginRight: "4px" }} />
            <div style={{ flex: 1, marginRight: "4px" }}>{name}</div>
            <div>
              <EditOutlined style={{ color: "blue", marginRight: "4px" }} />
              <DeleteOutlined onClick={() => onFileDelete(id)} />
            </div>
          </div>
        </List.Item>
      )}
    />
  );
};

export default FileList;
