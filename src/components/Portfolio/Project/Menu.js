import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Dropdown,Row, Col, Tree,Breadcrumb,Collapse, Layout, Button, Tabs,Menu, Typography, Card, Icon, 
} from 'antd';
import { NavLink,Link,HashRouter,withRouter, Route, Switch, Redirect} from "react-router-dom";

const { TreeNode } = Tree;
const { Header, Content, Sider } = Layout;
const { Title } = Typography;
const { Text } = Typography;
const Panel = Collapse.Panel;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;

const lockExtra = () => (
  <Icon
    type="lock"
    onClick={(event) => {
      // If you don't want click extra trigger collapse, you can prevent this:
      event.stopPropagation();
    }}
  />
);



class ProjectMenu extends Component{
  
  render(){
    return(
      
  
              <Collapse 
                bordered={false} 
                defaultActiveKey={['1']} 
              >
                <Panel disabled header="Pipeline Startups" key="3">
                  <Menu defaultSelectedKeys={['None']} mode="inline">
                    <Menu.Item key="Pileline1">
                      <span>Canvas</span>
                      
                    </Menu.Item>
                    <Menu.Item key="Pipeline2">
                      <span>Startups List</span>
                      
                    </Menu.Item>
                  </Menu>
                </Panel>
                
                <Panel disabled header="Horizontes Inovação" key="2">
                  <Menu defaultSelectedKeys={['None']} mode="inline">
                    <Menu.Item key="Horziontes1">
                      <span>Dashboard</span>
                      
                    </Menu.Item>
                    <Menu.Item key="Horziontes2">
                      <span>Startups List</span>
                      
                    </Menu.Item>
                  </Menu>
                </Panel>
                <Panel header="Tese Negócios" key="1" style={{fontSize:'18px'}}>
                  <Collapse 
                    bordered={false} 
                    defaultActiveKey={['1']}
                    expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
                  >
                  <div>Link</div>
                  <Panel header="Pesquisa" style={{border:'none'}}>
                    <Menu defaultSelectedKeys={['1']} mode="inline">
                      <Menu.Item key="1">
                        
                      <Link exact to={`/tabs/${this.props.activeKey}/project/wiz`}>Overview</Link>
                      </Menu.Item>
                      <Menu.Item key="2">
                        
                        <span>Business Model</span>
                      </Menu.Item>
                      <Menu.Item key="3">
                        
                        <span>Declining Business Units</span>
                      </Menu.Item>
                      <Menu.Item key="4">
                        
                        <span>Trends, Technologies and Market</span>
                      </Menu.Item>
                      <Menu.Item key="5">
                        
                        <span>Threats, Opportunities and Competitors</span>
                      </Menu.Item>
                      <Menu.Item key="6">
                      
                        <span>Strategy</span>
                      </Menu.Item>
                      <Menu.Item key="7">
                        
                        <span>Focus</span>
                      </Menu.Item>
                    </Menu>
                  </Panel>
                  </Collapse>
                  
                </Panel>
                
            </Collapse>
    )
  }
}

export default ProjectMenu