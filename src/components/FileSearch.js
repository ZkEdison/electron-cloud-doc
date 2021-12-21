import React, { useState, useRef, useEffect } from "react";
import { Input, List, Button } from "antd";
import { SearchOutlined,FileMarkdownOutlined , EditOutlined,DeleteOutlined, FileAddOutlined, ExportOutlined} from "@ant-design/icons";
import useKeyPress from "../hooks/useKeyPress";

const FileSearch = (title, onFileSearch) => {
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState("");
  const [inputFoucs, setInputFoucs] = useState(false);
  const escPressed = useKeyPress(27)
  useEffect(() => {
    if (escPressed && inputFoucs) {
      inputRef.current.blur()
    }
  }, [escPressed, inputFoucs]);


  const defaultFiles = [
    {
      id: 1,
      title: 'fkir',
      body: 'fd',
      createAt: 11313131313
    },
    {
      id: 2,
      title: 'fkir',
      body: 'fd',
      createAt: 11313131313
    }, {
      id: 3,
      title: 'fkir',
      body: 'fd',
      createAt: 11313131313
    }, {
      id: 4,
      title: 'fkir',
      body: 'fd',
      createAt: 11313131313
    }, {
      id: 5,
      title: 'fkir',
      body: 'fd',
      createAt: 11313131313
    },
  ]

  return (
    <div className="file-search">
      <Input
        ref={inputRef}
        value={inputValue}
        allowClear
        onFocus={() => {
          setInputFoucs(true);
        }}
        onBlur={() => {
          setInputFoucs(false);
        }}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        placeholder="search"
        prefix={<SearchOutlined />}
        className="file-input"
      />
      <List
        className="file-list"
        bordered
        dataSource={defaultFiles}
        renderItem={(item) => (
          <List.Item key={item.id} style={{paddingLeft: '10px',paddingRight: '10px'}}>
            <FileMarkdownOutlined />
            <span style={{flex:1, padding: '0 10px'}}>{item.title}</span>
            <EditOutlined className="list-icon" />
            <DeleteOutlined className="list-icon"  />
          </List.Item>
        )}
      />
      <div style={{display: 'flex', justifyContent: 'space-around', padding: '10px 0'}}>
        <Button type="primary" icon={<FileAddOutlined />}>新建</Button>
        <Button type="ghost" icon={<ExportOutlined />}>导出</Button>
      </div>
    </div>
  );
};
export default FileSearch;
