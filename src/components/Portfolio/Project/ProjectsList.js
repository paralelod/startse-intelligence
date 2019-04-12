import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Dropdown,Row, Col, Collapse, Layout, Button, Tabs,Menu, Typography, Card, Icon, 
} from 'antd';
import ProjectMenu from './Menu'
import Wizard from './Thesis/Thesis'
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
              <Col xs={24} style={{padding:'16px 0px 16px 4px',background:'#fff'}}>
                <ProjectMenu/>
              </Col>
              <Col xs={24} style={{padding:'12px 24px'}}>
                  {/* <Wizard/> */}
                  <ProjectCards/>
              </Col>
            </Row>
          </Layout>
        </Media>

        <Media query="(min-width: 1180px)">
          
          <Layout>
            <Header style={{background:'white', lineHeight:'64px'}}>
              <Button
                    type="primary"
                    htmlType="submit"
                    className="buttonSpecial"
                    large
                    style={{ minWidth:'auto',float:'Right',marginTop:'16px'}}
                  >Createw Project</Button>
            </Header>
            <Row>
              <Col xs={24} style={{padding:'12px 24px'}}>
                  <ProjectCards/>
              </Col>
            </Row>
          </Layout>
        </Media> 
        
      </div>
    )
  }
}

export default Project





   
