import React, { FC } from "react";
import "./App.css";
import { Col, Row } from "antd";
import FileSearch from "./components/FileSearch";
import FileList from "./components/FileList";
import BottomBtn from "./components/BottomBtn";
import TabList from "./components/TabList";

const App: FC = () => {
  return (
    <div className="App">
      <Row
        style={{
          height: "100%",
        }}
      >
        <Col
          span={6}
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <FileSearch
            onFileSearch={(v) => {
              console.log(v);
            }}
          />
          <FileList onFileDelete={() => {}} />
          <BottomBtn />
        </Col>
        <Col span={18}>
          <TabList />
        </Col>
      </Row>
    </div>
  );
};

export default App;
