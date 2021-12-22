import React, { useState, useRef, useEffect } from "react";
import { Tabs,Badge } from "antd";
import SimpleMDE from "react-simplemde-editor";

import "easymde/dist/easymde.min.css";

const renderTabBar = (props, DefaultTabBar) => {
  console.log(props)
  return (
    <DefaultTabBar {...props}></DefaultTabBar>
  )
}

const ControlledUsage = () => {
  const [value, setValue] = useState("Initial value");

  const onChange = (value) => {
    setValue(value);
  };

  return <SimpleMDE value={value} onChange={onChange} />;
};

const TabPane = (props) => {
  return (
    <Badge dot>
      <div>12 {props.name}</div>
    </Badge>
  )
}

const TabList = () => {
  let list = [1,2,3];
  return (
    <Tabs type="editable-card" renderTabBar={renderTabBar} style={{padding: '10px'}}>
      {list.map((item, index) => (
        <Tabs.TabPane tab={<TabPane name={item}/>} key={index} className="tab-pane-content" style={{}}>
          <ControlledUsage/>
        </Tabs.TabPane>
      ))}
    </Tabs>
  );
};

export default TabList;
