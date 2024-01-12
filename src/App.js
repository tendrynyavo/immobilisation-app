import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AddImo from "./pages/add-immobilisation/page"
import AddPv from "./pages/add-pv-reception/page"







function App() {
  return (
    <Router>
      <div className="App">
        <Routes> 
          <Route path="/" element={<AddImo />} />
          <Route path="/pvreception" element={<AddPv />} /> 
 


        </Routes>
      </div>
    </Router>
  );
}

export default App;
