import React, { useState } from "react";
import { Button } from "antd";
import { FileAddOutlined, UploadOutlined } from "@ant-design/icons";

const BottomBtn = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Button type="primary" icon={<FileAddOutlined />} style={{ flex: 1 }}>
        新建
      </Button>
      <Button type="default" icon={<UploadOutlined />} style={{ flex: 1 }}>
        导入
      </Button>
    </div>
  );
};
export default BottomBtn;
