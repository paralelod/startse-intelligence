import React from 'react';
import {sortableContainer} from 'react-sortable-hoc';
import {Col, Row } from 'antd';
import Item from '../Item';

import './List.less';

function List({data, selectedItems, sortingItemKey, onItemSelect}) {
  return (
    
      <Row style={{maxWidth:'1110px',margin:'auto'}} className='List'>
      {data.map((value, index) => {
        const isSelected = selectedItems.includes(value);
        const itemIsBeingDragged = sortingItemKey === value;
        return (
          <Item
            key={`item-${value}`}
            title={value.title}
            selected={isSelected}
            dragging={itemIsBeingDragged}
            index={index}
            value={value}
            onClick={onItemSelect}
            selectedItemsCount={selectedItems.length}
          />
        );
      })}
      </Row>
  );
}

export default sortableContainer(List);