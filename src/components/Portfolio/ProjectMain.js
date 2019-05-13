import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col ,Layout,Menu,Tabs, Button,Dropdown, Collapse,Typography, Card, Icon, } from 'antd';
import ProjectsList from './Project/ProjectsList'
import Project from './Project/Project';
import { NavLink,Link,HashRouter,withRouter, Route, Switch, Redirect} from "react-router-dom";
import thesis from './Project/card-thesis.png'
import pipe from './Project/card-pipeline.png'


const TabPane = Tabs.TabPane;
const { Header, Content, Sider } = Layout;
const { Title } = Typography;
const { Text } = Typography;
const Panel = Collapse.Panel;
const SubMenu = Menu.SubMenu;

const tabsUrl = '/logged/projects'
const projectUrl = '/project'


// Project Content


const ProjectThesis=(props) =>{
  return(
    <div>{props.step}</div>
  )
}
const projectsSteps = [
  { title: 'Industry Overview', key: 'industry-overview', content:<ProjectThesis step="Industry Overview"/>, onClick: 'props.onClickResultSummary'},
  { title: 'Business Model', key: 'business-model', content:<ProjectThesis step="Business Model"/>},
  { title: 'Emerging Trends', key: 'emerging-trends', content:<ProjectThesis step="Emerging Trends"/>},
  { title: 'Treats and Opportunities', key: 'treats-and-opportunities', content:<ProjectThesis step="Treats and Opportunities"/>},
  { title: 'Strategy', key: 'strategy', content:<ProjectThesis step="Strategy"/>},
  { title: 'Focus', key: 'focus', content:<ProjectThesis step="Focus"/>},
];

const projectsResult = [
  { title: 'Summary', key: 'summary', content:<ProjectThesis step="Sumary"/>},
  { title: 'Startups', key: 'startups', content:<ProjectThesis step="Suggested Startups"/>},
];

// Project 

const ProjectTopNav=(props)=>{
  return(
    <Row style={{minHeight:'64px',padding:'0 24px', background:'white'}} type="flex" justify="center" align="middle">
      <Col xs={24}>
        <Icon
          className="trigger"
          type={props.collapsedLeft ? 'menu-unfold' : 'menu-fold'}
          onClick={props.toggleLeft}
        />
        <span style={{fontSize:'18px',marginLeft:'8px'}}>Project Title</span>
        <span style={{float:'right'}}>
        
        <Icon
            className="trigger"
            type={props.collapsedRight ? 'menu-unfold' : 'menu-fold'}
            onClick={props.toggleRight}
            
          />
        </span>
      </Col>
    </Row>
  )
}

const ProjectMenu=(props)=>{
  return(
    <Collapse 
                bordered={false} 
                defaultActiveKey={['thesis','portfolio']} 
              >
                <Panel header="Innovation Portfolio" key="portfolio">
                  <Menu defaultSelectedKeys={['startups-pipeline']} mode="inline">
                    <Menu.Item key="startups-pipeline">
                    <Link 
                      exact to={`${tabsUrl}/${props.activeKey}/${props.activeProject}/startups-pipeline`} 
                      onClick={props.onClickPipeline}
                    >
                      Startups Pipeline
                    </Link>
                      
                    </Menu.Item>
                    <Menu.Item key="innovation-landscape">
                    <Link exact to={`${tabsUrl}/${props.activeKey}/${props.activeProject}/innovation-landscape`} onClick={props.onClickLandscape}>Innovation Landscape</Link>
                      
                    </Menu.Item>
                  </Menu>
                </Panel>
                
                <Panel header="Innovation Thesis" key="thesis">
                  <Collapse 
                    bordered={false} 
                    defaultActiveKey={['research']}
                    expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
                  >
                  
                  <Panel header="Results" style={{border:'none'}}  key="results">
                    <Menu defaultSelectedKeys={['summary']} mode="inline">
                    {projectsResult.map(step =>  
                          <Menu.Item key={step.key}>
                            <Link exact to={`${tabsUrl}/${props.activeKey}/${props.activeProject}/thesis/result/${step.key}`} 
                                  onClick={props.onClickResultSummary}
                            >
                              {step.title}
                            </Link>
                          </Menu.Item>
                        )
                      }
                    </Menu>
                  </Panel>
                  <Panel header="Research" style={{border:'none'}} key="research">
                    <Menu defaultSelectedKeys={['industry-overview']} mode="inline">
                      {projectsSteps.map(step =>  
                          <Menu.Item key={step.key}>
                            <Link exact to={`${tabsUrl}/${props.activeKey}/${props.activeProject}/thesis/research/${step.key}`} >{step.title}</Link>
                          </Menu.Item>
                        )
                      }
                    </Menu>
                  </Panel>
                  </Collapse>
                  
                </Panel>
                
            </Collapse>
  )
}
const ProjectSideMenu=(props)=>{
  return(
    <Sider 
      collapsible 
      collapsedWidth='0' 
      theme='light'
      width='280'
      style={{zIndex:4,minHeight:'100vh'}}
      collapsed={props.collapsedLeft}
      trigger={null}
    >
      <ProjectMenu 
        activeKey={props.activeKey} 
        activeProject={props.activeProject} 
        onClickPipeline={props.onClickPipeline}
        onClickLandscape={props.onClickLandscape}
        onClickResultSummary={props.onClickResultSummary}
        onClickResultStartups={props.onClickResultStartups}
      />
    </Sider>
  )
}

