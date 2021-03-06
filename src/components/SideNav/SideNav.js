import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
 Layout, Menu, Icon 
} from 'antd';

import { Link, withRouter } from "react-router-dom";
import LogoTypo from './LogoTypo';
import LogoGlyph from './LogoGlyph';

const { Sider } = Layout;

class SideNav extends Component {
  render(){
    const {location} = this.props
    return(
      <Sider collapsible style={{ position: 'relative',zIndex:2}}>
        <div style={{ position: 'fixed', width:'inherit',paddingTop:'16px'}}>
          <Menu theme="dark" className="sideMenu" defaultSelectedKeys={[location.pathname]} mode="inline" style={{overflow: 'auto', height: '100vh', left: 0}}>
            <Menu.Item key="logo">
              <Link to="/logged">
                <LogoGlyph style={{marginLeft:'-12px'}} />
                <span><LogoTypo /></span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/logged/reports">
              <Link to="/logged/reports" activeClassName='item-selected'>
                <Icon type="compass" theme="filled" style={{fontSize:'18px'}} />
                <span>Reports</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/logged/projects">
              <Link to="/logged/projects" activeClassName='item-selected'>
                <Icon type="thunderbolt" theme="filled" style={{fontSize:'18px'}}/>
                <span>Portfolio</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="bulb" theme="filled" style={{fontSize:'18px'}}/>
              <span>Inteligence</span>
            </Menu.Item>
            <Menu.Item key="4" style={{position:'absolute', bottom:'120px'}}>
              <Icon type="setting" theme="filled" style={{fontSize:'18px'}}/>
              <span>Settings</span>
            </Menu.Item>
            <Menu.Item key="5" style={{position:'absolute', bottom:'80px'}}>
            <Link to="/" activeClassName='item-selected'>
                <Icon type="logout" style={{fontSize:'18px'}}/>
                <span>Logout</span>
              </Link>
            </Menu.Item>
          </Menu>
        </div>
      </Sider>
    )
  }
}

export default withRouter(SideNav);
