import React from "react";
import "./Score.css";

//stateless component
const Score = props => (
  <div className="gameScore">
    <h4 className="score">YOUR SCORE: {props.total}</h4>
    <h4 className="status">{props.status}</h4>
  </div>
);

export default Score;