import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Dropdown,Row, Col, Collapse, Layout, Button, Tabs,Menu, Typography, Card, Icon, 
} from 'antd';
import ProjectMenu from './Menu'
import Wizard from './Thesis/Thesis'
import MultiWizard from './Thesis/MultiSelect'
import { HashRouter, Route, Switch, Redirect,withRouter} from "react-router-dom";

import Media from 'react-media';

const { Header, Content, Sider } = Layout;
const { Title } = Typography;
const { Text } = Typography;
const Panel = Collapse.Panel;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;

const baseUrl = '/project'


class Project extends Component{
  state = {
    collapsedLeft: false,
    collapsedRight: false
  };

  toggleLeft = () => {
    this.setState({
      collapsedLeft: !this.state.collapsedLeft
    });
  }

  toggleRight = () => {
    this.setState({
      collapsedRight: !this.state.collapsedRight
    });
  }
  render(){
    return(
      <div>
        <Layout>
            <Row style={{minHeight:'64px',padding:'0 24px', background:'white'}} type="flex" justify="center" align="middle">
              <Col xs={24}>
                <Icon
                  className="trigger"
                  type={this.state.collapsedLeft ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggleLeft}
                />
                <span style={{fontSize:'18px',marginLeft:'8px'}}>Project Title</span>
                <span style={{float:'right'}}>
                
                <Icon
                    className="trigger"
                    type={this.state.collapsedRight ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggleRight}
                    
                  />
                </span>
              </Col>
            </Row>
            {/* Top Menu */}
            <Layout>
              <Sider 
                collapsible 
                collapsedWidth='0' 
                theme='light'
                width='280'
                style={{zIndex:4,minHeight:'100vh'}}
                collapsed={this.state.collapsedLeft}
                trigger={null}
              >
                <ProjectMenu showSummary='ProjectSummary' activeKey={this.props.activeKey}/>
              </Sider>
              {/* Project Side Menu */}
              <Layout>
                <Row>
                  <Col xs={24} style={{padding:'12px 24px'}}>
                    <Switch>
                    <Route exact path={`/tabs/${this.props.activeKey}${baseUrl}`} render={() => (
                        <Wizard/>
                    )}/>
                    <Route exact path={`/tabs/${this.props.activeKey}/1`} render={() => (
                        <Wizard/>
                    )}/>
                    <Route exact path={`/tabs/${this.props.activeKey}${baseUrl}/wiz`} render={() => (
                        <MultiWizard/>
                    )}/>
                    </Switch>
                  </Col>
                </Row>
              </Layout>
            <Sider 
              collapsible 
              reverseArrow 
              collapsedWidth='0' 
              theme='light'
              width='240'
              collapsed={this.state.collapsedRight}
              trigger={null}
            >
            </Sider>
          </Layout>
        </Layout>
      </div>
    )
  }
}

export default withRouter(Project)





   