const ProjectSideBar=(props)=>{
  return(
    <Sider 
      collapsible 
      reverseArrow 
      collapsedWidth='0' 
      theme='light'
      width='240'
      collapsed={props.collapsedRight}
      trigger={null}
    >
    </Sider>
  )
}

const ProjectView=(props)=>{
  return(
    <div>
        <Layout>
          <ProjectTopNav/>
          <Layout>
            <ProjectSideMenu 
              activeKey={props.activeKey} 
              activeProject={props.activeProject} 
              onClickPipeline={props.onClickPipeline}
              onClickLandscape={props.onClickLandscape}
              onClickResultSummary={props.onClickResultSummary}
              onClickResultStartups={props.onClickResultStartups}
            />
            <Layout>
              <Row>
                <Col xs={24} style={{padding:'12px 24px'}}>
                  {props.children}
                </Col>
              </Row>
            </Layout>
            <ProjectSideBar/>
          </Layout>
        </Layout>
      </div>
  )
}

const ProjectCard =(props) =>{
  return(
    <Col xs={24} sm={12} md={12} lg={8} style={{padding:'4px'}}>
      <Link to={`${tabsUrl}/${props.activeKey}/${props.projectUrl}`} onClick={props.onClick}>
        <img src={thesis} style={{width:'100%'}}/>
      </Link>
    </Col>
  )
}

const AllProjectsRoute = (props) => {
  return (
    <div>
            <Route exact path={`${tabsUrl}/${props.activeKey}`} render={() => (
                    
                <Row style={{maxWidth:'1110px',margin:'auto'}}>
                    {props.children}
                </Row>

              )}/>
          </div>
  );
}

const ProjectRoutes = (props) => {
  return (
      <Switch>
        <Route exact path={`${tabsUrl}/${props.activeKey}/${props.projectUrl}`} render={() => (
          // dyanamic redirect last url project 
          <Redirect to={`${tabsUrl}/${props.activeKey}/${props.projectUrl}/${props.projectLastUrl}`}/>
        )} />
        {projectsSteps.map(step =>  
              <Route exact path={`${tabsUrl}/${props.activeKey}/${props.projectUrl}/thesis/research/${step.key}`} render={() => (
                <ProjectView 
                  activeKey={props.activeKey} 
                  activeProject={props.activeProject} 
                  onClickPipeline={props.onClickPipeline}
                  onClickLandscape={props.onClickLandscape}
                  onClickResultSummary={props.onClickResultSummary}
                  onClickResultStartups={props.onClickResultStartups}
                >
                  {step.content}
                </ProjectView>
              )} />
            )
        }
        {projectsResult.map(step =>  
              <Route exact path={`${tabsUrl}/${props.activeKey}/${props.projectUrl}/thesis/result/${step.key}`} render={() => (
                <ProjectView 
                  activeKey={props.activeKey} 
                  activeProject={props.activeProject} 
                  onClickPipeline={props.onClickPipeline}
                  onClickLandscape={props.onClickLandscape}
                  onClickResultSummary={props.onClickResultSummary}
                  onClickResultStartups={props.onClickResultStartups}
                >
                  {step.content}
                </ProjectView>
              )} />
            )
        }
        <Route exact path={`${tabsUrl}/${props.activeKey}/${props.projectUrl}/startups-pipeline`} render={() => (
          <ProjectView activeKey={props.activeKey} activeProject={props.activeProject}>
            <ProjectThesis step="Startups Pipeline"/>
          </ProjectView>
        )} />
        <Route exact path={`${tabsUrl}/${props.activeKey}/${props.projectUrl}/innovation-landscape`} render={() => (
          <ProjectView activeKey={props.activeKey} activeProject={props.activeProject}>
            <ProjectThesis step="Innovation Landscape"/>
          </ProjectView>
        )} />
        
      </Switch>
  );
}




class myTabs extends React.Component {
  
