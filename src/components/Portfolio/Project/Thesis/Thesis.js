import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Dropdown,Row, Col, Collapse, Layout, Button, Tabs,Menu, Typography, Card, Icon, 
} from 'antd';
import MultiSelect from './MultiSelect'

const { Header, Content, Sider } = Layout;
const { Title } = Typography;
const { Text } = Typography;
const Panel = Collapse.Panel;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;

const menu = (
  <Menu>
    <Menu.Item>1st menu item</Menu.Item>
    <Menu.Item>2nd menu item</Menu.Item>
    <SubMenu title="sub menu">
      <Menu.Item>3rd menu item</Menu.Item>
      <Menu.Item>4th menu item</Menu.Item>
    </SubMenu>
    <SubMenu title="disabled sub menu" disabled>
      <Menu.Item>5d menu item</Menu.Item>
      <Menu.Item>6th menu item</Menu.Item>
    </SubMenu>
  </Menu>
);



class ProjectThesis extends Component{
  render(){
    return(
      <Layout>
        <Content style={{ overflow: 'initial', minHeight:'100vh' }}>
            <Row>
              <Col xs={24} lg={5} style={{padding:'8px 0 16px 24px',background:'#fff'}}>
                <Dropdown overlay={menu}>
                  <a className="ant-dropdown-link" href="#" style={{fontSize:'24px', color:'#000',paddingBottom:'8px'}}>
                    Project Title <Icon type="down" />
                  </a>
                </Dropdown>
              </Col>
              <Col xs={24} lg={19} style={{background:'white',padding:'12px 24px'}}>
                    <Row>
                      <Col xs={24} lg={8}>
                        <Icon type="mail" />Navigation One
                      </Col>
                      <Col xs={24} lg={8}>
                        <Icon type="mail" />Navigation One
                      </Col>
                      <Col xs={24} lg={8}>
                        <Icon type="mail" />Navigation One
                      </Col>
                    </Row>
              </Col>
            </Row>
            <Row>
              <Col xs={24} lg={5}>
                <Collapse bordered={false} defaultActiveKey={['1']}>
                  <Panel header="Steps" key="1" style={{padding:'0'}}>
                    <Menu defaultSelectedKeys={['1']} mode="inline">
                      <Menu.Item key="1">
                        <span>Industry</span>
                        <Icon type="pie-chart" />
                      </Menu.Item>
                      <Menu.Item key="2">
                        <span>Industry</span>
                        <Icon type="pie-chart" />
                      </Menu.Item>
                      <Menu.Item key="3">
                        <span>Industry</span>
                        <Icon type="pie-chart" />
                      </Menu.Item>
                      <Menu.Item key="4">
                        <span>Industry</span>
                        <Icon type="pie-chart" />
                      </Menu.Item>
                      <Menu.Item key="5">
                        <span>Industry</span>
                        <Icon type="pie-chart" />
                      </Menu.Item>
                      <Menu.Item key="6">
                        <span>Industry</span>
                        <Icon type="pie-chart" />
                      </Menu.Item>
                      <Menu.Item key="7">
                        <span>Industry</span>
                        <Icon type="pie-chart" />
                      </Menu.Item>
                      <Menu.Item key="8">
                        <span>Industry</span>
                        <Icon type="pie-chart" />
                      </Menu.Item>
                    </Menu>
                  </Panel>
                </Collapse>
              </Col>
              <Col xs={24} lg={19}>
                <Layout>
                    <Content style={{padding:'12px'}}>
                      <Row>
                        <Col xs={24} md={16}>
                          <Title level={3}>Step Title</Title>
                        </Col>
                        <Col xs={24} md={8}>
                          <div style={{float:'right'}}>
                            <a href='' style={{marginRight:'32px'}}>Back</a>
                            <Button large type="primary" style={{minWidth:'120px'}}>Next</Button>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={24}>
                          <Card>
                              <MultiSelect/>
                          </Card>
                        </Col>
                        <br/><br/><br/><br/><br/>
                        <Col xs={24}>
                          <Card>
                              <Tabs defaultActiveKey="1">
                              <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                              <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                              <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                            </Tabs> 
                          </Card>
                        </Col>
                      </Row>
                    </Content>
                </Layout>
              </Col>
            </Row>
        </Content>
        <Sider collapsible reverseArrow collapsedWidth='0' theme='light' style={{ position: 'relative'}}>
            
          </Sider>
      </Layout>
    )
  }
}

export default ProjectThesis