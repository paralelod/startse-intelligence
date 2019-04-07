import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Dropdown,Row, Col, Collapse, Layout, Button, Tabs,Menu, Typography, Card, Icon, 
} from 'antd';
import ProjectMenu from './Menu'
import Thesis from './Thesis/Thesis'

import Media from 'react-media';

const { Header, Content, Sider } = Layout;
const { Title } = Typography;
const { Text } = Typography;
const Panel = Collapse.Panel;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;



class Project extends Component{
  render(){
    return(
      <Layout>
        <Layout>
          <Row>
            <Col xs={24} lg={5} style={{padding:'8px 0 16px 24px',background:'#fff'}}>
              <ProjectMenu/>
            </Col>
            <Col xs={24} lg={19} style={{padding:'12px 24px'}}>
                <Thesis/>
            </Col>
          </Row>
        </Layout>
        <Media query="(min-width: 768px)">
          <Sider 
            collapsible 
            reverseArrow 
            collapsedWidth='0' 
            theme='light'
          >
          </Sider>
        </Media>
      </Layout>
    )
  }
}

export default Project