import React from 'react';

import logo from './logo.svg';
import './App.css';
import { Index } from './components/index/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Index name="main component"/>
      </header>
    </div>
  );
}

export default App;
