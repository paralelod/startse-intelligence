import React from "react";
import { render } from "react-dom";
import Datasort from "react-data-sort";
import {Row,Col} from 'antd';
import {sortableContainer, SortableContainer} from 'react-sortable-hoc';
import Item from './Item';
import arrayMove from 'array-move';
import {generateItems} from './utils';
import SortableList from './List';
const dataTable = [];

const totalItems=12;
for (let i = 0; i < 100; i++) {
  dataTable.push({
    id: i,
    name: 'holla'+i,
    email: "gateeinho"
  });
}

function TableHead({ setSortBy, sortBy, direction, toggleDirection }) {
  const columns = [
    { key: "index", title: "ID" },
    { key: "value.title", title: "Title" },
    { key: "email", title: "Email" }
  ];
  const items = columns.map(({ key, title }) => {
    const active = key === sortBy;
    return (
      <HeadToggle
        key={key}
        active={active}
        onClick={() => {
          if (active) {
            toggleDirection();
          }
          setSortBy(key);
        }}
      >
        {title} {active ? direction === "asc" ? "▲" : "▼" : null}
      </HeadToggle>
    );
  });
  return (
    <div>
      <Row>{items}</Row>
    </div>
  );
}

function HeadToggle({ children, active, onClick }) {
  return (
    <Col
      lg={8}
      onClick={onClick}
      style={{ fontWeight: active ? "bold" : "normal", cursor: "pointer" }}
    >
      {children}
    </Col>
  );
}

function TableBody({ items,selectedItems, sortingItemKey, onItemSelect }) {
  return (
       
    <SortableList
    items={items.filter(this.filterItems)}
    sortingItemKey={sortingItemKey}
    selectedItems={selectedItems}
    onItemSelect={this.handleItemSelect}
    shouldCancelStart={this.handleShouldCancelStart}
    updateBeforeSortStart={this.handleUpdateBeforeSortStart}
    onSortEnd={this.handleSortEnd}
    distance={3}
    axis="xy"
  />
    
  );
}

function Flex({ children, style }) {
  return <div style={{ display: "flex", ...style }}>{children}</div>;
}

function GoToPage({ goToPage, pages}) {
  const options = []
  for(let i = 0; i < pages; i++) {
    options.push(<option value={i}>{i + 1}</option>)
  }
  return <div>Go to page <select onChange={e => goToPage(parseInt(e.target.value))}>{options}</select></div>
}

function Navigation({ activePage, goToPage, nextPage, prevPage, pages }) {
  return (
    <Flex>
      <button disabled={activePage === 0} onClick={() => goToPage(0)}>
        {"<<"}
      </button>
      <button disabled={activePage === 0} onClick={prevPage}>
        {"<"}
      </button>

      <button disabled={activePage === pages - 1} onClick={nextPage}>
        {">"}
      </button>
      <button
        disabled={activePage === pages - 1}
        onClick={() => goToPage(pages - 1)}
      >
        {">>"}
      </button>
    </Flex>
  );
}

function PageIndicator ({pages, activePage}) {
  return <div>
    <b>{activePage + 1}</b> / {pages}
  </div>
} 

class GroupedItems extends React.Component{
  state = {
    selectedItems: [],
    items: [
        {title:'hello'},
        {title:'hello2'},
        {title:'hello3'},
        {title:'hello4'},
        {title:'hello5'},
        {title:'hello6'},
        {title:'hello7'},
        {title:'hello8'},
        {title:'hello5'},
        {title:'hello6'},
        {title:'hello7'},
        {title:'hello8'},
        
      ],
  };
  render(){
    const {items, selectedItems, sortingItemKey} = this.state;
    return(
      <div>
        <Datasort
      data={items}
      defaultSortBy="title"
      paginate
      render={({
        data,
        setSortBy,
        sortBy,
        direction,
        activePage,
        toggleDirection,
        goToPage,
        nextPage,
        prevPage,
        pages
      }) => {
        return (
          <div>
            <div>
              
              <TableHead
                setSortBy={setSortBy}
                sortBy={sortBy}
                direction={direction}
                toggleDirection={toggleDirection}
              />
              
              <SortableList
                useDragHandle
                data={data.filter(this.filterItems)}
                // items={data.filter(this.filterItems)}
                sortingItemKey={sortingItemKey}
                selectedItems={selectedItems}
                onItemSelect={this.handleItemSelect}
                shouldCancelStart={this.handleShouldCancelStart}
                updateBeforeSortStart={this.handleUpdateBeforeSortStart}
                onSortEnd={this.handleSortEnd}
                distance={3}
                axis="xy"
              />
            </div>
            <Flex style={{justifyContent: 'space-between'}}>
              <GoToPage goToPage={goToPage} pages={pages} />
              <PageIndicator pages={pages} activePage={activePage} />
              <Navigation
                activePage={activePage}
                goToPage={goToPage}
                nextPage={nextPage}
                prevPage={prevPage}
                pages={pages}
              />
              
            </Flex>
          </div>
        );
      }}
    />
      </div>
    )
  }
  filterItems = (value) => {
    const {selectedItems, sortingItemKey, isSorting} = this.state;

    // Do not hide the ghost of the element currently being sorted
    if (sortingItemKey === value) {
      return true;
    }

    // Hide the other items that are selected
    if (isSorting && selectedItems.includes(value)) {
      return false;
    }

    // Do not hide any other items
    return true;
  };

  handleUpdateBeforeSortStart = ({index}) => {
    return new Promise((resolve) =>
      this.setState(
        ({items}) => ({
          sortingItemKey: items[index],
          isSorting: true,
        }),
        resolve,
      ),
    );
  };

  handleSortEnd = ({oldIndex, newIndex}) => {
    const {selectedItems} = this.state;
    let newItems;

    if (selectedItems.length) {
      const items = this.state.items.filter(
        (value) => !selectedItems.includes(value),
      );

      newItems = [
        ...items.slice(0, newIndex),
        ...selectedItems,
        ...items.slice(newIndex, items.length),
      ];
    } else {
      newItems = arrayMove(this.state.items, oldIndex, newIndex);
    }

    this.setState({
      items: newItems,
      isSorting: false,
      sortingItemKey: null,
      selectedItems: [],
    });
  };

  handleItemSelect = (item) => {
    this.setState(({selectedItems}) => {
      if (selectedItems.includes(item)) {
        return {
          selectedItems: selectedItems.filter((value) => value !== item),
        };
      }

      return {
        selectedItems: [...selectedItems, item],
      };
    });
  };

  // handleShouldCancelStart = (event) => {
  //   const {items, selectedItems} = this.state;
  //   const item = items[event.target.sortableInfo.index];
    
  //   // Never cancel start if there are no selected items
  //   if (!selectedItems.length) {
  //     return false;
  //   }

  //   // If there are selected items, we want to cancel sorting
  //   // from starting when dragging elements that are not selected
  //   return !selectedItems.includes(item);
  // };
};
export default GroupedItems;
