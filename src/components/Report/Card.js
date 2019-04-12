import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Row, Col 
} from 'antd';
import thesis from './card-report.png'
import pipe from './card-report.png'




class ProjectCard extends Component{
  render(){
    return(
        <Row style={{maxWidth:'900px',margin:'auto'}}>
          <Col xs={24} md={8} style={{padding:'8px'}}>
            <img src={thesis} style={{width:'100%'}}/>
          </Col>
          <Col xs={24} md={8} style={{padding:'8px'}}>
            <img src={pipe} style={{width:'100%'}}/>
          </Col>
          <Col xs={24} md={8} style={{padding:'8px'}}>
            <img src={thesis} style={{width:'100%'}}/>
          </Col>
          <Col xs={24} md={8} style={{padding:'8px'}}>
            <img src={thesis} style={{width:'100%'}}/>
          </Col>
          <Col xs={24} md={8} style={{padding:'8px'}}>
            <img src={pipe} style={{width:'100%'}}/>
          </Col>
          <Col xs={24} md={8} style={{padding:'8px'}}>
            <img src={thesis} style={{width:'100%'}}/>
          </Col>
          <Col xs={24} md={8} style={{padding:'8px'}}>
            <img src={thesis} style={{width:'100%'}}/>
          </Col>
          <Col xs={24} md={8} style={{padding:'8px'}}>
            <img src={pipe} style={{width:'100%'}}/>
          </Col>
          <Col xs={24} md={8} style={{padding:'8px'}}>
            <img src={thesis} style={{width:'100%'}}/>
          </Col>
        </Row>
      )
  }
}

export default ProjectCard





   
