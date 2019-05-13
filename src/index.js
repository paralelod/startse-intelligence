import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { HashRouter, BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import App from './App';
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup';
import RecoverPwd from './components/Auth/Pwd/RequestNew'
import CreatePwd from './components/Auth/Pwd/CreateNew'
import Portfolio from './components/Portfolio/Portfolio'
import Project from './components/Portfolio/ProjectMain'
import Report from './components/Report/ReportsList'
import AppRoute from "./layouts/App/AppRoute";
import DefaultRoute from "./layouts/Default/DefaultRoute";

import {
  Row, Col, Collapse, Layout, Button,Dropdown, Avatar,Tabs,Menu, Typography, Card, Breadcrumb, Icon,PageHeader, Divider, 
} from 'antd';

import Media from 'react-media';

import TopNav from './components/TopNav/TopNav';
import SideNav from './components/SideNav/SideNav';

const TabPane = Tabs.TabPane;

const { Header, Content, Sider } = Layout;



ReactDOM.render((
    <HashRouter basename='/'>
        <Switch>
          <Route exact path="/" render={() => (
              <Redirect to="/login"/>
          )}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/logged" render={() => (
              <Redirect to="/projects"/>
          )}/>  
          <Switch>
            <Layout style={{background:'#003955'}}>
              <SideNav/>
              <Content style={{background:'transparent'}}>
                <Project/>
              </Content>
            </Layout>
          </Switch>
        </Switch>   
    </HashRouter>
), document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
