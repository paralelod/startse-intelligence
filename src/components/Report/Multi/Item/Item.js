import React from 'react';
import classNames from 'classnames';
import {sortableElement, sortableHandle} from 'react-sortable-hoc';
import { Link} from "react-router-dom";
import {Col } from 'antd';
import thesis from './card-report.png'

// import styles from './Item.css';
import './Item.css';

const DragHandle = sortableHandle(() => <span>:::Drag Me</span>);


function Item(props) {
  const {dragging, onClick, selected, selectedItemsCount, value} = props;
  const shouldRenderItemCountBadge = dragging && selectedItemsCount > 1;
  const ItemSelected = 'selected'
    
    return (
      <Col lg={8} xl={6}>
        <div className={classNames(
          "Item",
          selected && !dragging && ItemSelected,
          dragging && "dragging",
        )}
        onClick={() => onClick(value)}>
          {/* <DragHandle/> */}
        </div>
        
        {/* <Link to='/logged/portfolio' style={{zIndex:'9999', position:'absolute',bottom:'124px', left:'35%'}}>DOWNLOAD</Link> */}
        <div style={{userSelect:'none',pointerEvents:'none'}}> 
          <img src={thesis} style={{userSelect:'none',pointerEvents:'none',width:"100%", padding:'8px'}}/>
          
        </div>
        {/* Item {value} */}
        {shouldRenderItemCountBadge ? <Badge count={selectedItemsCount} /> : null}
      </Col>
    );
}

function Badge(props) {
  return <div className={'Badge'}>{props.count}</div>;
}

export default sortableElement(Item);