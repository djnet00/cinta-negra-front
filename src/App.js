import './App.css';

import { BrowserRouter as Router, Switch } from "react-router-dom"
import { Routes } from './Routes'
// import { Hola } from './components/Hola/'
import { Navbar } from './components/NavBar/'
import React from 'react';

// const nombres = ['Julian','Daniel','Hector','Yasmin']

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Routes />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
