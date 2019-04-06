import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import logo from './logo.svg';
import {
  Row, Col, Collapse, Layout, Button,Dropdown, Avatar,Tabs,Menu, Typography, Card, Breadcrumb, Icon,PageHeader, Divider, 
} from 'antd';

import TopNav from './components/TopNav/TopNav';
import SideNav from './components/SideNav/SideNav';
import Tabbed from './pages/Tabbed';

const { Header, Content, Sider } = Layout;
const { Title } = Typography;
const { Text } = Typography;
const Panel = Collapse.Panel;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;

class App extends Component {
  
  
  render() {
    return (
      <Layout>
        <TopNav/>
        <Layout>
          <SideNav/>
          <Content>
            <Tabbed/>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;