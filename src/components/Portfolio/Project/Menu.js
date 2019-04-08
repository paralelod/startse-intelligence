import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Dropdown,Row, Col, Tree,Breadcrumb,Collapse, Layout, Button, Tabs,Menu, Typography, Card, Icon, 
} from 'antd';


const { TreeNode } = Tree;
const { Header, Content, Sider } = Layout;
const { Title } = Typography;
const { Text } = Typography;
const Panel = Collapse.Panel;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;

class ProjectMenu extends Component{
  render(){
    return(
      
      <Collapse 
        bordered={false} 
        defaultActiveKey={['ProjectTitle']}
        expandIcon={({ isActive }) => <Icon type="menu-unfold" rotate={isActive ? 90 : 0} />}
      >
        <Panel header="Project Really Long Title" 
              key="ProjectTitle" 
              style={{fontSize:'18px', border:'none'}}
              showArrow={false}
        >
          <Collapse
            bordered={false} 
            defaultActiveKey={this.props.showSummary}
            expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
          >
            <Panel 
              header='Summary'
              key="ProjectSummary" 
              >
              <Collapse 
                bordered={false} 
                defaultActiveKey={['1']} 
              >
              <Panel header="Tese" key="1" style={{fontSize:'18px'}}>
                <Collapse 
                  bordered={false} 
                  defaultActiveKey={['1']}
                  expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
                >
                <Panel header="Pesquisa" style={{border:'none'}}>
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
                <Panel header="Resultados" style={{border:'none'}}>
                  <Menu defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                      <span>Industry Overview</span>
                      <Icon type="pie-chart" />
                    </Menu.Item>
                    <Menu.Item key="2">
                      <span>Startups List</span>
                      <Icon type="pie-chart" />
                    </Menu.Item>
                  </Menu>
                </Panel>
                </Collapse>
                
              </Panel>
              <Panel header="Horizontes" key="2" style={{fontSize:'18px'}}>
                <Menu defaultSelectedKeys={['1']} mode="inline">
                  <Menu.Item key="1">
                    <span>Dashboard</span>
                    <Icon type="pie-chart" />
                  </Menu.Item>
                  <Menu.Item key="2">
                    <span>Startups List</span>
                    <Icon type="pie-chart" />
                  </Menu.Item>
                </Menu>
              </Panel>
              <Panel header="Pipeline" key="3" style={{fontSize:'18px'}}>
                <Menu defaultSelectedKeys={['1']} mode="inline">
                  <Menu.Item key="1">
                    <span>Canvas</span>
                    <Icon type="pie-chart" />
                  </Menu.Item>
                  <Menu.Item key="2">
                    <span>Startups List</span>
                    <Icon type="pie-chart" />
                  </Menu.Item>
                </Menu>
              </Panel>
            </Collapse>
            </Panel>
          </Collapse>
        </Panel>
      </Collapse>
    )
  }
}

export default ProjectMenu