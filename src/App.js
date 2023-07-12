import React from 'react'
import './App.css';
import { SearchBox, SideBar, TableComponent } from './components';
import { DropdownGroups } from './layouts';


const App = () => {
  return (
    <div className="dashboard">
      <div className="left">
        <div className="side-bar">
          <SideBar />
        </div>
      </div>
      <div className="right">
        <div className="headtag">
          <h1>Companies</h1>
          <hr />
        </div>
        <div className="filter-area">
          <DropdownGroups />
          <SearchBox />
        </div>
        {/* <div className="tags">
          <ChipsGroup />
        </div> */}
        <div className="table">
          <TableComponent />
        </div>
      </div>
    </div>
  )
}

export default App