import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Player = ({ playerTag }) => {
  const [player, setPlayer] = useState(null);
  const [battleLog, setBattleLog] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/player/${encodeURIComponent(playerTag)}`);
        setPlayer(response.data);
      } catch (err) {
        setError(err);
      }
    };

    const fetchBattleLog = async () => {
      try {
        const battleResponse = await axios.get(`http://localhost:3001/api/player/${encodeURIComponent(playerTag)}/battleLog`);
        setBattleLog(battleResponse.data);
      } catch (err) {
        setError(err);
      }
    }

    fetchPlayer();
    fetchBattleLog();
  }, [playerTag]);

  if (error) return <div>Error: {error.message}</div>;
  if (!player) return <div>Loading...</div>;

  return (
    <div>
      <h1>Player: {player.name}</h1>
      <h1>Tag: {player.tag}</h1>
      <h1>Trophies: {player.trophies}</h1>
    </div>
  );
};

export default Player;