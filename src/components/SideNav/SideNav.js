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
        <div style={{ position: 'fixed', width:'inherit',paddingTop:'24px'}}>
          <Menu theme="dark" defaultSelectedKeys={['2']} mode="inline" style={{overflow: 'auto', height: '100vh', left: 0}}>
            <Menu.Item key="logo">
              <LogoGlyph style={{marginLeft:'-8px'}} />
              <span><LogoTypo /></span>
            </Menu.Item>
            <Menu.Item key="1">
            <Link to="/project" activeClassName='item-selected'>
                <Icon type="desktop" />
                <span>Reports</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/project" activeClassName='item-selected'>
                <Icon type="desktop" />
                <span>Portfolio</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="desktop" />
              <span>Inteligence</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="desktop" />
              <span>Settings</span>
            </Menu.Item>
          </Menu>
        </div>
      </Sider>
    )
  }
}

export default SideNav;
