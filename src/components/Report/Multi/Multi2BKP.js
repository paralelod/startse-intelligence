import React from "react";
import { render } from "react-dom";
import Datasort from "react-data-sort";
import {Row,Col} from 'antd';
const dataTable = [];

for (let i = 0; i < 100; i++) {
  dataTable.push({
    id: i,
    name: 'holla'+i,
    email: "gateeinho"
  });
}


function MyTable() {
  return (
    <Datasort
      data={dataTable}
      defaultSortBy="id"
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
              <TableBody data={data} />
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
  );
}

function TableHead({ setSortBy, sortBy, direction, toggleDirection }) {
  const columns = [
    { key: "id", title: "ID" },
    { key: "name", title: "Name" },
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

function TableBody({ data }) {
  return (
    <div>
      {data.map(({ id, name, email }) => (
        <Row>
          <Col lg={8}>
            <span>{id}</span>
          </Col>
          <Col lg={8}>
            <span>{name}</span>
          </Col>
          <Col lg={8}>
            <span>{email}</span>
          </Col>
        </Row>
      ))}
    </div>
    
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
  render(){
    return(
      <div>
        <MyTable />
      </div>
    )
  }
};
export default GroupedItems;
