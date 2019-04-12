import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Dropdown,Row, Col, Collapse, Layout, Button, Tabs,Menu, Typography, Card, Icon, 
} from 'antd';
import ProjectCards from './Card'


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
      <div>
        <Media query="(max-width: 1179px)">
          <Layout>
            <Row>
              <Col xs={24} style={{padding:'12px 24px'}}>
                  <ProjectCards/>
              </Col>
            </Row>
          </Layout>
        </Media>

        <Media query="(min-width: 1180px)">
          <Layout>
          <Sider 
            collapsible 
            collapsedWidth='0' 
            theme='light'
            width='280'
            style={{zIndex:4,minHeight:'100vh'}}
          >
          </Sider>
          <Layout>
            <Row>
              <Col xs={24} style={{padding:'12px 24px'}}>
                  <ProjectCards/>
              </Col>
            </Row>
          </Layout>
          <Sider 
            collapsible 
            reverseArrow 
            collapsedWidth='0' 
            theme='light'
            width='240'
          >
          </Sider>
          </Layout>
        </Media> 
        
      </div>
    )
  }
}

export default Project





   
