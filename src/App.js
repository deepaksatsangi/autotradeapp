import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Auto trading app.</h1>
        </header>
        <div className="body">
          <h2>The app will automatically do a paper trade</h2>
          <h3>The app would be available soon for your review!</h3>
          <a href="https://byteinnovators.godaddysites.com/">powered by byteinnovators LLC</a>
        </div>
    </div>
  );
}

export default App;