  constructor(props) {
    super(props);
    
    //add tab index
    this.newTabIndex=2;
    
    // Pane Routes
    const StateRoutes=()=>{
      return(
        <div>
          {/* All Projects View in Tab */}
          <AllProjectsRoute activeKey={this.state.activeKey}>
            {/* Project Cards List */}
            {this.state.projects.map(project =>  
              <ProjectCard activeKey={this.state.activeKey} onClick={() => this.navToProject(project.title,project.key,project.lastUrl)} projectUrl={project.key+'/'+project.lastUrl}/>)
            } 
          </AllProjectsRoute>

          {/* Projects Routes in Tab */}  
          {this.state.projects.map(project =>  
            <ProjectRoutes
              activeKey={this.state.activeKey} 
              projectUrl={project.key} 
              activeProject={project.key} 
              onClickPipeline={() => this.navToProject(project.title,project.key,'startups-pipeline')}
              onClickLandscape={() => this.navToProject(project.title,project.key,'innovation-landscape')}
              onClickResultSummary={() => this.navToProject(project.title,project.key,'thesis/result/summary')}
              onClickResultStartups={() => this.navToProject(project.title,project.key,'thesis/result/startups')}
              projectLastUrl={project.lastUrl} 
            />)
          }
        </div>

      )
    }
    
    //initial Tab
    const panes = [
      { title: 'All Projects', content: <StateRoutes/>, key:'1', lastUrl:'' },
    ];

    

    const projects = [
      { title: 'Project Title', key: 'project-title', lastUrl:'thesis/result/summary'},
      { title: 'Project Title 2', key: '2', lastUrl:'startups-pipeline'},
      { title: 'Project Title 3', key: '3', lastUrl:'startups-pipeline'},
      { title: 'Project Title 4', key: '4', lastUrl:'startups-pipeline'},
      { title: 'Project Title 5', key: '5', lastUrl:'startups-pipeline'},
      { title: 'Project Title 6', key: '6', lastUrl:'startups-pipeline'}
    ];

    // INITIAL STATE
    this.state = {
      activeKey: panes[0].key,
      panes,
      projects,
      StateRoutes,
      collapsedLeft: false,
      collapsedRight: false
    };
  }

  navToProject = (titleProject,keyProject,projectUrl) => {
    const projectTitle = titleProject
    const projectKey = keyProject

    this.setState(state => ({
      ...state,
      panes: state.panes.map(item => ({
          ...item,
          lastUrl: item.key === this.state.activeKey ? item.lastUrl = projectKey:item.lastUrl,
          title: item.key === this.state.activeKey ? item.title = projectTitle: item.title
      }))
    }))
    this.setState(state => ({
    state,
    projects: state.projects.map(project => ({
        ...project,
        lastUrl: project.key === keyProject ? project.lastUrl = projectUrl:project.lastUrl
      }))
    }))
    
    this.props.history.push(`${tabsUrl}/${this.state.activeKey}/${keyProject}/${projectUrl}`);
    console.log(`${tabsUrl}/${this.state.activeKey}/${keyProject}/${projectUrl}`)
    console.log(this.state.projects)
    console.log(keyProject)
  }

  onChange = (activeKey) => {
    this.setState({ activeKey });
    this.state.panes.map(item => {
      if(item.key === activeKey){
        this.props.history.push(`${tabsUrl}/${activeKey}/${item.lastUrl}`)
      }
      
    })
    
  }

  onEdit = (targetKey,action) => {
    this[action](targetKey);
  }

  add = () => {
    const StateRoutes=this.state.StateRoutes
    const panes = this.state.panes;
    const activeKey = `${this.newTabIndex++}`;
    panes.push({ title: 'All Projects', content: <StateRoutes/>, key: activeKey, lastUrl:'' });
    this.setState({ panes, activeKey });
    this.props.history.push(`${tabsUrl}/${activeKey}`);
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
    this.props.history.push(`${tabsUrl}/${activeKey}`);
  }

  // RENDER COMPONENTS
  render() {
    return (
      <Route
            path= {tabsUrl+'/:tab?'}
            render={({ match }) => {
              return (
                <div className="card-container">
                <Route exact path={tabsUrl} render={() => (
                    <Redirect to={tabsUrl+'/1'}/>
                )}/>
                  <Switch>
                    <Tabs
                      type="card"
                      defaultActiveKey={match.params.tab}
                      activeKey={match.params.tab}
                      onChange={this.onChange}
                      type="editable-card"
                      onEdit={this.onEdit}
                      tabBarStyle={{position:'relative',top:'16px',maxWidth:'93%',zIndex:3,display: 'inline-block'}}
                    >
                      {this.state.panes.map(pane =>  
                      <TabPane tab={pane.title} key={pane.key}>{pane.content}</TabPane>)
                      }
                    </Tabs>
                  </Switch>
                </div>
              );
            }}
          />
    )
  }
}

export default withRouter(myTabs)