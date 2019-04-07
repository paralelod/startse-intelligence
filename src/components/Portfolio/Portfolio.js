import React from 'react';
import ReactDOM from 'react-dom';
import { Layout,Menu,Tabs, Button } from 'antd';
import Project from './Project/Project'

const { Header, Content, Sider } = Layout;
const TabPane = Tabs.TabPane;

class Tabbed extends React.Component {
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    const panes = [
      { title: 'Project Title', content: 'ProjectThesis', key: '1' },
      { title: 'Project Title', content: 'Content of Tab Pane 2', key: '2' },
    ];
    this.state = {
      activeKey: panes[0].key,
      panes,
    };
  }

  onChange = (activeKey) => {
    this.setState({ activeKey });
  }

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  }

  add = () => {
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: 'New Tab', content: 'New Tab Pane', key: activeKey });
    this.setState({ panes, activeKey });
  }

  remove = (targetKey) => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.setState({ panes, activeKey });
  }

  render() {
    return (
      <div style={{position:'relative', background:'#001529'}}>
        
        <Tabs
          onChange={this.onChange}
          activeKey={this.state.activeKey}
          type="editable-card"
          onEdit={this.onEdit}
          className='Tabbed'
          // style={{display: 'inline-block'}}
          tabBarStyle={{position:'relative',top:'17px',zIndex:3,display: 'inline-block'}}
        >
          
          {this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key}><Project/></TabPane>)}
        </Tabs>
      </div>
    );
  }
}

export default Tabbed