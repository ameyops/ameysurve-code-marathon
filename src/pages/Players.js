import React from 'react';
import data from '../jsondata/player.json';
import './player.css'; 

export const Players = () => {
  return (
    <div className="container">
      {data.map(player => (
        <div key={player.first_name} className="card">
          <div className="name">
            {player.first_name} {player.last_name}
          </div>
          <div className="details">
            {player.country} Rank {player.current_world_ranking}  Matches played: {player.total_matches_played}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Players;
