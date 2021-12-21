import React from 'react'
import {Layout} from 'antd'
import FileSearch from './components/FileSearch';
import TabList from './components/TabList';
import './App.css';

function App() {
  return (
    <Layout className='app-layout'>
      <Layout.Sider className='app-sider'>
        <FileSearch></FileSearch>
      </Layout.Sider>
      <Layout.Content className='app-content'>
        <TabList></TabList>
      </Layout.Content>
    </Layout>
  );
}

export default App;
