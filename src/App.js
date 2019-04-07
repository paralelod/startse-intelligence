import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import logo from './logo.svg';
import {
  Row, Col, Collapse, Layout, Button,Dropdown, Avatar,Tabs,Menu, Typography, Card, Breadcrumb, Icon,PageHeader, Divider, 
} from 'antd';

import WrappedNormalLoginForm from './pages/Login';

class App extends Component {
  render() {
    return(
      <Layout>
        <WrappedNormalLoginForm/>
      </Layout>

    );
  }
}

export default App;