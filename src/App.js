import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link,Switch, Redirect} from "react-router-dom";
import './App.less';
import {
  Row, Col, Collapse, Layout, Button,Dropdown, Avatar,Tabs,Menu, Typography, Card, Breadcrumb, Icon,PageHeader, Divider, 
} from 'antd';

import Media from 'react-media';

import TopNav from './components/TopNav/TopNav';
import SideNav from './components/SideNav/SideNav';
import Portfolio from './components/Portfolio/Portfolio';
import Wizard from './components/Portfolio/Project/Wizard';

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
      <div>
        <Media query="(max-width: 768px)">
          {matches =>
            matches ? (
              <Layout>
                <TopNav/>
                <Content>
                  {this.props.children}
                </Content>
              </Layout>
            ) : (
              <Layout>
                <SideNav/>
                <Content>
                  {this.props.children}
                </Content>
              </Layout>
            )
          }
        </Media>
      </div>
    );
  }
}

export default App;