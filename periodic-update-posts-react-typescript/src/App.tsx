import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import PostData from "./PostData";
import TableList from "./TableList";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<TableList />} />
          <Route path="/show/row/json/:id" element={<PostData />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
