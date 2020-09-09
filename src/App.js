import { BrowserRouter as Router, Switch } from "react-router-dom"
import { Routes } from './Routes'
// import { Hola } from './components/Hola/'
import { Navbar } from './components/NavBar/'

import { AuthContextProvider } from './contexts/AuthContext'

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

// const nombres = ['Julian','Daniel','Hector','Yasmin']

function App() {
  return (
    <div className="App">
      <Router>
        <AuthContextProvider>
          <Navbar />
          <Switch>
            <Routes />
          </Switch>
        </AuthContextProvider>
      </Router>
    </div>
  );
}

export default App;
