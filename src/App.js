import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.jsx';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={Home} />     
        </Routes>
      </Router>
       
    </div>
  );
}

export default App;
