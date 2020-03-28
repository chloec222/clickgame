
import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import logos from "./cards.json";
import "./App.css";

class App extends Component {
  // Setting this.state.logos to the cards json array
  state = {
    logos,
    clickedlogoIds: [],
    score: 0,
    goal: 8,
    status: ""
  };

  //shuffle the pup cards in the browser when clicked
  shuffleScoreCard = id => {
    let clickedlogoIds = this.state.clickedlogoIds;

    if(clickedlogoIds.includes(id)){
      this.setState({ clickedlogoIds: [], score: 0, status:  "TRY AGAIN." });
      return;
    }else{
      clickedlogoIds.push(id)

      if(clickedlogoIds.length === 8){
        this.setState({score: 8, status: "YOU DID IT. PLAY AGAIN.", clickedlogoIds: []});
        console.log('WIN.');
        return;
      }

      this.setState({ logos, clickedlogoIds, score: clickedlogoIds.length, status: " " });

      for (let i = logos.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [logos[i], logos[j]] = [logos[j], logos[i]];
      }
    }
  }

  // Map over this.state.cards and render a Card component for each card object
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div className="container">
          <div className="row">
            <div className="col mt-3">
            <h1 className="App-title">VIRAL-316</h1>
          <p className="App-intro">
            STAY ON THE RUN. DON'T CLICK IT TWICE. AND WIN. 
          </p>
            </div>
          </div>
        </div>
          
        </header>
        <Score total={this.state.score}
               goal={8}
               status={this.state.status}
               />
        <Wrapper>
          {this.state.logos.map(logo => (
            <Card
              shuffleScoreCard={this.shuffleScoreCard}
              id={logo.id}
              key={logo.id}
              image={logo.image}
            />
          ))}
        </Wrapper>
        <div className="container mt-5 text-center">
              <footer>
                <p>
                  <a href="https://github.com/chloec222" target="_blank" rel="noopener noreferrer" id="footer">CHLOE CHOI</a>
                </p>
              </footer>
        </div>

    </div>
    );
  }
}

export default App;