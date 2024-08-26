import React from 'react';
import './player.css';
import { useApi } from '../api/api';

export const Performance = () => {
  const { data, loading, error } = useApi('http://localhost:5150/api/Players/performance');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container">
      {data.map(player => (
        <div key={player.full_name} className="card">
          <div className="name">
            {player.full_name}
          </div>
          <div className="details">
            Wins: {player.matches_win} | Win Percentage: {player.win_percentage.toFixed(2)}% | Matches Played: {player.total_matches_played}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Performance;
