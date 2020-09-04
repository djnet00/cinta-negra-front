import './App.css';

import { Hola } from './components/Hola/'
import React from 'react';

const nombres = ['Julian','Daniel','Hector','Yasmin']

function App() {
  return (
    <div className="App">
      {
        nombres.map( nombre => <Hola nombre={nombre} />)
      }
    </div>
  );
}

export default App;
