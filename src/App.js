import React from 'react';
import './App.css';

import Instructions from "./Instructions";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        This is the header
      </header>
      <main className="instructions">This is the optional instructions (maybe delete this if you don't want to include it)</main>
      <main className="playingCards">This is the main portion where the cards will go.</main>
      <footer>This is the footer</footer>
    </div>
  );
}

export default App;
