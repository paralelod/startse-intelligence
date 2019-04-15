import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Row, Col 
} from 'antd';
import thesis from './card-thesis.png'
import pipe from './card-pipeline.png'




class ProjectCard extends Component{
  render(){
    return(
        <Row style={{maxWidth:'1110px',margin:'auto'}}>
          <Col xs={24} sm={12} md={12} lg={8} style={{padding:'4px'}}>
            <img src={thesis} style={{width:'100%'}}/>
          </Col>
          <Col xs={24} sm={12} md={12} lg={8} style={{padding:'4px'}}>
            <img src={pipe} style={{width:'100%'}}/>
          </Col>
          <Col xs={24} sm={12} md={12} lg={8} style={{padding:'4px'}}>
            <img src={thesis} style={{width:'100%'}}/>
          </Col>
          <Col xs={24} sm={12} md={12} lg={8} style={{padding:'4px'}}>
            <img src={thesis} style={{width:'100%'}}/>
          </Col>
          <Col xs={24} sm={12} md={12} lg={8} style={{padding:'4px'}}>
            <img src={pipe} style={{width:'100%'}}/>
          </Col>
          <Col xs={24} sm={12} md={12} lg={8} style={{padding:'4px'}}>
            <img src={thesis} style={{width:'100%'}}/>
          </Col>
          <Col xs={24} sm={12} md={12} lg={8} style={{padding:'4px'}}>
            <img src={thesis} style={{width:'100%'}}/>
          </Col>
          <Col xs={24} sm={12} md={12} lg={8} style={{padding:'4px'}}>
            <img src={pipe} style={{width:'100%'}}/>
          </Col>
          <Col xs={24} sm={12} md={12} lg={8} style={{padding:'4px'}}>
            <img src={thesis} style={{width:'100%'}}/>
          </Col>
        </Row>
      )
  }
}

export default ProjectCard





   