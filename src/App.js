import React from 'react';
import './App.css';

import Instructions from "./Instructions";
import PlayingCards from "./PlayingCards";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        This is the header
      </header>
      <Instructions />
      <PlayingCards />
      <footer>This is the footer</footer>
    </div>
  );
}

export default App;
