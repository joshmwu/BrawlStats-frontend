import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Player = ({ playerTag }) => {
    const [player, setPlayer] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPlayer = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/player/${encodeURIComponent(playerTag)}`);
                setPlayer(response.data);
            } catch (err) {
                setError(err);
            }
        };

        fetchPlayer();
    }, [playerTag]);

    if (error) return <div>Error: {error.message}</div>;
    if (!player) return <div>Loading...</div>;

    return (
        <div>
            <h1>Player: {player.name}</h1>
            {/* Display additional player info here */}
        </div>
    );
};

export default Player;