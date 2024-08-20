import React from 'react';
import data from '../jsondata/matches.json'; 
 import './matches.css'

export const Matches = () => {
  return (
    <div className="container">
      {data.map((match, index) => (
        <div key={index} className="card">
          <div className="name">
            Player 1 ID: {match.player1_id}
          </div>
          <div className="name">
            Player 2 ID: {match.player2_id}
          </div>
          <div className="details">
            Match Date: {match.match_date}
            <br />
            Match Level: {match.match_level}
            <br />
            Winner ID: {match.winner_id}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Matches;
