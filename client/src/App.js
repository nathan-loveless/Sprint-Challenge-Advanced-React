import React from 'react';
import './App.css';
import Players from './Components/Players';
import DarkModeBar from './Components/DarkModeBar';

function App() {
  return (
    <div className="App">
      <DarkModeBar/>
      <Players />
    </div>
  );
}

export default App;
