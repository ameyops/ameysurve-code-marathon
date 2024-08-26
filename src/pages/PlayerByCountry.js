import React from 'react';
import './player.css';
import { useApi } from '../api/api';

export const PlayerByCountry = ({ year, country }) => {
  // Construct the API URL with year and country parameters
  const apiUrl = `http://localhost:5150/api/Players/by-country?year=${year}&country=${country}`;
  
  const { data, loading, error } = useApi(apiUrl);

  console.log(data);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container">
      {data.map(player => (
        <div key={player.player_id} className="card">
          <div className="name">
            {player.first_name} {player.last_name}
          </div>
          <div className="details">
            Country: {player.country} | World Ranking: {player.current_world_ranking} | Matches Played: {player.total_matches_played}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlayerByCountry;
