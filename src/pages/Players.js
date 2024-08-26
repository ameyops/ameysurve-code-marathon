import React from 'react';
 
import { useApi } from '../api/api';

export const Players = () => {
  const { data, loading, error } = useApi('http://localhost:5150/api/Players/above-average-wins');

  // Handle loading and error states
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container">
      {data.map(player => (
        <div key={player.first_name} className="card">
          <div className="name">
            {player.first_name} {player.last_name}
          </div>
          <div className="details">
            Wins: {player.matches_win} | Win Percentage: {player.win_percentage}% | Matches Played: {player.total_matches_played}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Players;
