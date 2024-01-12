import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AddImo from "./pages/add-immobilisation/page"






function App() {
  return (
    <Router>
      <div className="App">
        <Routes> 
          <Route path="/" element={<AddImo />} /> 


        </Routes>
      </div>
    </Router>
  );
}

export default App;
