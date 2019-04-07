import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Row, Col, Collapse, Button,Menu, Typography, Card, Icon, 
} from 'antd';
import MultiSelect from './MultiSelect'

const { Title } = Typography;
const { Text } = Typography;
const Panel = Collapse.Panel;
const SubMenu = Menu.SubMenu;

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

const genExtra = () => (
  <Icon
    type="setting"
    onClick={(event) => {
      // If you don't want click extra trigger collapse, you can prevent this:
      event.stopPropagation();
    }}
  />
);



class ProjectThesis extends Component{
  render(){
    return(
      <div>
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
              <Collapse defaultActiveKey={['1']}>
                <Panel header="3 Years" key="1" extra={genExtra()}>
                  <div>hello</div>
                </Panel>
                <Panel header="5 Years" key="2" extra={genExtra()}>
                  <div>hello</div>
                </Panel>
                <Panel header="10 Year" key="3" extra={genExtra()}>
                  <div>hello</div>
                </Panel>
              </Collapse>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ProjectThesis