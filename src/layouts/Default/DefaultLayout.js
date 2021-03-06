import React from 'react'; 
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link,Switch, Redirect} from "react-router-dom";
import {
  Row, Col, Collapse, Layout, Button,Dropdown, Avatar,Tabs,Menu, Typography, Card, Breadcrumb, Icon,PageHeader, Divider, 
} from 'antd';

import Media from 'react-media';

import TopNav from '../../components/TopNav/TopNav';
import SideNav from '../../components/SideNav/SideNav';


const { Header, Content, Sider } = Layout;

const DefaultLayout = ({ children, ...rest }) => {
  return (
    <Layout>
      {/* <TopNav/> */}
      <Content style={{background:'#001529'}}>
        {children}
      </Content>
    </Layout>
  )
  }
 
export default DefaultLayout;