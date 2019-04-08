import React, { Component } from 'react';
import {Layout,Avatar,Menu} from 'antd';

import logo from './logo.svg';

const { Header} = Layout;
const SubMenu = Menu.SubMenu;

class TopNav extends Component {
  render(){
    return(
      <Header className="header" style={{position: 'fixed', zIndex: 4, width: '100%', padding:'0 16px' }}>
          <img src={logo}/>
          {/* <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px',float: 'right' }}
          >
            <SubMenu key="sub1" title={<Avatar size="large">LG</Avatar>}>
              <Menu.Item key="3">Option 3</Menu.Item>
              <Menu.Item key="4">Option 4</Menu.Item>
              <SubMenu key="sub1-2" title="Submenu">
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
              </SubMenu>
            </SubMenu>
          </Menu> */}
        </Header>
    )
  }
}

export default TopNav;