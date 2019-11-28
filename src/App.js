import React, { Component }  from "react";
import './App.css';

import Instructions from "./Instructions";
import PlayingCards from "./PlayingCards";

class App extends Component {
  constructor(props){
      super();
      this.updateScore = this.updateScore.bind(this);
      
      this.state = {
          score: 0,
          topScore: 0
      }
  }

  updateScore(score, topScore) {
    this.setState({
      score,
      topScore
  });
  }

  render(){
      return (
        <div className="App">
          <header className="App-header">
            Score: {this.state.score} | topScore: {this.state.topScore} 
          </header>
          <Instructions />
          <PlayingCards updateScore={this.updateScore} score={this.state.score} topScore={this.state.topScore}  />
          <footer>This is the footer</footer>
        </div>
      );
  }
  
}

export default App;
