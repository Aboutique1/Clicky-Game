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
          topScore: 0,
          error: false
      }
  }

  updateScore(score, topScore) {
    const error = score < this.state.score;

    this.setState({
      score,
      topScore,
      error
    });

    setTimeout(() => {
      this.setState({
        error: false
      });      
    }, 1500);
  }

  render(){
    let text = 'Click an image to begin!'

    if (this.state.error && this.state.topScore) {
      text = 'You guessed incorrectly!';
    } else if (this.state.score) {
      text = 'You guessed correctly!';
    } else {
      text = 'Click an image to begin!';
    }


      return (
        <div className="App">
          <header className="App-header">
            <div className='left'>
              Clicky Game
            </div>
            <div className='center'>
              { text }
            </div>
            <div className='right'>
              Score: {this.state.score} | Top Score: {this.state.topScore} 
            </div>
          </header>
          <Instructions />
          <PlayingCards 
            updateScore={this.updateScore} 
            score={this.state.score} 
            topScore={this.state.topScore} 
            error={this.state.error}  
          />
          <footer>© Copyright Amber Webb</footer>
        </div>
      );
  }
  
}

export default App;
