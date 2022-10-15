import React, { useState } from "react";
import { Tabs } from "antd";
import MDEditor from "@uiw/react-md-editor";

const ChildrenNode = (id: any) => {
  const [value, setValue] = useState(`${id}Hello world!!!**`);

  return (
    <div>
      <MDEditor value={value} onChange={(value) => setValue(value || "")} />
      <MDEditor.Markdown source={value} style={{ whiteSpace: "pre-wrap" }} />
    </div>
  );
};

const TabList = () => (
  <Tabs
    defaultActiveKey="1"
    items={[
      {
        label: "Tab 1",
        key: "1",
        children: ChildrenNode(1),
      },
      {
        label: "Tab 2",
        key: "2",

        children: ChildrenNode(12),
      },
      {
        label: "Tab 3",
        key: "3",

        children: ChildrenNode(14),
      },
    ]}
  />
);

export default TabList;
