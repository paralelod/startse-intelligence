import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Dropdown,Row, Col, Collapse, Layout, Button, Tabs,Menu, Typography, Card, Icon, 
} from 'antd';
import ProjectMenu from './Menu'
import Wizard from './Wizard2'


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
            
              <Media query="(min-width: 992px)">
                <Col xs={24} lg={8} style={{padding:'16px 0px 16px 4px',background:'#fff', minHeight:'100vh'}}>
                  <ProjectMenu showSummary='ProjectSummary'/>
                </Col>
              </Media>
              <Media query="(max-width: 991px)">
              <Col xs={24} lg={8} style={{padding:'16px 0px 16px 4px',background:'#fff'}}>
                  <ProjectMenu/>
                </Col>
              </Media>
            
            <Col xs={24} lg={16} style={{padding:'12px 24px'}}>
                <Wizard/>
            </Col>
          </Row>
        </Layout>
        <Media query="(min-width: 1180px)">
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