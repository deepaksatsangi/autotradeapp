import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Auto trading app.</h1>
        <h2>The app will automatically do a paper trade</h2>
      </header>
    </div>
  );
}

export default App;
