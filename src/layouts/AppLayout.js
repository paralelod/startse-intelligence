import React from 'react'; 
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link,Switch, Redirect} from "react-router-dom";
import 'antd/dist/antd.css';
import '../index.css';
import {
  Row, Col, Collapse, Layout, Button,Dropdown, Avatar,Tabs,Menu, Typography, Card, Breadcrumb, Icon,PageHeader, Divider, 
} from 'antd';

import Media from 'react-media';

import TopNav from '../components/TopNav/TopNav';
import SideNav from '../components/SideNav/SideNav';


const { Header, Content, Sider } = Layout;

const HomeLayout = ({ children, ...rest }) => {
  return (
    <div>
      <Media query="(max-width: 768px)">
        {matches =>
          matches ? (
            <Layout>
              <TopNav/>
              <Content>
                {children}
              </Content>
            </Layout>
          ) : (
            <Layout>
              <SideNav/>
              <Content>
                {children}
              </Content>
            </Layout>
          )
        }
      </Media>
    </div>
  )
  }
 
export default HomeLayout;