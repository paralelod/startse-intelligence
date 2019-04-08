import React, { Component } from 'react';
import {Layout,Avatar,Menu} from 'antd';
import { Link } from "react-router-dom";
import logo from './logo.svg';

const { Header} = Layout;
const SubMenu = Menu.SubMenu;




function UserMenu(props) {
  return(
    <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px',float: 'right' }}
          >
            <SubMenu key="sub1" title={<Avatar size="large">LG</Avatar>}>
                <Menu.Item key="3">
                  <Link to="/">Loggout</Link>
                </Menu.Item>
              {/* <SubMenu key="sub1-2" title="Submenu">
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
              </SubMenu> */}
            </SubMenu>
          </Menu>
  );
}


class TopNav extends Component {
  render(){
    let adminBar = null;

    if(this.props.logged)
    {
        adminBar = <UserMenu/>;
    }

    return(
      <Header className="header" style={{position: 'fixed', zIndex: 4, width: '100%', padding:'0 16px' }}>
          <img src={logo}/>
          {adminBar}
        </Header>
    )
  }
}

export default TopNav;