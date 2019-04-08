import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
 Layout, Menu, Icon 
} from 'antd';

import { Link } from "react-router-dom";
import LogoTypo from './LogoTypo';
import LogoGlyph from './LogoGlyph';

const { Sider } = Layout;

class SideNav extends Component {
  render(){
    return(
      <Sider collapsible style={{ position: 'relative',zIndex:2}}>
        <div style={{ position: 'fixed', width:'inherit',paddingTop:'16px'}}>
          <Menu theme="dark" defaultSelectedKeys={['2']} mode="inline" style={{overflow: 'auto', height: '100vh', left: 0}}>
            <Menu.Item key="logo">
              <Link to="/logged">
                <LogoGlyph style={{marginLeft:'-8px'}} />
                <span><LogoTypo /></span>
              </Link>
            </Menu.Item>
            <Menu.Item key="1">
              <Link to="/wizard" activeClassName='item-selected'>
                <Icon type="compass" theme="filled" />
                <span>Reports</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/logged/portfolio" activeClassName='item-selected'>
                <Icon type="thunderbolt" theme="filled"/>
                <span>Portfolio</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="bulb" theme="filled" />
              <span>Inteligence</span>
            </Menu.Item>
            <Menu.Item key="4" style={{position:'absolute', bottom:'120px'}}>
              <Icon type="setting" theme="filled" />
              <span>Settings</span>
            </Menu.Item>
            <Menu.Item key="5" style={{position:'absolute', bottom:'80px'}}>
            <Link to="/" activeClassName='item-selected'>
                <Icon type="logout"/>
                <span>Logout</span>
              </Link>
            </Menu.Item>
          </Menu>
        </div>
      </Sider>
    )
  }
}

export default SideNav;
