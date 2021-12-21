import React, { useState, useRef, useEffect } from "react";
import { Tabs } from "antd";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const renderTabBar = (props, DefaultTabBar) => {
  console.log(DefaultTabBar, props)
  return (
    <DefaultTabBar {...props}></DefaultTabBar>
  )
}

const TabList = () => {
  let list = [1,2,3];
  return (
    <Tabs type="editable-card" renderTabBar={renderTabBar} style={{padding: '10px'}}>
      {list.map((item, index) => (
        <Tabs.TabPane tab={`tab-${item}`} key={index} className="tab-pane-content" style={{}}>
          <SimpleMDE></SimpleMDE>
        </Tabs.TabPane>
      ))}
    </Tabs>
  );
};

export default TabList;
