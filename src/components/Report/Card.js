import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GridLayout from "react-grid-layout";
import _ from "lodash";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {
  Row, Col 
} from 'antd';
import thesis from './card-report.png'
import pipe from './card-report.png'
import arrayMove from 'array-move';
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import {SortableContainer, SortableElement} from 'react-sortable-hoc';


const SortableItem = SortableElement(({value}) => <Col xs={24} sm={12} md={12} lg={8}><div >{value}</div ></Col>);

const SortableList = SortableContainer(({items}) => {
  return (
    <Row style={{maxWidth:'1110px',margin:'auto'}}>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value}  />
      ))}
    </Row>
  );
});

const thesisImg = <img src={thesis} style={{padding:'16px',width:'100%'}}/>;

class ProjectCard extends Component{
  state = {
    items: [thesisImg,thesisImg,thesisImg,thesisImg,thesisImg,thesisImg,thesisImg,thesisImg],
  };
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({items}) => ({
      items: arrayMove(items, oldIndex, newIndex),
    }));
  };
  render() {
    return <SortableList items={this.state.items} onSortEnd={this.onSortEnd} axis="xy" />;
  }
}

export default ProjectCard





   
