import React from 'react'; 
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link,Switch, Redirect} from "react-router-dom";
import 'antd/dist/antd.css';
import '../../index.css';
import {
  Row, Col, Collapse, Layout, Button,Dropdown, Avatar,Tabs,Menu, Typography, Card, Breadcrumb, Icon,PageHeader, Divider, 
} from 'antd';

import Media from 'react-media';

import TopNav from '../../components/TopNav/TopNav';
import SideNav from '../../components/SideNav/SideNav';


const { Header, Content, Sider } = Layout;

const AppLayout = ({ children, ...rest }) => {
  return (
    <div>
      <Media query="(max-width: 768px)">
        {matches =>
          matches ? (
            <Layout style={{background:'#001529'}}>
              <TopNav logged/>
              <Content style={{marginTop:'63px',background:'transparent'}}>
                {children}
              </Content>
            </Layout>
          ) : (
            <Layout style={{background:'#001529'}}>
              <SideNav/>
              <Content style={{background:'transparent'}}>
                {children}
              </Content>
            </Layout>
          )
        }
      </Media>
    </div>
  )
  }
 
export default AppLayout;